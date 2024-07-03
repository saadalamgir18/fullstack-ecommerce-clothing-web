import React from "react";
import SingleFeature from "./SingleFeature";

function PropertiesList() {
  return (
    <div className="relative z-10">
      <div className="absolute text-8xl w-[80%] text-[rgba(0,0,0,0.07)] font-extrabold -z-10">
        Different from Others
      </div>
      <div className="grid grid-cols-2 gap-y-12 gap-x-24">
        <SingleFeature
          featureHeading="Using Good Quality Materials"
          featureDesciption="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        />
        <SingleFeature
          featureHeading="Using Good Quality Materials"
          featureDesciption="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        />
        <SingleFeature
          featureHeading="Using Good Quality Materials"
          featureDesciption="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        />
        <SingleFeature
          featureHeading="Using Good Quality Materials"
          featureDesciption="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default PropertiesList;
