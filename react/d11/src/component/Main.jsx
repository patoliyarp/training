import { FolderGit, Search } from "lucide-react";
import { UserCard } from "./UserCard";
import Loading from "./Loading.jsx";
import { useSelector } from "react-redux";
import NotFound from "./NotFound.jsx";
import Header from "./Header.jsx";
export function Main() {
  const { users, loading } = useSelector((state) => state.user);

  return (
    <>
      <Header />
      {/* main hero section  */}
      <div className=" min-h-screen bg-primary text-black ">
        <div className=" max-w-4xl mx-auto">
          {/* main hero section  */}
          <main className="p-5  sm:p-10 w-full flex bg-primary text-black  justify-between  md:h-auto">
            {/* home section  */}
            <div className=" w-full ">
              <h1 className=" dark:text-white font-bold text-xl sm:text-2xl">
                Home
              </h1>

              {/* display container  */}
              <div className="mt-9">
                {loading == "pending" ? (
                  <Loading />
                ) : loading == "rejected" || users.length === 0 ? (
                  <NotFound />
                ) : (
                  users.map((user) => (
                    <UserCard
                      key={user.id}
                      id={user.id}
                      avatar={user.image}
                      username={user.username}
                      firstname={user?.firstname}
                      company={user.company}
                      email={user.email}
                      country={user.address?.country}
                      university={user.university}
                    />
                  ))
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
