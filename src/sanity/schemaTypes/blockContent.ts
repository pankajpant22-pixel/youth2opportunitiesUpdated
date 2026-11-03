import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              defineField({ name: "href", type: "url", title: "URL" }),
              defineField({ name: "blank", type: "boolean", title: "Open in new tab", initialValue: false }),
              defineField({
                name: "rel",
                type: "string",
                title: "Rel",
                description: "Use nofollow for links you don't vouch for, sponsored for paid or affiliate links.",
                options: {
                  list: [
                    { title: "nofollow", value: "nofollow" },
                    { title: "sponsored", value: "sponsored" },
                  ],
                },
              }),
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [defineField({ name: "reference", type: "reference", to: [{ type: "post" }] })],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineArrayMember({
      name: "faq",
      type: "object",
      title: "FAQ",
      fields: [
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "question", type: "string" }),
                defineField({ name: "answer", type: "text", rows: 3 }),
              ],
              preview: { select: { title: "question", subtitle: "answer" } },
            }),
          ],
        }),
      ],
      preview: {
        select: { items: "items" },
        prepare: ({ items }) => ({ title: "FAQ", subtitle: `${items?.length ?? 0} questions` }),
      },
    }),
    defineArrayMember({
      name: "callout",
      type: "object",
      title: "Callout",
      fields: [
        defineField({
          name: "tone",
          type: "string",
          options: {
            list: [
              { title: "Info", value: "info" },
              { title: "Tip", value: "tip" },
              { title: "Warning", value: "warning" },
            ],
            layout: "radio",
          },
          initialValue: "info",
        }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
      ],
      preview: { select: { title: "title", subtitle: "body" } },
    }),
    defineArrayMember({
      name: "table",
      type: "object",
      title: "Table",
      fields: [
        defineField({ name: "caption", type: "string" }),
        defineField({ name: "headerRow", type: "boolean", title: "First row is a header", initialValue: true }),
        defineField({
          name: "rows",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "row",
              fields: [defineField({ name: "cells", type: "array", of: [{ type: "string" }] })],
              preview: {
                select: { cells: "cells" },
                prepare: ({ cells }) => ({ title: (cells ?? []).join(" | ") }),
              },
            }),
          ],
        }),
      ],
      preview: {
        select: { caption: "caption", rows: "rows" },
        prepare: ({ caption, rows }) => ({ title: caption || "Table", subtitle: `${rows?.length ?? 0} rows` }),
      },
    }),
  ],
});
