import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import PromotionSection from "@/components/promotion/PromotionSection";

export default async function Home() {
  return (
    <>
      <main className="mt-12">
        <HeroSection />
        <PromotionSection />
      </main>
    </>
  );
}
