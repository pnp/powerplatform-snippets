import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const base = '/powerplatform-snippets';

export default defineConfig({
  site: 'https://pnp.github.io',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
