import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — BlogApp",
  description:
    "Learn more about BlogApp — a platform for sharing ideas, stories, and insights with the world.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
