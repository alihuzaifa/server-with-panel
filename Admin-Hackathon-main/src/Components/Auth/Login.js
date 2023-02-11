import React from "react";
import { useFormik } from "formik";
import { LoginInitialValues } from "../../schema/InitialValues";
import { useSelector, useDispatch } from "react-redux";
import "../Style/Login.css";
import { LoginSchema } from "../../schema";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/reducers/AuthSlice";
let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
  baseUrl = `http://localhost:5000`;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: LoginInitialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        try {
          let response = await axios.post(
            `${baseUrl}/api/login`,
            {
              email: values.email,
              password: values.password,
            },
            {
              withCredentials: true,
            }
          );
          const message = response.data.message;
          console.log("message", message);
          // navigate("/home");
        } catch (error) {
          let errorMessage = error.response.data.message;
          Swal.fire("Oops", `${errorMessage}`, "error");
        }
      },
    });
  return (
    <>
      <div className="form-container">
        <div className="form">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's login into your account</div>
          <form onSubmit={handleSubmit}>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
              />
            </div>
            {errors.email && touched.email ? (
              <div className="text-danger" style={{ fontSize: 14 }}>
                {errors.email}
              </div>
            ) : null}

            <div className="input-container ic2">
              <input
                id="password"
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
            <Link to={"/register"}>
              <div className="text-white text-decoration-underline text-end">
                Dont have an account!
              </div>
            </Link>
            <button type="submit" className="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
