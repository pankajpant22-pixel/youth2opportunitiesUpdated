import type { APIRoute } from "astro";
import { getPosts, indexable, metaDescription, postHref } from "../sanity/posts";
import { absolute } from "../site";

const xml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ site }) => {
  const posts = indexable(await getPosts()).slice(0, 50);
  const blog = absolute("/blog", site);

  const items = posts
    .map((p) => {
      const url = absolute(postHref(p.slug), site);
      return `    <item>
      <title>${xml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${xml(metaDescription(p))}</description>${
        p.publishedAt ? `\n      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>` : ""
      }${p.author ? `\n      <dc:creator>${xml(p.author.name)}</dc:creator>` : ""}${p.categories
        .map((c) => `\n      <category>${xml(c.title)}</category>`)
        .join("")}
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Y2O Blog</title>
    <link>${blog}</link>
    <description>Stories, updates and ideas from Y2O on youth, school and work.</description>
    <language>en-ca</language>
    <atom:link href="${absolute("/rss.xml", site)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
