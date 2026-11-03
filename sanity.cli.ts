import { defineCliConfig } from "sanity/cli";

// The Sanity CLI loads .env into process.env before reading this file.
export default defineCliConfig({
  api: { projectId: process.env.SANITY_STUDIO_PROJECT_ID, dataset: process.env.SANITY_STUDIO_DATASET },
  // `npm run deploy:studio` publishes the Studio to https://youth2opportunities.sanity.studio
  studioHost: "youth2opportunities",
  deployment: { appId: "dxyfrk2hlqg3451aul31o5u8" },
});
