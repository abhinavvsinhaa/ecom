import React from "react";
import "./Style/home.css";
import Carosel from "./Carosel";
import Hover from "../Cards/HoverCard/Hover";
import Special from "../Cards/SpecialCard/Special";

const Home = () => {
  return (
    <div>
      <Carosel />
      <Special />
      <div className="product-container">
        <Hover />
        <Hover />
        <Hover />
      </div>
    </div>
  );
};

export default Home;
