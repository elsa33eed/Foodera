import React from "react";
import "./Parlex.css";

export default function Parlex() {
  return (
    <section className="parlex">
      <div className="container">
        <div className="row text-center">
          <h1>
            When a man's stomach is full it makes no <br /> difference whether
            he is rich or poor.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio <br />
            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
          </p>
          <br />
          <br />
          <a
            href="https://www.youtube.com/watch?v=bZx8rPd-PKQ"
            className="swipebox-video"
          >
            <div className="intro-video-pop">
              <i className="fa fa-play"></i> Watch Our Story
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
