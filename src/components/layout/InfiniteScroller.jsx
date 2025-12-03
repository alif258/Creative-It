import React from "react";

const InfiniteScroller = () => {
  const items = [
    { img: "/images/VisitingCards.png", label: "Visiting Cards" },
    { img: "/images/Brochure.png", label: "Brochure" },
    { img: "/images/Branding.png", label: "Branding" },
    { img: "/images/SocialPoster.png", label: "Social Poster" },
    { img: "/images/HiringPost.png", label: "Hiring Post" },
    { img: "/images/LetterHead.png", label: "Letter Head" },
    { img: "/images/JerseyDesign.png", label: "Jersey Design" },
    { img: "/images/LogoDesign.png", label: "Logo Design" },
    { img: "/images/Banner.png", label: "Banner" },
    { img: "/images/BackdropBanner.png", label: "Backdrop Banner" },
    { img: "/images/MockUp.png", label: "Mock Up" },
   
  ];

  return (
    <div className="overflow-hidden  ">
     <div className="flex pt-8 animate-marquee gap-6">
  {[...items, ...items].map((item, i) => (
    <div key={i} className="flex flex-col items-center min-w-[120px]">
      <img
        src={item.img}
        alt="logo"
        className="object-contain w-[120px]"
      />
      <p className="text-[12px] mt-2 leading-[120%] text-[#1F1E1E] text-center">
        {item.label}
      </p>
    </div>
  ))}
</div>

    </div>
  );
};

export default InfiniteScroller;
