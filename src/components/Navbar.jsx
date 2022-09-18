import React from "react";
import LogoNav from "./LogoNav";
import IconsNavGrup1 from "./IconsNavGrup1";
import IconsNavGrup2 from "./IconsNavGrup2";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            <IconsNavGrup1/>
            <IconsNavGrup2/>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
