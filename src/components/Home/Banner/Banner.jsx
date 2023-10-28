import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

import SlideOne from "./BannerSlides/SlideOne";
import SLideTwo from "./BannerSlides/SLideTwo";
import SlideThree from "./BannerSlides/SlideThree";
import SliderFour from "./BannerSlides/SliderFour";

const Banner = () => {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        id="banner__slider"
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SLideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
        <SwiperSlide>
          <SliderFour />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
