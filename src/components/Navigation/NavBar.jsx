import React, { useState } from "react";
import {
  Link as ScrollLink,
  Events,
  scroller,
  animateScroll as scroll,
} from "react-scroll";
import { Link } from "react-router-dom";
import { logo } from "../../assets/index.js";
import { useQuery } from "../../hooks/useQuery.js";

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

  let query = useQuery();
  let view = query.get("view");
  const isHome = location.pathname === "/";

  const navItems = [
    { title: "What We Do", to: "whatWeDo" },
    { title: "Our Stories", to: "ourStories" },
    { title: "Meet The Humans", to: "meetTheHumans" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <div>
      <nav className='  z-50  nav px-8 lg:px-0 w-full text-white justify-around md:justify-between  fixed md:static  '>
        <Link to='/' className=' md:pb-8  md:mt-32 md:mx-32 '>
          <img src={logo} alt={logo} />
        </Link>
        <ul
          className={`relative z-50 text-[14.69px] font-[400]  px-4 lg:px-[137px] md:pb-8 md:pt-32 bg-black ${active}`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className='nav-item cursor-pointer duration-200  xl:hover:text-myRed'
            >
              {isHome ? (
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.title}
                </ScrollLink>
              ) : (
                <Link to={`/?view=${item.to}`}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
        <div
          onClick={navToggler}
          className={` bg-myDarkRed p-2 flex items-center justify-center ${toggleIcon} `}
        >
          <div className='line1 bg-white'></div>
          <div className='line2 bg-white'></div>
          <div className='line3 bg-white'></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
