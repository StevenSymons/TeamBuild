import React from "react";
import "./PreFooter.css";
import "../../../../main.css";
import GetStartedButton from '../../../GetStartedButton/GetStartedButton';


const PreFooter = () => (
  <div className="prefooter">
    <div>
      <h2 className="prefooter__text">Ready to build something amazing?</h2>
    </div>
    <div>
      <GetStartedButton />
    </div>
  </div>
);

export default PreFooter;
