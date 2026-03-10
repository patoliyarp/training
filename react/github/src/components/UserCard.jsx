import { FolderGit, User } from "lucide-react";
import { Link } from "react-router-dom";
// import React from "react";
import { memo } from "react";

export const UserCard = memo(({ avatar, username }) => {
  return (
    <Link to={`/user-profile?username=${username}`}>
      <div className="border border-slate-600 rounded-lg p-4 flex gap-4 mt-3">
        <div className="w-10 h-10 rounded-full overflow-hidden ">
          <img src={avatar} alt="profile pic" />
        </div>
        <div className="info">
          <h3 className="dark:text-white text-sm sm:text-lg font-semibold">
            {username}
          </h3>
        </div>
      </div>
    </Link>
  );
});
