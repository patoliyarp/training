import { NextRequest, NextResponse } from "next/server";
import type { Post } from "@/types/type";

const mokeDB: Post[] = [
  {
    userId: 233,
    id: "233",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 234,
    id: "234",
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 334,
    id: "334",
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 123,
    id: "123",
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 125,
    id: "125",
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];


export async function GET(request: Request) {
  try {
    // const localUser = localStorage.getItem("userBlog") || [];

    return NextResponse.json({ Blog: mokeDB, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong while get data" },
      { status: 400 },
    );
  }
}

export async function Post(request: Request) {
  try {
    const data = await request.json();
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
    return NextResponse.json(
      { error: "something went wrong while get data" },
      { status: 400 },
    );
  }
}



// export async function Post(request: Request) {
//   try {
//     const data = await request.json();
//     // const id = Date.now().toString();
//     const newItem: Post = {
//       ...data,
//     };

//     mokeDB.push(newItem);

//     return NextResponse.json(
//       {
//         message: "Blog created successfully",
//       },
//       { status: 201 },
//     );
//   } catch (error) {
//     return NextResponse.json({ error: "invalid data" }, { status: 400 });
//   }
// }
