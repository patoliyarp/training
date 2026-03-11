import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen  text-slate-200 font-sans">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32">
        <div className="max-w-3xl">
          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-[1.1]">
            Welcome to web, <br />
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            hic? Pariatur fugit dolore placeat quae quod eveniet, expedita
            ratione vitae aliquam, ipsam, sequi doloribus ipsa odio aliquid!
            Incidunt, velit porro.
          </p>
        </div>
      </main>
    </div>
  );
}
