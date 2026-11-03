import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "role", type: "string", description: "e.g. Co-founder, Y2O" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", type: "text", rows: 3 }),
    defineField({
      name: "links",
      type: "array",
      description: "Profiles that show who the author is, such as LinkedIn or a personal site.",
      of: [{ type: "url" }],
    }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
