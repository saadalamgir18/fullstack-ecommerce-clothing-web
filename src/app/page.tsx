import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  return (
    <>
      <main className="mt-12">
        <HeroSection />
      </main>
    </>
  );
}
