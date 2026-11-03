# Y2O marketing site (Astro)

Astro port of the static site in `../youth2opportunitiesUpdated`. Same pages, markup, styles and scripts; the shared chrome now lives in one place instead of being copied into every HTML file.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
```

## Layout

| Path | What it is |
|---|---|
| `src/layouts/Base.astro` | `<head>`, fonts, announcement bar + nav, footer, `social.js`. Props: `title`, `description`, `current` (nav href to highlight). Slots: default (page body), `scripts` (after the footer), `end` (after `social.js`). |
| `src/nav.ts` | `NAV_ITEMS`, used by the desktop links and the mobile menu. |
| `src/components/Nav.astro`, `Footer.astro` | Shared chrome. |
| `src/components/Reveal.astro` | Scroll-reveal / product-tilt / bar-fill script used by most pages. |
| `src/styles/base.css` | Styles shared by most pages (tokens, nav, hero, buttons, sections, footer…). |
| `src/styles/pages/<page>.css` | Page-specific styles, imported after `base.css`. `index`, `parents`, `students` and `share-your-story` carry their full stylesheet and don't import `base.css`. |
| `src/pages/*.astro` | One file per page. |
| `public/assets/` | Logos and `social.js` (footer social links; edit `Y2O_SOCIAL` there). |

`build.format: "file"` in `astro.config.mjs` makes the build emit `about.html`, `students.html`, … so the existing `.html` links and URLs keep working.

Page scripts are kept as `<script is:inline>` so they run exactly as before (Astro doesn't bundle or hoist them). Styles are global, not component-scoped, because several pages render markup from JavaScript.

## Adding a page

Create `src/pages/<name>.astro`:

```astro
---
import Base from "../layouts/Base.astro";
import Reveal from "../components/Reveal.astro";
import "../styles/base.css";
import "../styles/pages/<name>.css";
---

<Base title="Page · Y2O" description="…">
  <header class="hero">…</header>
  <Reveal slot="scripts" />
</Base>
```

Add it to `NAV_ITEMS` in `src/nav.ts` if it belongs in the nav, and pass `current="<name>.html"`.

## Blog (Sanity)

Posts live in Sanity. Copy `.env.example` to `.env` and set `SANITY_STUDIO_PROJECT_ID` (`tj8w4avb`) and `SANITY_STUDIO_DATASET` (`production`); set the same variables on the host. The `SANITY_STUDIO_` prefix is what the Sanity CLI exposes to `sanity.config.ts`; `astro.config.mjs` exposes it to the embedded Studio too. `SANITY_API_READ_TOKEN` is only needed if the dataset is private (a Viewer token; it's used at build time and never reaches the browser).

- **Editing:** the Studio is embedded at `/studio` (`sanity.config.ts`, schemas in `src/sanity/schemaTypes/`). Each origin it runs on (`http://localhost:4321`, the production domain) must be added to Sanity's CORS origins **with "Allow credentials" on**.
- **Rendering:** `blog.astro` and `blog-[slug].astro` fetch posts at build time via `src/sanity/posts.ts`. Publishing a post needs a rebuild; a Sanity webhook calling the host's deploy hook automates this.
- Post pages are `blog-<slug>.html` at the root so the site's relative links keep working.
- **Hosted Studio:** `npm run deploy:studio` deploys the schema and the Studio to https://youth2opportunities.sanity.studio. It builds into `studio-dist/`; a bare `npx sanity deploy` builds into `dist/` and wipes the site build.
