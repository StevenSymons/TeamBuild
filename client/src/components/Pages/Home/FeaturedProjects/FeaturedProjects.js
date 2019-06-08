import React from "react";
import "./FeaturedProjects.css";
import { ProjectsList } from "./ProjectsList";
import GetStartedButton from '../../../GetStartedButton/GetStartedButton';


const FeaturedProjects = ({ onRouteChange }) => {
  return (
    <div className="featured-container">
      <h2 className="featured-header">Featured projects</h2>
      <div className="featured-main">
        <div className=" card card-main-1">
          <img
            className="project-img"
            alt="Project"
            src={ProjectsList[0].projimg}
          />
          <div className="card-info">
            <h3 className="project-name">{ProjectsList[0].name}</h3>
            <p className="project-text">{ProjectsList[0].info}</p>
            <a className="cta-button-small" href="#" onClick={onRouteChange}>
              Learn more
            </a>
          </div>
        </div>
        <div className="card card-main-2">
          <img
            className="project-img"
            alt="Project"
            src={ProjectsList[1].projimg}
          />
          <div className="card-info">
            <h3 className="project-name">{ProjectsList[1].name}</h3>
            <p className="project-text">{ProjectsList[1].info}</p>
            <a className="cta-button-small" href="#" onClick={onRouteChange}>
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="button">
        <GetStartedButton />
      </div>
    </div>
  );
};

export default FeaturedProjects;
