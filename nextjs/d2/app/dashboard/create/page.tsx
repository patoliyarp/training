"use client";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import PostForm from "@/app/components/PostForm";
import Link from "next/link";
import type { Post } from "@/types/type";

export default function CreatePostPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (values: { title: string; body: string }) => {
    if (!user?.email) return;

    try {
      const id = Date.now().toString();
      const newPost: Post = {
        id,
        userId: Number(id),
        title: values.title,
        body: values.body,
        author: user.email,
        isUserPost: true,
      };

      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans">
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <Link
          href="/dashboard"
          className="text-primary-text text-sm hover:text-white mb-6 inline-block"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Create New Post</h1>

        <div className="bg-secondary border border-primary-200 rounded-xl p-8">
          <PostForm onSubmit={handleSubmit} submitLabel="Publish Post" />
        </div>
      </main>
    </div>
  );
}
