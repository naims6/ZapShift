import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../../../Components/Logo";
import Hamburger from "hamburger-react";
import MobileNav from "./MobileNav";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, loading, signOutUser } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpen((prev) => !prev);

    setTimeout(() => {
      setIsMenuHidden((prev) => !prev);
    }, 300);
  };

  const handleUserLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
        <NavLink to="/dashboard/my-parcels">My Parcels </NavLink>
      </li>
      <li className="text-text-secondary font-medium text-base">
        <NavLink to="/send-parcel">Send a Parcel </NavLink>
      </li>
      <li className="text-text-secondary font-medium text-base">
        <NavLink>Be a Rider</NavLink>
      </li>
    </>
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="sticky left-0 top-0 mt-7 w-full z-999">
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
          {user ? (
            <Link
              onClick={handleUserLogout}
              to="/"
              className="px-8 py-4 rounded-lg cursor-pointer font-extrabold text-lg text-text-secondary bg-primary border border-border"
            >
              Logout
            </Link>
          ) : (
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
          )}
        </div>
        <MobileNav isOpen={isOpen} isMenuHidden={isMenuHidden} lists={lists} />
      </div>
    </div>
  );
};

export default Navbar;
