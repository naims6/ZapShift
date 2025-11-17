import React from "react";
import Banner from "./Banner";
import "./swiper.css";
import Brands from "./Brands";
import HowItWorks from "./HowItWorks";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
    </div>
  );
};

export default Home;
