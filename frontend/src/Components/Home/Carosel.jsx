import React from "react";
import "./Style/carousel.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import img_1 from "./images/carosel_1.jpg";
import img_2 from "./images/carosel_2.jpg";
import img_3 from "./images/carosel_3.jpg";
import img_4 from "./images/carosel_4.jpg";
import img_5 from "./images/carosel_5.jpg";

const Carousel = () => {
  return (
    <Splide
      options={{
        type: "loop",
        interval: "3000",
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        arrows: "slider",
      }}
    >
      <SplideSlide>
        <img src={img_2} className="carousel_img_1" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src={img_1} className="carousel_img_1" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src={img_3} className="carousel_img_1" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src={img_4} className="carousel_img_1" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src={img_5} className="carousel_img_1" alt="" />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
