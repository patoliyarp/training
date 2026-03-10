import { memo } from "react";
const Loading = memo(function Loading() {
  return (
    <div className="flex min-h-screen bg-primary justify-center items-center">
      <div
        className="flex items-center justify-center animate-spin size-8 border-3 border-current border-t-transparent text-slate-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only text-white">Loading...</span>
      </div>
    </div>
  );
});
Loading.displayName = "Loading";
export default Loading;
