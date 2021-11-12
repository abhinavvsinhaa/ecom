import React from "react";
import Search from "./Search";
import "./navbar.css";
import LoginBtn from "./Loginbtn";
import arrowLeft from "./arrow-left.png";
import LogoDesktop from '../../Assets/logo1.1.jpeg';
import LogoPhone from "../../Assets/logo1.2.jpeg";

const Navbar = () => {
  React.useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    });
  }, []);

  const hamClick = () => {
    const ham = document.getElementById("ham");
    if (!ham.classList.contains("opened")) {
      document.querySelector(".nav-menu").style.width = "100vw";
    } else {
      document.querySelector(".nav-menu").style.width = "0vw";
    }
    ham.classList.toggle("opened");
    ham.setAttribute("aria-expanded", ham.classList.contains("opened"));
  };
  return (
    <nav>
      <div className="nav-mb">
        <div className="nav-align">
        <span className="nav-brand">
            <img src={LogoPhone} alt="ShoeMania Logo" height="50px"/>
        </span>
        <button className="hamburger" onClick={hamClick} aria-label="Main Menu">
          <svg id="ham" width="80" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        </div>
        {/* <button
          className="arrow-left to-left"
          onClick={hamClick}
          aria-label="Main Menu"
        >
<<<<<<< HEAD
          <img className="arrow-left-img" src={arrowLeft} alt=""/>
        </button> */}
=======
          <img className="arrow-left-img" src={arrowLeft} alt="" />
        </button>
>>>>>>> af52b68f8cbf00e1633f781bf57a8c4bf16fe0be
        <div className="nav-menu">
            <img className="arrow-left-img" src={arrowLeft} alt="" onClick={hamClick} aria-label="Main Menu"/>
          <a className="menu-link" href="/home">
            Home
          </a>
          <a className="menu-link" href="/category">
            Category
          </a>
          <a className="menu-link" href="/contact">
            Contact
          </a>
          <LoginBtn />
          <Search />
        </div>
      </div>
      <div className="nav-cp">
        <ul className="nav-links">
          <li>
            <img src={LogoDesktop} alt="ShoeMania Logo" width="180px"/>
          </li>
          <li className="nav-navigation">
            <a href="/home">Home</a>
            <a href="/category">Category</a>
            <a href="/contact">Contact</a>
          </li>
          <li className="to-left">
            <LoginBtn />
          </li>
          <li className="">
            <Search />
          </li>
        </ul>
      </div>
      <div className="extra-spacing"></div>
    </nav>
  );
};

export default Navbar;
