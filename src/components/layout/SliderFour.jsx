import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Flex from '../Flex';
import Image from '../Image';

const testimonialData = [
    {
        id: 1,
        name: "Jihad Sowdgor",
        image: "/images/Jihad.png",
        designation: "Graphics Designer",
        rating: "5.0",
        review: "I learned Graphic Design from Creative IT Institute under Atiq Bhaiya’s guidance. He teaches very clearly and gives real-life examples in class. I enjoyed every session and learned how to make professional designs. Thank you, Creative IT Institute!"
    },
    {
        id: 2,
        name: "Samia Kabir Priontee",
        image: "/images/Samia.png",
        designation: "Graphics Designer",
        rating: "5.0",
        review: "My Graphic Design journey at Creative IT Institute was amazing. Nafisa Tarannum Disha apu is a wonderful mentor. She explains everything in a very simple way and helps us improve our design sense. I feel confident about my skills now!"
    },
    {
        id: 3,
        name: "Mohammad Rifat Ahmed",
        image: "/images/Rifat.png",
        designation: "Graphics Designer",
        rating: "5.0",
        review: "I completed the Graphic Design course from Creative IT Institute, and my mentor was Atiq Bhaiya. He is very friendly and always supports us in every project. The classes were fun, and I learned so many useful tools. It was a great experience!"
    },
    {
        id: 4,
        name: "Samia Kabir Priontee",
        image: "/images/Samia.png",
        designation: "Graphics Designer",
        rating: "5.0",
        review: "My Graphic Design journey at Creative IT Institute was amazing. Nafisa Tarannum Disha apu is a wonderful mentor. She explains everything in a very simple way and helps us improve our design sense. I feel confident about my skills now!"
    },
];

const NextArrow = () => (
    <div
        className="swiper-button-next-custom-4 absolute -right-4 top-1/2 md:-right-10 -translate-y-1/2 cursor-pointer z-50"
    >
        <img src="/images/next02.png" alt="Next" />
    </div>
);

const PrevArrow = () => (
    <div
        className="swiper-button-prev-custom-4 absolute -left-4 top-1/2 md:-left-10 -translate-y-1/2 cursor-pointer z-50"
    >
        <img src="/images/prev02.png" alt="Prev" />
    </div>
);

function SliderFour() {
    return (
        <div className="relative mx-auto max-w-7xl">

            <PrevArrow />
            <NextArrow />

            <Swiper
                modules={[A11y, Navigation]}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-custom-4',
                    prevEl: '.swiper-button-prev-custom-4'
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {testimonialData.map((item) => (
                    <SwiperSlide key={item.id} className="">
                        <div className="bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] p-3.5 rounded-2xl">

                            <Flex className="gap-2 pb-4 border-b border-[#D4D4D4]">
                                <Image src={item.image} className="w-16 h-16 object-cover rounded-full" />
                                <Flex className="flex flex-col items-start">
                                    <h4 className="font-semibold text-[16px] text-[#1F1E1E]">{item.name}</h4>
                                    <p className="text-[14px] text-[#1F1E1E]">{item.designation}</p>
                                    <Flex className="gap-1 items-center">
                                        <p className="font-semibold text-[18px] text-[#1F1E1E]">{item.rating}</p>
                                        <i className="fa-solid fa-star bg-linear-to-r from-[#ED7A02] to-[#F9A61A] bg-clip-text text-transparent"></i>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <p className="text-[14px] text-[#605F62] mt-4">
                                {item.review}
                            </p>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliderFour;
