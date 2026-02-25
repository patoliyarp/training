import { FolderGit, User } from "lucide-react";
import { Link } from "react-router-dom";

export function UserCard({
  avatar,
  username,
  followers,
  following,
  public_repos,
}) {
  return (
    <Link to={`profile`}>
      <div className="border border-slate-600 rounded-lg p-4 flex gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden ">
          <img src={avatar} alt="profile pic" />
        </div>
        <div className="info">
          <h3 className="dark:text-white text-sm sm:text-lg font-semibold">
            {username}
          </h3>

          <div className="flex justify-center items-center gap-12 dark:text-white mt-5">
            <div className="flex justify-center items-center">
              <User size={18} /> {followers}{" "}
              <span className="dark:text-slate-500">follower</span>
            </div>
            <div className="flex justify-center items-center">
              <User size={18} /> {following}{" "}
              <span className="dark:text-slate-500">following</span>
            </div>
          </div>
          <div className="mt-6 dark:text-white flex items-center gap-2">
            <FolderGit size={18} /> {public_repos}
            <span className="dark:text-slate-400">public repos</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
