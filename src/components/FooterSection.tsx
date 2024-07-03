import React from "react";

function FooterSection() {
  return (
    <section className="mt-24 border-t border-black py-12">
      <div className="max-w-[1515px] mx-auto flex justify-between">
        <p className="text-2xl text-[#666]">
          Copyright &copy; 2022 Dine Market
        </p>
        <p className="text-2xl text-[#666]">
          Design by. <strong className="text-black">Saad Alamgir</strong>
        </p>
        <p className="text-2xl text-[#666]">
          Code by.{" "}
          <strong className="text-black">saadalamgir18 on github</strong>
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
