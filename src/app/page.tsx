import RecentProducts from "@/components/recents/RecentProducts";
import HeroSection from "@/components/hero/HeroSection";
import PromotionSection from "@/components/promotion/PromotionSection";
import FeatureSection from "@/components/features/FeatureSection";
import NewsLetter from "@/components/NewsLetter";

export default async function Home() {
  return (
    <>
      <main className="mt-12">
        <HeroSection />
        <PromotionSection />
        <RecentProducts />
        <FeatureSection />
        <NewsLetter />
      </main>
    </>
  );
}
