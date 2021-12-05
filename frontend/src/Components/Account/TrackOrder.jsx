import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./trackOrder.css";

const OrderCard = () => {
  return (
    <div class="container-odr">
      <div class="order-card card p-4 mt-3">
        <div class="first d-flex justify-content-between align-items-center mb-3">
          <div class="info">
            <span class="d-block name">Nike Air 700</span>{" "}
            <span class="order">Order - 4554645</span>{" "}
          </div>
          <img src="https://i.imgur.com/NiAVkEw.png" width="40" />
        </div>
        <div class="detail">
          <span class="d-block summery">
            Your order has been dispatched. we are delivering you order.
          </span>
          <Link to="/category/2">View Product</Link>
        </div>
      </div>
    </div>
  );
};

const TrackOrder = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main_container">
        <div class="container padding-bottom-3x mb-1">
          <div class="card mb-3">
            <div class="p-4 text-center text-white text-lg bg-dark rounded-top">
              <span class="text-uppercase">Tracking Order No - </span>
              <span class="text-medium">001698653lp</span>
            </div>
            <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
              <div class="w-100 text-center py-1 px-2">
                <span class="text-medium">Shipped Via:</span> UPS Ground
              </div>
              <div class="w-100 text-center py-1 px-2">
                <span class="text-medium">Status:</span> Checking Quality
              </div>
              <div class="w-100 text-center py-1 px-2">
                <span class="text-medium">Expected Date:</span> APR 27, 2021
              </div>
            </div>
            <div class="card-body">
              <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-cart"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Confirmed Order</h4>
                </div>
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-config"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Processing Order</h4>
                </div>
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-medal"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Quality Check</h4>
                </div>
                <div class="step">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-car"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Product Dispatched</h4>
                </div>
                <div class="step">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-home"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Product Delivered</h4>
                </div>
              </div>
            </div>
            <OrderCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrackOrder;
