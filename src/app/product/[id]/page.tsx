"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import { client } from "../../../../sanity/lib/client";
import ProductCart from "@/components/singleproduct/ProductCart";
import { PRODUCT } from "@/components/ProductsGrid";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { product_details, productCount } from "@/store/Atoms/useRecoil";

export default function Page({ params }: { params: { id: string } }) {
  const [products, productState] = useState<PRODUCT[]>([]);
  const quantity = useRecoilValue(productCount);

  const productsDetail = useSetRecoilState(product_details);
  const EVENTS_QUERY = `*[_type=="product" && _id == "${params.id}"]{_id, price, title, image, subcategory->{title}, category-> {title}}`;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data: PRODUCT[] = await client.fetch(EVENTS_QUERY, params, {
          next: { revalidate: 60 },
        });
        productsDetail({
          pruduct_id: data[0]._id,
          title: data[0].title,
          quantity: quantity,
        });
        productState(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, [EVENTS_QUERY]);

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
