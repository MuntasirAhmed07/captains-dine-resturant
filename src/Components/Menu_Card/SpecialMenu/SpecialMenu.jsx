import React from "react";
import List from "../MenuList";
import { specialMenus } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";
import SpecialMenuList from "../../SetMenus/SpecialMenuList";

function createList(specialMenu) {
  return <List items={specialMenu.items} price={specialMenu.prices} />;
}

const SpecialMenu = (props) => {
  return (
    <div className="card-container">
      <div>
        <h3>{props.title}</h3>
        <p>{props.item}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li> price</li>
            </ul>
          </div>
          <div className="list-wrapper">
            <SpecialMenuList />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <p>
          on discussion
          <br />
          (party menu)
        </p>
        <div>
          <div>
            <ul className="list-bullet">
              <li>Plain Pulao </li>
              <li>Pomfret Fry/Prawn</li>
              <li>Chicken Roast</li>
              <li>Mutton Kurma</li>
              <li>Mix Vegetable</li>
              <li>Firni/Jorda</li>
              <li>Soft Drinks/Borhani</li>
              <li>Water</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
