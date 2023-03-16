import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiperCard.css";

// import required modules
import { EffectCards } from "swiper";

let SwiperCards = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>React</SwiperSlide>
        <SwiperSlide>JavaScript</SwiperSlide>
        <SwiperSlide>HTML</SwiperSlide>
        <SwiperSlide>CSS</SwiperSlide>
        <SwiperSlide>Tailwind CSS</SwiperSlide>
        <SwiperSlide>Bootstrap</SwiperSlide>
        <SwiperSlide>Git</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCards;
