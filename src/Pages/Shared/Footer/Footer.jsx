import React from "react";
import Logo from "../../../Components/Logo";
import { NavLink } from "react-router";
import socialIcons from "../../../assets/social.png";

const Footer = () => {
  return (
    <div className="mx-4">
      <div className="container2 flex flex-col justify-start items-start lg:justify-center lg:items-center gap-10 text-left lg:text-center bg-surface rounded-3xl py-18 lg:py-25 px-5 lg:px-20 text-text-secondary mb-8 lg:mb-10 mt-14 lg:mt-20">
        <Logo />
        <p className="max-w-2xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <ul className="flex flex-col lg:flex-row gap-3 lg:gap-8">
          <li className="text-text-secondary font-medium">
            <NavLink>Services</NavLink>
          </li>
          <li className="text-text-secondary font-medium">
            <NavLink>Coverrage</NavLink>
          </li>
          <li className="text-text-secondary font-medium">
            <NavLink>About Us</NavLink>
          </li>
          <li className="text-text-secondary font-medium">
            <NavLink>Pricing </NavLink>
          </li>
          <li className="text-text-secondary font-medium">
            <NavLink>Be a Rider</NavLink>
          </li>
        </ul>
        <div>
          <img src={socialIcons} alt="social icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
