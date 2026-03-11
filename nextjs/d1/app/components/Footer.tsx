export default function Footer() {
  return (
    <>
      <footer className="border-t border-slate-800 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SimpleUI. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <a className="hover:text-white transition-colors">Privacy Policy</a>
            <a className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
