import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";
function Header() {
  return (
    <header className="flex justify-between items-center mt-10">
      <Image src={Logo} width={140} height={31} alt="Logo"></Image>
      <nav>
        <ul className="flex gap-12">
          <li>
            <Link href={"#"} className="text-xl">
              Female
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-xl">
              Male
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-xl">
              Kids
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-xl">
              All Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center border-2 rounded-md border-gray-100 w-[30%] p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="focus:outline-none p-1 text-base"
          type="text"
          placeholder="What you looking for"
          name=""
          id=""
        />
      </div>
      <button className="flex items-center justify-center bg-[#f1f1f1] rounded-full p-2 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span className="absolute top-0 right-1 bg-red-500 text-white rounded-full text-[12px] px-[4px] text-center font-semibold">
          0
        </span>
      </button>
    </header>
  );
}

export default Header;

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="size-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  />
</svg>; */
}
