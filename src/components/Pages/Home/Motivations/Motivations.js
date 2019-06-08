import React from "react";
import "./Motivations.css";
import find_team from "../../../../static/find_team.png";
import build from "../../../../static/build.png";
import fast_working from "../../../../static/fast_working.png";
import GetStartedButton from '../../../GetStartedButton/GetStartedButton';


const Motivations = () => {
  return (
    <div className="motiv-main">
      <svg
        className="sv"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 1200.000000 131.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
          fill="#ffffff"
          stroke="none"
        >
          <path
            d="M0 650 l0 -650 6000 0 6000 0 0 345 0 344 -103 31 c-56 17 -115 35
-132 40 -62 19 -314 79 -415 99 -719 142 -1531 168 -2505 81 -749 -68 -1384
-168 -2940 -465 -1013 -193 -1524 -277 -1850 -305 -264 -22 -690 -11 -1000 25
-639 76 -1365 284 -2055 590 -290 129 -718 348 -928 477 -34 21 -65 38 -67 38
-3 0 -5 -292 -5 -650z"
          />
        </g>
      </svg>

      <div className="motiv-container">
        <div className="item-box item-box-left">
          <img className="illustration" src={find_team} />
          <div className="text">
            <h2>Apply and find your team</h2>
            <p>
              Etiam imperdiet imperdiet orci. Donec id justo. Nunc nulla.
              Suspendisse faucibus.
            </p>
          </div>
        </div>

        <div className="item-box item-box-mid">
          <img className="illustration" src={build} />
          <div className="text">
            <h2>Build your awesome project</h2>
            <p>
              Etiam imperdiet imperdiet orci. Donec id justo. Nunc nulla.
              Suspendisse faucibus.
            </p>
          </div>
        </div>

        <div className="item-box item-box-right">
          <img className="illustration" src={fast_working} />
          <div className="text">
            <h2>Fast forward your career</h2>
            <p>
              Etiam imperdiet imperdiet orci. Donec id justo. Nunc nulla.
              Suspendisse faucibus.
            </p>
          </div>
        </div>


        <div className="motiv-button">
          <GetStartedButton/>
        </div>
      </div>
    </div>
  );
};

export default Motivations;
