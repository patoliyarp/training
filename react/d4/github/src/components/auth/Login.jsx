import { useFormik } from "formik";
import * as yup from "yup";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login() {
  const { setIsLogin } = useAuthContext();

  const Navigate = useNavigate();

  let userEmail = "user@gmail.com";
  let userPass = "user@1234";
  let [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("invalid email address").required("Required"),
      password: yup
        .string()
        .max(15, "password must be 15 character or grater than 8")
        .min(8, "password must be grater than 8 character")
        .required("Required"),
    }),
    onSubmit: (value) => {
      if (value.email == userEmail && value.password == userPass) {
        setIsLogin(true);
        Navigate("/");
        setError(null);
      } else {
        setError("user not exists");
      }
    },
  });

  return (
    <>
      <div className="min-h-screen bg-[#f6f8fa] dark:bg-[#0d1117] flex flex-col items-center pt-8 px-4 font-sans">
        {/* <!-- Logo --> */}
        <div className="mb-6">
          <svg
            className="w-12 h-12 dark:fill-white"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </div>

        <h1 className="text-2xl font-light mb-4 dark:text-gray-100">
          Sign in to{" "}
        </h1>

        {/* <!-- Login Card --> */}
        <div className="w-full max-w-77 bg-white dark:bg-[#161b22] border border-[#d8dee4] dark:border-[#30363d] rounded-md p-4 shadow-sm">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm mb-2 dark:text-gray-300">
                email address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-3 py-1 bg-white dark:bg-[#0d1117] border border-[#d8dee4] dark:border-[#30363d] rounded-md focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none dark:text-white"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-700 ">{formik.errors.email}</p>
              ) : null}
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm dark:text-gray-300">Password</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full px-3 py-1 bg-white dark:bg-[#0d1117] border border-[#d8dee4] dark:border-[#30363d] rounded-md focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none dark:text-white"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-700 ">{formik.errors.password}</p>
              ) : null}
              <a href="#" className="text-xs text-[#0969da] hover:underline">
                Forgot password?
              </a>
              {error ? <p className="text-red-700 ">{error}</p> : null}
            </div>

            <button
              type="submit"
              className="w-full py-1.5 bg-[#2da44e] hover:bg-[#2c974b] text-white font-semibold rounded-md text-sm transition shadow-sm"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* <!-- Footer links --> */}
        <div className="w-full max-w-77 mt-4 border border-[#d8dee4] dark:border-[#30363d] rounded-md p-4 text-center">
          <p className="text-sm dark:text-gray-300">
            New to GitHub?{" "}
            <a href="#" className="text-[#0969da] hover:underline">
              Create an account
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
