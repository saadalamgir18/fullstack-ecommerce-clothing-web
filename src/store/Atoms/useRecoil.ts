import { atom, atomFamily, selector, selectorFamily } from "recoil";
// import { SanityDocument } from "next-sanity";
// import { client } from "../../../sanity/lib/client";
export const productCount = atom({
  key: "productCount",
  default: 1,
});

export const navBtn = atom({
  key: "navBtn",
  default: false,
});

export const cart_details = atom({
  key: "cart_details",
  default: 1,
});
export const product_details = atom({
  key: "product_details",
  default: {
    pruduct_id: "",
    title: "",
    quantity: 1,
  },
});
// export const cart_details = selector({
//   key: "cart_details",
//   get: ({ get }) => {
//     const cartCount = get(productCount);
//     return cartCount;
//   },
// });
// pruduct_id: "",
//     title: "",
// export const productsAtomFamily = atomFamily({
//   key: "productsAtomFamily",
//   default: selectorFamily({
//     key: "productsAtomFamilySelector",
//     get:
//       ({ productCategory, id }: { productCategory: string; id: string }) =>
//       async ({ get }) => {
//         const EVENTS_QUERY = `*[_type=="product"]{_id, price, title, image, subcategory->{title}, category-> {title}}`;
//         let products = await client.fetch(EVENTS_QUERY);
//         console.log(products);
//         if (productCategory == "all") {
//           return products;
//         } else if (id) {
//           products = products.find(
//             (product: SanityDocument) => product._id === id
//           );
//           console.log(products);
//           return [products];
//         } else if (productCategory == "Male" || productCategory == "Female") {
//           products = products.filter(
//             (product: SanityDocument) =>
//               product.category.title === productCategory
//           );
//           return products;
//         }
//         return products;
//       },
//   }),
// });
