import { signupSchema } from "../Schema/signupSchema";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignupForm = () => {
  const [signupStatus, setSignupStatus] = useState(false);

  const signupHandler = (values, { setSubmitting }) => {
    setSignupStatus(true);
    setSubmitting(false);
  };

  const navigate = useNavigate();

  const handleLoginRoute = () => {
    navigate("/login");
  };

  return (
    <div className="w-80 sm:w-150 shadow-md p-8 rounded-md dark:bg-gray-800">
      <h2 className="mb-4 text-sky-600">Singup</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
          country: "",
          gender: "",
          skills: [],
        }}
        validationSchema={signupSchema}
        onSubmit={signupHandler}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* username */}
            <div className="">
              <label
                htmlFor="username"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Username
              </label>
              <br />

              <Field
                type="text"
                name="username"
                placeholder="Enter Username"
                id="username"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 dark:placeholder-gray-500 focus:outline-0 dark:focus:bg-gray-900"
              />
              <div className="h-5 mt-1">
                <ErrorMessage
                  component="p"
                  name="username"
                  className="text-red-400 mt-1"
                />
              </div>
            </div>
            {/* email */}
            <div className=" ">
              <label
                htmlFor="email"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Email
              </label>
              <br />
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                id="email"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 dark:placeholder-gray-500 focus:outline-0 dark:focus:bg-gray-900"
              />
              <div className="h-5 mt-1">
                <ErrorMessage
                  component="p"
                  name="email"
                  className="text-red-400 mt-1"
                />
              </div>
            </div>
            {/* password */}
            <div className="">
              <label
                htmlFor="password"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Password
              </label>
              <br />
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
                id="password"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 focus:outline-0 dark:focus:bg-gray-900 dark:placeholder-gray-500"
              />
              <div className="h-5 mt-1">
                <ErrorMessage
                  component="p"
                  name="password"
                  className="text-red-400 mt-1"
                />
              </div>
            </div>
            {/* phone number */}

            <div className="">
              <label
                htmlFor="phoneNumber"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Phone Number
              </label>
              <br />
              <Field
                type="number"
                name="phoneNumber"
                placeholder="Enter Password"
                id="phoneNumber"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 focus:outline-0 dark:focus:bg-gray-900 dark:placeholder-gray-500"
              />
              <div className="h-5 mt-1">
                <ErrorMessage
                  component="p"
                  name="phoneNumber"
                  className="text-red-400 mt-1"
                />
              </div>
            </div>

            {/* Country */}

            <div className="sm:col-span-2 dark:text-gray-400">
              <label
                htmlFor="country"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Country
              </label>
              <br />
              <Field
                as="select"
                name="country"
                placeholder="Enter Password"
                id="country"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 focus:outline-0 dark:focus:bg-gray-900 dark:placeholder-gray-500"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
              </Field>

              <div className="h-5 mt-1">
                <ErrorMessage
                  component="p"
                  name="country"
                  className="text-red-400 mt-1"
                />
              </div>
            </div>

            {/* gender */}

            <label className="text-gray-700 dark:text-gray-400">Gender</label>

            <div className="sm:col-span-2 space-x-2 dark:text-gray-400 flex">
              <label className="cursor-pointer flex items-center">
                <Field
                  className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 dark:bg-slate-900 checked:border-3 checked:border-slate-200
                  checked:bg-blue-400 transition-all"
                  type="radio"
                  name="gender"
                  value="Male"
                />
                <span className="ms-2 ">Male</span>
              </label>

              <label className="cursor-pointer flex items-center">
                <Field
                  className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 dark:bg-slate-900 checked:border-3 checked:border-slate-200
                  checked:bg-blue-400 transition-all"
                  type="radio"
                  name="gender"
                  value="Female"
                />
                <span className="ms-2 ">Female</span>
              </label>

              <label className="cursor-pointer flex items-center">
                <Field
                  className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 dark:bg-slate-900 checked:border-3 checked:border-slate-200
                  checked:bg-blue-400 transition-all"
                  type="radio"
                  name="gender"
                  value="Other"
                />
                <span className="ms-2">Other</span>
              </label>
            </div>
            <div className="h-5 mt-1">
              <ErrorMessage
                component="p"
                name="gender"
                className="text-red-400"
              />
            </div>

            {/* skills */}

            <label className="sm:col-span-2 text-gray-700 dark:text-gray-400">
              Skills
            </label>
            <div className=" sm:col-span-2 space-x-3  dark:text-gray-400">
              <div className="flex space-x-3 flex-wrap">
                <label className="cursor-pointer flex items-center">
                  <Field
                    className="w-4 h-4 border border-gray-300 rounded-xs checked:border-slate-200 transition-all"
                    type="checkbox"
                    name="skills"
                    value="Html"
                  ></Field>
                  <span className="ms-2">HTML</span>
                </label>

                <label className="cursor-pointer flex items-center">
                  <Field
                    className=" w-4 h-4 border rounded-xs bg-neutral-secondary-medium  border-slate-200 transition-all"
                    type="checkbox"
                    name="skills"
                    value="css"
                  />
                  <span className="ms-2">CSS</span>
                </label>

                <label className="cursor-pointer flex items-center">
                  <Field
                    className="w-4 h-4 border rounded-xs bg-neutral-secondary-medium border-slate-200 transition-all dark-check "
                    type="checkbox"
                    name="skills"
                    value="javaScript"
                  />
                  <span className="ms-2">JavaScript</span>
                </label>

                <label className="cursor-pointer flex items-center">
                  <Field
                    className="w-4 h-4 border rounded-xs bg-neutral-secondary-medium border-slate-200 transition-all"
                    type="checkbox"
                    name="skills"
                    value="nodejs"
                  />
                  <span className="ms-2">Node js</span>
                </label>

                <label className="cursor-pointer flex items-center">
                  <Field
                    className=" w-4 h-4 border rounded-xs bg-neutral-secondary-medium  border-slate-200 transition-all"
                    type="checkbox"
                    name="skills"
                    value="python"
                  />
                  <span className="ms-2">Python</span>
                </label>

                <label className="cursor-pointer flex items-center">
                  <Field
                    className="w-4 h-4 border  rounded-xs bg-neutral-secondary-medium  border-slate-200 transition-all"
                    type="checkbox"
                    name="skills"
                    value="bootstrap"
                  />
                  <span className="ms-2">Bootstrap</span>
                </label>
              </div>
            </div>
            <div className="h-5 mt-1">
              <ErrorMessage
                component="p"
                name="skills"
                className="text-red-400"
              />
            </div>

            <div className="space-x-3 sm:col-span-2">
              <button
                disabled={isSubmitting}
                type="submit"
                className="px-3 py-2 bg-sky-800 rounded-md text-slate-200 mt-5 cursor-pointer hover:bg-sky-600"
              >
                Signup
              </button>
              <button
                onClick={handleLoginRoute}
                type="button"
                className="px-3 py-2 bg-gray-700 rounded-md text-slate-200 mt-5 cursor-pointer hover:bg-gray-600"
              >
                Login
              </button>
            </div>
            {signupStatus && (
              <p className="text-green-500 mt-3">Signup Completed</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
