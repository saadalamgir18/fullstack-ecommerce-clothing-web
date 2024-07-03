import Image from "next/image";
import React from "react";
import featureImage from "@/assets/feature.png";
import Link from "next/link";
function FeatureOnRight() {
  return (
    <div className=" flex gap-x-10">
      <Image src={featureImage} height={350} width={300} alt="" />
      <div className="flex flex-col justify-center gap-y-8">
        <p className="text-lg font-light leading-6">
          This piece is ethically crafted in our small family-owned workshop in
          Peru with unmatched attention to detail and care. The Natural color is
          the actual natural color of the fiber, undyed and 100% traceable.
        </p>
        <Link
          className="px-6 py-1 bg-black text-white text-base font-semibold w-fit"
          href={"#"}
        >
          See All Products
        </Link>
      </div>
    </div>
  );
}

export default FeatureOnRight;
