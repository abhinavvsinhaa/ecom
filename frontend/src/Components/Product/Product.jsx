import React, { useState, useEffect } from "react";
import "./product.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import $ from "jquery";
import { useLocation } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Product = () => {
  let location = useLocation();
  let productId = location.pathname.split('/')[2];

  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [brand, setBrand] = useState(null);
  const [images, setImages] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState(null);  
  const [size, setSize] = useState(null);

  const [selectedSize, setSelectedSize] = useState(null);

  const [addToCartButtonMessage, setAddToCartButtonMessage] = useState("Add to cart")

  async function GetProduct() {
    let res = await fetch(`http://localhost:8080/api/v1/products/productId/${productId}`)
    let result = await res.json();
    setImages([result.image_link1, result.image_link2, result.image_link3]);
    setId(result.id);
    setName(result.name);
    setDescription(result.short_desc);
    setBrand(result.brand);
    result.quantity && setInStock(true)
    setRating(result.rating);
    setPrice(result.price);
    setSize(result.size);
  }

  useEffect(() => {
    GetProduct();
    $(".color-choose input").on("click", function () {
      var headphonesColor = $(this).attr("data-image");
      $(".active").fadeOut(300).removeClass("active");
      $(".left-column img[data-image = " + headphonesColor + "]")
        .fadeIn(250)
        .addClass("active");
      $(this).addClass("active");
    });
  }, []);
  

  const onSizeSelect = (e) => {
    setSelectedSize(e.target.value);
  } 

  const handleAddToCart = () => {
    async function fetchAPI() {
      let response = await fetch("http://localhost:8080/api/v1/cart", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Authorization": `Bearer ${cookies.getAll().JWT}`
        },
        body: JSON.stringify({
          productId: id,
          size: selectedSize
        })
      })

      let result = await response.json();
      if (result.message === "Product added into cart") {
        document.getElementsByClassName("cart-btn")[0].style.backgroundColor = "#000";
        setAddToCartButtonMessage("Added to Cart")
      }
    }

    fetchAPI();
  }

  return (
    <React.Fragment>
      <Navbar />
      <div>
        <main class="cat-container">
          <div class="left-column">
            <img data-image="black" src={images[0]} alt="" />
            <img data-image="blue" src={images[1]} alt="" />
            <img data-image="red" class="active" src={images[2]} alt="" />
          </div>
          <div class="right-column">
            <div class="product-description">
              <span>{brand}</span>
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
            <div class="product-configuration">
              <div class="product-color">
                {/* <span>Images</span> */}
                <div class="color-choose">
                  <div>
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
                          src={images[0]}
                          alt=""
                        />
                      </label>
                    </div>
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
                        src={images[2]}
                        className="label-img"
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
                        src={images[1]}
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
                  {
                    size && size.split(',').map(s => {
                      return <button key={s} onClick={onSizeSelect} value={s}>{s}</button>
                    })
                  }
                </div>
                <a href="#">Know more about our terms and conditions</a>
              </div>
            </div>
            <div class="product-price">
              <span>{price}</span>
              <button class="cart-btn" onClick={handleAddToCart}>
                {addToCartButtonMessage}
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
