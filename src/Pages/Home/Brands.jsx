import React from "react";
import Marquee from "react-fast-marquee";

import amazon from "../../assets/brands/amazon.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import randstad from "../../assets/brands/randstad.png";

const Brands = () => {
  return (
    <div className="container2 mt-20">
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-10">
        We Have Helped thousand of sales team
      </h2>
      <Marquee
        autoFill={true}
        gradient={true}
        gradientColor="#eaeced"
        gradientWidth={100}
      >
        <div className="flex gap-20 mx-4 items-center">
          <img className="w-[120px] lg:w-[180px]" src={amazon} alt="amazon" />
          <img className="w-[120px] lg:w-[180px]" src={casio} alt="casio" />
          <img className="w-[120px] lg:w-[180px]" src={moonstar} alt="amazon" />
          <img className="w-[120px] lg:w-[180px]" src={star} alt="amazon" />
          <img
            className="w-[150px] lg:w-[180px]"
            src={start_people}
            alt="amazon"
          />
          <img className="w-[150px] lg:w-[180px]" src={randstad} alt="amazon" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
