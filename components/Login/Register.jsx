import React from "react";
import './Register.css'
import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div className="container">
      <div className="frmWraper">
        <div className="title">
          <span>Login Here</span>
        </div>
        <p className="title_para">Please enter your details to sign in.</p>

        <form action="#">
          <div className="row">
            {/* <i className="fas fa-user"></i> */}
            <input type="text" placeholder="Enter your email..." required />
          </div>
          <div className="row">
            {/* <i className="fas fa-lock"></i> */}
            <input type="password" placeholder="Password" required />
          </div>
          <div className="pass">
            <a href="#">Forgot password?</a>
          </div>

            <NavLink to={"/dashboard"} className="row button">
            <input type="submit" value="Login" />
            </NavLink>
          {/* <div className="signup-link">
            Not a member? <a href="#">Signup now</a>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
