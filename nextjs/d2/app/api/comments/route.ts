import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const comments = {
    postId: "1",
    Comments: [
      {
        text: "this is very informative",
      },
    ],
  };
  return NextResponse.json({ comments });
}
