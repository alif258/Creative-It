import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import Image from "../Image";

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer z-20"
    >
      <Image src="/images/next.png" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 cursor-pointer z-20"
    >
      <Image src="/images/prev.png" />
    </div>
  );
};

const SliderOne = () => {
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
                slidesToShow: 3, 
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 3, 
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024, 
            settings: {
                slidesToShow: 4, 
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 7, 
                slidesToScroll: 1,
            },
        },
    ],
};

  return (
    <Container >
      <div className="relative px-4 sm:px-3 md:px-0 text-center items-center ">
        <Slider
          {...settings}
          className="bg-[#20213A] font-semibold pl-6 text-[#FFFFFF] text-[14px] leading-[150%] py-4 rounded-2xl"
        >
          <div>Course Overview</div>
          <div>Course Structure</div>
          <div>Curriculum</div>
          <div>Tools</div>
          <div>Prerequisite</div>
          <div>Projects</div>
          <div>For Whom</div>
          <div>Questions</div>
          <div>Success Students</div>
          <div>Payment Method</div>
          <div>Course Overview</div>
        </Slider>
      </div>
    </Container>
  );
};

export default SliderOne;
