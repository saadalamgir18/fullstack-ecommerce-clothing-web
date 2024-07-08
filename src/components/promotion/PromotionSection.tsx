import event3 from "@/assets/event3.png";
import event2 from "@/assets/event2.png";
import RightSide from "./promoCards";
import SectionHeader from "../SectionHeader";
import PromoOfferCard1 from "./PromoOfferCard1";
import PromoOfferCard2 from "./PromoOfferCard2";
function PromotionSection() {
  return (
    <section className="mt-24 sm:mt-32 pt-8">
      <SectionHeader
        sectionHeading="Our Promotions Events"
        sectionName="promotions"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_280px_280px] lg:grid-rows-2 gap-6 mt-16">
        <PromoOfferCard1 />
        <PromoOfferCard2 />
        <RightSide
          background="#d7d7d9"
          promohead="Flex Sweatshirt"
          initPrice={100.0}
          lessPrice={75.0}
          eventImage={event2}
          gridClass="lg:col-start-3 lg:row-start-1 lg:row-end-3"
        />
        <RightSide
          background="#d7d7d9"
          promohead="Flex Push Button Bomber"
          initPrice={190}
          lessPrice={75.0}
          eventImage={event3}
          gridClass="lg:col-star-4 lg:row-start-1 lg:row-end-3"
        />
      </div>
    </section>
  );
}

export default PromotionSection;
