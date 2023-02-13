import React from "react";
import List from "../MenuList";
import {
  indianCurryPrawns,
  indianCurryPomfrets
} from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianCurryPrawn) {
  return (
    <List items={indianCurryPrawn.items} price={indianCurryPrawn.prices} />
  );
}

function createTwoList(indianCurryPomfret) {
  return (
    <List items={indianCurryPomfret.items} price={indianCurryPomfret.prices} />
  );
}

const IndianCurryPrawn = (props) => {
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
            {indianCurryPrawns.map(createList)}
          </div>
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
          <div className="list-wrapper">
            {indianCurryPomfrets.map(createTwoList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianCurryPrawn;
