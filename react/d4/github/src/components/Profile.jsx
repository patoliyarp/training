import { useUserContext } from "../context/useUserContext.js";
import { User } from "lucide-react";
export function Profile() {
  const { ResponseUser } = useUserContext();
  return (
    <>
    <div className="w-full  bg-white dark:bg-[#0d1117] dark:text-white text-black">

    
      <div className="  max-w-7xl lg:h-screen mx-auto flex lg:flex-row flex-col p-5 gap-20 items-center lg:items-start">
        <div className="flex flex-col items-center">
          <div className="w-[60%] flex justify-center items-center rounded-full overflow-hidden">
            <img
              src={
                ResponseUser.avatar_url
                  ? ResponseUser.avatar_url
                  : "https://avatars.githubusercontent.com/u/36355?v=4"
              }
              alt="profile pic"
            />
          </div>
          <h1 className="text-center p-4 text-xl dark:text-white font-normal">
            {ResponseUser.login ? ResponseUser.login : "username"}
          </h1>
          <button className="text-white bg-slate-800 w-[80%] p-2 rounded-lg ring-slate-600">
            follow
          </button>
          <div className="flex justify-center items-center gap-12 dark:text-white mt-5">
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
        <div className="content w-[70%] lg:w-[50%]">
          <div className="border  border-slate-600 rounded-lg p-4 flex gap-4">
            <div className="w-[80%] md:w-[40%] flex  justify-center items-center ">
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
                harum temporibus. Corporis modi ut magni ullam aspernatur sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
