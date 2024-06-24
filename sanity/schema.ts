import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category, subcategory } from "./category";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, subcategory],
};
