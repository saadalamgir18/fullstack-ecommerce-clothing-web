import React from "react";
import SingleFeature from "./SingleFeature";

function PropertiesList() {
  return (
    <div className=" grid grid-cols-2 gap-y-12 gap-x-24">
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
  );
}

export default PropertiesList;
