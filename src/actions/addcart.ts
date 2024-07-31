"use server";
import prisma from "@/utility/prismaClient";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { v4 } from "uuid";

export async function addcart(product_id: string, quantity: number) {
  const uid = v4();
  const setcooki = cookies();
  !setcooki.has("user_id") && setcooki.set("user_id", uid);
  const user_id = setcooki.get("user_id")?.value as string;

  const productExist = await prisma.cart.findFirst({
    where: { product_id: product_id },
  });
  if (productExist) {
    const update_product = await prisma.cart.update({
      where: {
        id: productExist?.id,
      },
      data: {
        quantity: productExist.quantity + quantity,
      },
    });
    revalidatePath("/");
    return update_product;
  } else {
    const response = await prisma.cart.create({
      data: {
        product_id: product_id,
        quantity: quantity,
        user_id: user_id,
      },
    });
    revalidatePath("/");
    return response;
  }
}
