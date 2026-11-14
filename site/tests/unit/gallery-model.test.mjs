import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { describe, expect, it } from 'vitest';
import {
  aggregateContributors, normalizeDate, normalizeProduct, normalizeSample, renderReadme,
  repositoryPath, resolveLocalFile, resolveThumbnailPath, selectPrimaryImage, validateReadmeTracker, visitorStatsUrl,
} from '../../scripts/gallery-model.mjs';
import { filterRecords } from '../../src/lib/filtering.ts';

const raw = () => ({
  name: 'pnp-powerplatform-snippets-example', source: 'pnp', title: 'Example', shortDescription: 'A helpful sample',
  url: 'https://github.com/pnp/powerplatform-snippets/tree/main/power-apps/example',
  creationDateTime: '2024-02-29', updateDateTime: '2024-03-01T12:00:00Z',
  products: ['Power Virtual Agents', 'Power Platform'], categories: ['CHATBOT'], tags: ['helpful'],
  metadata: [], authors: [{ gitHubAccount: 'Maker', name: 'Example Maker' }],
  thumbnails: [{ type: 'image', order: 100, alt: 'Example screen', url: 'https://github.com/pnp/powerplatform-snippets/raw/main/power-apps/example/assets/preview.png' }],
});

describe('catalog normalization', () => {
  it('normalizes legacy product aliases without changing source values', () => {
    const source = raw();
    const record = normalizeSample('power-apps/example', source);
    expect(record.products).toEqual(['Copilot Studio', 'Power Platform']);
    expect(source.products[0]).toBe('Power Virtual Agents');
    expect(record.searchText).toContain('power virtual agents');
    expect(record.categories).toEqual(['Agents & chatbots']);
    expect(normalizeProduct('PowerPlatform-samples')).toBe('Power Platform');
    expect(normalizeProduct('Microsoft Teams')).toBe('Microsoft Teams');
  });
  it('accepts date-only and ISO timestamp values and rejects invalid calendar dates', () => {
    expect(normalizeDate('2024-02-29')).toBe('2024-02-29');
    expect(normalizeDate('2024-02-29T12:30:00Z')).toBe('2024-02-29');
    for (const value of ['2023-02-29', '2024-04-31', '2024-01-01T99:00:00Z', 'yesterday']) {
      expect(() => normalizeDate(value)).toThrow(/date|timestamp/i);
    }
  });
  it('rejects reversed dates and stale source paths', () => {
    expect(() => normalizeSample('power-apps/example', { ...raw(), updateDateTime: '2023-01-01' })).toThrow('precedes');
    expect(() => normalizeSample('power-apps/different', raw())).toThrow('current sample folder');
    expect(() => normalizeSample('power-apps/Upper-Case', raw())).toThrow('lowercase');
  });
  it('derives an intentional standard download URL and does not assume license facts', () => {
    const record = normalizeSample('power-apps/example', raw());
    expect(record.downloadUrl).toBe(`https://pnp.github.io/download-partial/?url=${record.sourceUrl}`);
    expect(record.premium).toBeNull();
    expect(record.experimental).toBeNull();
    expect(() => normalizeSample('power-apps/example', { ...raw(), downloadUrl: 'javascript:alert(1)' })).toThrow('HTTP(S)');
  });
  it('uses verified subtype metadata without guessing from broad categories', () => {
    expect(normalizeSample('power-apps/example', { ...raw(), categories: ['POWERAPPS'] }).categories).toEqual(['Power Apps']);
    expect(normalizeSample('power-apps/example', { ...raw(), categories: ['POWERAPPS'], metadata: [{ key: 'POWERAPPS-TYPE', value: 'Canvas' }] }).categories).toContain('Canvas apps');
  });
  it('deduplicates contributors case-insensitively and counts each sample once', () => {
    const first = normalizeSample('power-apps/example', raw());
    const second = { ...first, slug: 'power-apps/another', authors: [{ gitHubAccount: 'maker', name: 'Example Maker' }] };
    expect(aggregateContributors([first, second, first])).toEqual([{ gitHubAccount: 'Maker', name: 'Example Maker', sampleSlugs: ['power-apps/example', 'power-apps/another'] }]);
  });
});

