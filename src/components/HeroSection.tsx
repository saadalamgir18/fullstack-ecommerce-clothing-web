import Image from "next/image";
import React from "react";
import hero from "@/assets/hero.png";
import Link from "next/link";
import Featured1 from "@/assets/Featured1.png";
import Featured2 from "@/assets/Featured2.png";
import Featured3 from "@/assets/Featured3.png";
import Featured4 from "@/assets/Featured4.png";
function HeroSection() {
  return (
    <section className="grid grid-cols-2 gap-y-12 px-8">
      <div className="flex flex-col pt-8 flex-1">
        <span className="text-md bg-[#e1edff] text-[rgb(0,0,255)] px-2 py-1 w-max rounded-md font-semibold">
          Sale 70%
        </span>
        <h1 className="text-5xl leading-[55px] font-bold mt-12">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-base mt-8">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link
          href={"#"}
          className="flex gap-x-2 text-xl font-medium bg-black text-white w-max px-5 py-3 mt-16"
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
          <span>Start Shoping</span>
        </Link>
        <div className="grid grid-cols-4 gap-4 mt-auto">
          <Image src={Featured1} alt="" />
          <Image src={Featured2} alt="" />
          <Image src={Featured3} alt="" />
          <Image src={Featured4} alt="" />
        </div>
      </div>
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
    </section>
  );
}

export default HeroSection;
