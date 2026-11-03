/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PROJECT_ID: string;
  readonly SANITY_STUDIO_DATASET: string;
  /** Optional viewer token for a private dataset. Server-only. */
  readonly SANITY_API_READ_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
