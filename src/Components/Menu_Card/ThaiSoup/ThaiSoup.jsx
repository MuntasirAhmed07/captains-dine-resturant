import React from "react";
import List from "../MenuList";
import { thaiSoups } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(thaiSoup) {
  return <List items={thaiSoup.items} price={thaiSoup.prices} />;
}

const ThaiSoup = (props) => {
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
          <div className="list-wrapper">{thaiSoups.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default ThaiSoup;
