"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <>
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-white">
            <Link href="/">BlogApp</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <Link href={"/"} className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href={"/blogs"}
              className="hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href={"/about"}
              className="hover:text-white transition-colors"
            >
              About
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  href={"/dashboard"}
                  className="hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-black bg-btn px-4 py-1.5 rounded-xl text-sm hover:opacity-90 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href={"/login"}
                className="text-black bg-btn px-4 py-1.5 rounded-xl text-sm hover:opacity-90 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
