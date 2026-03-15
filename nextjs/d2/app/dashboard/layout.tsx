import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — BlogApp",
  description:
    "Manage your blog posts. Create, edit, and delete your articles from the dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
