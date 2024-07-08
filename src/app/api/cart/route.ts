import prisma from "@/utility/prismaClient";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
export async function GET(request: Request) {
  const res = prisma.cart.findFirst({});
  return NextResponse.json({
    message: "prisma is working",
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const uid = v4();

  const setcooki = cookies();
  !setcooki.has("user_id") && setcooki.set("user_id", uid);

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
