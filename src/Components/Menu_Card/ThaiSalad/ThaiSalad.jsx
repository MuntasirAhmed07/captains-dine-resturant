import React from "react";
import List from "../MenuList";
import { thaiSalads } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiSalad) {
  return <List items={thaiSalad.items} price={thaiSalad.prices} />;
}

const ThaiSalad = (props) => {
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
          <div className="list-wrapper">{thaiSalads.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default ThaiSalad;
