import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="first-type col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            <button className="first btn btn-lg btn-primary btn-scroll">
              Order Now <i class="fa-solid fa-basket-shopping"></i>
            </button>
            <button className="second btn btn-lg btn-primary btn-scroll">
              Learn More{" "}
              <i class="fa-solid fa-chevron-right fa-beat-fade fa-xs"></i>
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </header>
  );
}
