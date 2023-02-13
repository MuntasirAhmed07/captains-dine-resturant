import React from "react";
import "./table.css";

const MenuList = (props) => {
  return (
    <div>
      <div class="table-box">
        <div class="table-row ">
          <div class="table-cell first-cell">
            <p>
              Morog Pulao
              <br />
              Boiled Egg & Salad
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>263/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>
              Hyderabadi Biriyani
              <br />
              Chicken Tikka Masala
              <br />
              Mixed Salad
              <br />
              Soft Drinks
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>368/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>
              Naan/Paratha
              <br />
              Tandoori Chicken
              <br />
              Dal Makhani
              <br />
              SoftDrinks
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>336/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>
              Soup (1 Cup) <br />
              Wonthon (2pcs) <br />
              Soft Drinks
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>263/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>
              {" "}
              Soup (1 Cup) <br />
              Tapa (2pcs) <br />
              Soft Drinks
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>315/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>
              Plain Pulao
              <br />
              Chicken Roast/Tandoori Chicken
              <br />
              Mixed Vegetable
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>336/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
