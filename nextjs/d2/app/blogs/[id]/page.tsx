import CommentSection from "@/app/components/CommentSection";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function PostDetail({ params }: PageProps) {
  const { id } = await params;

  let post;

  if (Number(id) <= 100) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
    if (!res.ok) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400">Blog post not found.</p>
        </div>
      );
    }
    post = await res.json();
  } else {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/blog/${id}`, { cache: "no-store" });
    if (!res.ok) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400">Blog post not found.</p>
        </div>
      );
    }
    const data = await res.json();
    post = data.Blog;
  }

  return (
    <div>
      <div className="bg-primary min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* back link */}
          <Link
            href="/blogs"
            className="text-primary-text text-sm hover:text-white mb-6 inline-block"
          >
            ← Back to blogs
          </Link>

          {/* title */}
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>

          {/* divider */}
          <hr className="border-primary-100 mb-8" />

          {/* blog content */}
          <div className="text-gray-300 text-base leading-7 space-y-5">
            {post.body}
          </div>

          {/* bottom divider */}
          <hr className="border-primary-100 mt-10 mb-6" />

          {/* comment section  */}
          <CommentSection />

          <hr className="border-primary-100 mt-10 mb-6" />

          {/* share row */}
          <div className="flex items-center justify-between">
            <p className="text-primary-text text-sm">Thanks for reading!</p>
            <button className="text-sm text-black bg-btn px-4 py-2 rounded-xl hover:opacity-90">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