describe('images, paths, and Markdown', () => {
  it('selects the first image by order, not array position or video order', () => {
    const low = { type: 'image', order: 5, url: 'low.png' };
    const list = [{ type: 'video', order: 1 }, { type: 'image', order: 100 }, low];
    expect(selectPrimaryImage(list)).toEqual(low);
    expect(list[0].type).toBe('video');
  });
  it('resolves blob/raw/fork image URLs and decodes spaces and uppercase extensions', () => {
    const root = path.resolve('fixture');
    const url = 'https://raw.githubusercontent.com/maker/powerplatform-snippets/abc123/power-apps/example/assets/My%20Screen.PNG';
    expect(repositoryPath(url, 'power-apps/example')).toBe('power-apps/example/assets/My Screen.PNG');
    expect(resolveThumbnailPath(root, 'power-apps/example', { url })).toBe(path.join(root, 'power-apps', 'example', 'assets', 'My Screen.PNG'));
    expect(() => resolveThumbnailPath(root, 'power-apps/another', { url })).toThrow('own assets folder');
    expect(() => resolveLocalFile(root, '..\\outside.png')).toThrow('Unsafe');
    expect(() => resolveLocalFile(root, path.resolve('outside.png'))).toThrow('escapes');
  });
  it('renders real Markdown links, localizes images, preserves external links, and adds heading IDs', async () => {
    const html = await renderReadme('power-apps/example', '# Example\n## Setup\n[Source](./sourcecode/file.txt)\n![Preview](assets/screen.png)\n[External](https://example.com/doc)\n[Jump](#setup)', async () => '/powerplatform-snippets/generated/media/screen.webp');
    expect(html).not.toContain('<h1');
    expect(html).toContain('id="setup"');
    expect(html).toContain('https://github.com/pnp/powerplatform-snippets/blob/main/power-apps/example/sourcecode/file.txt');
    expect(html).toContain('/powerplatform-snippets/generated/media/screen.webp');
    expect(html).toContain('href="https://example.com/doc"');
    expect(html).toContain('href="#setup"');
  });
  it('sanitizes raw HTML and scripts, while retaining useful tables/details', async () => {
    const html = await renderReadme('power-apps/example', '<script>alert(1)</script><a href="javascript:alert(1)">Bad</a><img src="https://example.com/screen.png" onerror="alert(1)" /><details><summary>More</summary>Details</details>');
    expect(html).not.toMatch(/<script|onerror=|href="javascript/);
    expect(html).toContain('<details>');
    expect(html).toContain('loading="lazy"');
    expect(await renderReadme('power-apps/example', '```js\nconsole.log("sample");\n```')).toContain('tabindex="0"');
  });
});

describe('visitor-statistics contract', () => {
  const url = 'https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/example';
  it('accepts valid existing attributes and whitespace, but rejects duplicates or wrong slugs', () => {
    expect(() => validateReadmeTracker('power-apps/example', `# Example\n<img aria-hidden="true" src="${url}" />\n\n`)).not.toThrow();
    expect(() => validateReadmeTracker('power-apps/example', `<img src="${url}" />\n<img src="${url}" />`)).toThrow('exactly one');
    expect(() => validateReadmeTracker('power-apps/another', `<img src="${url}" />`)).toThrow();
    expect(() => validateReadmeTracker('power-apps/example', `<img src="${url}" />\nText`)).toThrow('final');
  });
  it('removes the embedded tracker when rendering documentation', async () => {
    expect(await renderReadme('power-apps/example', `# Example\nA sample.\n<img src="${url}" aria-hidden="true" />`)).not.toContain('m365-visitor-stats');
  });
  it('forms exact route keys, stripping base, query, fragment, and trailing slash', () => {
    const base = 'https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/';
    expect(visitorStatsUrl('/powerplatform-snippets/')).toBe(base);
    expect(visitorStatsUrl('/powerplatform-snippets/contributing/')).toBe(`${base}contributing`);
    expect(visitorStatsUrl('/powerplatform-snippets/snippets/power-apps/example/?q=ignored#setup')).toBe(url);
    expect(() => visitorStatsUrl('/outside/')).toThrow('outside');
  });

  describe('snippet category and legacy contracts', () => {
    it('preserves category paths so equal folder names cannot collide', () => {
      const first = normalizeSample('power-apps/example', raw());
      const second = normalizeSample('copilot-studio/example', {
        ...raw(), url: 'https://github.com/pnp/powerplatform-snippets/tree/main/copilot-studio/example',
      });
      expect(second.slug).not.toBe(first.slug);
      expect(second.sourceUrl).toContain('/copilot-studio/example');
      expect(() => normalizeSample('unknown/example', raw())).toThrow('product category');
    });
    it('keeps historical taxonomy searchable without rendering it as product names', () => {
      const record = normalizeSample('power-automate-desktop/example', {
        ...raw(), url: 'https://github.com/pnp/powerplatform-snippets/tree/main/power-automate-desktop/example',
        products: ['Power Automate', 'powerplatform-snippets', 'pad-snippets'],
      });
      expect(record.products).toEqual(['Power Automate Desktop']);
      expect(record.searchText).toContain('pad-snippets');
      expect(record.rawMetadata.products).toContain('Power Automate');
    });
    it('supports raw branch URLs and only the known shared preview exception', () => {
      const root = path.resolve('fixture');
      const url = 'https://raw.githubusercontent.com/pnp/powerplatform-snippets/refs/heads/main/power-apps/example/assets/preview.png';
      expect(resolveThumbnailPath(root, 'power-apps/example', { url })).toBe(path.join(root, 'power-apps', 'example', 'assets', 'preview.png'));
      expect(resolveThumbnailPath(root, 'power-apps/example', {
        url: 'https://raw.githubusercontent.com/pnp/powerplatform-snippets/main/templates/previewsnippets.png',
      })).toBe(path.join(root, 'templates', 'previewsnippets.png'));
      expect(repositoryPath('https://github.com/pnp/powerplatform-samples/raw/main/assets/preview.png', 'power-apps/example')).toBeNull();
    });
  });
});

it('validates every author and thumbnail, not only the first array item', async () => {
  const schema = JSON.parse(await readFile(new URL('../../../templates/metadata-schema.json', import.meta.url), 'utf8'));
  const ajv = new Ajv({ strict: false }); addFormats(ajv);
  const validate = ajv.compile(schema);
  expect(validate([raw()])).toBe(true);
  expect(validate([{ ...raw(), authors: [...raw().authors, { gitHubAccount: 'not an account' }] }])).toBe(false);
  expect(validate([{ ...raw(), thumbnails: [...raw().thumbnails, { type: 'image' }] }])).toBe(false);
});

describe('discovery filters', () => {
  const records = [
    { slug: 'a', title: 'Alpha', searchText: 'alpha expense maker', products: ['Power Apps', 'Dataverse'], categories: ['Canvas apps'], authors: ['maker'], updatedAt: '2024-02-01', createdAt: '2023-01-01' },
    { slug: 'b', title: 'Beta', searchText: 'beta expense flow builder', products: ['Power Automate'], categories: ['Cloud flows'], authors: ['builder'], updatedAt: '2024-03-01', createdAt: '2024-01-01' },
  ];
  const state = { q: '', product: '', category: '', author: '', sort: 'updated' };
  it('keeps All products separate from a generic Power Platform tag', () => {
    expect(filterRecords(records, state)).toHaveLength(2);
    expect(filterRecords(records, { ...state, product: 'Power Platform' })).toHaveLength(0);
  });
  it('combines word search, product, category, and contributor facets', () => {
    expect(filterRecords(records, { ...state, q: 'EXPENSE maker', product: 'Power Apps', category: 'Canvas apps', author: 'MAKER' }).map((record) => record.slug)).toEqual(['a']);
    expect(filterRecords(records, { ...state, product: 'Power Pages' })).toEqual([]);
  });
  it('sorts independently by update, creation, and name without mutating source records', () => {
    expect(filterRecords(records, state)[0].slug).toBe('b');
    expect(filterRecords(records, { ...state, sort: 'newest' })[0].slug).toBe('b');
    expect(filterRecords(records, { ...state, sort: 'name' })[0].slug).toBe('a');
    expect(records[0].slug).toBe('a');
  });
});
