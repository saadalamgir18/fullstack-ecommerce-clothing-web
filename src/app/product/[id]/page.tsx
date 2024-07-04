// "use client";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import { SanityDocument } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
// import Link from "next/link";
import ProductCart from "@/components/singleproduct/ProductCart";
// import { productsAtomFamily } from "@/store/Atoms/useRecoil";
// import { useRecoilValue } from "recoil";

export default async function Page({ params }: { params: { id: string } }) {
  // const id = params.id;
  const EVENTS_QUERY = `*[_type=="product" && _id == "${params.id}"]{_id, price, title, image, subcategory->{title}, category-> {title}}`;
  let products = await client.fetch(EVENTS_QUERY);
  // const products = useRecoilValue(
  //   productsAtomFamily({ productCategory: "", id })
  // );
  console.log(products, "----------------------------------------");
  return (
    <div className="mt-24">
      {products.map((product: SanityDocument) => (
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
