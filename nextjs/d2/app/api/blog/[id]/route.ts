import { Post } from "@/types/type";
import { mokeDB, setMokeDB } from "../modeDB";
import { NextResponse, NextRequest } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const post:Post[] = mokeDB.find((blog) => blog.userId == Number(id));

    // mokeDB = [...post];
    setMokeDB(post);
    console.log("post", post);
    if (!post) {
      return NextResponse.json(
        { error: "something went wrong while get data by id" },
        { status: 400 },
      );
    }
    return NextResponse.json({ Blog: post, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong while get data by id" },
      { status: 400 },
    );
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const post = mokeDB.filter((blog) => blog.userId != Number(id));
    console.log("post", post);
    if (!post) {
      return NextResponse.json(
        { error: "something went wrong while get data by id" },
        { status: 400 },
      );
    }
    return NextResponse.json({ Blog: post, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong while delete post" },
      { status: 400 },
    );
  }
}
