import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import Image from "../Image";

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

const SliderTwo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    };

    return (
        <Container >
            <div className=" relative -mx-2">
                <Slider
                    {...settings}
                    className=""
                >

                    <div className=" rounded-2xl text-center">
                        <img src="/images/powerPoint.png" alt="pic1" className="mb-1 m-auto " />
                        <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>PowerPoint</p>
                        <p className='text-[14px] text-[#342B27] leading-[150%]'>Classes: 02</p>
                    </div>

                    <div className=" items-center rounded-2xl text-center">
                        <img src="/images/Aai.png" alt="pic1" className="mb-1 m-auto " />
                        <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>Adobe Illustrator</p>
                        <p className='text-[14px] text-[#342B27] leading-[150%]'>Classes: 24</p>
                    </div>

                    <div className=" items-center rounded-2xl text-center">
                        <img src="/images/ps.png" alt="pic1" className="mb-1 m-auto " />
                        <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>Adobe Photoshop</p>
                        <p className='text-[14px] text-[#342B27] leading-[150%]'>Classes: 15</p>
                    </div>

                    <div className=" items-center rounded-2xl text-center">
                        <img src="/images/canva.png" alt="pic1" className="mb-1 m-auto " />
                        <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>Canva</p>
                        <p className='text-[14px] text-[#342B27] leading-[150%]'>Classes: 02</p>
                    </div>

                    <div className=" items-center rounded-2xl text-center">
                        <img src="/images/concept.png" alt="pic1" className="mb-1 m-auto" />
                        <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>Concept Development</p>
                        <p className='text-[14px] text-[#342B27] leading-[150%]'>Classes: 06</p>
                    </div>
                    <div className=" items-center rounded-2xl text-center">
                        <img src="/images/wallet.png" alt="pic1" className="mb-1 m-auto" />
                        <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>Marketplace</p>
                        <p className='text-[14px] text-[#342B27] leading-[150%]'>Classes: 15</p>
                    </div>
                    <div className="items-center rounded-2xl text-center">
                        <img src="/images/canva.png" alt="pic1" className="mb-1 m-auto" />
                        <p className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] my-1.5'>Canva</p>
                        <p className='text-[14px] text-[#342B27] leading-[150%]'>Classes: 02</p>
                    </div>

                </Slider>
            </div>
        </Container>
    );
};

export default SliderTwo;