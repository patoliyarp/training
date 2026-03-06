import { User, FolderGit } from "lucide-react";
export function ReposList() {
  return (
    <>
      <div className="h-screen dark:bg-[#0d1117]">
        <div className="max-w-2xl   mx-auto">
          <div className="border-b border-slate-600  p-4 flex gap-4">
            <div className="info">
              <div className="flex items-center gap-2">
                <h3 className="dark:text-white text-sm sm:text-lg font-semibold">
                  {"repo name"}
                </h3>
                <div className="dark:text-slate-500 border rounded-2xl px-5 h-5 text-xs flex  justify-center items-center  text-center">
                  public
                </div>
              </div>

              <div className="flex  mt-5">
                <div className="dark:text-slate-300">language</div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
