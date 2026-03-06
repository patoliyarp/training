import { FolderGit, Search } from "lucide-react";
import { UserCard } from "./UserCard";
import { useUserContext } from "../context/useUserContext.js";
import { SearchBanner } from "./Search.jsx";
import { UserNotfound } from "./UserNotFound.jsx";
import Loading from "./Loading.jsx";
import { useState } from "react";

export function Main() {
  const { ResponseUser, error, loading, searchBanner } = useUserContext();

  const [val, setVal] = useState("");
  return (
    <>
      {/* main hero section  */}
      <div className="flex bg-white dark:bg-[#0d1117] dark:text-white text-black ">
        {/* left side section  */}
        <aside className="hidden bg-white dark:bg-[#0d1117] dark:text-white text-black md:block lg:w-[25%] p-6 h-screen shadow-sm shadow-black ">
          <div className="flex justify-between items-center ">
            <h1 className="font-medium">Top repositories</h1>
            <button className="bg-green-700 rounded-md h-8 flex gap-1 justify-center items-center px-2">
              <FolderGit size={15} />
              <span className="text-xs">new</span>
            </button>
          </div>
          <div className="relative mt-6">
            <input
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="border w-50 lg:w-50 xl:w-65 focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 dark:text-white font-light "
            />
            <Search
              size={16}
              className="dark:text-slate-600 absolute top-1.25 left-1.5 font-medium"
            />
          </div>
          <div className="mt-5">
            <ul>
              <li className="flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-full overflow-hidden">
                  <img
                    src="https://avatars.githubusercontent.com/u/255820632?v=4&size=64"
                    alt="profile pic"
                  />
                </div>
                <span className="text-sm"> github user/this is repo</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* main hero section  */}
        <main className="p-5 sm:p-10 w-full flex bg-white dark:bg-[#0d1117] dark:text-white text-black shadow-sm shadow-slate-700 justify-between h-[80vh] md:h-auto">
          {/* home section  */}
          <div className=" w-full lg:w-[73%]">
            <h1 className=" dark:text-white font-bold text-xl sm:text-2xl">
              Home
            </h1>

            {/* display container  */}
            <div className="mt-9">
              {searchBanner ? (
                <SearchBanner />
              ) : loading ? (
                <Loading />
              ) : error ? (
                <UserNotfound />
              ) : (
                <UserCard
                  avatar={ResponseUser.avatar_url}
                  username={ResponseUser.login}
                  followers={ResponseUser.followers}
                  following={ResponseUser.following}
                  public_repos={ResponseUser.public_repos}
                />
              )}
              {/* error ? (
                <UserNotfound />
              ) : */}
            </div>
          </div>

          {/* right side section of hero  */}
          <aside className="hidden lg:block border border-slate-700 p-5 rounded-lg dark:text-white w-[20%]">
            Radom things
          </aside>
        </main>
      </div>
    </>
  );
}
