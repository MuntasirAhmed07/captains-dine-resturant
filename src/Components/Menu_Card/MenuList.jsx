import React from "react";
import "./menuCard.css";

const MenuList = (props) => {
  return (
    <div>
      <div className="menu-wrapper">
        <div className="left-container">
          {/* <p>Items</p> */}
          <ul>
            <li>{props.items}</li>
          </ul>
        </div>
        <div className="right-container">
          {/* <p>Prices</p> */}
          <ul>
            <li>{props.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
