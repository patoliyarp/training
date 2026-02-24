export function UserCard({ avatar, username }) {
  return (
    <div className="border border-slate-600 rounded-lg p-4 flex gap-4">
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <img src={avatar} alt="profile pic" />
      </div>
      <div className="info">
        <h3 className="text-white text-sm sm:text-lg font-semibold">
          {username}
        </h3>
      </div>
    </div>
  );
}
