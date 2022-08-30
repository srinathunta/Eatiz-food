import React from "react";

const Food = (props) => {
  return (
    <div className="food-item">
      <div className="food-image">
        <img src={props.image} />
      </div>
      <div className="food-info">
        <p className="p-regular food-name">Ham Sandwich</p>
        <p className="p-bold food-price">$10.50</p>
      </div>
      <div className="food-desc">
        <p className="p-regular">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
      </div>
    </div>
  );
};

export default Food;
