import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export async function verifyDeployment({ siteUrl, expectedCommit, fetcher = fetch }) {
  if (!expectedCommit) throw new Error('EXPECTED_COMMIT_SHA is required');
  const base = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`);
  async function get(relative) {
    const url = new URL(relative, base);
    url.searchParams.set('revision', expectedCommit);
    const response = await fetcher(url, { cache: 'no-store', signal: AbortSignal.timeout(30_000) });
    if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
    return response;
  }
  const manifest = await (await get('deployment.json')).json();
  if (manifest.commit !== expectedCommit) throw new Error(`Deployed revision ${manifest.commit} does not match ${expectedCommit}`);
  const catalog = await (await get('catalog.json')).json();
  if (!catalog.samples.length || catalog.samples.length !== manifest.sampleCount || catalog.samples.length !== catalog.sampleFolderCount) {
    throw new Error('Live snippet count does not match the verified build');
  }
  const compatibility = await (await get('samples.json')).json();
  if (!Array.isArray(compatibility) || compatibility.length !== manifest.sampleCount ||
      catalog.samples.some((sample) => !compatibility.some((record) => record.url.replace(/\/$/, '') === sample.sourceUrl))) {
    throw new Error('Live compatibility catalog does not match the verified build');
  }
  for (const route of ['', 'getting-started/', 'contributing/', 'contributors/', 'whats-new/', 'community/']) await get(route);
  for (const sample of catalog.samples) {
    await get(`snippets/${sample.slug}/`);
    await get(sample.preview.src640);
  }
  for (const product of catalog.products) {
    if (product.logo) await get(`generated/brand/${product.logo}`);
  }
  return { commit: manifest.commit, snippets: catalog.samples.length, compatibilityRecords: compatibility.length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const action = process.argv[2];
  if (action === 'mark') {
    const catalog = JSON.parse(await readFile(path.join(siteRoot, 'dist', 'catalog.json'), 'utf8'));
    await writeFile(path.join(siteRoot, 'dist', 'deployment.json'), `${JSON.stringify({
      commit: process.env.GITHUB_SHA ?? 'local',
      sampleCount: catalog.samples.length,
      builtAt: new Date().toISOString(),
    })}\n`);
  } else if (action === 'verify') {
    console.log(await verifyDeployment({
      siteUrl: process.env.SITE_URL ?? 'https://pnp.github.io/powerplatform-snippets/',
      expectedCommit: process.env.EXPECTED_COMMIT_SHA,
    }));
  } else {
    throw new Error('Expected deployment action: mark or verify');
  }
}
