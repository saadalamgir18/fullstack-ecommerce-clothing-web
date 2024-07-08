import React from "react";

function NewsLetter() {
  return (
    <section className="my-24 sm:py-40 sm:px-32 flex flex-col justify-center items-center relative z-50">
      <div className="-z-10 absolute text-9xl font-bold text-[rgba(0,0,0,0.04)] leading-10">
        Newsletter
      </div>
      <h2 className="sm:text-4xl text-3xl font-semibold sm:font-extrabold">
        Subscribe Our Newsletter
      </h2>
      <p className="text-sm sm:text-base sm:font-light sm:text-center mt-4">
        Get the latest information and promo offers directly
      </p>
      <div className="mt-9 flex flex-col sm:flex-row items-center justify-between sm:w-[50%] gap-3">
        <input
          type="text"
          placeholder="Input email address"
          className="border-[1px] border-black py-1 flex-grow w-full px-4 focus:outline-none"
        />
        <button className="bg-black text-base text-white font-semibold px-4 flex-shrink-0 py-1 rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default NewsLetter;
