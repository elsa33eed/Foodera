/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./AboutUs.css";
import photo from "../../../Imgs/about1.png";
import photo2 from "../../../Imgs/about2.png";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row center-content">
          <div className="col-12">
            <div className="row">
              <div className="image-one col-md-7">
                <img
                  className="pull-left img-responsive"
                  src={photo}
                  alt="about img"
                />
              </div>
              <div className="info-one col-md-5">
                <h3>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <a href="#" className="btn btn-lg btn-primary">
                  Learn More <i class="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row center-content">
              <div className="info-two col-md-5">
                <h3>
                  We make everything by hand with the best possible ingredients.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <ul class="list">
                  <li>
                    <i class="fa fa-check"></i> Etiam sed dolor ac diam
                    volutpat.
                  </li>
                  <li>
                    <i class="fa fa-check"></i> Erat volutpat aliquet imperdiet.
                  </li>
                  <li>
                    <i class="fa fa-check"></i> purus a odio finibus bibendum.
                  </li>
                </ul>
                <a href="#" class="btn btn-lg btn-primary">
                  Learn More <i class="icon-arrow-right"></i>
                </a>
              </div>
              <div className="image-two col-md-7">
                <img
                  src={photo2}
                  className="pull-left img-responsive"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
