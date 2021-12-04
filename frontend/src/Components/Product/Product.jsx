import React from "react";
import "./product.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import $ from "jquery";

const Product = () => {
  $(document).ready(function () {
    $(".color-choose input").on("click", function () {
      var headphonesColor = $(this).attr("data-image");
      $(".active").fadeOut(100).removeClass("active");
      $(".left-column img[data-image = " + headphonesColor + "z]")
        .fadeIn(250)
        .addClass("active");
      $(this).addClass("active");
    });
  });
  const img_1 =
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f94ed87f-963e-4bfb-b88d-4f476a0e79df/wildhorse-7-trail-running-shoes-XdK82N.png";
  const img_2 =
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/744e4eff-1a7e-427e-9a26-97743a821f13/wildhorse-7-trail-running-shoes-XdK82N.png";
  const img_3 =
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4891c4a3-1f91-4748-917d-722ac3e5e454/wildhorse-7-trail-running-shoes-XdK82N.png";

  return (
    <React.Fragment>
      <Navbar />
      <div>
        <main class="cat-container">
          <div class="left-column">
            <img data-image="black" src={img_1} alt="" />
            <img data-image="blue" src={img_2} alt="" />
            <img data-image="red" class="active" src={img_3} alt="" />
          </div>
          <div class="right-column">
            <div class="product-description">
              <span>Nike</span>
              <h1>Nike Wildhorse 7</h1>
              <p>
                Take on those tough and extreme trail runs with the rugged build
                of the Nike Wildhorse 7.Confidently take on rocky terrain with
                high-abrasion rubber on the outsole that adds durable
                traction.The upper delivers durable ventilation with support
                where you need it.Foam midsole cushioning gives a neutral feel
                and provides responsiveness on every mile.e
              </p>
            </div>
            <div class="product-configuration">
              <div class="product-color">
                <span>Color</span>
                <div class="color-choose">
                  <div>
                    <input
                      data-image="red"
                      type="radio"
                      id="red"
                      name="color"
                      value="red"
                      checked
                    />
                    <label for="red">
                      <img
                        data-image="black"
                        className="label-img"
                        src={img_1}
                        alt=""
                      />
                    </label>
                  </div>
                  <div>
                    <input
                      data-image="blue"
                      type="radio"
                      id="blue"
                      name="color"
                      value="blue"
                    />
                    <label for="blue">
                      <img
                        data-image="blue"
                        src={img_2}
                        className="label-img"
                        alt=""
                      />
                    </label>
                  </div>
                  <div>
                    <input
                      data-image="black"
                      type="radio"
                      id="black"
                      name="color"
                      value="black"
                    />
                    <label for="black">
                      <img
                        data-image="blue"
                        src={img_3}
                        className="label-img"
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="cable-config">
                <span>Size Available</span>
                <div class="cable-choose">
                  <button>5</button>
                  <button>8</button>
                  <button>9</button>
                  <button>12</button>
                </div>
                <a href="#">Know more about our terms and conditions</a>
              </div>
            </div>
            <div class="product-price">
              <span>₹14008</span>
              <a href="#" class="cart-btn">
                Add to cart
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
