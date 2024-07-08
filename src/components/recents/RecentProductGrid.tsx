import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityDocument } from "next-sanity";
import { client } from "../../../sanity/lib/client";

const EVENTS_QUERY = `*[_type=="product"][0..3]{_id, price, title, image, subcategory->{title}, category-> {title}}`;

async function RecentProductGrid({
  productCategory,
}: {
  productCategory: string;
}) {
  let products = await client.fetch(EVENTS_QUERY);
  products = products.filter(
    (product: SanityDocument) => product.category.title == `${productCategory}`
  );
  return (
    <div className="grid sm:grid-cols-3 gap-8 place-items-center mt-12 gap-x-6">
      {products.map((product: SanityDocument) => (
        <div
          key={product._id}
          className="flex flex-col justify-between  self-center hover:scale-105 duration-500 cursor-pointer"
        >
          <div>
            <div className="flex items-center">
              <Image
                src={urlForImage(product.image)}
                width={380}
                height={400}
                alt=""
                className=""
              />
            </div>
            <p className="text-lg font-semibold mt-3 leading-5 tracking-wide">
              {product.title}
            </p>
            {/* <p className="font-semibold text-base text-[#888]">
              {product.subcategory.title}
            </p> */}
          </div>
          <p className="font-semibold text-lg mt-3">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default RecentProductGrid;
