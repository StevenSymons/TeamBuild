import React from "react";
import "./Navbar.css";
import "../../../../main.css";
import logo_text from "../../../../static/logo_text.png";
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <div className="container">
      <div className="navbar__logo">
        <Link to="/">
          <img alt="TeamBuild logo" className="logo" src={logo_text} />
        </Link>
      </div>
      <div className="navbar__links">
        <Link className="link" to="/apply">
          <a className="navbar__links__link link blue" href="#">
            Apply for membership
          </a>
        </Link>
        <a className="navbar__links__link link black" href="#">
          View Projects
        </a>
      </div>
      <div className="navbar__login">
        <Link className="link" to="/signin">
          <a className="login-button" href="#">
            Log in
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;
