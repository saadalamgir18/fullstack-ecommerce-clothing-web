import React from "react";

function RightsGrid({ linksArray }: { linksArray: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-bold text-gray-500">Company</h3>
      <div className="flex flex-col gap-2 ">
        {linksArray.map((link, index) => (
          <p key={index} className="text-gray-500">
            {link}
          </p>
        ))}
        {/* <p className="text-gray-500">About</p>
        <p className="text-gray-500">Terms of Use</p>
        <p className="text-gray-500">Privacy Policy</p>
        <p className="text-gray-500">How it Works</p>
        <p className="text-gray-500">Contact Us</p> */}
      </div>
    </div>
  );
}

export default RightsGrid;
