import React from "react";

function SingleFeature({
  featureHeading,
  featureDesciption,
}: {
  featureHeading: string;
  featureDesciption: string;
}) {
  return (
    <div className="w-[70%]">
      <h3 className="text-3xl leading-7 font-semibold mb-8">
        {featureHeading}
      </h3>
      <p className="text-2xl font-light leading-8 tracking-wider">
        {featureDesciption}
      </p>
    </div>
  );
}

export default SingleFeature;
