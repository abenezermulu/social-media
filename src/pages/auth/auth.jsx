import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>BENA</h1>
          <h6>Explore the ideas throughout the world!</h6>
        </div>
      </div>

      {/* <Signup /> */}
      <Login />
    </div>
  );
};

function Login() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Login</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
            />
          </div>
  
            <span className="registerTextContainer">
              <span className="registerText">Don't have an account?</span> Register
            </span>
  
            <button className="button infoButton" type="submit">
              Login
            </button>
        </form>
      </div>
    );
  }

function Signup() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last name"
            className="infoInput"
            name="lastName"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="infoInput"
            name="confirmPassword"
          />
        </div>

          <span className="loginTextContainer">
            <span className="alreadyMemberText">Already a member?</span> Login
          </span>

          <button className="button infoButton" type="submit">
            Sign up
          </button>
      </form>
    </div>
  );
}

export default Auth;
