import React from "react";
import "./Style/home.css";
import Carosel from "./Carosel";
import Hover from "../Cards/HoverCard/Hover";
import Special from "../Cards/SpecialCard/Special";

import i1 from "./images/cat1.jpg";
import i2 from "./images/cat2.jpg";
import i3 from "./images/cat3.jpg";
import i4 from "./images/cat4.jpg";
import i5 from "./images/cat5.jpg";

const Home = () => {
  return (
    <div>
      <Carosel />
      <Special />
      <div className="catalog-container">
        <p className="catalog-title">Top Rated Products</p>
        <div className="product-container-top">
          <img src={i1} alt="" />
          <img src={i2} alt="" />
          <img src={i4} alt="" />
          <img src={i3} alt="" />
          <img src={i5} className="hidden" alt="" />
        </div>
      </div>

      <div className="catalog-container">
        <p className="catalog-title">Top Rated Products</p>
        <div className="product-container">
          <Hover />
          <Hover />
          <Hover />
          <Hover />
        </div>
      </div>

      <div className="catalog-container">
        <p className="catalog-title">Deal Of The Day</p>
        <div className="product-container">
          <Hover />
          <Hover />
          <Hover />
          <Hover />
        </div>
      </div>
    </div>
  );
};

export default Home;
