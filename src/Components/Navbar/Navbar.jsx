import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Svg from "./svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <Svg />
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about_us">About us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
