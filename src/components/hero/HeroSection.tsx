import Image from "next/image";
import React from "react";
import Link from "next/link";
import FeatureIn from "./FeatureIn";
import BtnHeroSection from "./BtnHeroSection";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-y-12 mt-12 sm:mt-24 px-4 sm:px-8 h-3/4 relative">
      <div className="flex flex-col lg:pt-8 flex-1 lg:w-[80%]">
        <span className="text-md bg-[#e1edff] text-[rgb(0,0,255)] px-3 py-1 w-max rounded-md font-semibold">
          Sale 70%
        </span>
        <h1 className="text-5xl sm:text-6xl leading-[55px] font-bold mt-12">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-base mt-8 text-[#666]">
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
