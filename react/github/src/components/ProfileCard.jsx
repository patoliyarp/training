export function ProfileCard({ avatar, username, bio }) {
  return (
    <div className="border flex sm:flex-row flex-col border-slate-600 rounded-lg p-4  gap-4">
      <div className="w-[30%] sm:w-[80%] md:w-[40%] flex  justify-center items-center ">
        <div className="flex rounded-full overflow-hidden">
          <img
            src={
              avatar
                ? avatar
                : "https://avatars.githubusercontent.com/u/36355?v=4"
            }
            alt="profile pic"
          />
        </div>
      </div>
      <div className="info">
        <h3 className="dark:text-white text-sm sm:text-lg font-semibold">
          {username ? username : "username"}
        </h3>
        <p className="text-slate-400 line-clamp-3">
          {bio ? { bio } : "no bio"}
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          asperiores deserunt soluta, quaerat, assumenda commodi aperiam quia
          libero, dolorum necessitatibus eveniet harum temporibus. Corporis modi
          ut magni ullam aspernatur sunt. */}
        </p>
      </div>
    </div>
  );
}
