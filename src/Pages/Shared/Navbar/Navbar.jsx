import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo";
import Hamburger from "hamburger-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const handleMenuClick = () => {
    setOpen((prev) => !prev);

    setTimeout(() => {
      setIsMenuHidden((prev) => !prev);
    }, 300);
  };

  const lists = (
    <>
      <li className="text-text-secondary font-medium text-base">
        <NavLink>Services</NavLink>
      </li>
      <li className="text-text-secondary font-medium text-base">
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li className="text-text-secondary font-medium text-base">
        <NavLink>About Us</NavLink>
      </li>
      <li className="text-text-secondary font-medium text-base">
        <NavLink>Pricing </NavLink>
      </li>
      <li className="text-text-secondary font-medium text-base">
        <NavLink>Be a Rider</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky left-0 top-0 mt-7 w-full z-50">
      <div className="relative mx-4">
        <div className="flex min-h-24 items-center justify-between w-full bg-surface/60 shadow-sm rounded-2xl container2 px-6 backdrop-blur-sm">
          {/* mobile menu */}
          <div className="lg:hidden">
            <Hamburger
              size={20}
              toggled={isOpen}
              onToggle={(toggled) => handleMenuClick(toggled)}
            />
          </div>
          {/* logo */}
          <div className="flex justify-between">
            <Link to="/" className="text-xl">
              <Logo />
            </Link>
          </div>
          {/* menu items middle in big screen */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{lists}</ul>
          </div>
          {/* sign in signout in big screen */}
          <div className="hidden lg:flex gap-2.5">
            <Link
              to="/auth/login"
              className="px-8 py-4 rounded-lg cursor-pointer font-extrabold text-lg text-text-secondary border border-border"
            >
              Sign In
            </Link>
            <Link
              to="/auth/register"
              className="px-8 py-4 rounded-lg cursor-pointer font-extrabold text-lg  bg-primary text-text-muted"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <MobileNav isOpen={isOpen} isMenuHidden={isMenuHidden} lists={lists} />
      </div>
    </div>
  );
};

export default Navbar;
