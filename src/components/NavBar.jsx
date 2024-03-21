import React from "react";
import Logo from "../assets/stackline_logo.svg";

const NavBar = () => {
  return (
    <div className="bg-blue-900 h-16 flex items-center">
      <img src={Logo} alt="Stackline Logo" className="w-18 h-18"/>
    </div>
  );
}

export default NavBar;
