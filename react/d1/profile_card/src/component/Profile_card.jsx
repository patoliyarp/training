import React from "react";

export function ProfileCard({ avatar, name, role }) {
  return (
    <>
      <div className="rounded-[45px] shadow-2xl  w-75 bg-white">
        <div className="p-2">
          <img
            className="rounded-[45px]"
            src={avatar}
            // src="https://picsum.photos/300"
            alt="profile picture"
          />
          <div className="text-black mt-5 px-7">
            <h2 className="text-3xl font-normal ">{name}</h2>
            <p className="text-gray-500 text-[17px] pt-1.5 pb-4">
              No one can Beat this wick he is one of the greatest fighter.{" "}
            </p>
            <div className="flex justify-between items-center mb-4 ">
              <p className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span className="w-22  truncate">{role}</span>
              </p>
              <button className="text-center px-8 py-1.5 flex justify-center items-center gap-1.5 text-xl  rounded-full bg-linear-to-b from-white to-[#dadada] shadow-2xl">
                Hire <span className="text-3xl font-light">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
