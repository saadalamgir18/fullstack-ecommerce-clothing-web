"use client";
import { cart_details, navBtn } from "@/store/Atoms/useRecoil";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";

function CartButton() {
  const cartDetail = useRecoilValue(cart_details);
  const btn = useRecoilValue(navBtn);
  return (
    <Link
      href={"/cart"}
      className={`max-lg:hidden flex items-center justify-center bg-[#f1f1f1] rounded-full p-2 relative`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <span className="absolute top-0 right-1 bg-red-500 text-white rounded-full text-[12px] px-[4px] text-center font-semibold">
        {cartDetail}
      </span>
    </Link>
  );
}

export default CartButton;
