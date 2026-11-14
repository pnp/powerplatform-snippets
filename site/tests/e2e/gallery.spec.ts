import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import type { Catalog } from '../../src/lib/catalog';

test.beforeEach(async ({ page }) => {
  await page.route('https://m365-visitor-stats.azurewebsites.net/**', (route) => route.abort());
  await page.route('https://github.com/*.png*', (route) => route.fulfill({
    contentType: 'image/svg+xml',
    body: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><rect width="50" height="50" fill="#eee2fa"/></svg>',
  }));
});

test('distinct identity, related galleries, current logos, badge and sharing guidance', async ({ page, request }, testInfo) => {
  const catalog: Catalog = await (await request.get('./catalog.json')).json();
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Small snippets.Big possibilities.');
  const related = page.getByRole('navigation', { name: 'Related galleries' });
  await expect(related.getByRole('link', { name: /Samples/ })).toHaveAttribute('href', 'https://pnp.github.io/powerplatform-samples/');
  await expect(related.getByRole('link', { name: /Snippets/ })).toHaveAttribute('aria-current', 'page');
  const badge = page.locator('.badge-panel');
  await expect(badge.getByRole('img', { name: /community contributor badge/i })).toBeVisible();
  await expect(badge.getByRole('link', { name: 'Sharing is Caring sessions' })).toHaveAttribute('href', 'https://pnp.github.io/sharing-is-caring/');
  await expect(badge.getByRole('link', { name: 'About community recognition' })).toHaveAttribute('href', 'https://aka.ms/community/recognition');
  for (const product of catalog.products.filter((item) => item.logo)) {
    const response = await request.get(`./generated/brand/${product.logo}`);
    expect(response.ok(), product.name).toBe(true);
    if (product.logo!.endsWith('.svg')) {
      expect(response.headers()['content-type']).toContain('image/svg+xml');
      expect(await response.text()).toContain('<svg');
    }
  }
  if (testInfo.project.name === 'mobile') await page.locator('.mobile-menu summary').click();
  const nav = page.getByRole('navigation', { name: testInfo.project.name === 'mobile' ? 'Mobile navigation' : 'Primary navigation' });
  await expect(nav.getByRole('link').first()).toHaveAccessibleName('Community');
  await expect(nav.getByRole('link', { name: 'Snippets', exact: true })).toHaveAttribute('aria-current', 'page');
  await page.goto('./contributing/');
  await expect(page.locator('.page-hero + .container .badge-panel')).toBeVisible();
  await page.getByRole('link', { name: 'See how to contribute' }).click();
  await expect(page.locator('#contribution-steps')).toBeInViewport();
});

test('search, combined filters, history, sorting and reset agree with metadata', async ({ page, request }) => {
  const catalog: Catalog = await (await request.get('./catalog.json')).json();
  expect(catalog.samples.length).toBe(catalog.sampleFolderCount);
  expect(catalog.samples.length).toBeGreaterThan(0);
  await page.goto('./');
  await expect(page.locator('[data-sample-card]')).toHaveCount(catalog.samples.length);
  const apps = catalog.samples.filter((sample) => sample.products.includes('Power Apps'));
  await page.locator('button[data-product-filter="Power Apps"]').click();
  await expect(page.locator('[data-sample-card]:visible')).toHaveCount(apps.length);
  const author = apps[0].authors[0].gitHubAccount.toLowerCase();
  await page.getByRole('combobox', { name: 'Contributor', exact: true }).selectOption(author);
  await expect(page.locator('[data-sample-card]:visible')).toHaveCount(apps.filter((sample) => sample.authors.some((item) => item.gitHubAccount.toLowerCase() === author)).length);
  await page.reload();
  await expect(page.getByRole('combobox', { name: 'Contributor', exact: true })).toHaveValue(author);
  await page.goBack();
  await expect(page.getByRole('combobox', { name: 'Contributor', exact: true })).toHaveValue('');
  await page.locator('#reset-filters').click();
  const category = catalog.categories[0];
  await page.getByRole('combobox', { name: 'Category', exact: true }).selectOption(category);
  await expect(page.locator('[data-sample-card]:visible')).toHaveCount(catalog.samples.filter((sample) => sample.categories.includes(category)).length);
  await page.locator('#reset-filters').click();
  await page.getByRole('combobox', { name: 'Sort snippets' }).selectOption('name');
  const titles = await page.locator('[data-sample-card]:visible').evaluateAll((cards) => cards.map((card) => card.getAttribute('data-title')));
  expect(titles).toEqual([...catalog.samples].sort((a, b) => a.title.localeCompare(b.title, 'en') || a.slug.localeCompare(b.slug, 'en')).map((sample) => sample.title));
  await page.getByRole('searchbox', { name: 'Search snippets', exact: true }).fill('zzzz-no-such-snippet');
  await expect(page.locator('#empty-state')).toBeVisible();
  await page.getByRole('button', { name: 'Clear filters', exact: true }).click();
  await expect(page.locator('[data-sample-card]:visible')).toHaveCount(catalog.samples.length);
});

