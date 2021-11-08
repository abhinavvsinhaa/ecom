import React from "react";
import "./hover.css";

const Hover = () => {
  return (
    <div class="product-card">
      <div>
        <img
          className="card-image"
          src="https://rukminim1.flixcart.com/image/452/542/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=50"
          alt="shoes"
        />
      </div>
      <div>
        <p className="card-title">GALAXY 5 SHOES</p>
        <p className="card-brand">Adidas</p>
        <p className="card-prise">₹2999.50</p>
      </div>
    </div>
  );
};

export default Hover;
