import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";

const Highlights = () => {
    return (
        <>
            <Container>
                <Flex className={"gap-6 items-start mb-10"}>
                    <div className="left w-1/2 ">
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
                                    <Image src='/images/namNai.png' />
                                    <p>Graphic Designer </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>Brand Identity Designer  </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>Marketing Designer  </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>Freelance Designer </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>UI Designer</p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>Design Entrepreneur</p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>Creative Visual Artist </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>UI Designer </p>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src='/images/namNai.png' />
                                    <p>Marketing Designer  </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="right w-1/2  ">

                        <Flex className={'justify-between items-start'}>
                            <p className="font-semibold text-[18px] leading-[150%] text-[#342B27] mb-4">Class Structure & Distribution of Total 46 Classes:
                            </p>
                            <p className="text-[12px] text-[#605F62] leading-[150%]">(For Offline Course)</p>

                        </Flex>

                        <div className=" p-4 rounded-2xl border-l-2 border-l-[#0055ff]  bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)]" >
                            <div className="inline-flex items-center gap-1 bg-[#EAE4E9] rounded-2xl py-1 px-2 mb-10">
                                <Image src="/images/blue.png" />
                                <p>Offline Class - Onsite in Campus: 32 Class</p>
                            </div>
                            <div className="">

                                <Flex className={'gap-[102px]'}>
                                    <div className="">
                                        <Image className={'mb-2'} src="/images/bookIcon.png" />
                                        <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">On Campus (Theory)</p>
                                        <p className="text-[14px] leading-[150%] text-[#605F62]">11 Classes - Per Class 2 Hrs</p>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <Image className={'mb-2'} src="/images/nouseIcon.png" />
                                            <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">On Campus (Lab)</p>
                                            <p className="text-[14px] leading-[150%] text-[#605F62]">21 Classes - Per Class 2 Hrs</p>
                                        </div>
                                    </div>
                                </Flex>
                            </div>
                        </div>




                        <div className=" mt-4 p-4 rounded-2xl border-l-2 border-l-[#ff4405]  bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)]">
                            <div className="inline-flex items-center gap-1 bg-[#EAE4E9] rounded-2xl py-1 px-2 mb-10">
                                <Image src="/images/red.png" className={''} />
                                <p>Extra Online & Recorded Class: 20 Class</p>
                            </div>
                            <div className="">

                                <Flex className={'gap-[102px]'}>
                                    <div className="">
                                        <Image className={'mb-2'} src="/images/pcIcon.png" />
                                        <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">Online Extra Live Class</p>
                                        <p className="text-[14px] leading-[150%] text-[#605F62]">08 Classes - Per Class 1+ Hrs</p>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <Image className={'mb-2'} src="/images/videoIcon.png" />
                                            <p className="mb-2 font-semibold text-[16px] leading-[150%] text-[#605F62]">Required Recorded Videos</p>
                                            <p className="text-[14px] leading-[150%] text-[#605F62]">12 Classes - Duration Variable</p>
                                        </div>
                                    </div>
                                </Flex>
                            </div>
                        </div>
                    </div>
                </Flex>



                <div className="py-4 pl-6 bg-[#EDFBF2] rounded-2xl text-[16px] leading-[150%] text-[#342B27]">
                    <Flex className={'gap-4'}>
                        <p className="font-semibold text-[18px] leading-[150%] text-[#1F1E1E]">Course Prerequisite:</p>
                        <Flex className={'gap-10'}>
                            <Flex className={'gap-2 items-center'}>
                                 <Image className={''} src="/images/Vector01.png" />
                                 <p>Basic Knowledge of Using Computer</p>
                            </Flex>
                            <Flex className={'gap-2 items-center'}>
                                 <Image className={''} src="/images/Vector02.png" />
                                 <p>Desktop / Laptop</p>
                            </Flex>
                            <Flex className={'gap-2 items-center'}>
                                 <Image className={''} src="/images/Vector03.png" />
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
