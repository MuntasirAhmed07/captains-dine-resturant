import React from "react";
import List from "../MenuList";
import {
  indianCurryDals,
  indianCurryVegetables
} from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianCurryDal) {
  return <List items={indianCurryDal.items} price={indianCurryDal.prices} />;
}

function createTwoList(indianCurryVegetable) {
  return (
    <List
      items={indianCurryVegetable.items}
      price={indianCurryVegetable.prices}
    />
  );
}

const IndianCurryDal = (props) => {
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
          <div className="list-wrapper">{indianCurryDals.map(createList)}</div>
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
            {indianCurryVegetables.map(createTwoList)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianCurryDal;
