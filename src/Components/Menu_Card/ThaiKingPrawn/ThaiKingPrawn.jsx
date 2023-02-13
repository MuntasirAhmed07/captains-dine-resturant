import React from "react";
import List from "../MenuList";
import { thaiKingPrawns } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiKingPrawns) {
  return <List items={thaiKingPrawns.items} price={thaiKingPrawns.prices} />;
}

const ThaiKingPrawn = (props) => {
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
          <div className="list-wrapper">{thaiKingPrawns.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default ThaiKingPrawn;
