import React, {useState} from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="card-title title-al" >Professor Log In</div>
      <div className="container-box">
      <form>
        <div className="form-group">
          <div className="form-component">
            <i className="fa fa-user" aria-hidden="true"></i>
            <legend htmlFor="email">Email Id</legend>
          </div>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
          <div className="form-component">
            <i className="fa fa-lock" aria-hidden="true"></i>
            <legend htmlFor="password">Password</legend>
          </div>
          <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
    </div>
  );
};
export default Login;
