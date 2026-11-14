# Power Platform snippet gallery

A local-first, statically generated Astro gallery for this repository's snippets, adapted from the [Power Platform sample gallery](https://github.com/pnp/powerplatform-samples/tree/main/site). The discovery UX, accessible navigation, filters, themes, contributor recognition, and community resources follow the sample-gallery pattern. Purple styling, different artwork, and snippet-specific guidance give this gallery its own identity.

## Develop and build

Use Node.js 22.12 or later and the complete repository, including [branding](../assets/) and the snippet source folders.

```shell
cd site
npm ci
npm run dev
```

Open <http://127.0.0.1:4321/powerplatform-snippets/>. After changing snippet metadata, README content, or source branding, rerun `npm run generate` or restart development.

```shell
npm run validate:readme-trackers
npm test
npm run check
npm run build
npm run validate:links
npm run preview
```

The site always uses the `/powerplatform-snippets/` base path.

For interface changes, install the matching browser once and run the focused desktop/mobile browser suite:

```shell
npx playwright install chromium
npm run test:e2e
```

Playwright owns its preview on port 4398. Tests check metadata coverage, search and filter state, contributor counts, nested detail routes, logos, cross-gallery links, badge recognition, Sharing is Caring links, themes, keyboard/no-JavaScript use, tracking, accessibility, and responsive overflow.

## Content and generated files

- Every snippet folder under `copilot-studio`, `power-apps`, `power-automate-desktop`, and `power-pages` must have `README.md` and `assets/sample.json`. Empty product categories remain valid.
- The [metadata schema](../templates/metadata-schema.json) validates every record. Missing metadata, invalid dates, stale source URLs, missing images, and incorrect tracking keys fail generation instead of hiding snippets.
- Slugs preserve the category and folder, for example `/snippets/power-apps/activity-feed/`. This avoids collisions between products.
- Preview images must reference the snippet's own assets folder. The historical shared `templates/previewsnippets.png` placeholder remains supported; new contributions should use an actual screenshot.
- Historical repository/categorization labels ending in `-snippets` remain searchable in original metadata but are not shown as product badges. Power Automate snippets in the desktop category display as Power Automate Desktop.
- Relative README links resolve against the exact source folder. Markdown is sanitized; local images are optimized; animated documentation images retain their animation.
- Generated files in `src/generated/`, `public/generated/`, public JSON catalogs, and `dist/` are ignored. Do not edit or commit them. `catalog.json` exposes normalized discovery data; `samples.json` preserves compatible PnP metadata.

## Branding and community

The originals in [assets](../assets/) are the source of truth. Applicable product SVGs and the contributor badge use the supplied current artwork. SVGs are served intact; raster previews and artwork get optimized derivatives. The Copilot Studio mark is retained because the supplied Microsoft 365 Copilot icon represents a different product.

Both galleries link to one another through an identity-labelled switcher and footer links. Shared destinations live in [community.ts](src/lib/community.ts). The badge appears near the homepage hero and immediately below the Contributing hero, linking to [community recognition](https://aka.ms/community/recognition) without promising automatic issuance. [Sharing is Caring sessions](https://pnp.github.io/sharing-is-caring/) help first-time contributors get started.

## Visitor statistics

Keep exactly one tracker as the final nonblank line of each snippet README, using its actual category and folder:

```html
<img src="https://m365-visitor-stats.azurewebsites.net/powerplatform-snippets/power-apps/your-snippet-name" />
```

The website removes this image from rendered documentation and emits one page-level tracker with the same snippet key. Other pages use their route key; the homepage uses the namespace root. The `/snippets/` detail-route prefix, site base, query, fragments, and trailing slash are excluded. Localhost previews, builds, and automated tests do not send production visitor events. Without JavaScript, documentation and navigation still work but website tracking is not activated.

## GitHub Pages

The [validation workflow](../.github/workflows/validate-gallery.yml) checks pull requests without write or deployment credentials. The [deployment workflow](../.github/workflows/deploy-gallery.yml) builds relevant `main` changes and supports manual dispatch. Only its deployment job has Pages/OIDC write permissions.

Each build writes `deployment.json` with its revision and snippet count. After publication, the workflow runs `npm run deployment:verify` to check the live commit, complete catalogs, key pages, every snippet route and primary preview, and product logos. Set `SITE_URL` and `EXPECTED_COMMIT_SHA` to verify a specific deployment manually.

Set the repository's Pages build source to **GitHub Actions**. A local build does not publish the site: commit and push the revision, then inspect the deployment workflow before assuming the gallery is live.
