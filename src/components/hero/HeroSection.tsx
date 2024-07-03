import Image from "next/image";
import React from "react";
import Link from "next/link";
import FeatureIn from "./FeatureIn";
import BtnHeroSection from "./BtnHeroSection";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="grid grid-cols-2 gap-y-12 mt-24 px-8">
      <div className="flex flex-col pt-8 flex-1 w-[80%]">
        <span className="text-md bg-[#e1edff] text-[rgb(0,0,255)] px-3 py-1 w-max rounded-md font-semibold">
          Sale 70%
        </span>
        <h1 className="text-[3rem] leading-[55px] font-bold mt-12">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-base mt-8">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <BtnHeroSection />
        <FeatureIn />
      </div>
      <HeroImage />
    </section>
  );
}

export default HeroSection;