test('contributor counts and discovery links agree with metadata', async ({ page, request }) => {
  const catalog: Catalog = await (await request.get('./catalog.json')).json();
  await page.goto('./contributors/');
  await expect(page.locator('.contributor-card')).toHaveCount(catalog.contributors.length);
  const author = catalog.contributors[0];
  const card = page.locator('.contributor-card').first();
  await expect(card.locator('.contributor-avatar')).toHaveAttribute('href', `https://github.com/${author.gitHubAccount}`);
  await expect(card).toContainText(`${author.sampleSlugs.length} ${author.sampleSlugs.length === 1 ? 'snippet' : 'snippets'}`);
  await card.getByRole('link', { name: /snippets?$/ }).click();
  await expect(page.locator('[data-sample-card]:visible')).toHaveCount(author.sampleSlugs.length);
});

test('all nested detail routes and previews build, with one exact snippet tracker', async ({ page, request }) => {
  const catalog: Catalog = await (await request.get('./catalog.json')).json();
  for (const sample of catalog.samples) {
    expect((await request.get(`./snippets/${sample.slug}/`)).ok(), sample.slug).toBe(true);
    expect((await request.get(`./${sample.preview.src640}`)).ok(), sample.preview.src640).toBe(true);
  }
  for (const route of ['getting-started/', 'contributors/', 'contributing/', 'community/', 'whats-new/', '404.html', 'robots.txt', 'sitemap-index.xml', 'samples.json']) {
    expect((await request.get(`./${route}`)).ok(), route).toBe(true);
  }
  const sample = catalog.samples[0];
  let requests = 0;
  page.on('request', (req) => { if (req.url().includes('m365-visitor-stats')) requests++; });
  await page.goto(`./snippets/${sample.slug}/`);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(sample.title);
  await expect(page.getByRole('link', { name: 'Download snippet', exact: true })).toHaveAttribute('href', sample.downloadUrl);
  await expect(page.locator('img[data-visitor-stats]')).toHaveCount(1);
  await expect(page.locator('img[data-visitor-stats]')).toHaveAttribute('data-src', `https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/${sample.slug}`);
  await expect(page.locator('.readme-content img[src*="m365-visitor-stats"]')).toHaveCount(0);
  await expect(page.locator('.detail-preview img')).toHaveJSProperty('naturalWidth', Math.min(sample.preview.width, 960));
  expect(requests).toBe(0);
});

test('themes, keyboard navigation, accessibility and responsive layouts', async ({ page, request }) => {
  test.setTimeout(180_000);
  const catalog: Catalog = await (await request.get('./catalog.json')).json();
  const routes = ['', 'contributing/', 'contributors/', `snippets/${catalog.samples[0].slug}/`];
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.getByRole('switch', { name: 'Switch to dark mode' }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  for (const theme of ['light', 'dark']) {
    await page.addInitScript((value) => localStorage.setItem('power-platform-snippets-theme', value), theme);
    for (const route of routes) {
      await page.goto(`./${route}`);
      const result = await new AxeBuilder({ page }).analyze();
      expect(result.violations.filter((item) => ['serious', 'critical'].includes(item.impact ?? '')).map((item) => ({
        id: item.id, nodes: item.nodes.map((node) => ({ target: node.target, reason: node.failureSummary })),
      })), `${theme}: ${route}`).toEqual([]);
    }
  }
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(`./${route}`);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${width}px: ${route}`).toBe(true);
    }
  }
});

test('baseline detail navigation works without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.route('https://m365-visitor-stats.azurewebsites.net/**', (route) => route.abort());
  await page.goto(baseURL!);
  await page.locator('.sample-card h3 a').first().click();
  await expect(page.locator('.readme-content')).toBeVisible();
  await context.close();
});

test('a production host activates exactly the existing README tracker key', async ({ page, request }) => {
  const catalog: Catalog = await (await request.get('./catalog.json')).json();
  const sample = catalog.samples[0];
  await page.route('https://gallery.test/**', async (route) => {
    const url = new URL(route.request().url());
    await route.fulfill({ response: await request.get(`http://127.0.0.1:4398${url.pathname}${url.search}`) });
  });
  const expected = `https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/${sample.slug}`;
  const requests: string[] = [];
  page.on('request', (req) => { if (req.url().includes('m365-visitor-stats')) requests.push(req.url()); });
  await Promise.all([page.waitForRequest(expected), page.goto(`https://gallery.test/powerplatform-snippets/snippets/${sample.slug}/?q=ignored#setup`)]);
  expect(requests).toEqual([expected]);
});
