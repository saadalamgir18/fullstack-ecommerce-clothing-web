"use client";
import React, { useState } from "react";

function Quantity() {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
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
