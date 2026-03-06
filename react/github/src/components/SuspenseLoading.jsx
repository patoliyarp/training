function SuspenseLoading() {
  return (
    <div className="flex dark:bg-[#0d1117] md:h-screen justify-center items-center">
      <div
        className="flex items-center justify-center animate-spin size-8 border-3 border-current border-t-transparent text-slate-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only text-white">Loading...</span>
      </div>
    </div>
  );
}
export default SuspenseLoading;
