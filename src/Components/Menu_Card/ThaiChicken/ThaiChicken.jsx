import React from "react";
import List from "../MenuList";
import { thaiChickens } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiChicken) {
  return <List items={thaiChicken.items} price={thaiChicken.prices} />;
}

const ThaiChicken = (props) => {
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
          <div className="list-wrapper">{thaiChickens.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default ThaiChicken;
