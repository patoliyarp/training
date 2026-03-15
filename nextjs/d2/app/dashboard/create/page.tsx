"use client";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import PostForm from "@/app/components/PostForm";
import Link from "next/link";
import type { Post } from "@/types/type";

export default function CreatePostPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = (values: { title: string; body: string }) => {
    if (!user?.email) return;

    const storageKey = `blog_posts_${user.email}`;
    const existing: Post[] = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

    const newPost: Post = {
      id: Date.now().toString(),
      userId: 0,
      title: values.title,
      body: values.body,
      author: user.email,
      isUserPost: true,
    };

    existing.unshift(newPost);
    localStorage.setItem(storageKey, JSON.stringify(existing));
    router.push("/dashboard");
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

        <h1 className="text-3xl font-bold text-white mb-8">
          Create New Post
        </h1>

        <div className="bg-secondary border border-primary-200 rounded-xl p-8">
          <PostForm onSubmit={handleSubmit} submitLabel="Publish Post" />
        </div>
      </main>
    </div>
  );
}
