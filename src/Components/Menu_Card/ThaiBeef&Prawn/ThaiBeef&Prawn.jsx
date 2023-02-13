import React from "react";
import List from "../MenuList";
import { thaiBeefs, thaiPrawns } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiBeef) {
  return <List items={thaiBeef.items} price={thaiBeef.prices} />;
}

function createTwoList(thaiPrawn) {
  return <List items={thaiPrawn.items} price={thaiPrawn.prices} />;
}

const ThaiBeef = (props) => {
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
          <div className="list-wrapper">{thaiBeefs.map(createList)}</div>
        </div>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <p>{props.newItem}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li>Price</li>
            </ul>
          </div>
          <div className="list-wrapper">{thaiPrawns.map(createTwoList)}</div>
        </div>
      </div>
    </div>
  );
};

export default ThaiBeef;
