import React from "react";
import { useFormik } from "formik";
import { SignupInitialValues } from "../../schema/InitialValues";
import { SignupSchema } from "../../schema";
import "../Style/Register.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:5000";

const Register = () => {
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: SignupInitialValues,
      validationSchema: SignupSchema,
      onSubmit: async (values) => {
        console.log(values);
        // try {
        //   let response = await axios.post(`${baseUrl}/api/signup`, {
        //     firstName: values.firstName,
        //     lastName: values.lastName,
        //     email: values.email,
        //     password: values.password,
        //   });
        //   let message = response.data.message;
        //   Swal.fire(`Successful`, `${message}`, "success");
        //   navigate("/");
        // } catch (error) {
        //   const errorMessage = error.response.data.message;
        //   Swal.fire(`Oops`, `${errorMessage}`, "error");
        // }
      },
    });
  return (
    <>
      <div className="form-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your free account!</div>
            <div className="input-container ic1">
              <input
                id="firstname"
                className="input"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
              />
            </div>
            {errors.firstName && touched.firstName ? (
              <div className="text-danger" style={{ fontSize: 14 }}>
                {errors.firstName}
              </div>
            ) : null}
            <div className="input-container ic2">
              <input
                id="lastname"
                className="input"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Last Name"
              />
            </div>
            {errors.lastName && touched.lastName ? (
              <div className="text-danger" style={{ fontSize: 14 }}>
                {errors.lastName}
              </div>
            ) : null}
            <div className="input-container ic2">
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email Address"
              />
            </div>
            {errors.email && touched.email ? (
              <div className="text-danger" style={{ fontSize: 14 }}>
                {errors.email}
              </div>
            ) : null}
            <div className="input-container ic2">
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              />
            </div>
            {errors.password && touched.password ? (
              <div className="text-danger" style={{ fontSize: 14 }}>
                {errors.password}
              </div>
            ) : null}

            <button type="submit" className="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
