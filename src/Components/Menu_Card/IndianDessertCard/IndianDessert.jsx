import React from "react";
import List from "../MenuList";
import indianDesserts from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianDessert) {
  return <List items={indianDessert.items} price={indianDessert.prices} />;
}

const IndianDessert = (props) => {
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
          <div className="list-wrapper">{indianDesserts.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianDessert;
