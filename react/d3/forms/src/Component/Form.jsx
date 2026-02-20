import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
// import { useState } from "react";

export default function Form() {
  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // function validation(){
  //   let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //   // if(!emailRegex.test(form.email))

  // }

  // function handlesubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Signup Form */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h2>
          </div>
          <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100">
            <form className="space-y-6">
              {/* Name Fields */}

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  User Name
                </label>
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-4 py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="User name"
                  />
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full px-4 py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Password Fields */}
              <div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      //   type={showPassword ? "text" : "password"}
                      required
                      //   value={password}
                      //   onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none relative block w-full px-4 py-3 pl-12 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Create password"
                    />
                    <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <button
                      type="button"
                      //   onClick={togglePasswordVisibility}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {/* {showPassword ? ( */}
                      {/* ) : ( */}
                      {/* )} */}
                    </button>
                  </div>
                </div>
              </div>
              {/* 7. Display any error message */}
              {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

              {/* Checkboxes */}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  //   disabled={isLoading || !acceptTerms}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-linear-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <span>Create Account</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
