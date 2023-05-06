import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./testimonials.css";
import simab from "../../../Imgs/simab-dave.jpg";
import john from "../../../Imgs/john.jpg";

export default function Testimonials() {
  return (
    <section className="testimonials text-center">
      <div className="container">
        <h2 className="text-center">Testimonials</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block text-center"
              src={simab}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h3>Simab Dave - Web Designer</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={john} alt="Second slide" />

            <Carousel.Caption>
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live far from the countries Vokalia."
              </p>
              <h3>Johnthan Doe - UX Designer</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={simab} alt="Third slide" />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <h3>Maccy Doe - Front End</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
