import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileLogo from "../../Assets/MobileLogo";
import SvgMb from "../Footer/svg";
import "./navbar.css";
import Svg from "./svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); window.scrollTo(0, 0);
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="additional-logo">
            <NavLink to="/">
              <SvgMb/>
            </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink to="/" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={handleClick}>
                Menu
              </NavLink>
            </li>
            <li className="menu-logo">
              <NavLink to="/">
                <Svg />
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about_us" onClick={handleClick}>
                About us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className="fa-solid fa-bars"></i> */}
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
