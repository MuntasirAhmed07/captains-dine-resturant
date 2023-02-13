import React from "react";
import List from "../MenuList";
import { indianPizzas } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianPizza) {
  return <List items={indianPizza.items} price={indianPizza.prices} />;
}

const IndianPizza = (props) => {
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
          <div className="list-wrapper">{indianPizzas.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianPizza;
