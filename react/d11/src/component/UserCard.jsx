import { Mail, MapPin, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";

export const UserCard = memo(
  ({
    id,
    avatar,
    firstname,
    username,
    company,
    email,
    country,
    university,
  }) => {
    return (
      <Link to={`/profile/${id}`}>
        <div className="border bg-primary border-slate-600 rounded-lg mt-2 p-4 flex gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden ">
            <img src={avatar} alt="profile pic" />
          </div>
          <div className="info">
            <div className="flex w-full justify-baseline items-center">
              <h3 className="dark:text-white text-sm sm:text-xl font-semibold">
                {firstname}
              </h3>
              <span className="text-xs font-medium text-gray-500">
                @{username}
              </span>
            </div>
            <p className="text-primary-text text-sm font-medium">
              {company?.title} <span className="text-gray-600 mx-1">•</span>{" "}
              {company?.department}
            </p>
            <div className="flex justify-center items-center gap-12 dark:text-white mt-1">
              <div className="flex justify-center items-center">
                <Mail size={16} />
                <span className="dark:text-slate-500 pl-1">{email}</span>
              </div>
              <div className="flex justify-center items-center">
                <MapPin size={16} />{" "}
                <span className="dark:text-slate-500 pl-1">{country}</span>
              </div>
            </div>
            <div className="mt-1 dark:text-white flex items-center gap-2">
              <GraduationCapIcon size={16} />
              <span className="dark:text-slate-400 ">{university} </span>
            </div>
          </div>
        </div>
      </Link>
    );
  },
);
