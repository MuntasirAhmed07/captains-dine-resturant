import React from "react";
import List from "../MenuList";
import { broastBeverageOnes } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(broastBeverageOne) {
  return (
    <List items={broastBeverageOne.items} price={broastBeverageOne.prices} />
  );
}

const BeverageOne = (props) => {
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
            {broastBeverageOnes.map(createList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeverageOne;
