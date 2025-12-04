import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";

const Highlights = () => {
    return (
        <>
            <Container className={'px-4 sm:px-3 md:px-0'}>
                <Flex className={"flex-col lg:flex-row gap-6 items-start mb-10"}>
                    
                    <div className="left w-full lg:w-1/2 ">
                        <p className="font-semibold text-[18px] leading-[150%] text-[#1F1E1E] border-b border-b-[#F8F9FB] mb-2">
                            Course Key Highlights:
                        </p>

                        <ul className="list-disc pl-5 text-[16px] leading-[160%] text-[#342B27] mb-8">
                            <li>
                                Fundamentals of graphic design, color theory & composition
                            </li>
                            <li>Adobe Illustrator, Photoshop, PowerPoint & Canva mastery</li>
                            <li>
                                AI-powered creative tools: ChatGPT, Ideogram, Leonardo & Recraft
                            </li>
                            <li>
                                Branding, logo, packaging & marketing material design projects
                            </li>
                            <li>Freelancing & marketplace training with live projects</li>
                        </ul>


                        <p className="font-semibold text-[18px] leading-[150%] text-[#1F1E1E] border-b border-b-[#F8F9FB] mb-2">
                            Career Outcomes:
                        </p>

                        <div className="">
                            <div className="grid grid-cols-2 gap-x-8 text-[16px] leading-[150%] text-[#342B27]">
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" /> 
                                    <p>Graphic Designer </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" />
                                    <p>Brand Identity Designer  </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" />
                                    <p>Marketing Designer  </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" />
                                    <p>Freelance Designer </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" />
                                    <p>UI Designer</p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" />
                                    <p>Design Entrepreneur</p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" />
                                    <p>Creative Visual Artist </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' className="w-4 h-4" />
                                    <p>UI Designer </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="right w-full lg:w-1/2 mt-6 lg:mt-0">

                        <Flex className={'justify-between items-start'}>
                            <p className="font-semibold text-[18px] leading-[150%] text-[#342B27] mb-4">Class Structure & Distribution of Total 46 Classes:
                            </p>
                            <p className="text-[12px] text-[#605F62] leading-[150%] whitespace-nowrap">(For Offline Course)</p>
                        </Flex>

                        <div className=" p-4 rounded-2xl border-l-2 border-l-[#0055ff] bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)]" >
                            <div className="inline-flex items-center gap-1 bg-[#EAE4E9] rounded-2xl py-1 px-2 mb-10">
                                <Image src="/images/blue.png" className="w-4 h-4" />
                                <p className="**text-sm sm:text-base**">Offline Class - Onsite in Campus: 32 Class</p> 
                            </div>
                            <div className="">
                                <div className={'grid grid-cols-2 md:flex justify-between gap-4'}>
                                    <div className="">
                                        <Image className={'mb-2 w-10 h-10'} src="/images/bookIcon.png" />
                                        <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">On Campus (Theory)</p>
                                        <p className="text-[14px] leading-[150%] text-[#605F62]">11 Classes - Per Class 2 Hrs</p>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <Image className={'mb-2 w-10 h-10'} src="/images/nouseIcon.png" />
                                            <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">On Campus (Lab)</p>
                                            <p className="text-[14px] leading-[150%] text-[#605F62]">21 Classes - Per Class 2 Hrs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-4 p-4 rounded-2xl border-l-2 border-l-[#ff4405] bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)]">
                            <div className="inline-flex items-center gap-1 bg-[#EAE4E9] rounded-2xl py-1 px-2 mb-10">
                                <Image src="/images/red.png" className="w-4 h-4" />
                                <p className="text-sm sm:text-base">Extra Online & Recorded Class: 20 Class</p>
                            </div>
                            <div className="">
                                <div className={'grid grid-cols-2 md:flex justify-between gap-4'}>
                                    <div className="">
                                        <Image className={'mb-2 w-10 h-10'} src="/images/pcIcon.png" />
                                        <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">Online Extra Live Class</p>
                                        <p className="text-[14px] leading-[150%] text-[#605F62]">08 Classes - Per Class 1+ Hrs</p>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <Image className={'mb-2 w-10 h-10'} src="/images/videoIcon.png" />
                                            <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">Required Recorded Videos</p>
                                            <p className="text-[14px] leading-[150%] text-[#605F62]">12 Classes - Duration Variable</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>

                <div className="py-4 pl-6 bg-[#EDFBF2] rounded-2xl text-[16px] leading-[150%] text-[#342B27]">
                    <Flex className={'flex-col sm:flex-row gap-4 sm:gap-8'}>
                        <p className="font-semibold text-[18px] leading-[150%] text-[#1F1E1E] whitespace-nowrap">Course Prerequisite:</p>
                        <Flex className={'flex-col sm:flex-row gap-4 sm:gap-10'}> 
                            <Flex className={'gap-2 items-center'}>
                                <Image className={'w-4 h-4'} src="/images/Vector01.png" />
                                <p>Basic Knowledge of Using Computer</p>
                            </Flex>
                            <Flex className={'gap-2 items-center'}>
                                <Image className={'w-4 h-4'} src="/images/Vector02.png" />
                                <p>Desktop / Laptop</p>
                            </Flex>
                            <Flex className={'gap-2 items-center'}>
                                <Image className={'w-4 h-4'} src="/images/Vector03.png" />
                                <p>Internet Connection</p>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </Container>
        </>
    );
};

export default Highlights;