import React from "react";

function NewsLetter() {
  return (
    <div className="my-32 py-[10rem] px-[8rem] flex flex-col justify-center items-center relative z-50">
      <div className="-z-10 absolute text-[12rem] font-bold text-[#f2f3f7] leading-10">
        Newsletter
      </div>
      <h2 className="text-6xl font-extrabold">Subscribe Our Newsletter</h2>
      <p className="text-2xl font-medium mt-6">
        Get the latest information and promo offers directly
      </p>
      <div className="mt-16 flex items-center justify-between w-[35%] gap-3">
        <input
          type="text"
          placeholder="Input email address"
          className="text-xl border-[1px] border-black py-3 flex-grow w-full px-6 focus:outline-none"
        />
        <button className="bg-black text-xl text-white font-semibold px-5 flex-shrink-0 py-3 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
