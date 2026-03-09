import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import { User, FolderGit, Search, MapPin, Link as LinkIcon, Building2 } from "lucide-react";
import { useMemo, useState } from "react";
import Loading from "./Loading.jsx";
import { RepoCard } from "./RepoCard.jsx";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
    Accept: "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

export default function UserProfilePage() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");

  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useFetch(
    username ? `https://api.github.com/users/${username}` : null,
    options,
  );

  const {
    data: repos,
    loading: reposLoading,
    error: reposError,
  } = useFetch(
    username ? `https://api.github.com/users/${username}/repos?per_page=100&sort=updated` : null,
    options,
  );

  const [repoFilter, setRepoFilter] = useState("");
  const [activeTab, setActiveTab] = useState("profile");

  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    if (!repoFilter) return repos;
    return repos.filter((r) =>
      r.name.toLowerCase().includes(repoFilter.toLowerCase()),
    );
  }, [repos, repoFilter]);

  if (!username) {
    return (
      <div className="w-full min-h-screen bg-white dark:bg-[#0d1117] dark:text-white flex items-center justify-center">
        <p className="text-slate-500 text-lg">No username provided.</p>
      </div>
    );
  }

  if (userLoading) {
    return (
      <div className="w-full min-h-screen bg-white dark:bg-[#0d1117] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (userError || !user) {
    return (
      <div className="w-full min-h-screen bg-white dark:bg-[#0d1117] dark:text-white flex items-center justify-center">
        <p className="text-red-500 text-lg">User not found: {username}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-[#0d1117] dark:text-white text-black">
      <div className="max-w-7xl min-h-screen mx-auto flex lg:flex-row flex-col p-5 gap-20 items-start">

        {/* ── Left sidebar – styled like Profile.jsx ── */}
        <aside className="flex flex-col items-center lg:items-start lg:sticky lg:top-5 lg:w-[25%] w-full">
          {/* Avatar */}
          <div className="w-[60%] lg:w-full flex justify-center items-center rounded-full overflow-hidden">
            <img
              loading="lazy"
              src={user.avatar_url || "https://avatars.githubusercontent.com/u/36355?v=4"}
              alt={`${user.login} avatar`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & login */}
          <div className="mt-4 w-full pb-2 text-center lg:text-left">
            <h1 className="text-2xl font-semibold leading-tight">
              {user.name || user.login}
            </h1>
            <h2 className="text-xl font-light text-slate-500 dark:text-[#8b949e]">
              {user.login}
            </h2>
          </div>

          {/* Bio */}
          {user.bio && (
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 text-center lg:text-left">
              {user.bio}
            </p>
          )}

          {/* Follow button */}
          <button className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-1.5 text-sm font-medium text-black dark:text-white bg-transparent border border-[#d0d7de] dark:border-[#30363d] rounded-md hover:bg-slate-50 dark:hover:bg-[#212121] transition-all">
            Follow
          </button>

          {/* Followers / following */}
          <div className="flex items-center gap-4 dark:text-white mt-5 text-sm">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span className="font-semibold">{user.followers ?? 0}</span>
              <span className="text-slate-500">followers</span>
            </div>
            <span className="text-slate-500">·</span>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{user.following ?? 0}</span>
              <span className="text-slate-500">following</span>
            </div>
          </div>

          {/* Meta info */}
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 w-full">
            {user.company && (
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>{user.company}</span>
              </div>
            )}
            {user.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{user.location}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-2">
                <LinkIcon size={16} />
                <a
                  href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline truncate"
                >
                  {user.blog}
                </a>
              </div>
            )}
            {user.public_repos !== undefined && (
              <div className="flex items-center gap-2">
                <FolderGit size={16} />
                <span>{user.public_repos} public repositories</span>
              </div>
            )}
          </div>
        </aside>

        {/* ── Right content ── */}
        <div className="content w-full lg:flex-1">

          {/* ── Tab buttons ── */}
          <div className="flex gap-1 border-b border-slate-600 mb-6">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-[1px] ${
                activeTab === "profile"
                  ? "border-orange-500 text-black dark:text-white"
                  : "border-transparent text-slate-500 hover:text-black dark:hover:text-white hover:border-slate-400"
              }`}
            >
              <User size={16} />
              Profile
            </button>

            <button
              onClick={() => setActiveTab("repos")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-[1px] ${
                activeTab === "repos"
                  ? "border-orange-500 text-black dark:text-white"
                  : "border-transparent text-slate-500 hover:text-black dark:hover:text-white hover:border-slate-400"
              }`}
            >
              <FolderGit size={16} />
              Repos
              <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full px-2 py-0.5">
                {user.public_repos ?? 0}
              </span>
            </button>
          </div>

          {/* ── Profile Tab ── */}
          {activeTab === "profile" && (
            <div className="flex flex-col gap-4">
              {/* Profile overview card */}
              <div className="border border-slate-600 rounded-lg p-4 flex sm:flex-row flex-col gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={user.avatar_url || "https://avatars.githubusercontent.com/u/36355?v=4"}
                    alt="profile pic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="info flex flex-col gap-1">
                  <h3 className="dark:text-white text-sm sm:text-lg font-semibold">
                    {user.name || user.login}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    @{user.login}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mt-1">
                    {user.bio || "No bio available. This user hasn't written a bio yet."}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <User size={12} /> {user.followers ?? 0} followers
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} /> {user.following ?? 0} following
                    </span>
                    <span className="flex items-center gap-1">
                      <FolderGit size={12} /> {user.public_repos ?? 0} repos
                    </span>
                  </div>
                </div>
              </div>

              {/* About card */}
              <div className="border border-slate-600 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-3 dark:text-white">About</h4>
                <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                  {user.company && (
                    <div className="flex items-center gap-2">
                      <Building2 size={14} />
                      <span>{user.company}</span>
                    </div>
                  )}
                  {user.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{user.location}</span>
                    </div>
                  )}
                  {user.blog && (
                    <div className="flex items-center gap-2">
                      <LinkIcon size={14} />
                      <a
                        href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline truncate"
                      >
                        {user.blog}
                      </a>
                    </div>
                  )}
                  {!user.company && !user.location && !user.blog && (
                    <p className="italic">No additional info available.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── Repos Tab ── */}
          {activeTab === "repos" && (
            <>
              {/* Search filter */}
              <div className="relative mb-4">
                <input
                  type="text"
                  value={repoFilter}
                  onChange={(e) => setRepoFilter(e.target.value)}
                  placeholder="Find a repository..."
                  className="border w-full focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 py-1.5 dark:bg-[#0d1117] dark:text-white font-light"
                />
                <Search size={16} className="text-slate-600 absolute top-2.5 left-1.5" />
              </div>

              {/* Repos list */}
              {reposLoading ? (
                <div className="flex justify-center mt-10">
                  <Loading />
                </div>
              ) : reposError ? (
                <p className="text-red-500 text-center mt-5">Failed to load repositories.</p>
              ) : filteredRepos.length > 0 ? (
                filteredRepos.map((repo) => (
                  <div key={repo.id}>
                    <RepoCard repo_name={repo.name} language={repo.language} />
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-center mt-5">No repositories found.</p>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
