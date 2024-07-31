import prisma from "@/utility/prismaClient";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const setcooki = cookies();
  const res = await prisma.cart.findMany({
    where: {
      user_id: setcooki.get("user_id")?.value as string,
    },
  });
  if (res) {
    const quantity = res.reduce((acc, product) => product.quantity + acc, 0);
    return NextResponse.json({
      quantity: quantity,
    });
  } else {
    return NextResponse.json({
      quantity: 10,
    });
  }
}
