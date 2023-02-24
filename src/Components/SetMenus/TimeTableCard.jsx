import React from "react";
import "./setMenus.css";
import TimeTable from "./TimeTable.jsx";

const TimeTableCard = (props) => {
  return (
    <div className="time-container">
      <div>
        <h3>{props.title}</h3>
        <div>
          <TimeTable />
        </div>
      </div>
    </div>
  );
};

export default TimeTableCard;
