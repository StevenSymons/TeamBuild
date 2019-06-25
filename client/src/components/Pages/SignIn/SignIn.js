import React, { useState } from "react";
import "./SignIn.css";
import "../../../main.css";
import Logo from "../../Logo/Logo";
import { Link } from "react-router-dom";

const SignIn = props => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePwChange(e) {
    setPassword(e.target.value);
  }

  function submitSignin() {
    fetch("user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.user_id) {
          //get user object
          //change signed-in state
        }
      });
  }

  //console.log(email, password)

  return (
    <div>
      <Logo />

      <div>
        <div className="rectangle rectangle-1" />
        <div className="rectangle rectangle-2" />
        <div className="rectangle-small" />
        <div className="rectangle rectangle-3" />
        <div className="rectangle rectangle-4" />
      </div>

      <div className="template-container signin-container">
        <div className="signin-window">
          <h1 className="center form-text-color">Sign In</h1>

          <form className="signin-form">
            <label className="form-text-color form-text">E-mail</label>
            <input
              className="signin-input form-text-color"
              type="email"
              name="username"
              onChange={handleEmailChange}
            />

            <label className="form-text form-text-color">Password</label>
            <input
              className="signin-input form-text-color"
              type="password"
              name="password"
              onChange={handlePwChange}
            />

            <div className="signin-button center">
              <a
                className="cta-button-form"
                href="#"
                onClick={submitSignin}
                type="submit"
              >
                Sign In
              </a>
            </div>
          </form>

          <div className="center form-text-color signin-footer">
            Don't have an account?{" "}
            <Link className="signin-footer" to="/apply">
              <a href="#">Apply</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
