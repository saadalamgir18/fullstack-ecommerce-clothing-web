import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
} from "recoil";

export const productCount = atom({
  key: "productCount",
  default: 1,
});

export const navBtn = atom({
  key: "navBtn",
  default: false,
});

export const cart_count = atom({
  key: "cart_count",
  default: 0,
});
export const product_details = atom({
  key: "product_details",
  default: {
    pruduct_id: "",
    title: "",
    quantity: 1,
  },
});
