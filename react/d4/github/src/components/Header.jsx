import { Menu, Github, Search, CloudCog } from "lucide-react";
import { useCallback, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
export function Header() {
  const [SearchVal, setSearchVal] = useState("");
  const { ResponseUser, setResponseUser, error, setError } = useUserContext();

  // const [ResponseUser, setResponseUser] = useState([]);
  function debounce(fn, delay) {
    let timer;
    return (...arg) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...arg);
      }, delay);
    };
  }

  async function fetchData(searchQuery) {
    try {
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
      setResponseUser(data);
      setError(false);
      console.log("data :>> ", data);

      console.log("ResponseUser :>> ", ResponseUser);
      if (data.status === 404) {
        throw new Error("404, User Not Found");
      } else {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
    } catch (error) {
      console.log("Error while fetch userdata", error);
      if (error.status.include(404)) {
        setError(true);
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
  const debounceChange = useCallback(debounce(fetchData, 1000), []);

  // const handleSearch = debounce(handleChange, 500);

  return (
    <>
      <header className="h-16 shadow-sm shadow-slate-700 flex justify-between items-center p-4">
        {/* logo section  */}
        <div className="flex justify-center items-center gap-2 sm:gap-2.5">
          <button className="border border-slate-600 p-1.75 rounded-lg">
            <Menu size={18} className="text-slate-200 " />
          </button>
          <div className="border border-slate-500 rounded-full p-1.5 text-center">
            {/* <img src="https://github.com/" alt="" /> */}
            <Github size={22} className="text-white" />
          </div>
          <h1 className="hidden sm:block text-2x text-white text-[14px] font-medium ">
            Dashboard
          </h1>
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
              className="border w-40 sm:w-60 focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 text-white font-light "
            />
            <Search
              size={16}
              className="text-slate-600 absolute top-1.25 left-1.5 font-medium"
            />
          </div>
          {/* Profile image section  */}
          <div className="h-8 rounded-full w-8 overflow-hidden">
            <img
              src="	https://avatars.githubusercontent.com/u/255820632?v=4&size=64"
              alt="profile pic"
              //   height=""
              className="h-full w-full "
            />
          </div>
        </div>
      </header>
    </>
  );
}
