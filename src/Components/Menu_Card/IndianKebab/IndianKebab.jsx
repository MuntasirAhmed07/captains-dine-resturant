import React from "react";
import List from "../MenuList";
import { indianKebabs } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianKebab) {
  return <List items={indianKebab.items} price={indianKebab.prices} />;
}

const IndianKebab = (props) => {
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
          <div className="list-wrapper">{indianKebabs.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianKebab;
