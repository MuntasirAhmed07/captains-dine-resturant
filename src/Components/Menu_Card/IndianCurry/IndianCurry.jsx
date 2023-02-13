import React from "react";
import List from "../MenuList";
import { indianCurrys } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianCurry) {
  return <List items={indianCurry.items} price={indianCurry.prices} />;
}

const indianCurry = (props) => {
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
          <div className="list-wrapper">{indianCurrys.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default indianCurry;
