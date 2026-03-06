import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Formik() {
  return (
    <Formik
      initialValues={{ fname: "", email: "", accept: false, jobType: "" }}
      validationSchema={Yup.object({
        fname: Yup.string()
          .max(15, "must be 15 character or less")
          .required("required"),
        email: Yup.string().email("Invalid email").required("required"),
        accept: Yup.string()
          .required("required")
          .oneOf([true], "you must accept the term"),
        jobType: Yup.string()
          .oneOf(["designer", "developer", "product manager"])
          .required("required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 2000);
      }}
    >
      <Form></Form>
    </Formik>
  );
}
