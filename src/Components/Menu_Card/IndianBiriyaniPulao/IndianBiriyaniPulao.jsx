import React from "react";
import List from "../MenuList";
import { indianBiriyanis, indianPulaos } from "../../../Assets/Menu-Data/menuX";
import "../menuCard.css";

function createList(indianBiriyani) {
  return <List items={indianBiriyani.items} price={indianBiriyani.prices} />;
}

function createTwoList(indianPulao) {
  return <List items={indianPulao.items} price={indianPulao.prices} />;
}

const IndianBiriyani = (props) => {
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
          <div className="list-wrapper">{indianBiriyanis.map(createList)}</div>
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
          <div className="list-wrapper">{indianPulaos.map(createTwoList)}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianBiriyani;
