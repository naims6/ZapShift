import React from "react";
import Logo from "../Components/Logo";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen pt-12 mx-4">
      <div className="container2 relative">
        <Link to="/" className="text-xl absolute left-0 top-0 container2">
          <Logo />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
