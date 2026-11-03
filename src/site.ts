// Site-wide facts used in meta tags and structured data. Keep SOCIAL in step with public/assets/social.js.
export const SITE_NAME = "Y2O";
export const ORG_NAME = "Y2O Growth Inc.";
export const LOGO = "/assets/y2o-logo.png";
export const SOCIAL = [
  "https://www.instagram.com/youth2opportunities/",
  "https://www.facebook.com/share/14rFLufJvhd/",
  "https://www.linkedin.com/company/youth-to-opportunities/",
];

/** Clean public path for a built page: /about.html → /about, /index.html → /. */
export const cleanPath = (pathname: string) =>
  pathname.replace(/\.html$/, "").replace(/\/index$/, "/").replace(/(.)\/$/, "$1") || "/";

/** Absolute URL on the production site for a path. */
export const absolute = (path: string, site: URL | undefined) => new URL(path, site).href;

/** Serialise JSON-LD for a <script type="application/ld+json">; escapes "<" so content can't close the tag. */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export const breadcrumbs = (items: { name: string; path: string }[], site: URL | undefined) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((i, n) => ({
    "@type": "ListItem",
    position: n + 1,
    name: i.name,
    item: absolute(i.path, site),
  })),
});
