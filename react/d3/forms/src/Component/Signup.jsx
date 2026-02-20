import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function Signup() {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  function validation() {
    let isValid = true;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let newError = {};

    if (FormData.username.trim() == "") {
      newError.username = "Username is Required";
      isValid = false;
    } else if (
      !isNaN(FormData.username) ||
      !/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(FormData.username)
    ) {
      newError.username = "Username must be in valid format";
      isValid = false;
    }

    if (!FormData.email.trim()) {
      newError.email = "Email is Required";
      isValid = false;
    } else if (!emailRegex.test(FormData.email)) {
      newError.email = "Email must be in valid format";
      isValid = false;
    }

    if (!FormData.password.trim()) {
      newError.password = "Password is required";
      isValid = false;
    } else if (FormData.password.length < 8) {
      newError.password = "Password must be grater than 8 character";
      isValid = false;
    }
    setError(newError);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validation()) return;
    setFormData({ username: "", email: "", password: "" });
    setError({});
  }

  return (
    <>
      <div className="p-5  bg-white text-black rounded-2xl min-h-screen flex justify-center items-center  py-12 px-4 sm:px-6 lg:px-8 flex-col">
        <div className="max-w-md space-x-7 w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Signup</h2>
          </div>

          {/* signup form  */}
          <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100">
            {/* form  */}
            <form action="" className="" onSubmit={handleSubmit}>
              <div className="relative mb-3">
                <label
                  htmlFor="username"
                  className="text-sm font-medium  block text-gray-900"
                >
                  User name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={FormData.username}
                  onChange={handleInput}
                  placeholder="User name"
                  className="px-4 w-full relative py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
                <User className="absolute top-8 left-3 text-gray-400" />
                {error.username && (
                  <p className="text-red-700 ">{error.username}</p>
                )}
              </div>

              <div className="relative mb-3">
                <label
                  htmlFor="email"
                  className="text-sm font-medium  block text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={FormData.email}
                  onChange={handleInput}
                  placeholder="Enter Your Email"
                  className="px-4 w-full relative py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
                <Mail className="absolute top-8 left-3 text-gray-400" />
                {error.email && <p className="text-red-700 ">{error.email}</p>}
              </div>

              <div className="relative mb-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium  block text-gray-900"
                >
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  value={FormData.password}
                  onChange={handleInput}
                  id="password"
                  placeholder="Create password"
                  className="px-4 w-full relative py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
                <Lock className="absolute top-8 left-3 text-gray-400" />
                {error.password && (
                  <p className="text-red-700 ">{error.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full  space-y-4 relative text-center flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-linear-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <span>Create Account</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
