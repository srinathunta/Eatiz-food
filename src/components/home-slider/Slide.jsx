import React from "react";
import { MdLocationOn } from "react-icons/md";
import DottedImage from "../../images/dotted-bg.png";
import LettuceImage from "../../images/lettuce.png";
import Fade from "react-reveal/Fade";

const Slide = (props) => {
  return (
    <section className="slide">
      <div className="app_wrapper">
        <div className="slide-container">
          <div className="slide-content">
            <h1 className="p-bold slide-head text-blue">{props.headText}</h1>

            <Fade left>
              <h2 className="p-bold slide-sub-head text-blue">
                {props.headSubText}
              </h2>
            </Fade>
            <Fade left>
              <div className="search-rest">
                <input
                  className="booking-input"
                  placeholder="search restaurant, food"
                />
                <button className="booking-submit p-regular">GO</button>
              </div>
            </Fade>
            <div className="p-regular slide-location">
              <MdLocationOn />
              {props.location}
            </div>
          </div>
          <Fade right>
            <div className="slide-image images">
              <img src={DottedImage} className="dotted-bg slider-dotted1" />
              <img src={DottedImage} className="dotted-bg slider-dotted2" />
              <img src={props.image} className="main-image" />
              <img src={LettuceImage} className="lettuce-bg" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Slide;
