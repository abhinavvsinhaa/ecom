import React from "react";
import "./hover.css";

const Hover = ({ detail }) => {
  const link = [detail.image_link1, detail.image_link2, detail.image_link3];
  const repeat = (e, rep) => {
    if (rep) e.setAttribute("src", link[1]);
    else e.setAttribute("src", link[0]);
  };
  React.useEffect(() => {}, []);

  return (
    <div class={`product-card`}>
      <div className="upper-div">
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
        />
        <div className="on-hover">
          <span className="rating">
            <span>
              {detail.rating}
              <img
                className="icon8-images"
                src="https://img.icons8.com/ios-glyphs/50/000000/star--v1.png"
                alt=""
              />
            </span>
            <span>S M L XL</span>
          </span>
        </div>
      </div>
      <div className="card-prop">
        <div className="d-flex-new">
          <p className="card-title">{detail.brand}</p>
          <p className="card-description">
            {detail.name.split(" ").slice(0, 2).join(" ")}
          </p>
        </div>
        <div className="d-flex-new">
          <p className="card-prise">₹{detail.price}</p>
          <img
            className="icon8-images"
            src="https://img.icons8.com/material-outlined/24/000000/buy.png"
            alt="buy now"
          />
        </div>
      </div>
    </div>
  );
};

export default Hover;
