import { memo, useMemo, useCallback } from "react";
import { UserCard } from "./UserCard";
import Loading from "./Loading.jsx";
import { useSelector } from "react-redux";
import NotFound from "./NotFound.jsx";
import Header from "./Header.jsx";


export function Main() {
  const { users, loading } = useSelector((state) => state.user);


  const userCards = useMemo(() => {
    return users.map((user) => (
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
    ));
  }, [users]);

  const content = useMemo(() => {
    if (loading === "pending") return <Loading />;
    if (loading === "rejected" || users.length === 0) return <NotFound />;
    return userCards;
  }, [loading, users.length, userCards]);

  return (
    <>
      
      <Header />

      {/* Main content area */}
      <div className="min-h-screen bg-primary text-black">
        <div className="max-w-4xl mx-auto">
          <main className="p-5 sm:p-10 w-full flex bg-primary text-black justify-between md:h-auto">
            <div className="w-full">
              <h1 className="dark:text-white font-bold text-xl sm:text-2xl">
                Home
              </h1>

              {/* User cards or loading/error state */}
              <div className="mt-9">{content}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
