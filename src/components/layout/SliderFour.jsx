import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import Image from "../Image";
import Flex from "../Flex";

// --- Updated NextArrow Component ---
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

const SliderFour = () => {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    mobileFirst: true, 
    responsive: [
        {
            breakpoint: 640, 
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 2, 
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1280, 
            settings: {
                slidesToShow: 3, 
                slidesToScroll: 1,
            },
        },
    ],
};

    return (
        <Container >
            <div className=" relative  -mx-2">
                <Slider
                    {...settings}
                    className=""
                >
                    <div className=" One bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] p-3.5 rounded-2xl">
                        <Flex className={'gap-2 pb-4 border-b border-[#D4D4D4]'}>
                            <Image src='/images/Jihad.png' className="" />
                            <Flex className={'flex flex-col items-start'}>
                                <h4 className="font-semibold text-[16px] text-[#1F1E1E] leading-[150%] ">Jihad Sowdgor</h4>
                                <p className="text-[14px] text-[#1F1E1E] leading-[150%]">Graphics Designer</p>
                                <Flex className={' gap-1 items-center'}>
                                    <p className="font-semibold text-[18px] text-[#1F1E1E] leading-[100%] ">5.0</p>
                                    <i class="fa-solid fa-star bg-linear-to-r from-[#ED7A02] to-[#F9A61A] bg-clip-text text-transparent"></i>
                                </Flex>
                            </Flex>
                        </Flex>
                        <p className="text-[14px] text-[#605F62] leading-[150%] mt-4">I learned Graphic Design from Creative IT Institute under Atiq Bhaiya’s guidance. He teaches very clearly and gives real-life examples in class. I enjoyed every session and learned how to make professional designs. Thank you, Creative IT Institute!</p>
                    </div>



                    <div className=" Two bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] p-3.5 rounded-2xl">
                        <Flex className={'gap-2 pb-4 border-b border-[#D4D4D4]'}>
                            <Image src='/images/Samia.png' className="" />
                            <Flex className={'flex flex-col items-start'}>
                                <h4 className="font-semibold text-[16px] text-[#1F1E1E] leading-[150%] ">Samia Kabir Priontee</h4>
                                <p className="text-[14px] text-[#1F1E1E] leading-[150%]">Graphics Designer</p>
                                <Flex className={' gap-1 items-center'}>
                                    <p className="font-semibold text-[18px] text-[#1F1E1E] leading-[100%] ">5.0</p>
                                    <i class="fa-solid fa-star bg-linear-to-r from-[#ED7A02] to-[#F9A61A] bg-clip-text text-transparent"></i>
                                </Flex>
                            </Flex>
                        </Flex>
                        <p className="text-[14px] text-[#605F62] leading-[150%] mt-4">My Graphic Design journey at Creative IT Institute was amazing. Nafisa Tarannum Disha apu is a wonderful mentor. She explains everything in a very simple way and helps us improve our design sense. I feel confident about my skills now!</p>
                    </div>



                    <div className=" Three bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] p-3.5 rounded-2xl">
                        <Flex className={'gap-2 pb-4 border-b border-[#D4D4D4]'}>
                            <Image src='/images/Rifat.png' className="" />
                            <Flex className={'flex flex-col items-start'}>
                                <h4 className="font-semibold text-[16px] text-[#1F1E1E] leading-[150%] ">Mohammad Rifat Ahmed</h4>
                                <p className="text-[14px] text-[#1F1E1E] leading-[150%]">Graphics Designer</p>
                                <Flex className={' gap-1 items-center'}>
                                    <p className="font-semibold text-[18px] text-[#1F1E1E] leading-[100%] ">5.0</p>
                                    <i class="fa-solid fa-star bg-linear-to-r from-[#ED7A02] to-[#F9A61A] bg-clip-text text-transparent"></i>
                                </Flex>
                            </Flex>
                        </Flex>
                        <p className="text-[14px] text-[#605F62] leading-[150%] mt-4">I completed the Graphic Design course from Creative IT Institute, and my mentor was Atiq Bhaiya. He is very friendly and always supports us in every project. The classes were fun, and I learned so many useful tools. It was a great experience!</p>
                    </div>



                    <div className=" Four bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] p-3.5 rounded-2xl">
                        <Flex className={'gap-2 pb-4 border-b border-[#D4D4D4]'}>
                            <Image src='/images/Samia.png' className="" />
                            <Flex className={'flex flex-col items-start'}>
                                <h4 className="font-semibold text-[16px] text-[#1F1E1E] leading-[150%] ">Samia Kabir Priontee</h4>
                                <p className="text-[14px] text-[#1F1E1E] leading-[150%]">Graphics Designer</p>
                                <Flex className={' gap-1 items-center'}>
                                    <p className="font-semibold text-[18px] text-[#1F1E1E] leading-[100%] ">5.0</p>
                                    <i class="fa-solid fa-star bg-linear-to-r from-[#ED7A02] to-[#F9A61A] bg-clip-text text-transparent"></i>
                                </Flex>
                            </Flex>
                        </Flex>
                        <p className="text-[14px] text-[#605F62] leading-[150%] mt-4">I learned Graphic Design from Creative IT Institute under Atiq Bhaiya’s guidance. He teaches very clearly and gives real-life examples in class. I enjoyed every session and learned how to make professional designs. Thank you, Creative IT Institute!</p>
                    </div>                </Slider>
            </div>
        </Container>
    );
};

export default SliderFour;
