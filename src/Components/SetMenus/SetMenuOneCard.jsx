import React from "react";
import "./setMenus.css";
import SetMenuList from "./SetMenuList.jsx";

const SetMenuOne = (props) => {
  return (
    <div className="card-container">
      <div>
        <h3>{props.title}</h3>
        <p>{props.item}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li>Price</li>
            </ul>
          </div>
          <SetMenuList />
          {/* <div className="list-wrapper">
            <div className="menu-wrapper">
              <div className="left-container">
                <ul className="setmenu">
                  <li>
                    Morog Pulao
                    <br />
                    Boiled Egg & Salad
                  </li>
                  <li>
                    Hyderabadi Biriyani
                    <br />
                    Chicken Tikka Masala
                    <br />
                    Mixed Salad
                    <br />
                    Soft Drinks
                  </li>
                </ul>
              </div>
              <div className="right-container">
                <ul className="setmenu2">
                  <li>263/-</li>
                  <li>263/-</li>
                  <li>263/-</li>
                  <li>263/-</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SetMenuOne;
