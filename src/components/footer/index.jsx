import React from "react";
import "./footer.css";
import Leaves from "../../images/leaves.png";
import { BsArrowRight } from "react-icons/bs";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <img src={Leaves} className="dotted-bg booking-card-leaves" />
      <div className="app_wrapper">
        <div className="footer-container">
          <div className="footer-content">
            <p className="p-regular footer-head">
              Get notified <br />
              about new amazing products
            </p>
            <p className="p-regular footer-subhead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> It has been the industry's standard dummy text ever since.
            </p>
            <div className="newsletter">
              <input
                type="email"
                className="newsletter-email"
                placeholder="E-mail"
              />
              <button type="submit" className="newsletter-submit">
                <BsArrowRight />
              </button>
            </div>
            <ul className="footer-list">
              <li>
                <a className="p-regular" href="#">
                  Product
                </a>
              </li>
              <li>
                <a className="p-regular" href="#">
                  Company
                </a>
              </li>
              <li>
                <a className="p-regular" href="#">
                  Learn more
                </a>
              </li>
              <li>
                <a className="p-regular" href="#">
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-bottom-list">
            <li>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <p>© 2019 indianpix</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
