import prisma from "@/utility/prismaClient";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

export async function GET(request: NextRequest) {
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
      quantity: 0,
    });
  }
}

type reqType = {
  product_id: string;
  quantity: number;
};

export async function POST(request: NextRequest) {
  const req: reqType = await request.json();
  const uid = v4();

  const setcooki = cookies();
  !setcooki.has("user_id") && setcooki.set("user_id", uid);

  const productExist = await prisma.cart.findFirst({
    where: { product_id: req.product_id },
  });
  if (productExist) {
    const update_product = await prisma.cart.update({
      where: {
        id: productExist?.id,
      },
      data: {
        quantity: productExist.quantity + req.quantity,
      },
    });
    return NextResponse.json({
      update_product,
    });
  } else {
    const res = await prisma.cart.create({
      data: {
        product_id: req.product_id,
        quantity: req.quantity,
        user_id: setcooki.get("user_id")?.value as string,
      },
    });
    return NextResponse.json({
      res,
    });
  }
}
