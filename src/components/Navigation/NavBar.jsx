import React, { useState } from "react";

import { Link } from "react-router-dom";
import { logo } from "../../assets/index.js";

const Navbar = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const navToggler = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggler")
      : setToggleIcon("nav-toggler");
  };
  return (
    <div>
      <nav className="  nav px-8 lg:px-0 w-full text-white justify-around md:justify-between  fixed md:static  ">
        <Link to="/" className=" md:pb-8 md:pt-32 md:px-32">
          <img src={logo} alt={logo} />
        </Link>
        <ul
          className={` text-[14.69px] font-[400]  px-4 lg:px-[137px] md:pb-8 md:pt-32 bg-black ${active}`}
        >
          <li className="nav-item   cursor-pointer duration xl:hover:text-myRed">
            What we Do
          </li>
          <li className="nav-item  cursor-pointer duration xl:hover:text-myRed">
            Our Stories
          </li>
          <li className="nav-item  cursor-pointer duration xl:hover:text-myRed">
            Meet the Humans
          </li>
          <li className="nav-item  cursor-pointer duration xl:hover:text-myRed">
            Contact
          </li>
        </ul>
        <div onClick={navToggler} className={` bg-myDarkRed ${toggleIcon} `}>
          <div className="line1 bg-myDarkRed"></div>
          <div className="line2 bg-myDarkRed"></div>
          <div className="line3 bg-myDarkRed"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
