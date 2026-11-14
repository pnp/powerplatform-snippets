import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { snippetFolders, validateReadmeTracker } from './gallery-model.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const entries = await snippetFolders(repositoryRoot);
for (const slug of entries) {
  validateReadmeTracker(slug, await readFile(path.join(repositoryRoot, slug, 'README.md'), 'utf8'));
}
console.log(`[trackers] ${entries.length} README trackers validated`);
