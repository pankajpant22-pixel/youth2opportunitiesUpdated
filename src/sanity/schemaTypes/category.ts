import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({
      name: "description",
      type: "text",
      rows: 4,
      description: "Intro shown on the category page, above the list of posts.",
    }),
  ],
});
