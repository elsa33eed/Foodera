import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer2" id="footer2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footerP text-center">
              <a href="#">Register</a>
              <a href="#">Forum</a>
              <a href="#">Affiliate</a>
              <a href="#">FAQ</a>
            </div>
            <div className="footer-social space30 text-center col-md-12">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-dribbble"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copy">
        <div className="container">© 2023. Foodera. All rights reserved.</div>
      </div>
    </>
  );
}
