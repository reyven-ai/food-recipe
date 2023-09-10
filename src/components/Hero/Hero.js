import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// import React from "react";
// import { Link } from "react-router-dom";
// import classes from "./Hero.module.css"; // Make sure to import your CSS module

function Hero() {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.hero}>
        <div className={classes.content}>
          <div className={classes.contents}>
            <h1>
              Unlock the Art of Cooking with Our Handpicked Selection of Popular
              and Exquisite Recipes from Every Corner of the Globe
            </h1>
            <p>
              Discover Delicious Recipes from Around the World and Master Your
              Culinary Skills Today!
            </p>
          </div>
          <div className={classes.links}>
            <Link to="/discover">Discover</Link>
          </div>
        </div>
        <div className={classes.div}>
          <h2>
            Popular Meals in the <span>Philippines</span>
          </h2>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            showArrows={false} // Hide navigation buttons
            showStatus={false} // Hide status indicator
            interval={2000}
            className={classes.carousel}
          >
            <div>
              <img
                src="https://food.grab.com/static/page-home/PH-new-1.jpg"
                alt="I"
              />
            </div>
            <div>
              <img
                src="https://food.grab.com/static/page-home/PH-new-3.jpg"
                alt="2"
              />
            </div>
            <div>
              <img
                src="https://food.grab.com/static/page-home/PH-new-2.jpg"
                alt="3"
              />
            </div>
            <div>
              <img
                src="https://food.grab.com/static/page-home/PH-new-4.jpg"
                alt="4"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Hero;
