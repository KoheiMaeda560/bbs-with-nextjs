import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { bbsid: string } }
) {
  const bbsid = params.bbsid;
  const BBSDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsid),
    },
  });

  return NextResponse.json(BBSDetailData);
}
