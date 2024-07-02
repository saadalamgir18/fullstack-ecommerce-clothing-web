import Image from "next/image";
import Featured1 from "@/assets/Featured1.png";
import Featured2 from "@/assets/Featured2.png";
import Featured3 from "@/assets/Featured3.png";
import Featured4 from "@/assets/Featured4.png";
function FeatureIn() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-auto">
      <Image src={Featured1} alt="" />
      <Image src={Featured2} alt="" />
      <Image src={Featured3} alt="" />
      <Image src={Featured4} alt="" />
    </div>
  );
}

export default FeatureIn;
