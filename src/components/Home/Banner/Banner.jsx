import React from "react";
import SlideOne from "./BannerSlides/SlideOne";
import SLideTwo from "./BannerSlides/SLideTwo";
import SlideThree from "./BannerSlides/SlideThree";
import SliderFour from "./BannerSlides/SliderFour";

const Banner = () => {
  return (
    <>
      <SliderFour />
      <SlideThree />
      <SLideTwo />
      <SlideOne />
    </>
  );
};

export default Banner;
