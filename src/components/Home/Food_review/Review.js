import React from "react";
import "./review.css";
import Data from "../../../Data";

export default function Review() {
  const col = Data.map((ele) => {
    return (
      <div className="col-md-4">
        <div className="card card-product">
          <div className="img-wrap">
            <img src={ele.img} alt="img" />
          </div>
          <div className="info-wrap">
            <h4 className="title">{ele.title}</h4>
            <p className="desc"> Time: {ele.time} | Serves: 1 </p>
            <div className="price-wrap h3">
              <span className="price-new">{ele.newPrice}</span>{" "}
              <del className="price-old">{ele.oldPrice}</del>
            </div>
          </div>
          <div className="bottom-wrap">
            <a
              href=""
              className="btn btn-sm btn-primary float-right"
              data-toggle="modal"
              data-target="#modalContactForm"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="review">
      <div className="container">
        <div className="about-inline text-center">
          <h3>Explore Our Foods </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div className="row">{col}</div>
      </div>
    </section>
  );
}
