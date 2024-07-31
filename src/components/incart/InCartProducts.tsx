import Image from "next/image";
import React from "react";
import even3 from "@/assets/event3.png";

function InCartProducts({ prod_id }: { prod_id: [] }) {
  return (
    <div className="mt-24">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <div>
        <Image src={even3} alt="" />
      </div>
    </div>
  );
}

export default InCartProducts;
