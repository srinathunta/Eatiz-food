import React from "react";
import Food1 from "../../images/food-1.png";
import Food2 from "../../images/food-2.png";
import DottedImage from "../../images/dotted-bg.png";
import "./top-restaurant.css";
import { AiFillRightCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const TopRestaurant = () => {
  return (
    <section className="top-restaurant">
      <div className="app_wrapper">
        <div className="section-top">
          <Fade left>
            <div className="head-left">
              <p className="text-blue p-regular left-red-border">
                some top restaurant for <br />
                dining out or in!
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="head-right">
              <p className="p-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br />
                do eiusmod tempor incididunt ut labore et dolore magna <br />
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="restaurant-container">
        <div className="food-cards">
          <Fade up>
            <div className="food-card">
              <img src={Food2} />
              <div className="card-cont">
                <p className="card-head p-bold">Fire Water</p>
                <p className="card-para p-regular">
                  we are all about we are all about to the fullest and all
                  content dining out or in!dining out or in!
                </p>
                <div className="card-footer">
                  <p className="card-location p-semibold">
                    <MdLocationOn />
                    Hitech City
                  </p>
                  <p className="card-button p-semibold">
                    <a href="#">
                      Book Now
                      <BsArrowRight />
                    </a>
                  </p>
                </div>
              </div>
              <img src={DottedImage} className="dotted-bg foddcard-dotted1" />
            </div>
          </Fade>
          <Fade up delay={200}>
            <div className="food-card">
              <img src={Food1} />
              <div className="card-cont">
                <p className="card-head p-bold">The Wonton</p>
                <p className="card-para p-regular">
                  we are all about we are all about to the fullest and all
                  content dining out or in!dining out or in!
                </p>
                <div className="card-footer">
                  <p className="card-location p-semibold">
                    <MdLocationOn />
                    Gachibowli
                  </p>
                  <p className="card-button p-semibold">
                    <a href="#">
                      Book Now
                      <BsArrowRight />
                    </a>
                  </p>
                </div>
              </div>
              <img src={DottedImage} className="dotted-bg foddcard-dotted2" />
            </div>
          </Fade>
        </div>
        <div className="restaurant-seemore">
          <hr className="redline" />
          <AiFillRightCircle />
          <p className="p-regular">
            <a href="#">see more</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopRestaurant;
