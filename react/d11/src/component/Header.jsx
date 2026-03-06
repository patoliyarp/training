import { Menu, Github, Search, Moon, Sun } from "lucide-react";
import Input from "./Input.jsx";
// import { useUserContext } from "../context/useUserContext.js";
import { Link } from "react-router-dom";
// import { useThemeContext } from "../context/ThemeContext.js";
// import { useAuthContext } from "../context/AuthContext.js";

export default function Header() {
  return (
    <>
      <header className="h-16  dark:bg-primary border-b border-primary-200 shadow-sm shadow-primary-200  p-4">
        {/* logo section  */}
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <h1 className="hidden sm:block text-2x dark:text-white text-[14px] font-medium ">
                Dashboard
              </h1>
            </Link>
          </div>

          {/* input and profile section  */}
          <div className="flex justify-center items-center gap-1 sm:gap-6 mr-2.5">
            {/* input section  */}
            <Input />

            {/* Profile image section  */}
            {/* <div className="div">
              {!isLogin ? (
                <Link to={"/login"}>
                  <button className="inline-flex items-center justify-center px-3  sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-btn border border-transparent rounded-md shadow-sm focus:outline-none transition-colors duration-200">
                    Sign in
                  </button>
                </Link>
              ) : (
                <div className="h-8 rounded-full w-8 overflow-hidden">
                  <Link to={"/profile"}>
                    <img
                      src={
                        ResponseUser.avatar_url
                          ? ResponseUser.avatar_url
                          : "https://avatars.githubusercontent.com/u/255820632?v=4&size=64"
                      }
                      alt="profile pic"
                      //   height=""
                      className="h-full w-full "
                    />
                  </Link>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
