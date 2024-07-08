"use client";
import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";
import { useRecoilValue } from "recoil";
import { navBtn } from "@/store/Atoms/useRecoil";

function NavLinks() {
  const btn = useRecoilValue(navBtn);
  return (
    <nav
      className={`max-lg:absolute max-lg:bg-white max-lg:z-10 max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-[100vh] flex max-lg:justify-center items-center
    max-lg:transition-all max-lg:duration-500 ${btn ? "" : "max-lg:opacity-0 max-lg:translate-x-full"}`}
    >
      <ul
        className={`flex max-lg:flex-col max-lg:items-center max-lg:justify-center gap-12 max-lg:z-10 ${btn ? "max-lg:opacity-1 max-lg:pointer-events-auto max-lg:visible max-lg:translate-x-0" : ""}`}
      >
        <li>
          <Link href={"/female"} className="text-lg">
            Female
          </Link>
        </li>
        <li>
          <Link href={"/male"} className="text-lg">
            Male
          </Link>
        </li>
        <li>
          <Link href={"#"} className="text-lg">
            Kids
          </Link>
        </li>
        <li>
          <Link href={"/products"} className="text-lg">
            All Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavLinks;
