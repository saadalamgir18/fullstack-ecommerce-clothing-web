import React from "react";

function SingleFeature({
  featureHeading,
  featureDesciption,
}: {
  featureHeading: string;
  featureDesciption: string;
}) {
  return (
    <div className="w-[80%]">
      <h3 className="text-lg leading-4 font-semibold mb-4">{featureHeading}</h3>
      <p className="text-base font-light leading-6 ">{featureDesciption}</p>
    </div>
  );
}

export default SingleFeature;
