import type { APIRoute } from "astro";
import { absolute } from "../site";

// The embedded Studio is an editor login, not content.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\nDisallow: /studio\n\nSitemap: ${absolute("/sitemap.xml", site)}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
