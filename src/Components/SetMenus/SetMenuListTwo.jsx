import React from "react";
import "./table.css";

const MenuList = (props) => {
  return (
    <div>
      <div class="table-box">
        <div class="table-row ">
          <div class="table-cell first-cell">
            <p>
              Plain Rice
              <br />
              Pomfret Fry
              <br />
              Beef Bhuna
              <br />
              Dal Butter Fry
              <br />
              Mixed Vegetable
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>525/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>
              Nasta/Paratha
              <br />
              Tandoori Chicken
              <br />
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
              Egg Fried Rice
              <br />
              Fried Pomfret
              <br />
              Masala Chicken
              <br />
              Mixed Vegetable
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>473/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>
              Egg Fried Rice
              <br />
              Chicken Fry <br />
              Mixed Vegetable
            </p>
          </div>
          <div class="table-cell last-cell">
            <p>399/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
