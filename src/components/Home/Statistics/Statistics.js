import React from "react";
import "./Statistics.css";
import DataStats from "../../../DataStats";

export default function Statistics(props) {
  const info = DataStats.map((ele) => {
    return (
      <div className="info col-md-3 col-sm-3">
        <i class="icon-piggy"></i>
        <p>
          <span>{ele.num}</span>+
        </p>
        <h2>{ele.title}</h2>
      </div>
    );
  });
  return (
    <>
      <div className="stat">
        <div className="container">
          <div className="row">{info}</div>
        </div>
      </div>
    </>
  );
}
