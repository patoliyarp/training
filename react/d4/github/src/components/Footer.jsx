import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Twitch,
  Github,
} from "lucide-react";
export function Footer() {
  return (
    <>
      <footer className="bg-[#212830]  px-10 ">
        <div className="max-w-7xl mx-auto py-5 gap-5 flex flex-col  sm:flex-row justify-between items-center">
          <div className="copy">
            <p className="text-xs font-normal text-slate-300">
              © 2026 GitHub, Inc. Terms Privacy (Updated 02/2024)02/2024 Sitemap
              What is Git? Manage cookies Do not <br /> share my personal
              information
            </p>
          </div>
          <div className="text-[#9198a1] flex gap-6">
            <Facebook size={22} className="text-2xl" />
            <Instagram size={22} />
            <Youtube size={22} />
            <Twitch size={22} />
            <Twitter size={22} />
            <Github size={22} />
          </div>
        </div>
      </footer>
    </>
  );
}
