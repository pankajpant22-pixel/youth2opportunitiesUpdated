import { defineField, defineType } from "sanity";

const path = (r: any) =>
  r.required().custom((v?: string) => !v || v.startsWith("/") || "Start with /, e.g. /blog/old-slug");

export const redirect = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  fields: [
    defineField({ name: "from", type: "string", description: "Old path, e.g. /blog/old-slug", validation: path }),
    defineField({ name: "to", type: "string", description: "New path, e.g. /blog/new-slug", validation: path }),
    defineField({
      name: "permanent",
      type: "boolean",
      description: "On for a slug change (301). Off only for a temporary move.",
      initialValue: true,
    }),
  ],
  preview: {
    select: { from: "from", to: "to" },
    prepare: ({ from, to }) => ({ title: `${from ?? "?"} → ${to ?? "?"}` }),
  },
});
