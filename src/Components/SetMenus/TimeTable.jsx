import React from "react";
import "./table.css";

const MenuList = (props) => {
  return (
    <div>
      <div class="table-box">
        <div class="table-row ">
          <div class="table-cell first-cell-time">
            <p>Day</p>
          </div>
          <div class="table-cell middle-cell">
            <p>Item</p>
          </div>
          <div class="table-cell last-cell-time">
            <p>Price</p>
          </div>
        </div>
        <div class="table-row ">
          <div class="table-cell first-cell-time">
            <p>Saturday</p>
          </div>
          <div class="table-cell middle-cell">
            <p>Rice, Dal, Vegetable, Fish</p>
          </div>
          <div class="table-cell last-cell-time">
            <p>99/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-time">
            <p>Sunday</p>
          </div>
          <div class="table-cell middle-cell">
            <p>Rice, Dal, Vegetable, Chicken</p>
          </div>
          <div class="table-cell last-cell-time">
            <p>99/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-time">
            <p>Monday</p>
          </div>
          <div class="table-cell middle-cell">
            <p>Rice, Dal, Vegetable, Fish</p>
          </div>
          <div class="table-cell last-cell-time">
            <p>99/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-time">
            <p>Tuesday</p>
          </div>
          <div class="table-cell middle-cell">
            <p>Rice, Dal, Vegetable, Egg Curry</p>
          </div>
          <div class="table-cell last-cell-time">
            <p>99/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-time">
            <p>Wednesday</p>
          </div>
          <div class="table-cell middle-cell">
            <p>Rice, Dal, Vegetable, Chicken</p>
          </div>
          <div class="table-cell last-cell-time">
            <p>99/-</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-time">
            <p>Thursday</p>
          </div>
          <div class="table-cell middle-cell">
            <p>Veg Khichuri, Egg Curry, Beef, Salad</p>
          </div>
          <div class="table-cell last-cell-time">
            <p>149/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
