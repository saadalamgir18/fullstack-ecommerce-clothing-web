import InCartProducts from "@/components/incart/InCartProducts";
import NoItemCart from "@/components/NoItemCart";
import React from "react";

async function page() {
  const res = await fetch("http://localhost:3000/api/cart", {
    method: "GET",
    cache: "no-store",
  });
  const cart_count = await res.json();
  console.log(cart_count);
  return (
    <div>
      {cart_count > 0 ? (
        <NoItemCart />
      ) : (
        <InCartProducts prod_id={cart_count.products_ids} />
      )}
    </div>
  );
}

export default page;
