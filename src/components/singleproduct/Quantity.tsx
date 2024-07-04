"use client";
import { productCount } from "@/store/Atoms/useRecoil";
import React from "react";
import { useRecoilState } from "recoil";

function Quantity() {
  const [quantity, setQuantity] = useRecoilState(productCount);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };
  return (
    <div className="flex items-center gap-6">
      <strong>Quantity:</strong>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          className="bg-gray-400 rounded-full px-2 py-2 "
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncrease}
          className="border border-black rounded-full px-2 py-2 "
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            // t="1551322312294"
            viewBox="0 0 1024 1024"
            version="1.1"
            height="0.8em"
            width="0.8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
            <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Quantity;
