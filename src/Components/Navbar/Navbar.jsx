import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Svgn from "./Svgn";

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
              <Svgn />
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
