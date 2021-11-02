import React from "react";
import Search from "./Search";
import "./navbar.css";
import LoginBtn from "./Loginbtn";

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

  return (
    <nav>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="nav-links">
        <li>
          <span className="nav-brand">Shoe Mania</span>
        </li>
        <li>
          <a href="/home">Home</a>
          <a href="/category">Category</a>
          <a href="contact">Contact</a>
        </li>
        <li className="to-left">
          <LoginBtn />
        </li>
        <li className="">
          <Search />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
