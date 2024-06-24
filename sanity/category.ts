import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "title",
      title: "Product Category",
      type: "string",
    }),
  ],
});

export const subcategory = defineType({
  name: "subcategory",
  type: "document",
  title: "Sub Category",
  fields: [
    {
      name: "title",
      title: "Sub Category",
      type: "string",
    },
  ],
});
