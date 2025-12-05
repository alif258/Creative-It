import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules'; 

import 'swiper/css'; 
import 'swiper/css/navigation'; 

import Container from '../Container'; 

const videoData = [
    { title: "Introduction to Graphic Design", duration: "3 Mins", image: "/images/Youtube01.png" },
    { title: "Basic Color Theory for Beginners", duration: "4 Mins", image: "/images/Youtube02.png" },
    { title: "Basic Computer Setup & File Management for Designers", duration: "5 Mins", image: "/images/Youtube03.png" },
    { title: "Career Opportunities in Graphic Design", duration: "6 Mins", image: "/images/Youtube04.png" },
    { title: "Understanding Design Principles And Rules", duration: "7 Mins", image: "/images/Youtube05.png" },
    { title: "Introduction to Graphic Design", duration: "3 Mins", image: "/images/Youtube01.png" },
    { title: "Basic Color Theory for Beginners", duration: "4 Mins", image: "/images/Youtube02.png" },
];

const NextArrow = () => {
    return (
        <div
            className="swiper-button-next-custom-3 absolute -right-4 top-1/2 md:-right-10 md:top-1/2 -translate-y-1/2 cursor-pointer z-50  md:block"
            aria-label="Next Slide"
        >
            <img 
                src="/images/next02.png" 
                alt="Next" 
                className=" object-contain" 
            /> 
        </div>
    );
};

const PrevArrow = () => {
    return (
        <div
            className="swiper-button-prev-custom-3 absolute -left-4 top-1/2 md:-left-10 md:top-1/2 -translate-y-1/2 cursor-pointer z-50  md:block"
            aria-label="Previous Slide"
        >
            <img 
                src="/images/prev02.png" 
                alt="Previous" 
                className=" object-contain" 
            /> 
        </div>
    );
};




function SliderThree() {
    return (
        <Container> 
            <div className="relative">
                <PrevArrow /> 
                <NextArrow />

                <Swiper
                    modules={[A11y, Navigation]} 
                    id="video-swiper" 
                    
                    navigation={{
                        nextEl: '.swiper-button-next-custom-3', 
                        prevEl: '.swiper-button-prev-custom-3', 
                    }}
                    
                    loop={true} 
                    
                    className="mySwiper" 

                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 5, spaceBetween: 40 },
                    }}
                >
                    {videoData.map((video, index) => (
                        <SwiperSlide key={index}> 
                      <div className=" h-[168px] items-center rounded-2xl text-start p-3 bg-[#F4F4F4]">
                                <img 
                                    src={video.image} 
                                    alt={video.title} 
                                    className="mb-1 m-auto w-full" 
                                />
                                <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>
                                    {video.title}
                                </p>
                                <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E] leading-[150%] '>
                                    {video.duration}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
}

export default SliderThree;