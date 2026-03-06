import { User, LogOut } from "lucide-react";
import { memo } from "react";

const ProfileSidebar = memo(function ProfileSidebar({ user, onLogout }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[60%] flex justify-center items-center rounded-full overflow-hidden">
        <img
          loading="lazy"
          src={
            user.avatar_url
              ? user.avatar_url
              : "https://avatars.githubusercontent.com/u/36355?v=4"
          }
          alt="profile pic"
        />
      </div>
      <div className="mt-4 w-[80%] pb-2 text-center lg:text-left">
        <h1 className="text-2xl font-semibold leading-tight">
          {user.name || "Display Name"}
        </h1>
        <h2 className="text-xl font-light text-slate-500 dark:text-[#8b949e]">
          {user.login || "username"}
        </h2>
      </div>

      <button className="flex items-center justify-center gap-2 w-[80%] mt-2 px-4 py-1.5 text-sm font-medium text-black dark:text-white bg-transparent border border-[#d0d7de] dark:border-[#30363d] rounded-md hover:bg-red-50 dark:hover:bg-[#212121] dark:hover:border-[#212121] transition-all group">
        follow
      </button>

      <button
        onClick={onLogout}
        className="flex items-center justify-center gap-2 w-[80%] mt-2 px-4 py-1.5 text-sm font-medium text-red-600 dark:text-[#f85149] bg-transparent border border-[#d0d7de] dark:border-[#30363d] rounded-md hover:bg-red-50 dark:hover:bg-[#b6232426] dark:hover:border-[#f85149] transition-all group"
      >
        <LogOut
          size={16}
          className="group-hover:scale-110 transition-transform"
        />
        <span>Sign out</span>
      </button>
      <div className="flex items-start  gap-12 dark:text-white mt-5">
        <div className="flex justify-center items-center">
          <User size={18} />{" "}
          {user.followers ? user.followers : 0}
          <span className="text-slate-500">follower</span>
        </div>
        <div className="flex justify-center items-center">
          <User size={18} />{" "}
          {user.following ? user.following : 0}
          <span className="text-slate-500">following</span>
        </div>
      </div>
    </div>
  );
});

export default ProfileSidebar;
