import React from "react";
import "./advanced-booking.css";
import { AiFillCaretDown } from "react-icons/ai";
import DottedImage from "../../images/dotted-bg.png";
import Cabbage from "../../images/cabbage.png";
import Lettuce from "../../images/lettuce.png";
const AdvancedBooking = () => {
  return (
    <section className="advanced-booking">
      <img src={Lettuce} className="dotted-bg booking-card-lettuce" />
      <div className="booking-card">
        <img src={DottedImage} className="dotted-bg booking-card-dotted1" />
        <img src={DottedImage} className="dotted-bg booking-card-dotted2" />
        <div className="booking-card-content">
          <div className="head-line"></div>
          <h3 className="p-regular booking-head text-blue">advanced booking</h3>
          <input className="booking-input" placeholder="search restaurant" />
          <button className="booking-submit p-regular">GO</button>
          <div className="booking-date-time">
            <div className="booking-date">
              <label for="b-date">
                <p className="p-regular text-blue">
                  Date <AiFillCaretDown />
                </p>
              </label>
              <input id="b-date" type="date" data-date-inline-picker="true" />
            </div>
            <div className="booking-time">
              <label for="b-time">
                <p className="p-regular text-blue">
                  Time <AiFillCaretDown />
                </p>
              </label>
              <select id="b-time">
                <option value="11.00">11.00 AM</option>
                <option value="11.30">11.30 AM</option>
                <option value="12.00">12.00 AM</option>
                <option value="12.30">12.30 AM</option>
                <option value="13.00">01.00 PM</option>
                <option value="13.30">01.30 PM</option>
                <option value="14.00">02.00 PM</option>
                <option value="14.30">02.30 PM</option>
                <option value="15.00">03.00 PM</option>
                <option value="15.30">03.30 PM</option>
                <option value="16.00">04.00 PM</option>
                <option value="16.30">04.30 PM</option>
                <option value="17.00">05.00 PM</option>
                <option value="17.30">05.30 PM</option>
                <option value="18.00">06.00 PM</option>
                <option value="18.30">06.30 PM</option>
                <option value="19.00">07.00 PM</option>
                <option value="19.30">07.30 PM</option>
                <option value="20.00">08.00 PM</option>
                <option value="20.30">08.30 PM</option>
                <option value="21.00">09.00 PM</option>
                <option value="21.30" selected>
                  09.30 PM
                </option>
                <option value="22.00">10.00 PM</option>
                <option value="22.30">10.30 PM</option>
              </select>
            </div>
            <div className="booking-guest">
              <label for="guest">
                <p className="p-regular text-blue">
                  Guests <AiFillCaretDown />
                </p>
              </label>
              <select id="guest">
                <option value="1">single</option>
                <option value="2" selected>
                  2 People
                </option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <img src={Cabbage} className="dotted-bg booking-card-cabbage" />
    </section>
  );
};

export default AdvancedBooking;
