import React from "react";
import Apple from "../../images/apple-store.png";
import Google from "../../images/play-store.png";
import Mobile from "../../images/mobile.png";
import Cabbage from "../../images/cabbage.png";
import DottedImage from "../../images/dotted-bg.png";
import Slide from "react-reveal/Slide";

import "./exciting-deals.css";

const ExcitingDeals = () => {
  return (
    <section className="exciting-deals">
      <div className="app_wrapper">
        <div className="deals_container">
          <div className="deals-left">
            <Slide left>
              <h3 className="p-regular deals-head">
                Download app for <br />
                Exciting Deals
              </h3>
            </Slide>
            <Slide left delay={100}>
              <p className="p-regular deals-subhead">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed do
              </p>
            </Slide>
            <Slide left delay={200}>
              <div className="play-store">
                <a href="#">
                  <img src={Apple} />
                </a>
                <a href="#">
                  <img src={Google} />
                </a>
              </div>
            </Slide>
          </div>
          <div className="deals-right">
            <img className="mobile" src={Mobile} />
            <img src={DottedImage} className="dotted-bg booking-card-dotted1" />
            <img src={Cabbage} className="dotted-bg booking-card-cabbage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcitingDeals;
