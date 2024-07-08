"use client";
import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";
import { useRecoilValue } from "recoil";
import { navBtn } from "@/store/Atoms/useRecoil";

function NavLinks() {
  const btn = useRecoilValue(navBtn);
  return btn ? (
    <div className="max-lg:absolute max-lg:w-full max-lg:h-screen max-lg:top-0 max-lg:left-0 max-lg:bg-white max-lg:z-10 flex max-lg:flex-col items-center max-lg:justify-center max-lg:transition-all max-lg:duration-900 max-lg:ease-in-out">
      <nav>
        <ul className="flex max-lg:flex-col items-center justify-center gap-12">
          <li>
            <CartButton />
          </li>
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
    </div>
  ) : (
    ""
  );
}

export default NavLinks;
