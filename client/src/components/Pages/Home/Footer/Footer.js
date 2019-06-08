import React from "react";
import "./Footer.css";
import "../../../../main.css";
import logo_text_white from "../../../../static/logo_text_white.svg";
import {Link} from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__logo">
        <img alt="TeamBuild logo" className="logo" src={logo_text_white} />
      </div>
      <div className="footer__links-left">
        <a className="footer__links-left__link link white" href="#">
          About
        </a>
        <a className="footer__links-left__link link white" href="#">
          The Team
        </a>
      </div>
      <div className="footer__links-right">
        <a className="footer__links-right__link link white" href="#">
          FAQ
        </a>
        <a className="footer__links-right__link link white" href="#">
          All projects
        </a>
      </div>
      <div className="cta-white-outline">
        <Link className="link" to="/apply">
          <a href="#" className="link white">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
