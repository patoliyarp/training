import { useUserContext } from "../context/useUserContext.js";
import { User, LogOut } from "lucide-react";
import { useAuthContext } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function Profile() {
  const { setIsLogin } = useAuthContext();
  const navigate = useNavigate();

  // const handleLogout = useCallback(() => {
  //   navigate("/");
  //   setIsLogin(false);
  // }, [navigate, setIsLogin]);

  const handleLogout = useCallback(
    function handleLogout() {
      navigate("/");
      setIsLogin(false);
    },
    [navigate, setIsLogin],
  );

  // function handleLogout() {
  //   navigate("/");
  //   setIsLogin(false);
  // }

  const { ResponseUser } = useUserContext();
  return (
    <>
      <div className="w-full  bg-white dark:bg-[#0d1117] dark:text-white text-black">
        <div className="  max-w-7xl lg:h-screen mx-auto flex lg:flex-row flex-col p-5 gap-20 items-center lg:items-start">
          <div className="flex flex-col items-center">
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
            <div className="border flex sm:flex-row flex-col border-slate-600 rounded-lg p-4  gap-4">
              <div className="w-[30%] sm:w-[80%] md:w-[40%] flex  justify-center items-center ">
                <div className="flex rounded-full overflow-hidden">
                  <img
                    src={
                      ResponseUser.avatar_url
                        ? ResponseUser.avatar_url
                        : "https://avatars.githubusercontent.com/u/36355?v=4"
                    }
                    alt="profile pic"
                  />
                </div>
              </div>
              <div className="info">
                <h3 className="dark:text-white text-sm sm:text-lg font-semibold">
                  {ResponseUser.login ? ResponseUser.login : "username"}
                </h3>
                <p className="text-slate-400 line-clamp-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum asperiores deserunt soluta, quaerat, assumenda
                  commodi aperiam quia libero, dolorum necessitatibus eveniet
                  harum temporibus. Corporis modi ut magni ullam aspernatur
                  sunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
