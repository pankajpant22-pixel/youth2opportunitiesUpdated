import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "The URL: /blog/<slug>. Changing it later needs a redirect from the old one.",
      validation: (r) =>
        r
          .required()
          .custom(
            (s?: { current?: string }) =>
              !s?.current ||
              /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.current) ||
              "Use lowercase letters, numbers and single hyphens only (no dates needed).",
          ),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description: "Shown on the blog list and as the page description. Falls back to the start of the body.",
      validation: (r) => r.max(200),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "updatedAt",
      title: "Last updated",
      type: "datetime",
      description: "Set this when the post is meaningfully revised (e.g. new deadlines). Shown on the page.",
    }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }] }),
    defineField({ name: "body", type: "blockContent" }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "metaTitle",
          type: "string",
          title: "Meta title",
          description: "Overrides the post title in search results. Aim for under 60 characters.",
          validation: (r) => r.max(60),
        }),
        defineField({
          name: "metaDescription",
          type: "text",
          rows: 2,
          title: "Meta description",
          description: "Overrides the excerpt. Aim for 150 to 160 characters.",
          validation: (r) => r.max(160),
        }),
        defineField({
          name: "ogImage",
          type: "image",
          title: "Social share image",
          description: "Falls back to main image. Ideal size 1200x630.",
        }),
        defineField({
          name: "canonicalUrl",
          type: "url",
          title: "Canonical URL",
          description: "Only set this if the content was first published elsewhere.",
        }),
        defineField({ name: "noIndex", type: "boolean", title: "Hide from search engines", initialValue: false }),
      ],
    }),
  ],
  orderings: [{ title: "Newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", author: "author.name", media: "mainImage" },
    prepare: ({ title, author, media }) => ({ title, subtitle: author && `by ${author}`, media }),
  },
});
