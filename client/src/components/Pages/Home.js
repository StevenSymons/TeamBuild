import React, { Fragment, useState } from "react";

import Navbar from "./Home/Navbar/Navbar";
import Jumbotron from "./Home/Jumbotron/Jumbotron";
import Motivations from "./Home/Motivations/Motivations";
import FeaturedProjects from "./Home/FeaturedProjects/FeaturedProjects";
import UserStories from "./Home/UserStories/UserStories";
import PreFooter from "./Home/PreFooter/PreFooter";
import Footer from "./Home/Footer/Footer";


const Home = () => {
 

  return (
    <Fragment>
        <Navbar />
      <Jumbotron/>
      <Motivations/>
      <FeaturedProjects/>
      <UserStories/>
      <PreFooter/>
      <Footer/>
    </Fragment>

  );
};

export default Home;
