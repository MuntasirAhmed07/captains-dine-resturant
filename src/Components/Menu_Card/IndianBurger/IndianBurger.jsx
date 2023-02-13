import React from "react";
import List from "../MenuList";
import { indianBurgers } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianBurger) {
  return <List items={indianBurger.items} price={indianBurger.prices} />;
}

const IndianBurger = (props) => {
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
          <div className="list-wrapper">{indianBurgers.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianBurger;
