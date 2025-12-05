import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Container from "../Container";
import Image from "../Image";

const NextArrow = () => (
  <div
    className="swiper-button-next-custom-1 absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 cursor-pointer z-20"
  >
    <Image src="/images/next.png" />
  </div>
);

// Custom Prev Arrow
const PrevArrow = () => (
  <div
    className="swiper-button-prev-custom-1 absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 cursor-pointer z-20"
  >
    <Image src="/images/prev.png" />
  </div>
);

const SliderOne = () => {
  return (
    <Container>
      <div className="relative px-4  sm:px-3 md:px-0">

        <PrevArrow />
        <NextArrow />

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom-1",
            prevEl: ".swiper-button-prev-custom-1",
          }}
          loop={true}
          speed={500}
          slidesPerView={7}
          spaceBetween={10}
           breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 30 },
                        1024: { slidesPerView: 7, spaceBetween: 40 },
                    }}
          className="bg-[#20213A] font-semibold  text-[#FFFFFF] text-[14px] leading-[150%]  rounded-2xl"
        >
          <SwiperSlide className="py-2.5 px-6">Course Overview</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Course Structure</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Curriculum</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Tools</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Prerequisite</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Projects</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">For Whom</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Questions</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Success Students</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Payment Method</SwiperSlide>
          <SwiperSlide className="py-2.5 px-6">Course Overview</SwiperSlide>
        </Swiper>

      </div>
    </Container>
  );
};

export default SliderOne;