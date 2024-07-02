import React from "react";
import hero from "@/assets/hero.png";
import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex flex-1 relative">
      <div className="bg-[#ffece3] rounded-full w-[600px] h-[600px]">
        <Image
          className="w-full absolute top-[-5%]"
          src={hero}
          width={650}
          height={650}
          alt="hero image"
        ></Image>
      </div>
    </div>
  );
}

export default HeroImage;
