import React from "react";
import SiteMap from "./sitemap/SiteMap";

function FooterSection() {
  return (
    <section className="mt-32  ">
      <SiteMap />
      <div className="border-t border-black py-7 mt-40">
        <div className="max-w-[1515px] mx-auto flex justify-between">
          <p className="text-base text-[#666]">
            Copyright &copy; 2022 Dine Market
          </p>
          <p className="text-base text-[#666]">
            Design by. <strong className="text-black">Saad Alamgir</strong>
          </p>
          <p className="text-base text-[#666]">
            Code by.{" "}
            <strong className="text-black">saadalamgir18 on github</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
