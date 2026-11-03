// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// .env isn't loaded into the config file automatically.
const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = loadEnv(
  process.env.NODE_ENV ?? "",
  process.cwd(),
  "",
);

export default defineConfig({
  // Production origin, used to build absolute URLs (canonical, Open Graph, sitemap, RSS).
  site: "https://www.youth2opportunities.ca",
  // Emit about.html, students.html, ... so the existing .html links and URLs keep working.
  build: { format: "file" },
  // Compression drops the newline between text and inline links ("privacy:<a>"), losing the space.
  compressHTML: false,
  // Expose SANITY_STUDIO_* to the embedded Studio, the same prefix the Sanity CLI exposes.
  vite: { envPrefix: ["PUBLIC_", "SANITY_STUDIO_"] },
  integrations: [
    sanity({
      projectId: SANITY_STUDIO_PROJECT_ID,
      dataset: SANITY_STUDIO_DATASET,
      apiVersion: "2025-02-19",
      // Posts are read at build time, so skip the CDN and always get the latest.
      useCdn: false,
      // Embedded Studio; static output makes it use hash routing (/studio#/...).
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
