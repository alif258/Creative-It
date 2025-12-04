import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import Image from "../Image";

// --- Updated Arrow Components ---

const NextArrow = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
   
            className="absolute -right-2 top-1/2 md:-right-10 md:top-1/2 -translate-y-1/2 cursor-pointer z-20"
        >
            <Image src="/images/next02.png" />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
           
            className="absolute -left-2 top-1/2 md:-left-10 md:top-1/2 -translate-y-1/2 cursor-pointer z-20"
        >
            <Image src="/images/prev02.png" />
        </div>
    );
};

// --- Slider Component ---

const SliderThree = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
    {
        breakpoint: 1280, // T
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
        },
    },
    {
        breakpoint: 1024, 
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
        },
    },
    {
        breakpoint: 768, 
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
        },
    },
    {
        breakpoint: 640, 
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
        },
    },
],
    };

    return (
        <Container >
            <div className=" relative -mx-2 ">
                <Slider
                    {...settings}
                    className=""
                >
                    <div className=" h-[168px] items-center rounded-2xl text-start p-3 bg-[#F4F4F4]">
                        <img src="/images/Youtube01.png" alt="pic1" className="mb-1 m-auto  w-full" />
                        <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>Introduction to Graphic Design</p>
                        <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E]  leading-[150%] '>3 Mins</p>
                    </div>

                    <div className=" h-[168px]  items-center rounded-2xl text-start p-3 bg-[#F4F4F4] ">
                        <img src="/images/Youtube02.png" alt="pic1" className="mb-1  m-auto  w-full" />
                        <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>Basic Color Theory for Beginners</p>
                        <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E]  leading-[150%] '>4 Mins</p>
                    </div>

                    <div className=" h-[168px]  items-center rounded-2xl text-start p-3 bg-[#F4F4F4] ">
                        <img src="/images/Youtube03.png" alt="pic1" className="mb-1 m-auto  w-full" />
                        <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>Basic Computer Setup & File Management for Designers
                        </p>
                        <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E]  leading-[150%] '>5 Mins</p>
                    </div>

                    <div className=" h-[168px]  items-center rounded-2xl text-start p-3 bg-[#F4F4F4] ">
                        <img src="/images/Youtube04.png" alt="pic1" className="mb-1 m-auto w-full " />
                        <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>Career Opportunities in Graphic Design
                        </p>
                        <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E]  leading-[150%] '>6 Mins</p>
                    </div>

                    <div className=" h-[168px]  items-center rounded-2xl text-start p-3 bg-[#F4F4F4] ">
                        <img src="/images/Youtube05.png" alt="pic1" className="mb-1  m-auto w-full" />
                        <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>Understanding Design Principles
                            And Rules</p>
                        <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E]  leading-[150%] '>7 Mins</p>
                    </div>
                    <div className=" h-[168px]  items-center rounded-2xl text-start p-3 bg-[#F4F4F4] ">
                        <img src="/images/Youtube01.png" alt="pic1" className="mb-1  m-auto w-full" />
                        <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>Introduction to Graphic Design</p>
                        <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E]  leading-[150%] '>3 Mins</p>
                    </div>
                    <div className=" h-[168px] items-center rounded-2xl text-start p-3 bg-[#F4F4F4] ">
                        <img src="/images/Youtube02.png" alt="pic1" className="mb-1  m-auto w-full" />
                        <p className='wrap-break-word font-semibold text-[12px] text-[#1F1E1E] leading-[150%] my-1.5 h-9'>Basic Color Theory for Beginners</p>
                        <p className='font-medium wrap-break-word text-[12px] text-[#7E7E7E]  leading-[150%] '>4 Mins</p>
                    </div>

                </Slider>
            </div>
        </Container>
    );
};

export default SliderThree;