import event1 from "@/assets/event1.png";
import Image from "next/image";

function PromoOfferCard1() {
  return (
    <div className="bg-[#d7d7d9] col-start-1 col-end-3 row-start-1 row-end-2 flex justify-between items-center pl-10">
      <div>
        <h3 className="text-4xl font-bold uppercase">get up to 60%</h3>
        <p className="text-lg">For the summer season</p>
      </div>
      <div>
        <Image src={event1} alt="event1" />
      </div>
    </div>
  );
}

export default PromoOfferCard1;
