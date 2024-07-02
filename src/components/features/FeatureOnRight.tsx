import Image from "next/image";
import React from "react";
import featureImage from "@/assets/featsect.png";
import Link from "next/link";
function FeatureOnRight() {
  return (
    <div className=" flex gap-x-10">
      <Image src={featureImage} alt="" className="h-full" />
      <div className="flex flex-col justify-center gap-y-8">
        <p className="text-2xl font-light leading-8 tracking-wider">
          This piece is ethically crafted in our small family-owned workshop in
          Peru with unmatched attention to detail and care. The Natural color is
          the actual natural color of the fiber, undyed and 100% traceable.
        </p>
        <Link
          className="px-6 py-2 bg-black text-white text-2xl font-semibold w-fit "
          href={"#"}
        >
          See All Products
        </Link>
      </div>
    </div>
  );
}

export default FeatureOnRight;
