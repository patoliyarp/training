"use client";
import { useAuth } from "@/context/AuthProvider";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostForm from "@/app/components/PostForm";
import Link from "next/link";
import type { Post } from "@/types/type";

export default function EditPostPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    const storageKey = `blog_posts_${user.email}`;
    const posts: Post[] = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );
    const found = posts.find((p) => p.id === postId);
    setPost(found || null);
    setLoading(false);
  }, [user, postId]);

  const handleSubmit = (values: { title: string; body: string }) => {
    if (!user?.email || !post) return;

    const storageKey = `blog_posts_${user.email}`;
    const posts: Post[] = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

    const updated = posts.map((p) =>
      p.id === postId ? { ...p, title: values.title, body: values.body } : p
    );

    localStorage.setItem(storageKey, JSON.stringify(updated));
    router.push("/dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-slate-400">Post not found.</p>
        <Link
          href="/dashboard"
          className="text-btn hover:underline text-sm"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-200 font-sans">
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <Link
          href="/dashboard"
          className="text-primary-text text-sm hover:text-white mb-6 inline-block"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Edit Post</h1>

        <div className="bg-secondary border border-primary-200 rounded-xl p-8">
          <PostForm
            initialValues={{ title: post.title, body: post.body }}
            onSubmit={handleSubmit}
            submitLabel="Save Changes"
          />
        </div>
      </main>
    </div>
  );
}
