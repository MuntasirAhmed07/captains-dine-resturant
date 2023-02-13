import React from "react";
import List from "../MenuList";
import {
  indianCurryMuttons,
  indianCurryBeefs
} from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianCurryMutton) {
  return (
    <List items={indianCurryMutton.items} price={indianCurryMutton.prices} />
  );
}

function createTwoList(indianCurryBeef) {
  return <List items={indianCurryBeef.items} price={indianCurryBeef.prices} />;
}

const IndianCurryMutton = (props) => {
  return (
    <div className="card-container">
      <div>
        <h3>{props.title}</h3>
        <p>{props.item}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li> price</li>
            </ul>
          </div>
          <div className="list-wrapper">
            {indianCurryMuttons.map(createList)}
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
            {indianCurryBeefs.map(createTwoList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianCurryMutton;
