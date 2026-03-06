import { useUserContext } from "../context/useUserContext.js";
import { User, LogOut, Search } from "lucide-react";
import { useAuthContext } from "../context/AuthContext.js";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import { ProfileCard } from "./ProfileCard.jsx";
import { RepoCard } from "./RepoCard.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Notfound from "./Notfound.jsx";
import Loading from "./Loading.jsx";
import ProfileSidebar from "./ProfileSidebar.jsx";

export default function RepoList() {
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

  const [repoFilter, setRepoFilter] = useState("");
  const filteredRepo = useMemo(() => {
    if (!data) return [];
    if (!repoFilter) return data;
    return data.filter((repos) =>
      repos.name.toLowerCase().includes(repoFilter.toLowerCase()),
    );
  }, [data, repoFilter]);

  console.log(data && data[0].owner.avatar_url);
  //   const [filter, setFilter] = useState("overview");
  const { ResponseUser } = useUserContext();
  return (
    <>
      <div className="w-full  bg-white dark:bg-[#0d1117] dark:text-white text-black">
        <div className="  max-w-7xl min-h-screen mx-auto flex lg:flex-row flex-col p-5 gap-20 items-center lg:items-start">
          {/* profile section  */}

          {loading ? (
            <div className="mx-auto">
              <Loading />
            </div>
          ) : error ? (
            <Notfound />
          ) : (
            <>
              {data && data.length > 0 && (
                <ProfileSidebar
                  user={data && data[0].owner}
                  onLogout={handleLogout}
                />
              )}
              {/* <ProfileSidebar user={data[0]?.owner} onLogout={handleLogout} /> */}
              <div className="content   w-[80%] lg:w-[50%]">
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={repoFilter}
                    onChange={(e) => setRepoFilter(e.target.value)}
                    placeholder="Find a repository..."
                    className="border w-full focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 dark:text-white font-light"
                  />
                  <Search
                    size={16}
                    className="text-slate-600 absolute top-1.25 left-1.5 font-medium"
                  />
                </div>
                {filteredRepo.length > 0 ? (
                  filteredRepo &&
                  filteredRepo.map((obj) => (
                    <div key={obj.id}>
                      <RepoCard repo_name={obj.name} language={obj.language} />
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 text-center mt-5">
                    no repositories
                  </p>
                )}
              </div>
            </>
          )}

          {/* {data && (
            <ProfileSidebar
              user={data && data[0].owner}
              onLogout={handleLogout}
            />
          )} */}

          {/* content section  */}
          {/* <div className="content   w-[80%] lg:w-[50%]">
            {loading ? (
              <Loading />
            ) : error ? (
              <Notfound />
            ) : (
              <>
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={repoFilter}
                    onChange={(e) => setRepoFilter(e.target.value)}
                    placeholder="Find a repository..."
                    className="border w-full focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 dark:text-white font-light"
                  />
                  <Search
                    size={16}
                    className="text-slate-600 absolute top-1.25 left-1.5 font-medium"
                  />
                </div>
                {filteredRepo.length > 0 ? (
                  filteredRepo &&
                  filteredRepo.map((obj) => (
                    <div key={obj.id}>
                      <RepoCard repo_name={obj.name} language={obj.language} />
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 text-center mt-5">
                    no repositories
                  </p>
                )}
              </>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}
