import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules'; 

import 'swiper/css'; 
import 'swiper/css/navigation'; 
import Container from '../Container';


const courseData = [
    { name: "PowerPoint", classes: "02", image: "/images/powerPoint.png" },
    { name: "Adobe Illustrator", classes: "24", image: "/images/Aai.png" },
    { name: "Adobe Photoshop", classes: "15", image: "/images/ps.png" },
    { name: "Canva", classes: "02", image: "/images/canva.png" },
    { name: "Concept Development", classes: "06", image: "/images/concept.png" },
    { name: "Marketplace", classes: "15", image: "/images/wallet.png" },
    { name: "Canva", classes: "02", image: "/images/canva.png" },
];


const NextArrow = () => {
    return (
        <div
            className="swiper-button-next-custom-2 absolute -right-4 top-1/2 md:-right-10 md:top-1/2 -translate-y-1/2 cursor-pointer z-50  md:block"
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
            className="swiper-button-prev-custom-2 absolute -left-4 top-1/2 md:-left-10 md:top-1/2 -translate-y-1/2 cursor-pointer z-50  md:block"
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



function SliderTwo() {
    return (
        <Container> 
            <div className="relative">
                <PrevArrow /> 
                <NextArrow />

                <Swiper
                    modules={[A11y, Navigation]} 
                    
                    id="course-swiper"
                    
                    navigation={{
                        nextEl: '.swiper-button-next-custom-2', 
                        prevEl: '.swiper-button-prev-custom-2', 
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
                    {courseData.map((course, index) => (
                        <SwiperSlide key={index} className=""> 
                            <div className="text-center">
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    className="mb-1 m-auto h-16 w-16 object-contain"
                                />
                                <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>
                                    {course.name}
                                </p>
                                <p className='text-[14px] text-[#342B27] leading-[150%]'>
                                    Classes: {course.classes}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
}

export default SliderTwo;