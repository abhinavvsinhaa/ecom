import React from "react";
import "./special.css";
import $ from "jquery";

const Special = () => {
  React.useEffect(() => {
    $(".product-colors span").click(function () {
      $(".product-colors span").removeClass("active");
      $(this).addClass("active");
      $(".active").css("border-color", $(this).attr("data-color-sec"));
      $(".container-pre-sp").css(
        "background",
        `${$(this).attr("data-color-primary")} !important`
      );
      $(".content h2").css("color", $(this).attr("data-color-sec"));
      $(".content h3").css("color", $(this).attr("data-color-sec"));
      $(".container-sp .imgBx").css(
        "background",
        $(this).attr("data-color-sec")
      );
      $(".container-sp .details button").css(
        "background",
        $(this).attr("data-color-sec")
      );
      $(".imgBx img").attr("src", $(this).attr("data-pic"));
    });
  }, []);
  return (
    <div className="container-pre-sp">
      <div className="container-sp">
        <div className="imgBx">
          <img
            src="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
            alt="Nike Jordan Proto-Lyte"
          />
        </div>
        <div className="details">
          <div className="content">
            <h2>
              Shoe Mania Special
              <br />
              <span>Air Jordans</span>
            </h2>
            <p>
              Featuring soft foam cushioning and lightweight, woven fabric in
              the upper, the Jordan Proto-Lyte is made for all-day, bouncy
              comfort. Lightweight Breathability: Lightweight woven fabric with
              real or synthetic leather provides breathable support.
            </p>
            <p className="product-colors">
              Available Colors:
              <span
                className="black active"
                data-color-primary="#000"
                data-color-sec="#212121"
                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
              ></span>
              <span
                className="red"
                data-color-primary="#7E021C"
                data-color-sec="#bd072d"
                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"
              ></span>
              <span
                className="orange"
                data-color-primary="#CE5B39"
                data-color-sec="#F18557"
                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"
              ></span>
            </p>
            <div className="d-flex">
              <h3>Rs. 12,800</h3>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
