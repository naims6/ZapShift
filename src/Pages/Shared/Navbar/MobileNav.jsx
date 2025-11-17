import React from "react";

const MobileNav = ({ lists, isOpen, isMenuHidden }) => {
  return (
    <div
      className={`${isOpen ? "left-0" : `left-[110%]`} ${
        isMenuHidden ? "block" : "hidden"
      }  lg:hidden absolute top-full left-0 w-full rounded-xl p-5 bg-surface  transition-all duration-300 border border-border shadow-sm z-50`}
    >
      <div className="container2">
        <ul className="space-y-2">{lists}</ul>
      </div>
    </div>
  );
};

export default MobileNav;
