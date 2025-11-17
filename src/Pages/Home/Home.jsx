import React from "react";
import Banner from "./Banner";
import "./swiper.css";
import Brands from "./Brands";
import HowItWorks from "./HowItWorks";
import OurServices from "./OurServices";
import OurProcess from "./OurProcess";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <OurProcess />
      <Testimonial />
    </div>
  );
};

export default Home;
