import React from "react";
import List from "../MenuList";
import { indianSalads, indianSeafoods } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianSalad) {
  return <List items={indianSalad.items} price={indianSalad.prices} />;
}

function createTwoList(indianSeafood) {
  return <List items={indianSeafood.items} price={indianSeafood.prices} />;
}

const IndianSalad = (props) => {
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
          <div className="list-wrapper">{indianSalads.map(createList)}</div>
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
            {indianSeafoods.map(createTwoList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianSalad;
