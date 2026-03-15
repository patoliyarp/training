import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts — BlogApp",
  description:
    "Browse all blog posts on BlogApp. Read the latest articles, insights, and stories from our community of writers.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
