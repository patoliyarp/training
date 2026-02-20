// import { useFormik } from "formik";
import Formik from "./FormikContext";
import { User, Mail, Lock } from "lucide-react";
import * as yup from "yup";

export default function FormikContext() {
  //   const validate = (values) => {
  //     let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //     let errors = {};

  //     if (values.username.trim() == "") {
  //       errors.username = "Username is Required";
  //     } else if (
  //       !isNaN(values.username) ||
  //       !/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(values.username)
  //     ) {
  //       errors.username = "Username must be in valid format";
  //     }

  //     if (!values.email.trim()) {
  //       errors.email = "Email is Required";
  //     } else if (!emailRegex.test(values.email)) {
  //       errors.email = "Email must be in valid format";
  //     }

  //     if (!values.password.trim()) {
  //       errors.password = "Password is required";
  //     } else if (values.password.length < 8) {
  //       errors.password = "Password must be grater than 8 character";
  //     }
  //     // setError(newError);

  //     return errors;
  //     // return isValid;
  //   };
  //   const formik = useFormik({
  //     initialValues: {
  //       username: "",
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: yup.object({
  //       username: yup
  //         .string()
  //         .max(15, "username must be 15 character or less")
  //         .required("Required"),
  //       email: yup.string().email("invalid email address").required("Required"),
  //       password: yup
  //         .string()
  //         .max(15, "password must be 15 character or grater than 8")
  //         .min(8, "password must be grater than 8 character")
  //         .required("Required"),
  //     }),
  //     onSubmit: (value) => {
  //       alert(JSON.stringify(value, null, 2));
  //     },
  //   });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={yup.object({
        username: yup
          .string()
          .max(15, "username must be 15 character or less")
          .required("Required"),
        email: yup.string().email("invalid email address").required("Required"),
        password: yup
          .string()
          .max(15, "password must be 15 character or grater than 8")
          .min(8, "password must be grater than 8 character")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">First Name</label>
          <input
            id="username"
            type="text"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}

          <label htmlFor="email">Last Name</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">Email Address</label>
          <input id="password" type="text" {...formik.getFieldProps("password")} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
    // <form
    //   action=""
    //   className="max-w-xl mx-auto flex flex-col "
    //   onSubmit={formik.handleSubmit}
    // >
    //   <div className="relative mb-3">
    //     <label
    //       htmlFor="username"
    //       className="text-sm font-medium  block text-gray-900"
    //     >
    //       User name
    //     </label>
    //     <input
    //       type="text"
    //       name="username"
    //       id="username"
    //       value={formik.values.username}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       placeholder="User name"
    //       className="px-4 w-full relative py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
    //     />
    //     <User className="absolute top-8 left-3 text-gray-400" />
    //     {formik.touched.username && formik.errors.username ? (
    //       <p className="text-red-700 ">{formik.errors.username}</p>
    //     ) : null}
    //   </div>

    //   <div className="relative mb-3">
    //     <label
    //       htmlFor="email"
    //       className="text-sm font-medium  block text-gray-900"
    //     >
    //       Email Address
    //     </label>
    //     <input
    //       type="email"
    //       name="email"
    //       id="email"
    //       value={formik.values.email}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       placeholder="Enter Your Email"
    //       className="px-4 w-full relative py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
    //     />
    //     <Mail className="absolute top-8 left-3 text-gray-400" />
    //     {formik.touched.email && formik.errors.email ? (
    //       <p className="text-red-700 ">{formik.errors.email}</p>
    //     ) : null}
    //   </div>

    //   <div className="relative mb-3">
    //     <label
    //       htmlFor="password"
    //       className="text-sm font-medium  block text-gray-900"
    //     >
    //       Password
    //     </label>
    //     <input
    //       type="text"
    //       name="password"
    //       value={formik.values.password}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       id="password"
    //       placeholder="Create password"
    //       className="px-4 w-full relative py-3 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
    //     />
    //     <Lock className="absolute top-8 left-3 text-gray-400" />
    //     {formik.touched.password && formik.errors.password ? (
    //       <p className="text-red-700 ">{formik.errors.password}</p>
    //     ) : null}
    //   </div>

    //   <button
    //     type="submit"
    //     className="w-full  space-y-4 relative text-center flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-linear-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
    //   >
    //     <div className="flex items-center space-x-2">
    //       <span>Create Account</span>
    //     </div>
    //   </button>
    // </form>
  );
}
