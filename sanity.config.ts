import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "y2o",
  title: "Y2O Blog",
  // Loaded by both Astro (embedded Studio) and the Sanity CLI; both expose SANITY_STUDIO_ vars.
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
