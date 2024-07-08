import React from "react";
import hero from "@/assets/hero.png";
import Image from "next/image";

function HeroImage() {
  return (
    <div className="hidden lg:flex flex-1 justify-center items-center">
      <div className="bg-[#ffece3] rounded-full w-[600px] h-[600px] flex justify-center items-center">
        {/* lg:w-[500px] lg:h-[500px] */}
        <Image
          className="absolute top-[-5%] flex flex-1"
          src={hero}
          width={650}
          height={650}
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default HeroImage;
