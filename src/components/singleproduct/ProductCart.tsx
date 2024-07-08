import SizeList from "./SizeList";
import Quantity from "./Quantity";
import AddCartButton from "./AddCartButton";

function ProductCart({
  title,
  subcat,
  price,
}: {
  title: string;
  subcat: string;
  price: number;
}) {
  return (
    <div className="flex flex-col gap-6 lg:p-6 col-span-2">
      <div className="mt-12">
        <h2 className="text-2xl font-medium tracking-wider">{title}</h2>
        <p className="text-xl font-bold opacity-30 mt-1">{subcat}</p>
      </div>
      <div>
        <h4 className="text-base font-bold tracking-wider">Select Size</h4>
        <SizeList />
      </div>
      <Quantity />
      <AddCartButton price={price} />
    </div>
  );
}

export default ProductCart;
