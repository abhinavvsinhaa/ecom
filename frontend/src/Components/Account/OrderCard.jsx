import React from "react";
import { Link } from "react-router-dom";
import "./ordercard.css";

const OrderCard = () => {
  return (
    <div class="container">
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
          <Link to="/orders/23">Track Order</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
