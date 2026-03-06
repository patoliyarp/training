import { useUserContext } from "../context/useUserContext.js";
import { User, LogOut } from "lucide-react";
import { useAuthContext } from "../context/AuthContext.js";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { ProfileCard } from "./ProfileCard.jsx";
import { RepoCard } from "./RepoCard.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Notfound from "./Notfound.jsx";
import Loading from "./Loading.jsx";

export default function ProfileLayout() {
  const { setIsLogin } = useAuthContext();
  const navigate = useNavigate();
  const { username } = useParams();
  const handleLogout = useCallback(
    function handleLogout() {
      navigate("/");
      setIsLogin(false);
    },
    [navigate, setIsLogin],
  );

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };
  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${username}/repos`,
    options,
  );

  console.log(data);
  //   const [filter, setFilter] = useState("overview");
  const { ResponseUser } = useUserContext();
  return (
    <>
      <div className="w-full  bg-white dark:bg-[#0d1117] dark:text-white text-black">
        <div className="  max-w-7xl min-h-screen mx-auto flex lg:flex-row flex-col p-5 gap-20 items-center lg:items-start">
          {/* profile section  */}
          <div className="flex flex-col items-center">
            {/* image section  */}
            <div className="w-[60%] flex justify-center items-center rounded-full overflow-hidden">
              <img
                loading="lazy"
                src={
                  ResponseUser.avatar_url
                    ? ResponseUser.avatar_url
                    : "https://avatars.githubusercontent.com/u/36355?v=4"
                }
                alt="profile pic"
              />
            </div>
            <div className="mt-4 w-[80%] pb-2 text-center lg:text-left">
              <h1 className="text-2xl font-semibold leading-tight">
                {ResponseUser.name || "Display Name"}
              </h1>
              <h2 className="text-xl font-light text-slate-500 dark:text-[#8b949e]">
                {ResponseUser.login || "username"}
              </h2>
            </div>

            <button className="flex items-center justify-center gap-2 w-[80%] mt-2 px-4 py-1.5 text-sm font-medium text-black dark:text-white bg-transparent border border-[#d0d7de] dark:border-[#30363d] rounded-md hover:bg-red-50 dark:hover:bg-[#212121] dark:hover:border-[#212121] transition-all group">
              follow
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 w-[80%] mt-2 px-4 py-1.5 text-sm font-medium text-red-600 dark:text-[#f85149] bg-transparent border border-[#d0d7de] dark:border-[#30363d] rounded-md hover:bg-red-50 dark:hover:bg-[#b6232426] dark:hover:border-[#f85149] transition-all group"
            >
              <LogOut
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Sign out</span>
            </button>
            {/* following and follower section */}
            <div className="flex items-start  gap-12 dark:text-white mt-5">
              <div className="flex justify-center items-center">
                <User size={18} />{" "}
                {ResponseUser.followers ? ResponseUser.followers : 0}
                <span className="text-slate-500">follower</span>
              </div>
              <div className="flex justify-center items-center">
                <User size={18} />{" "}
                {ResponseUser.following ? ResponseUser.followers : 0}
                <span className="text-slate-500">following</span>
              </div>
            </div>
          </div>

          {/* content section  */}
          <div className="content   w-[80%] lg:w-[50%]">
            {loading ? (
              <Loading />
            ) : (
              data &&
              data.map((obj) => (
                <RepoCard
                  key={obj.id}
                  repo_name={obj.name}
                  language={obj.language}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
