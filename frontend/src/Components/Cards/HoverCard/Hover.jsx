import React from "react";
import "./hover.css";

const Hover = () => {
  return (
    <div class={`product-card`}>
      <div>
        <img
          className="card-image"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15674090/2021/9/30/de9fc31b-0a0b-4ef6-bb7e-0f9ec1c103bb1632997313011Chunkycombatboots1.jpg"
          alt="shoes"
        />
      </div>
      <div>
        <p className="card-title">H&M</p>
        <p className="card-description">Classy Boots</p>
        <p className="card-prise">₹2999.50</p>
      </div>
    </div>
  );
};

export default Hover;
