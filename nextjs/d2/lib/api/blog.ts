import type { Post } from "../../types/type.js";
import { mokeDB } from "@/app/api/blog/modeDB.js";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getBlog(): Promise<Post[]> {
  //   try {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) {
    throw new Error("failed to fetch posts");
  }

  return res.json();
}

export async function getBlogById(id: string): Promise<Post> {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    if (!res.ok) {
      throw new Error("failed to fetch posts");
    }
    return res.json();
  } catch (error) {
    throw new Error("failed to fetch posts");
  }
}
