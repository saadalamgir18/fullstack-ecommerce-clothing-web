import React from "react";
import FirstGrid from "./FirstGrid";
import RightsGrid from "./RightsGrid";

function SiteMap() {
  return (
    <section className="grid grid-cols-[2fr_1fr_1fr_1fr] max-w-[1515px] mx-auto">
      <FirstGrid />
      <RightsGrid
        linksArray={[
          "About",
          "Terms of Use",
          "Privacy Policy",
          "How it Works",
          "Contact Us",
        ]}
      />
      <RightsGrid
        linksArray={["Support Carrer", "24h Service", "Quick Chat"]}
      />
      <RightsGrid linksArray={["Whatsapp", "Support 24h"]} />
    </section>
  );
}

export default SiteMap;
