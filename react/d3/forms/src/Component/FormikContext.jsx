import React, { createContext } from "react";
import {  useFormik } from "formik";

const FormikContext = createContext({});

export default function Formik({ children, ...props }) {
  const formikState = useFormik(props);
  return (
    <FormikContext.provider value={formikState}>
      {typeof children == "function" ? children(formikState) : children}
    </FormikContext.provider>
  );
}
