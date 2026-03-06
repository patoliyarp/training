import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/slices/userSlice";
// import axios from "axios";
// function debounce(fn, delay) {
//   let timer;
//   return (...arg) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...arg);
//     }, delay);
//   };
// }
export default function Input() {
  // async function fetchData(searchQuery) {
  //   try {
  //     setSearchBanner(false);
  //     setLoading(true);
  //     if (searchQuery == "") {
  //       setSearchBanner(true);
  //       setResponseUser([]);

  //       return;
  //     }

  //     const { data } = await axios.get(
  //       `https://api.github.com/users/${searchQuery}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
  //           Accept: "application/vnd.github.v3+json",
  //           "X-GitHub-Api-Version": "2022-11-28",
  //         },
  //       },
  //     );

  //     setSearchBanner(false);
  //     setResponseUser(data);

  //     setLoading(false);
  //     setError(false);
  //     console.log("data :>> ", data);

  //     console.log("ResponseUser :>> ", ResponseUser);
  //   } catch (error) {
  //     console.log("Error while fetch userdata", error.status);
  //     setLoading(false);
  //     if (error.status == 404) {
  //       setError(true);
  //       setResponseUser([]);
  //     }
  //   }
  // }

  // function useDebounce(value, delay) {
  //   const [debounceValue, setDebounceValue] = useState(value);

  //   useEffect(() => {
  //     const handler = setTimeout(() => {
  //       setDebounceValue(value);
  //     }, delay);

  //     return () => {
  //       clearTimeout(handler);
  //     };
  //   }, [value, delay]);
  //   return debounceValue;
  // }

  // const debounceQuery = useDebounce(SearchVal, 500);

  // useEffect(() => {
  //   fetchData(debounceQuery);
  // }, [debounceQuery]);

  const [SearchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const handleInputChange = (event) => {
    setSearchVal(event.target.value);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(fetchUser(SearchVal));
      console.log("users :>> ", users);
    }, 1000);
    return () => clearTimeout(timer);
  }, [SearchVal]);

  return (
    <>
      <div className="relative">
        <input
          value={SearchVal}
          onChange={handleInputChange}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     handleInputChange(e);
          //     // setSearchVal("");
          //   }
          // }}
          type="text"
          className="border w-40 sm:w-60 focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 dark:text-white font-light "
        />
        <Search
          size={16}
          className="text-slate-600 absolute top-1.25 left-1.5 font-medium"
        />
      </div>
    </>
  );
}
