import React from "react";
import List from "../MenuList";
import { thaiCrabs, thaiVegetables } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiCrab) {
  return <List items={thaiCrab.items} price={thaiCrab.prices} />;
}

function createTwoList(thaiVegetable) {
  return <List items={thaiVegetable.items} price={thaiVegetable.prices} />;
}

const ThaiCrabVegetable = (props) => {
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
          <div className="list-wrapper">{thaiCrabs.map(createList)}</div>
        </div>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <p>{props.newItem}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li> price</li>
            </ul>
          </div>
          <div className="list-wrapper">
            {thaiVegetables.map(createTwoList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThaiCrabVegetable;
