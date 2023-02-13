import React from "react";
import List from "../MenuList";
import { thaiNoodles, thaiRices } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiNoodle) {
  return <List items={thaiNoodle.items} price={thaiNoodle.prices} />;
}

function createTwoList(thaiRice) {
  return <List items={thaiRice.items} price={thaiRice.prices} />;
}

const ThaiNoodle = (props) => {
  return (
    <div className="card-container">
      <div>
        <h3>{props.title}</h3>
        <p>{props.item}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li> price</li>
            </ul>
          </div>
          <div className="list-wrapper">{thaiNoodles.map(createList)}</div>
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
          <div className="list-wrapper">{thaiRices.map(createTwoList)}</div>
        </div>
      </div>
    </div>
  );
};

export default ThaiNoodle;
