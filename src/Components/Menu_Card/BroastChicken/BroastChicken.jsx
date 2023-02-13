import React from "react";
import List from "../MenuList";
import { indianBroastChickens } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianBroastChicken) {
  return (
    <List
      items={indianBroastChicken.items}
      price={indianBroastChicken.prices}
    />
  );
}

const BroastChicken = (props) => {
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
          <div className="list-wrapper">
            {indianBroastChickens.map(createList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroastChicken;
