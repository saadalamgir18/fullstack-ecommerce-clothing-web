import Link from "next/link";
import React from "react";

function NavLinks() {
  return (
    <nav>
      <ul className="flex gap-12">
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
          <Link href={"#"} className="text-lg">
            All Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
