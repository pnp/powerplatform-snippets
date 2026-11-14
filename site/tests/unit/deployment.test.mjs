import { describe, expect, it } from 'vitest';
import { verifyDeployment } from '../../scripts/deployment.mjs';

describe('live deployment verification', () => {
  const sample = {
    slug: 'power-apps/example',
    sourceUrl: 'https://github.com/pnp/powerplatform-snippets/tree/main/power-apps/example',
    preview: { src640: 'generated/previews/power-apps/example-640.webp' },
  };
  const fixture = () => ({
    'deployment.json': { commit: 'verified-revision', sampleCount: 1 },
    'catalog.json': { samples: [sample], sampleFolderCount: 1, products: [{ logo: 'PowerApps_scalable.svg' }] },
    'samples.json': [{ url: `${sample.sourceUrl}/` }],
  });
  function fetcher(documents, missing = null) {
    return async (url) => {
      const relative = url.pathname.replace('/powerplatform-snippets/', '');
      return new Response(JSON.stringify(documents[relative] ?? {}), { status: relative === missing ? 404 : 200 });
    };
  }
  const options = { siteUrl: 'https://pnp.github.io/powerplatform-snippets/', expectedCommit: 'verified-revision' };
  it('accepts the exact built revision and matching compatibility sources', async () => {
    await expect(verifyDeployment({ ...options, fetcher: fetcher(fixture()) })).resolves.toEqual({
      commit: 'verified-revision', snippets: 1, compatibilityRecords: 1,
    });
  });
  it('rejects stale revisions and incomplete or mismatched catalogs', async () => {
    await expect(verifyDeployment({ ...options, expectedCommit: 'new-revision', fetcher: fetcher(fixture()) })).rejects.toThrow('does not match');
    const incomplete = fixture();
    incomplete['catalog.json'].sampleFolderCount = 2;
    await expect(verifyDeployment({ ...options, fetcher: fetcher(incomplete) })).rejects.toThrow('snippet count');
    const mismatch = fixture();
    mismatch['samples.json'][0].url = 'https://github.com/pnp/powerplatform-snippets/tree/main/power-apps/wrong';
    await expect(verifyDeployment({ ...options, fetcher: fetcher(mismatch) })).rejects.toThrow('compatibility catalog');
  });
  it('rejects unavailable detail pages, previews and product logos', async () => {
    for (const missing of [`snippets/${sample.slug}/`, sample.preview.src640, 'generated/brand/PowerApps_scalable.svg']) {
      await expect(verifyDeployment({ ...options, fetcher: fetcher(fixture(), missing) })).rejects.toThrow('HTTP 404');
    }
  });
});
