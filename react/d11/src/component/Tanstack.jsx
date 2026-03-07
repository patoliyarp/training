import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UserCard } from "./UserCard";
import Loading from "./Loading.jsx";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
const fetchUsers = async (query) => {
  const { data } = await axios.get(`https://dummyjson.com/users/search`, {
    params: { q: query, limit: 10 },
  });
  return data.users;
};

export default function Tanstack() {
  const [SearchVal, setSearchVal] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(SearchVal);
    }, 500);
    return () => clearTimeout(timer);
  }, [SearchVal]);

  const {
    data: users,
    isLoading,
    // eslint-disable-next-line no-unused-vars
    isError,
  } = useQuery({
    queryKey: ["users", debouncedSearch],
    queryFn: () => fetchUsers(debouncedSearch),
    placeholderData: (previousData) => previousData,
  });

  const handleInputChange = (event) => {
    setSearchVal(event.target.value);
  };

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
            <div className="relative p-4">
              <input
                value={SearchVal}
                onChange={handleInputChange}
                type="text"
                placeholder="Search users..."
                className="border w-40 sm:w-60 focus:border-slate-500 outline-none border-slate-600 rounded-sm px-6 dark:text-white font-light bg-transparent"
              />
              <Search
                size={16}
                className="text-slate-600 absolute top-6 left-5.5 font-medium"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-primary text-black">
        <div className="max-w-4xl mx-auto">
          <main className="p-5 sm:p-10 w-full flex flex-col">
            <h1 className="dark:text-white font-bold text-xl sm:text-2xl mb-9">
              Home
            </h1>

            <div className="display-container">
              {isLoading ? (
                <Loading />
              ) : !users || users.length === 0 ? (
                <NotFound />
              ) : (
                users.map((user) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    avatar={user.image}
                    username={user.username}
                    firstname={user?.firstName}
                    company={user.company}
                    email={user.email}
                    country={user.address?.country}
                    university={user.university}
                  />
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
