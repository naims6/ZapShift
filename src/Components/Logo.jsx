import React from "react";
import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="logo" />
      <h2 className="text-3xl -ml-3 text-text-muted font-bold">zapShift</h2>
    </div>
  );
};

export default Logo;
