"use client";
import { productCount } from "@/store/Atoms/useRecoil";
import React, { useState } from "react";
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
          className="bg-gray-400 rounded-full px-2 py-[2px] "
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncrease}
          className="border border-black rounded-full px-2 "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Quantity;
