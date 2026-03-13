import { NextResponse } from "next/server";
import type { Comment } from "@/types/type";

export async function GET(request: Request) {
  const comments: Comment[] = [
    {
      id: 1,
      email: "wick@gmail.com",
      name: "mr.wick",
      body: "very use full blog i love it",
    },
    {
      id: 2,
      email: "wonderfull@gmail.com",
      name: "mr.wonder",
      body: "keep posting man we support you ",
    },
  ];
  return NextResponse.json({ comments });
}
