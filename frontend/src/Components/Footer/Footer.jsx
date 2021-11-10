import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Poppins:200i,300,400&display=swap"
        rel="stylesheet"
      />

      <footer id="contact">
        <ul>
          <div id="icon-container">
            <a href="#">
              <div id="icon">
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
              </div>
            </a>
            <a href="#">
              <div id="icon">
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
              </div>
            </a>
            <a href="#">
              <div id="icon">
                <li>
                  <i class="fab fa-facebook-f"></i>
                </li>
              </div>
            </a>
            <a href="#">
              <div id="icon">
                <li>
                  <i class="far fa-envelope"></i>
                </li>
              </div>
            </a>
            <a href="#">
              <div id="icon">
                <li>
                  <i class="fab fa-free-code-camp"></i>
                </li>
              </div>
            </a>
          </div>
        </ul>
        <p>&copy 2020-2021, ShoeMania</p>
      </footer>
    </div>
  );
};

export default Footer;
