"use client";
import {
  cart_details,
  product_details,
  productCount,
} from "@/store/Atoms/useRecoil";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function AddCartButton({ price }: { price: number }) {
  const quantity = useRecoilValue(productCount);
  // const [cart_detail, setCartDetail] = useRecoil(cart_details);
  const product = useRecoilValue(product_details);
  const [cartQuantity, setCartQuantity] = useRecoilState(cart_details);

  const router = useRouter();
  const handleAddToCart = async () => {
    const res = fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product.pruduct_id,
        quantity: quantity,
      }),
    });
    // setCartDetail(quantity);
    setCartQuantity(quantity + quantity);
    toast.success("added to cart", {
      duration: 3000,
    });
    // router.push("/cart");
  };
  return (
    <div className="flex gap-6 mt-6">
      <button
        onClick={handleAddToCart}
        className="bg-black text-white text-sm px-6 py-1 font-semibold flex gap-2 items-center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </span>
        Add to Cart
      </button>
      <p className="text-2xl font-bold tracking-widest">
        ${quantity * price}.00
      </p>
    </div>
  );
}

export default AddCartButton;
