import React from "react";
import "../Style/Login.css";

const NewPassword = () => {
  return (
    <>
      <div className="form-container">
        <div className="form">
          <div className="title">New Password</div>
          <div className="subtitle">Remember Your password is secure?</div>

          <div className="input-container ic2">
            <input id="password" className="input" type="password" placeholder=" " />
            <div className="cut cut-short" />
            <label htmlFor="password" className="placeholder">
              New Password
            </label>
          </div>
          <div className="input-container ic2">
            <input id="password" className="input" type="password" placeholder=" " />
            <div className="cut cut-short" />
            <label htmlFor="password" className="placeholder">
              Confirm Password
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

export default NewPassword;
