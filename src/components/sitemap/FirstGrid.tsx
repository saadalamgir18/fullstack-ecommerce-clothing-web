import Image from "next/image";
import React from "react";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function FirstGrid() {
  return (
    <div className="flex flex-col gap-8 justify-between w-4/5">
      <Image src={logo} width={140} height={131} alt="" className="" />
      <p className="text-gray-500 leading-7 ">
        Small, artisan label that offers a thoughtfully curated collection of
        high quality everyday essentials made
      </p>
      <div className="flex gap-6">
        <Link
          href={"#"}
          className="bg-[#f1f1f1] py-3 px-3 rounded-lg flex justify-center items-center"
        >
          <FaTwitter />
        </Link>
        <Link href={"#"} className="bg-[#f1f1f1] py-3 px-3 rounded-lg">
          <FaFacebookF />
        </Link>
        <Link href={"#"} className="bg-[#f1f1f1] py-3 px-3 rounded-lg">
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
}

export default FirstGrid;
