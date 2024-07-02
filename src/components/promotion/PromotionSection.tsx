import event3 from "@/assets/event3.png";
import event2 from "@/assets/event2.png";
import RightSide from "./promoCards";
import PromoHeader from "./PromoHeader";
import PromoOfferCard1 from "./PromoOfferCard1";
import PromoOfferCard2 from "./PromoOfferCard2";
function PromotionSection() {
  return (
    <section className="mt-24 mb-24 pt-8">
      <PromoHeader />
      <div className="grid grid-cols-[1fr_1fr_280px_280px] grid-rows-2 gap-6 mt-24">
        <PromoOfferCard1 />
        <PromoOfferCard2 />
        <RightSide
          background="#d7d7d9"
          promohead="Flex Sweatshirt"
          initPrice={100.0}
          lessPrice={75.0}
          eventImage={event2}
          gridClass="col-start-3 row-start-1 row-end-3"
        />
        <RightSide
          background="#d7d7d9"
          promohead="Flex Push Button Bomber"
          initPrice={190}
          lessPrice={75.0}
          eventImage={event3}
          gridClass="col-star-4 row-start-1 row-end-3"
        />
      </div>
    </section>
  );
}

export default PromotionSection;
