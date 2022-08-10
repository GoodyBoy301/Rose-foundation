import React, { useState } from "react";
import "./navbar.css";
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
      <nav className='  nav w-full text-white justify-around md:justify-between  fixed md:static  '>
        <Link to='/' className=' md:pb-8 md:pt-32 md:px-32'>
          <img src={logo} alt={logo} />
        </Link>
        <ul
          className={` text-[14.69px] font-[400]  px-32 xl:px-[137px] md:pb-8 md:pt-32 bg-black ${active}`}
        >
          <li className='nav-item   cursor-pointer duration xl:hover:text-myRed'>
            What we Do
          </li>
          <li className='nav-item  cursor-pointer duration xl:hover:text-myRed'>
            Our Stories
          </li>
          <li className='nav-item  cursor-pointer duration xl:hover:text-myRed'>
            Meet the Humans
          </li>
          <li className='nav-item  cursor-pointer duration xl:hover:text-myRed'>
            Contact
          </li>
        </ul>
        <div onClick={navToggler} className={toggleIcon}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
