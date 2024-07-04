import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import { client } from "../../../../sanity/lib/client";
import ProductCart from "@/components/singleproduct/ProductCart";
import { PRODUCT } from "@/components/ProductsGrid";

export default async function Page({ params }: { params: { id: string } }) {
  const EVENTS_QUERY = `*[_type=="product" && _id == "${params.id}"]{_id, price, title, image, subcategory->{title}, category-> {title}}`;
  let products = await client.fetch(EVENTS_QUERY);

  return (
    <div className="mt-24">
      {products.map((product: PRODUCT) => (
        <div
          key={product._id}
          className="mt-24 grid grid-cols-[7%_1.5fr_1fr] gap-x-6"
        >
          <div>
            <Image
              src={urlForImage(product.image)}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="">
            <Image
              src={urlForImage(product.image)}
              width={1000}
              height={100}
              alt=""
              className=" h-[100%]"
            />
          </div>

          <ProductCart
            title={product.title}
            subcat={product.subcategory.title}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
}
