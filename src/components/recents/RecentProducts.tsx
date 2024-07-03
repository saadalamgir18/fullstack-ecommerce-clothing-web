import SectionHeader from "../SectionHeader";
import RecentProductGrid from "./RecentProductGrid";

function RecentProducts() {
  return (
    <section className="mt-24">
      <SectionHeader
        sectionHeading="Check What We Have"
        sectionName="products"
      />

      <RecentProductGrid productCategory="Female" />
    </section>
  );
}

export default RecentProducts;
