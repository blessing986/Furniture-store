import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineChair } from "react-icons/md";

import { banners } from "../data/Data";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };

  return (
    <div className="banner">
      <div className="w-10/12 m-auto">
        <div>
          <div className="mb-10">
            <div className="header-text">
              <Link className="flex items-center">
                <div className="text-white mr-4 common-hover text-4xl rounded-3xl h-12 w-20 grid place-items-center">
                  <MdOutlineChair />
                </div>
                Elevate Your Lifestyle
              </Link>
              <p>with Our Furniture</p>
              Creations
              <Link
                to="/shop"
                className="text-white common-hover text-4xl rounded-3xl ml-4 px-7 py-2"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {banners.map((data, key) => (
              <div key={key}>
                <img src={data.banner} alt="databannerimg" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Banner;
