import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/image/shared/navbar/Logo.png";
import gradientBG from "../../../assets/image/shared/navbar/Nav_Gradient.png";

const Navbar = () => {
  return (
    <header className="header z-10 sticky top-0 left-0 right-0 bottom-auto -mb-[120px]">
      {/* Nav Bar Starts */}
      <nav className="nav_container h-[70px] flex items-center justify-center relative">
        {/* Logo Starts */}
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-32" />
          </Link>
        </div>
        {/* Logo Ends*/}

        {/* Nav Menu */}
        <div className="w-full">
          <ul className="flex justify-center items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? "active__route" : "") + " menu__itme"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  (isActive ? "active__route" : "") + " menu__itme"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  (isActive ? "active__route" : "") + " menu__itme"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Nav Ends */}

        {/* CAT Starts */}
        <div></div>
        {/* CAT Ends */}

        <div className="absolute w-full h-full flex justify-center items-center -mt-16 -z-10">
          <img src={gradientBG} className="w-[530px]" alt="" />
        </div>
      </nav>
      {/* Nav Bar Ends */}
    </header>
  );
};

export default Navbar;
