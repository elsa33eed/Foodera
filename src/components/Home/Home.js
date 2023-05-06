import React from "react";
import Navbar from "../Navs/Navbar";
import Header from "./Header";
import Statistics from "./Statistics/Statistics";
import AboutUs from "./AboutUs/AboutUs";
import Parlex from "./Parlex/Parlex";
import Review from "./Food_review/Review";
import Testimonials from "./testimonials/testimonials";
import Faq from "./FAQ/Faq";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Statistics />
      <AboutUs />
      <Parlex />
      <Review />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
