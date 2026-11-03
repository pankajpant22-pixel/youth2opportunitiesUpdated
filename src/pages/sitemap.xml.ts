import type { APIRoute } from "astro";
import { getPosts, getCategories, getAuthors, indexable, postHref, categoryHref, authorHref } from "../sanity/posts";
import { absolute } from "../site";

// Every top-level page in src/pages except the 404, plus the blog's posts, categories and authors.
// Categories and authors with no listed posts are noindex, so they're left out here too.
const pages = Object.keys(import.meta.glob("./*.astro"))
  .map((f) => f.replace(/^\.\/(.*)\.astro$/, "$1"))
  .filter((name) => name !== "404")
  .map((name) => (name === "index" ? "/" : `/${name}`));

const xml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

export const GET: APIRoute = async ({ site }) => {
  const [posts, categories, authors] = await Promise.all([getPosts(), getCategories(), getAuthors()]);
  const listed = indexable(posts);
  const canonicalHere = listed.filter((p) => !p.seo?.canonicalUrl);

  const urls: { loc: string; lastmod?: string | null }[] = [
    ...pages.map((path) => ({ loc: path })),
    ...canonicalHere.map((p) => ({ loc: postHref(p.slug), lastmod: p.updatedAt ?? p.publishedAt })),
    ...categories
      .filter((c) => listed.some((p) => p.categories.some((pc) => pc.slug === c.slug)))
      .map((c) => ({ loc: categoryHref(c.slug) })),
    ...authors.filter((a) => listed.some((p) => p.author?.slug === a.slug)).map((a) => ({ loc: authorHref(a.slug!) })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${xml(absolute(u.loc, site))}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
