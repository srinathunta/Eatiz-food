import React from "react";
import "./explore-food.css";
import Food from "./Food";
import Food1 from "../../images/food1.png";
import Food2 from "../../images/food2.png";
import Food3 from "../../images/food3.png";
import Food4 from "../../images/food4.png";
import Food5 from "../../images/food5.png";
import Food6 from "../../images/food6.png";
import Fade from "react-reveal/Fade";

const ExploreFood = () => {
  return (
    <section className="explore-food">
      <div className="app_wrapper">
        <div className="explore-food-title">
          <p className="p-regular explore-food-head">Explore Our Foods</p>
          <p className="p-regular explore-food-subhead">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
            <br /> ut labore et dolore magna.
          </p>
        </div>
        <div className="food-items">
          <Fade bottom>
            <Food
              image={Food1}
              title="Ham Sandwich"
              price="10.50"
              desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            />
          </Fade>
          <Fade bottom delay={100}>
            <Food
              image={Food2}
              title="Ham Sandwich"
              price="10.50"
              desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            />
          </Fade>
          <Fade bottom delay={200}>
            <Food
              image={Food3}
              title="Ham Sandwich"
              price="10.50"
              desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            />
          </Fade>
          <Fade bottom delay={300}>
            <Food
              image={Food4}
              title="Ham Sandwich"
              price="10.50"
              desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            />
          </Fade>
          <Fade bottom delay={400}>
            <Food
              image={Food5}
              title="Ham Sandwich"
              price="10.50"
              desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            />
          </Fade>
          <Fade bottom delay={500}>
            <Food
              image={Food6}
              title="Ham Sandwich"
              price="10.50"
              desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ExploreFood;
