import Image, { StaticImageData } from "next/image";
type RghtProps = {
  background: string;
  promohead: string;
  initPrice: number;
  lessPrice: number;
  eventImage: StaticImageData;
  gridClass: string;
};
function RightSide({
  background,
  promohead,
  initPrice,
  lessPrice,
  eventImage,
  gridClass,
}: RghtProps) {
  return (
    <div className={`bg-[${background}] ${gridClass} flex flex-col`}>
      <div className="p-5">
        <p>{promohead}</p>
        <div className="flex gap-x-3">
          <del>${initPrice}.00</del>{" "}
          <span className="font-semibold">${lessPrice}.00</span>
        </div>
      </div>
      <div className="place-self-center">
        <Image
          src={eventImage}
          alt="event2"
          className="sm:w-full"
          width={280}
          height={340}
        />
      </div>
    </div>
  );
}

export default RightSide;
