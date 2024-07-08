"use client";

import { navBtn } from "@/store/Atoms/useRecoil";
import { useState } from "react";
import { useRecoilState } from "recoil";

function NavButton() {
  const [btn, setBtn] = useRecoilState(navBtn);
  return (
    // <div className="">
    <button
      onClick={() => setBtn(!btn)}
      className="cursor-pointer lg:hidden max-lg:block z-10"
    >
      {btn ? (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          color="black"
          fontSize="27"
          className="text-black"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
          </g>
        </svg>
      ) : (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          color="black"
          fontSize="27"
          className="text-black"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
          </g>
        </svg>
      )}
    </button>
    // </div>
  );
}

export default NavButton;
