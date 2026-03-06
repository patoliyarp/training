import { User, LogOut, Mail, Contact, MapPin, CloudCog } from "lucide-react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notfound from "./NotFound";
import Loading from "./Loading";

export default function Profile() {
  const { id } = useParams();
  const { profileLoading, userProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id]);

  console.log("userProfile :>> ", userProfile);
  return (
    <>
      {profileLoading == "pending" && <Loading />}
      {profileLoading == "error" && <Notfound />}
      {profileLoading == "success" && (
        <div className="w-full  bg-primary dark:text-white text-black">
          <div className="  max-w-7xl min-h-screen mx-auto flex lg:flex-row flex-col p-5 gap-20 items-center lg:items-start">
            <div className="flex flex-col items-center">
              <div className="md:w-[70%] md:h-60 flex justify-center items-center rounded-full overflow-hidden">
                <img loading="lazy" src={userProfile.image} alt="profile pic" />
              </div>
              <div className="mt-4 w-[80%] pb-2 text-center lg:text-left">
                <h1 className="text-2xl font-semibold leading-tight">
                  {userProfile.firstName}
                </h1>
                <h2 className="text-xl font-light text-slate-500 dark:text-[#8b949e]">
                  {userProfile.username}
                </h2>
              </div>

              <section className="w-[80%] bg-primary-200 border border-primary-100 rounded-lg p-6">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                  Physical Attributes
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-primary p-3 rounded-2xl border border-zinc-800">
                    <p className="text-zinc-500">Height</p>
                    <p className="font-semibold">{userProfile.height} cm</p>
                  </div>
                  <div className="bg-primary p-3 rounded-2xl border border-zinc-800">
                    <p className="text-zinc-500">Weight</p>
                    <p className="font-semibold">{userProfile.weight}kg</p>
                  </div>
                  <div className="bg-primary p-3 rounded-2xl border border-zinc-800">
                    <p className="text-zinc-500">Eyes</p>
                    <p className="font-semibold">{userProfile.eyeColor}</p>
                  </div>
                  <div className="bg-primary p-3 rounded-2xl border border-zinc-800">
                    <p className="text-zinc-500">Hair</p>
                    <p className="font-semibold">
                      {userProfile.hair.color}, {userProfile.hair.color}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* content section  */}
            <div className="w-[80%] lg:w-[50%]">
              <section className="bg-primary-200  border-slate-600 rounded-lg p-6">
                <h3 className="text-sm font-bold text-primary-text uppercase tracking-wider mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center space-x-3 text-zinc-300">
                      <span className="">
                        <Mail size={16} />
                      </span>
                      <span className="truncate">{userProfile.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-zinc-300">
                      <span className="">
                        <Contact size={16} />
                      </span>
                      <span>{userProfile.phone}</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm pt-4 md:pt-0 md:pl-6">
                    <div className="flex items-start space-x-3 text-zinc-300">
                      <span className="">
                        <MapPin size={16} />
                      </span>
                      <span>
                        {userProfile.address.address},{" "}
                        {userProfile.address.city}
                        <br />
                        {userProfile.address.state},{" "}
                        {userProfile.address.postalCode},{" "}
                        {userProfile.address.country}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-primary-200 rounded-lg p-6">
                  <h3 className="flex items-center text-sm font-bold text-primary-text uppercase tracking-wider mb-4">
                    <span className="mr-2">🏢</span> Professional
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <p className="text-xs text-zinc-500">Department</p>
                      <p className="text-sm">
                        {userProfile.company.department}
                      </p>
                    </li>
                    <li>
                      <p className="text-xs text-zinc-500">Office Location</p>
                      <p className="text-sm">
                        {userProfile.company.address.address}
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-200 rounded-lg p-6">
                  <h3 className="flex items-center text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                    <span className="mr-2">🎓</span> Education
                  </h3>
                  <p className="text-sm font-medium">
                    {userProfile.university}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    className of 2018 (Est.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
