import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import NavButton from "./NavButton";
function Header() {
  return (
    <header className="flex justify-between items-center mt-10">
      <Link href={"/"} className="">
        <Image src={Logo} width={140} height={31} alt="Logo" />
      </Link>
      <NavLinks />
      <SearchBar />
      <CartButton />
      <NavButton />
    </header>
  );
}

export default Header;
