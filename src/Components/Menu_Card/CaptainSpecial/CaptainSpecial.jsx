import React from "react";
import List from "../MenuList";
import { captainsDineSpecials } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(captainsDineSpecial) {
  return (
    <List
      items={captainsDineSpecial.items}
      price={captainsDineSpecial.prices}
    />
  );
}

const CaptainSpecial = (props) => {
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
            {captainsDineSpecials.map(createList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSpecial;
