import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";

/** A Sanity image asset with its original pixel size, so <img> can carry width and height. */
export interface SanityImage {
  url: string;
  width: number;
  height: number;
  alt?: string;
}

export interface Category {
  title: string;
  slug: string;
  description: string | null;
}

export interface Author {
  name: string;
  slug: string | null;
  role: string | null;
  bio: string | null;
  image: SanityImage | null;
  links: string[] | null;
}

export interface Post {
  title: string;
  slug: string;
  publishedAt: string | null;
  updatedAt: string | null;
  image: SanityImage | null;
  excerpt: string | null;
  text: string;
  author: Author | null;
  categories: Category[];
  body: PortableTextBlock[];
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
  } | null;
}

const IMAGE = `"url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height`;

const CATEGORY = `title, "slug": slug.current, description`;

const AUTHOR = `name, "slug": slug.current, role, bio, links, "image": image{ ${IMAGE} }`;

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  updatedAt,
  "image": mainImage{ alt, ${IMAGE} },
  excerpt,
  "text": pt::text(body),
  "author": author->{ ${AUTHOR} },
  // Only categories with a slug, since they need one for their page.
  "categories": coalesce(categories[defined(@->slug.current)]->{ ${CATEGORY} }, []),
  body[]{
    ...,
    _type == "block" => { markDefs[]{ ..., _type == "internalLink" => { "slug": reference->slug.current } } },
    _type == "image" => { ${IMAGE} }
  },
  seo{ metaTitle, metaDescription, canonicalUrl, noIndex, "ogImage": ogImage.asset->url }
}`;

// The token (private datasets only) is added here, not in the integration config, so it stays out of
// the sanity:client module and is only used at build time.
const client = import.meta.env.SANITY_API_READ_TOKEN
  ? sanityClient.withConfig({ token: import.meta.env.SANITY_API_READ_TOKEN })
  : sanityClient;

// Read at build time only; publishing a post needs a rebuild. Cached so every page shares one fetch.
let postsCache: Promise<Post[]> | undefined;
export const getPosts = () => (postsCache ??= client.fetch<Post[]>(POSTS_QUERY));

export const getCategories = () =>
  client.fetch<Category[]>(`*[_type == "category" && defined(slug.current)] | order(title asc) { ${CATEGORY} }`);

export const getAuthors = () =>
  client.fetch<Author[]>(`*[_type == "author" && defined(slug.current)] | order(name asc) { ${AUTHOR} }`);

export const postHref = (slug: string) => `/blog/${slug}`;
export const categoryHref = (slug: string) => `/blog/category/${slug}`;
export const authorHref = (slug: string) => `/blog/author/${slug}`;

/** Posts that are listed and indexed (noIndex posts are still built, but kept out of lists, sitemap and RSS). */
export const indexable = (posts: Post[]) => posts.filter((p) => !p.seo?.noIndex);

/** Up to `max` other posts sharing the most categories with `post`, newest first on ties. */
export const relatedPosts = (post: Post, posts: Post[], max = 3) => {
  const mine = new Set(post.categories.map((c) => c.slug));
  return indexable(posts)
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, shared: p.categories.filter((c) => mine.has(c.slug)).length }))
    .filter((r) => r.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, max)
    .map((r) => r.p);
};

/**
 * CDN URL plus width and height for an image shown `width` px wide. Never upscales (fit=max), and
 * the height keeps the original aspect ratio, so the browser can reserve the space before it loads.
 */
export const sized = (img: SanityImage, width: number) => {
  const w = Math.min(width, img.width);
  return { src: `${img.url}?w=${w}&fit=max&auto=format`, width: w, height: Math.round((img.height / img.width) * w) };
};

export const metaDescription = (p: Post) => p.seo?.metaDescription || summary(p);

export const summary = (p: Post) =>
  p.excerpt ?? (p.text.length > 180 ? p.text.slice(0, 180).trimEnd() + "…" : p.text);

export const formatDate = (d: string | null) =>
  d ? new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" }) : "";
