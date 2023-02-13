import React from "react";
import List from "../MenuList";
import { setMenus } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(setMenu) {
  return <List items={setMenu.items} price={setMenu.prices} />;
}

const SetMenuOne = (props) => {
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
          <div className="list-wrapper">{setMenus.map(createList)}</div>
        </div>
      </div>
    </div>
  );
};

export default SetMenuOne;
