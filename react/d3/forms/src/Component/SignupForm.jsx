import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState({});

  const [signupStatus, setSignupStatus] = useState(false);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSignupStatus(false);
  };

  function validate() {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errorObj = {};

    if (formData.name.trim() === "" || formData.name.length < 5) {
      errorObj = { name: "Please Enter Name Five or More Character" };
    } else if (!isNaN(Number(formData.name))) {
      errorObj = { name: "Please Correct Enter Name" };
    }

    if (
      formData.email.trim() === "" ||
      formData.email.length < 6 ||
      !emailPattern.test(formData.email)
    ) {
      errorObj = { ...errorObj, email: "Please Enter Correct Email" };
    }
    if (formData.password.trim() === "" || formData.password.length < 8) {
      errorObj = {
        ...errorObj,
        password: "Please Enter Password 8 OR More Character",
      };
    }

    setValidateError(errorObj);

    return Object.values(errorObj).length > 0;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) return;
    console.log("submit");
    setSignupStatus(true);
  };

  return (
    <div className="p-10 w-[90%] sm:w-120 rounded-md shadow-md bg-sky-50">
      <div className="flex items-center justify-center space-x-3 mb-4 shadow p-3 bg-sky-100">
        <h1 className="text-xl text-slate-600">Signup</h1>
      </div>
      <form onSubmit={handleSignup}>
        {/* Name */}

        <div className="mb-3">
          <label className="text-gray-600" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className={`w-full p-2 rounded-md shadow-md mt-1 focus:outline-0 focus:bg-slate-300 ${validateError.name && "bg-red-100"}`}
            type="text"
            value={formData.name}
            name="name"
            placeholder="Enter Name"
            id="name"
            onChange={handleFormInput}
          />

          <div className="h-5 mt-1">
            {validateError.name && (
              <p className="text-red-500">{validateError.name}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="text-gray-600" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className={`w-full p-2 rounded-md shadow-md mt-1 focus:outline-0 focus:bg-slate-300 ${validateError.email && "bg-red-100"}`}
            value={formData.email}
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={handleFormInput}
          />
          <div className="h-5 mt-1">
            {validateError.email && (
              <p className="text-red-500 mt-1">{validateError.email}</p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="text-gray-600" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className={`w-full p-2 rounded-md shadow-md mt-1 focus:outline-0 focus:bg-slate-300 ${validateError.password && "bg-red-100"}`}
            type="password"
            value={formData.password}
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleFormInput}
          />
          <div className="h-5 mt-1">
            {validateError.password && (
              <p className="text-red-500 mt-1">{validateError.password}</p>
            )}
          </div>
        </div>

        <button className="bg-sky-600 p-2 rounded-md w-full text-slate-100 shadow-md mt-5 transition-all duration-200 ease-out hover:bg-sky-400 cursor-pointer">
          Sign Up
        </button>
      </form>
      {signupStatus && (
        <div className="mt-3 text-green-700 bg-green-200 rounded-md p-2">
          <p>Signup Completed.</p>
        </div>
      )}
    </div>
  );
};
export default SignupForm;