import React from "react";

function SizeList() {
  const sizeList = ["XS", "S", "M", "L", "XL"];
  return (
    <ul className="flex items-center gap-6 mt-3 w-[40%]">
      {sizeList.map((size, index) => (
        <li
          key={index}
          className="hover:shadow-[5px_10px_20px_rgba(99,99,110,0.3)] rounded-full w-[40%] flex justify-center items-center px-2 py-1 cursor-pointer transition-all duration-300"
        >
          {size}
        </li>
      ))}
    </ul>
  );
}

export default SizeList;
