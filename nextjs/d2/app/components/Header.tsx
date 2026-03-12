import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-white">
            Logo
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <Link href={"/"} className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href={"/blogs"} className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link
              href={"/about"}
              className="hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
