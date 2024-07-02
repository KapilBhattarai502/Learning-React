import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { convertLength } from "@mui/material/styles/cssUtils";
import {TextField} from "@mui/material"


const Register = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(55, "first name must be at max 55 characters")
          .trim()
          .required("first name is required"),
        lastName: Yup.string()
          .max(20, "last name must be at max 55 characters")
          .trim()
          .required("last name is required"),
        email: Yup.string()
          .trim()
          .required("Email is required")
          .max(60, "Email must be at most 60 characters")
          .lowercase()
          .email(),
        password: Yup.string()
          .min(4, "Password must be at max 4 characters ")
          .max(16, "Password must be at max 16 characters")
          .required(),
        gender: Yup.string()
          .oneOf(["male", "female", "preferNotToSay"])
          .nullable()
          .trim()
          .lowercase(),
      })}
      onSubmit={(values)=>{
        console.log(values);
      }}
    >
      {({handleSubmit,touched,errors,getFieldProps}) => (
        <form onSubmit={handleSubmit}>
           <TextField  label="First name" variant="outlined" {...getFieldProps("firstName")}/>
          {touched.firstName && errors.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <TextField  label="Last name" variant="outlined" {...getFieldProps("lastName")}/>
          {touched.firstName && errors.firstName ? (
            <div>{errors.lastName}</div>
          ) : null}
         
          

        

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
export default Register;
