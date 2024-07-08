import React from "react";

function SearchBar() {
  return (
    <div className="hidden lg:flex items-center border-2 rounded-md border-gray-100 w-[30%] px-2 py-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.2"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        className="focus:outline-none px-1 text-xs"
        type="text"
        placeholder="What you looking for"
        name=""
        id=""
      />
    </div>
  );
}

export default SearchBar;
