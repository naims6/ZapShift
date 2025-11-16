import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo";

const Navbar = () => {
  const lists = (
    <>
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
    </>
  );
  return (
    <div className="fixed left-0 top-0 w-full">
      <div className="flex min-h-24 items-center w-full bg-surface shadow-sm container2 rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {lists}
            </ul>
          </div>
          <Link to="/" className="text-xl">
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{lists}</ul>
        </div>
        <div className="navbar-end flex gap-2.5">
          <Link className="px-8 py-4 rounded-lg cursor-pointer font-extrabold text-lg text-text-secondary border border-border">
            Sign In
          </Link>
          <Link className="px-8 py-4 rounded-lg cursor-pointer font-extrabold text-lg  bg-primary text-text-muted">
            Be a Rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
