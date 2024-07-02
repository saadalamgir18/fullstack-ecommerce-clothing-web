import React from "react";
import PropertiesList from "./PropertiesList";
import FeatureOnRight from "./FeatureOnRight";
import FeaturesHeading from "./FeaturesHeading";

function FeatureSection() {
  return (
    <section className="mt-24  mb-24">
      <FeaturesHeading />
      <div className="grid grid-cols-2">
        <PropertiesList />
        <FeatureOnRight />
      </div>
    </section>
  );
}

export default FeatureSection;
