import { NextResponse } from "next/server";
import { mokeDB } from "./modeDB";

export async function GET() {
  try {
    return NextResponse.json({ Blog: mokeDB, success: true }, { status: 200 });
  } catch (error) {
    console.log("error while get blogs:", error);
    return NextResponse.json(
      { error: "something went wrong while get data" },
      { status: 400 },
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log("request :>> ", request);
    const data = await request.json();
    // console.log(',);
    console.log("this is request body ", data);
    const newItem = {
      ...data,
    };
    mokeDB.push(newItem);
    return NextResponse.json(
      {
        message: "Blog created successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("error while post blog", error);
    return NextResponse.json(
      { error: "something went wrong while get data" },
      { status: 400 },
    );
  }
}

// export async function PUT(request: Request) {
//   try {
//     const data = await request.json();

//     const blog = mokeDB.find((b) => b.id == data.id);
//   } catch (error) {}
// }
