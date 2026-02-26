import { Menu, Github, Search, Moon, Sun } from "lucide-react";
import { useMemo, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/useUserContext.js";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext.js";
import { useAuthContext } from "../context/AuthContext.js";
function debounce(fn, delay) {
  let timer;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}
export function Header() {
  const [SearchVal, setSearchVal] = useState("");
  const {
    ResponseUser,
    setResponseUser,
    setError,
    setSearchBanner,
    setLoading,
  } = useUserContext();

  async function fetchData(searchQuery) {
    try {
      setSearchBanner(false);
      setLoading(true);
      if (searchQuery == "") {
        setSearchBanner(true);
        setResponseUser([]);

        return;
      }

      const { data } = await axios.get(
        `https://api.github.com/users/${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
            Accept: "application/vnd.github.v3+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        },
      );

      setSearchBanner(false);
      setResponseUser(data);

      setLoading(false);
      setError(false);
      console.log("data :>> ", data);

      console.log("ResponseUser :>> ", ResponseUser);
    } catch (error) {
      console.log("Error while fetch userdata", error.status);
      setLoading(false);
      if (error.status == 404) {
        setError(true);
        setResponseUser([]);
      }
    }
  }

  // function handleChange(e) {
  //   const val = e.target.value;
  //   setSearchVal(val);
  //   fetchData(val);
  // }

  function handleChange(e) {
    const val = e.target.value;
    setSearchVal(val);
    // fetchData(val);
    debounceChange(val);
  }

  // eslint-disable-next-line react-hooks/preserve-manual-memoization, react-hooks/exhaustive-deps
  const debounceChange = useMemo(() => debounce(fetchData, 500), []);
  
  // const handleSearch = debounce(handleChange, 500);
  const { ToggleTheme, theme } = useThemeContext();

  const { isLogin } = useAuthContext();

  return (
    <>
      <header className="h-16 dark:bg-[#0d1117] bg-white shadow-sm shadow-slate-700 dark:shadow-slate-700 flex justify-between items-center p-4">
        {/* logo section  */}
        <div className="flex justify-center items-center gap-2 sm:gap-2.5">
          <button className="border hidden sm:block  dark:border-slate-600 p-1.75 rounded-lg">
            <Menu size={18} className="dark:text-slate-200 " />
          </button>
          <div className="border border-slate-500 rounded-full p-1.5 text-center">
            {/* <img src="https://github.com/" alt="" /> */}
            <Link to={"/"}>
              <Github size={22} className="dark:text-white" />
            </Link>
          </div>
          <Link to={"/"}>
            <h1 className="hidden sm:block text-2x dark:text-white text-[14px] font-medium ">
              Dashboard
            </h1>
          </Link>
        </div>

        {/* input and profile section  */}
        <div className="flex justify-center items-center gap-1 sm:gap-6 mr-2.5">
          {/* input section  */}
          <div className="relative">
            <input
              value={SearchVal}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleChange;
                  setSearchVal("");
                }
              }}
              type="text"
              className="border w-40 sm:w-60 focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 dark:text-white font-light "
            />
            <Search
              size={16}
              className="text-slate-600 absolute top-1.25 left-1.5 font-medium"
            />
          </div>
          {/* Profile image section  */}
          <div className="div">
            {!isLogin ? (
              <Link to={"/login"}>
                <button className="inline-flex items-center justify-center px-3  sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#2da44e] border border-transparent rounded-md shadow-sm hover:bg-[#2c974b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2da44e] transition-colors duration-200">
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
          </div>
          <div className="text-white">
            <button
              type="button"
              className=" flex items-center border-black text-black hover:bg-gray-200 dark:text-white justify-center w-9 h-9 text-xs font-medium  focus:outline-none border dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700"
              onClick={ToggleTheme}
            >
              {theme.theme == "dark" ? <Sun size={18} /> : <Moon size={18} />}

              <span className="sr-only">Toggle dark/light mode</span>
            </button>
          </div>
        </div>
        {/* <hr/> */}
      </header>
    </>
  );
}
