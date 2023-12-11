import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const res = await prisma?.todo.findMany();
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json([]);
};
