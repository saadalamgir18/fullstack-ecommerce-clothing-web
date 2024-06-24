import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

export default async function Home() {
  return <div>Hello Nextjs</div>;
}
