import React from 'react'
import "./login.css"

const Signup = () => {
  return (
    <div className="wrapper">
      <div className="card-title title-al" >Professor Sign Up</div>
      <div className="container-box">

      <form>
        <div className="form-group">
          <div className="form-component">
            <i className="fa fa-user" aria-hidden="true"></i>
            <legend htmlFor="username">Name</legend>
          </div>
          <input type="text" id="username" name="username" required/>
        </div>
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
        <div className="form-group">
          <div className="form-component">
            <i className="fa fa-lock" aria-hidden="true"></i>
            <legend htmlFor="password">Confirm password</legend>
          </div>
          <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">Sign Up</button>

        <p>Already a member <a href='/login'>Log In</a></p>
      </form>
      
    </div>
    </div>
  )
}

export default Signup