import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./cart.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Header({ itemCount }) {
  return (
    <header className="header">
      <h1>Shopping Cart</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>

      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
}

function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
  return (
    <section className="cart-container">
      <ul className="cart-products">
        {products.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <a className="cart-a" href="#">
                    <img
                      className="cart-pro-img"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#" className="cart-a">
                      {product.name}
                    </a>
                  </div>
                  <div className="description">{product.description}</div>
                  <button id="quantity">{product.quantity}</button>
                  <div className="price">{formatCurrency(product.price)}</div>
                </div>
              </div>

              {/* <div className="col right">
                <div className="remove">
                  <svg
                    onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode,
}) {
  const total = subTotal - discount + tax;

  return (
    <section className="cart-footer">
      {/* <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input className="quantity" type="text" onChange={onEnterPromoCode} />
        <button className="cart-btn" type="button" onClick={checkPromoCode} />
      </div> */}

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
          <button className="cart-btn" type="button">
            Check Out
          </button>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    price: 5.99,
    quantity: 2,
  },
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 1",
    price: 9.99,
    quantity: 1,
  },
];
const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%",
  },
  {
    code: "AUTUMN",
    discount: "40%",
  },
  {
    code: "WINTER",
    discount: "30%",
  },
];
const TAX = 5;

function Page() {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);

  //Fetch product detail for each product in the cart
  async function fetchProductDetailsFromCart(productId, quantityInCart) {
    const response = await fetch(
      `http://localhost:8080/api/v1/products/productId/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    let product = {
      image: result.image_link1,
      name: result.name,
      description: result.short_desc.slice(0, 100) + "...",
      price: result.price,
      quantity: quantityInCart,
    };
    return product;
  }

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch("http://localhost:8080/api/v1/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${cookies.getAll().JWT}`,
        },
      });
      const result = await response.json();
      let productsInCart = [];
      await result.products.forEach(async (e) => {
        productsInCart.push(
          await fetchProductDetailsFromCart(e.productid, e.quantity)
        );
      });
      setTimeout(function () {
        setProducts(productsInCart);
      }, 500);
    }
    fetchApi();
    console.log(products)
  }, []);

  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);

  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);

  const discount = (subTotal * discountPercent) / 100;

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }
    console.log(cloneProducts, products, PRODUCTS);
    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index !== i;
    });

    setProducts(filteredProduct);
  };

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));

        return;
      }
    }
    alert("Sorry, the Promotional code you entered is not valid!");
  };

  return (
    <div>
      <Navbar />
      <Header itemCount={itemCount} />

      {products.length > 0 ? (
        <div>
          <ProductList
            products={products}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />

          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button className="cart-btn" onClick={() => setProducts(PRODUCTS)}>
            Shopping now
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });
}

export default Page;