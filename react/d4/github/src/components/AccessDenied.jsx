export default function AccessDenied() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans antialiased p-6">
  
  <h1 className="text-9xl font-extrabold text-[#30363d] tracking-tighter mb-4 select-none">
    403
  </h1>

  
  <div className="mb-8 opacity-90">
    <svg className="w-48 h-48 fill-[#30363d]" viewBox="0 0 24 24">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.292 24 17.81 24 12.5 24 5.87 18.627.5 12 .5z" />
    </svg>
  </div>

  
  <div className="text-center space-y-2">
    <h2 className="text-2xl font-semibold text-white">Forbidden</h2>
    <p className="text-lg text-[#8b949e] max-w-md mx-auto">
      You don't have permission to access this resource. Check your credentials or contact the administrator.
    </p>
  </div>

  
  <div className="mt-10">
    <a href="/" className="px-6 py-2.5 text-sm font-medium text-white bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] hover:border-[#8b949e] transition-all duration-200">
      Back to home
    </a>
  </div>
</div>

    </>
  );
}
