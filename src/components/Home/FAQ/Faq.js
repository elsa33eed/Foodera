import React from "react";
import "./Faq.css";

export default function Faq() {
  return (
    <>
      <section className="faq">
        <div className="container">
          <h3 className="text-center">Frequently Asked Questions</h3>
          <div className="row">
            <div className="col-md-6">
              <h5>
                <span>~</span> Is Foodera Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                <span>~</span> Do you bake breads containing animal fats or
                products?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                <span>~</span> Can I order your products online?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                <span>~</span> When are you opening a shop near me?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* parlex section */}
      <section
        class="parallax-content2 parallax2 text-center"
        data-stellar-background-ratio="0.4"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            <div class="col-md-4">
              <a href="#" class="btn btn-lg btn-primary pull-left">
                Learn More <i class="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe section */}
      <section class="text-center">
        <div class="cta-wrap subscribe-elt2 ">
          <div class="container">
            <div class="col-md-12">
              <h1>
                Hurry up! Subscribe our newsletter <br /> and get
                <span> 25% Off</span>
              </h1>
              <p>Limited time offer for this month. No credit card required.</p>

              <form
                class="intro-newsletter"
                action="#"
                id="invite"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-8">
                    <input
                      class="e-mail"
                      placeholder="Email Address here"
                      name="email"
                      id="eaddress"
                      data-validate="validate(required, email)"
                      type="email"
                    />
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-primary btn-block" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
