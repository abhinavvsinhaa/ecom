import React from "react";
import { Route } from "react-router-dom";
import "./hover.css";
import buyNow from "../../../Assets/buy.png";

const Hover = ({ detail }) => {
  const link = [detail.image_link1, detail.image_link2, detail.image_link3];
  const id = detail.id;

  const repeat = (e, rep) => {
    if (rep) e.setAttribute("src", link[1]);
    else e.setAttribute("src", link[0]);
  };

  React.useEffect(() => {}, []);

  return (
    <div className="product-card">
      <div className="upper-div">
        <Route
          render={({ history }) => (
            <img
              className="card-image"
              onMouseOver={(e) => {
                repeat(e.target, true, 0);
              }}
              onMouseOut={(e) => {
                repeat(e.target, false, 0);
              }}
              src={link[0]}
              alt="shoes"
              onClick={() => {
                history.push(`/category/${id}`);
              }}
            />
          )}
        />

        <div className="on-hover">
          <span className="rating">
            <span className="star-rating">
              {detail.rating}
              &nbsp;
              <img
                className="icon8-images"
                src="https://img.icons8.com/ios-glyphs/50/000000/star--v1.png"
                alt=""
              />
            </span>
            <span>{detail.brand}</span>
          </span>
        </div>
      </div>
      <div className="card-prop">
        <div className="d-flex-new">
          <p className="card-description">
            {detail.name.split(" ").slice(0, 2).join(" ")}
          </p>
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/48/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-3.png"
            className="cart-pic"
            alt="cart"
          />
        </div>
        <div className="div-price-buy">
          <p className="card-prise">₹{detail.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Hover;
