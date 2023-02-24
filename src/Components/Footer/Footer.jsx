import React from "react";

import "./footer.css";
import Facebook from "./Socials/Facebook";
import Instagram from "./Socials/Instagram";
import Svg from "./svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="info-wrapper">
          <div className="mb-width">
            <div className="btn home">Home</div>
            <div className="footer-content">
              <p>
                We are open everyday from
                <br />
                10am - 11pm
              </p>
            </div>
          </div>
          <div className="mb-width">
            <div className="btn">Location</div>
            <div className="footer-content">
              <p>
                House no 1 , P C Road 3, 5th Floor, <br />
                Artillery Mor, K Block,
                <br /> Halishahar, Chattagram.4216 Chittagong,
                <br /> Chittagong Division, Bangladesh
              </p>
            </div>
          </div>
          <div className="mb-width">
            <div className="btn contact">Contact</div>
            <div className="footer-content">
              <p>
                01325-075222
                <br />
                captainsdine@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="icon-wrapper">
          <div>
            <Svg />
          </div>
          <div className="rights" >
            © 2023 Captains Dine. All right reserved
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/captainsdinebd">
              <Facebook  />
            </a>
            <a href="https://www.instagram.com/captainsdine/?hl=en">
              <Instagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
