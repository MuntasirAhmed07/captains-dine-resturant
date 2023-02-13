import React from "react";
import List from "../MenuList";
import { indianDosas, indianFuchkas } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianDosa) {
  return <List items={indianDosa.items} price={indianDosa.prices} />;
}

function createTwoList(indianFuchka) {
  return <List items={indianFuchka.items} price={indianFuchka.prices} />;
}

const IndianDosa = (props) => {
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
          <div className="list-wrapper">{indianDosas.map(createList)}</div>
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
          <div className="list-wrapper">{indianFuchkas.map(createTwoList)}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianDosa;
