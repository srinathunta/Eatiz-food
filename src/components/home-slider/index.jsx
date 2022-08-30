import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import DeliciousFood from "../../images/delicious-food.png";
import ArrowLeft from "../../images/arrow-left.png";
import ArrowRight from "../../images/arrow-right.png";

import "./home-slider.css";

const HomeSlider = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={ArrowLeft} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={ArrowRight} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home-slider">
      <Slider {...settings}>
        <Slide
          location="Hyderbad"
          headText="Food"
          headSubText="Discover Restaurant & Delicious Food"
          image={DeliciousFood}
        />
        <Slide
          location="Mumbai"
          headText="demand"
          headSubText="Discover Restaurant & Delicious Food"
          image={DeliciousFood}
        />
        <Slide
          location="Bangalore"
          headText="deals"
          headSubText="Discover Restaurant & Delicious Food"
          image={DeliciousFood}
        />
      </Slider>
    </div>
  );
};

export default HomeSlider;
