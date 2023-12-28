import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className="text-white gap-[100px] flex w-[90%] mx-auto justify-between items-center mt-[3rem] mb-5">
      <div className="w-[90%]">
        <div className="text-black w-[550px] 2xl:text-left sm:text-center">
          <h1 className="font-bold mb-0 md:mb-0 2xl:leading-[37px] 2xl:text-[32px]">
            Unlock the Art of Cooking with Our Handpicked Selection of Popular
            and Exquisite Recipes from Every Corner of the Globe
          </h1>
          <p className="font-medium w-[480px] md:w-full my-[1rem]">
            Discover Delicious Recipes from Around the World and Master Your
            Culinary Skills Today!
          </p>
        </div>
        <div className="pt-[1rem] md:text-center 2xl:text-left">
          <Link
            to="/discover"
            className="border border-green-500 text-black text-md font-semibold px-4 py-2 rounded-[24px] hover:bg-green-500  "
          >
            Discover
          </Link>
        </div>
      </div>

      <div className="hidden md:block">
        <h2 className="text-center text-black text-xl">
          Popular Meals in the{" "}
          <span className="text-green-500">Philippines</span>
        </h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          interval={2000}
        >
          <div>
            <img
              src="https://food.grab.com/static/page-home/PH-new-1.jpg"
              alt="1"
              className="w-full h-[500px] object-cover opacity-70 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://food.grab.com/static/page-home/PH-new-3.jpg"
              alt="2"
              className="w-full h-[500px] object-cover opacity-70 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://food.grab.com/static/page-home/PH-new-2.jpg"
              alt="3"
              className="w-full h-[500px] object-cover opacity-70 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://food.grab.com/static/page-home/PH-new-4.jpg"
              alt="4"
              className="w-full h-[500px] object-cover opacity-70 rounded-lg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
