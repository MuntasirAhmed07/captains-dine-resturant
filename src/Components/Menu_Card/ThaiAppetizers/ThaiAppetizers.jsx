import React from "react";
import List from "../MenuList";
import { thaiAppetizers } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiAppetizer) {
  return <List items={thaiAppetizer.items} price={thaiAppetizer.prices} />;
}

const ThaiAppetizers = (props) => {
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
          <div className="list-wrapper">{thaiAppetizers.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default ThaiAppetizers;
