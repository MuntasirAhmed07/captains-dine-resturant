import React from "react";
import List from "../MenuList";
import {
  indianAppetizers,
  indianPapadams,
  indianPaneers
} from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianAppetizer) {
  return <List items={indianAppetizer.items} price={indianAppetizer.prices} />;
}

function createTwoList(indianPapadam) {
  return <List items={indianPapadam.items} price={indianPapadam.prices} />;
}

function createThreeList(indianPaneer) {
  return <List items={indianPaneer.items} price={indianPaneer.prices} />;
}

const IndianPaneer = (props) => {
  return (
    <div className="card-container">
      <div>
        <h3>{props.title}</h3>
        <p>{props.item}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li> Price</li>
            </ul>
          </div>
          <div className="list-wrapper">{indianAppetizers.map(createList)}</div>
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
            {indianPapadams.map(createTwoList)}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <p>{props.anItem}</p>
        <div>
          <div>
            <ul className="item-price">
              <li>Items</li>
              <li>Price</li>
            </ul>
          </div>
          <div className="list-wrapper">
            {indianPaneers.map(createThreeList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPaneer;
