import React from "react";
import List from "../MenuList";
import { broastBeverageTwos } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(broastBeverageTwo) {
  return (
    <List items={broastBeverageTwo.items} price={broastBeverageTwo.prices} />
  );
}

const BeverageTwo = (props) => {
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
            {broastBeverageTwos.map(createList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeverageTwo;
