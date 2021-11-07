import React from "react";
import "./hover.css";
const Hover = () => {
  return (
    <div className="page-inner">
      <div className="row">
        <div className="el-wrapper">
          <div className="box-up">
            <img
              className="img"
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15674090/2021/9/30/de9fc31b-0a0b-4ef6-bb7e-0f9ec1c103bb1632997313011Chunkycombatboots1.jpg"
              alt=""
            />
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">
                  Women Black Solid Chunky Combat Boots
                </span>
                <span className="p-company">H&M</span>
              </div>
              <div className="a-size">
                Available sizes : <span className="size">S , M , L , XL</span>
              </div>
            </div>
          </div>

          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>

            <a className="cart" href="#">
              <span className="price">$120</span>
              <span className="add-to-cart">
                <span className="txt">Add in cart</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover;
