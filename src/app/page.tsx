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
