import React from "react";

function SectionHeader({
  sectionName,
  sectionHeading,
}: {
  sectionName: string;
  sectionHeading: string;
}) {
  return (
    <div className="text-center">
      <p className="uppercase font-semibold tracking-widest text-xs text-blue-600">
        {sectionName}
      </p>
      <h3 className="text-4xl sm:text-3xl font-bold mt-4">{sectionHeading}</h3>
    </div>
  );
}

export default SectionHeader;
