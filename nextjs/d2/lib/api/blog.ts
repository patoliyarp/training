import type { Post } from "../../types/type";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function getBlog(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/api/blog`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  return data.Blog;
}

export async function getBlogById(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/api/blog/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await res.json();
  return data.Blog;
}
