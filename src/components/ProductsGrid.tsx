// "use client";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import { SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { Image as Iimage, QueryParams } from "sanity";

export type PRODUCT = {
  _id: string;
  price: number;
  image: Iimage;
  title: string;
  subcategory: {
    title: string;
  };
  category: {
    title: string;
  };
};

const EVENTS_QUERY = `*[_type=="product"]{_id, price, title, image, subcategory->{title}, category-> {title}}`;

async function ProductsGrid({
  productCategory,
  params = {},
}: {
  productCategory: string;
  params?: QueryParams;
}) {
  let products = await client.fetch(EVENTS_QUERY, params, {
    next: { revalidate: 60 },
  });
  if (productCategory !== "all") {
    products = products.filter(
      (product: SanityDocument) =>
        product.category.title == `${productCategory}`
    );
  }
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 place-items-center lg:grid-cols-4 gap-10 justify-between">
      {products?.map((product: PRODUCT) => (
        <Link
          href={`product/${product._id}`}
          key={product._id}
          className="w-[250px] flex flex-col justify-between gap-x-2"
        >
          <div>
            <div className="overflow-hidden">
              <Image
                src={urlForImage(product.image)}
                width={250}
                height={270}
                alt=""
                className="hover:scale-110 w-full transition-all duration-500"
              />
            </div>
            <p className="text-lg font-semibold mt-3 leading-5 tracking-wide">
              {product.title}
            </p>
            <p className="font-semibold text-base text-[#888]">
              {product.subcategory.title}
            </p>
          </div>
          <p className="font-bold text-lg">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductsGrid;
