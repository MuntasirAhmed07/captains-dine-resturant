import React from "react";
import List from "../MenuList";
import { indianNaans } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianNaan) {
  return <List items={indianNaan.items} price={indianNaan.prices} />;
}

const IndianNaan = (props) => {
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
          <div className="list-wrapper">{indianNaans.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianNaan;
