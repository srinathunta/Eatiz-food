import React from "react";
import "./our-services.css";
import meeting from "../../images/meeting.png";
import scooter from "../../images/scooter.png";
import dish from "../../images/dish.png";
import RedLeftArrow from "../../images/red-right-arrow.png";
import RedRightArrow from "../../images/red-left-arrow.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
const OurServices = () => {
  return (
    <section className="our-services">
      <div className="app_wrapper">
        <div className="section-top">
          <Fade left>
            <div className="head-left">
              <p className="text-blue p-regular left-red-border">
                Our <br />
                Services
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
      <div className="services-grid">
        <Flip left>
          <div className="meeting dark-bg">
            <img src={meeting} />
          </div>
        </Flip>
        <Flip left>
          <div className="booking">
            <p className="p-semibold text-blue services-head">
              advanced table <br />
              booking
              <hr className="big-red" />
              <hr className="small-red" />
            </p>
            <p className="p-regular services-subhead">
              Lorem ipsum dolor sit
              <br /> amet, consectetur{" "}
            </p>

            <img src={RedRightArrow} className="redrightarrow" />
          </div>
        </Flip>
        <Flip left>
          <div className="scooter dark-bg">
            <img src={scooter} />
            <p className="p-semibold text-blue services-head">
              free home delivery <br />
              at your door steps
            </p>
            <p className="p-regular services-subhead">
              Lorem ipsum dolor sit
              <br /> amet, consectetur{" "}
            </p>
            <p>
              <hr className="big-red" />
              <hr className="small-red" />
            </p>
          </div>
        </Flip>
        <Flip left>
          <div className="food">
            <p className="p-semibold text-blue services-head">
              Food for Free <br />
              <hr className="big-red" />
              <hr className="small-red" />
              24/7
            </p>
            <p className="p-regular services-subhead">
              Lorem ipsum dolor sit
              <br /> amet, consectetur{" "}
            </p>
            <img src={RedLeftArrow} className="redleftarrow" />
          </div>
        </Flip>
        <Flip left>
          <div className="dish dark-bg">
            <img src={dish} />
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default OurServices;
