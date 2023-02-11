import React from "react";
import "../Style/Login.css";

const ForgetPassword = () => {
  return (
    <>
      <div className="form-container">
        <div className="form">
          <div className="title">Your Email</div>
          <div className="subtitle">Feel free to reset your password?</div>

          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " />
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">
              Email
            </label>
          </div>
          <button type="text" className="submit">
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
