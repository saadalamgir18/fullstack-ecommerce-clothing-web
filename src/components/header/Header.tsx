import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
function Header() {
  return (
    <header className="flex justify-between items-center mt-10">
      <Image src={Logo} width={140} height={31} alt="Logo"></Image>
      <NavLinks />
      <SearchBar />
      <CartButton />
    </header>
  );
}

export default Header;
