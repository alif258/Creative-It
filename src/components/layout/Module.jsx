import React, { useState } from 'react';
import Container from '../Container';
import Flex from '../Flex';
import TableExampleTwo from './TableExampleTwo';
import Image from '../Image';
import TableExample from './TableExample';

const Module = () => {
    const [isModule1Open, setIsModule1Open] = useState(false);
    const [isModule2Open, setIsModule2Open] = useState(false);
    const [isModule3Open, setIsModule3Open] = useState(false);

    const toggleModule = (moduleNumber) => {
        if (moduleNumber === 1) {
            setIsModule1Open(!isModule1Open);
        } else if (moduleNumber === 2) {
            setIsModule2Open(!isModule2Open);
        } else if (moduleNumber === 3) {
            setIsModule3Open(!isModule3Open);
        }
    };

    const getIconSrc = (isOpen) => {
        return isOpen ? "/images/Upor.png" : "/images/Niche.png";
    };

    return (
        <div>
            <Container className={'px-4 sm:px-3 md:px-0'}>
                <div className="main bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] rounded-2xl p-6 mt-4">

                    {/* --- Module 1 --- */}
                    <div className="Module01">
                        <Flex
                            className={'justify-between items-center 1stHeader cursor-pointer'}
                            onClick={() => toggleModule(1)}
                        >
                            <div className="left">
                                <Flex className={'gap-2 items-center'}>
                                    <button className='py-2 px-3 bg-[linear-gradient(214.38deg,#FF8079_-2.24%,#FF1E1E_59.38%)] rounded-2xl text-[#FFFFFF] font-semibold text-[16px] leading-[150%]'>Module: 1</button>
                                    <h4 className='text-[#1F1E1E] font-semibold text-[18px] leading-[150%]'>Fundamental & Powerpoint</h4>
                                </Flex>
                            </div>
                            <button className="right">
                                <Image className="" src={getIconSrc(isModule1Open)} />
                            </button>
                        </Flex>

                        {isModule1Open && (
                            <div className="Duration bg-[#2220610A] p-4 rounded-2xl mt-6">
                                <div className="1stLine pb-6 border-b border-[#babab5]">
                                    <Flex className={'flex-col lg:flex-row items-start justify-between gap-6'}>
                                        <div className="bam  ">
                                            <Flex className={'gap-1 items-center '}>
                                                <Image className="w-4 h-4" src="/images/Duration.png" />
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] '>Duration :</h2>
                                                <p className='text-[#605F62] text-[16px] leading-[150%]'>4 Classes</p>
                                            </Flex>
                                            <Flex className={'gap-1 mt-2 items-start'}>
                                                <Image className="" src="/images/Focus.png" />
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] lg:w-[65px]'>Focus :</h2>
                                                <div className='text-[#605F62] text-[16px] leading-[150%]'>
                                                    <ul>
                                                        <li>Design Thinking, Presentation Skill & Creative Foundation.</li>
                                                        <li>Build your creative mindset with the fundamentals of design and communication. </li>
                                                        <li>Learn to structure ideas visually using PowerPoint for impactful presentations and storytelling</li>
                                                    </ul>
                                                </div>
                                            </Flex>
                                        </div>
                                        <div className="dan">
                                            <Flex className={'gap-1 items-center'}>
                                                <Image className="" src="/images/Breakdown.png" />
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Class Type Breakdown :</h2>
                                            </Flex>
                                            <div className='text-[#605F62] text-[16px] leading-[150%] mt-1'>
                                                <ul className='list-disc ml-5'>
                                                    <li>Offline (Theory): 2 Classes</li>
                                                    <li>Lab (Practice): 1 Class</li>
                                                    <li>Lab (Exam): 1 Class</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Flex>
                                </div>

                                <div className="2ndLine pb-6 border-b border-[#babab5] mt-6">
                                    <Flex className={'flex-col lg:flex-row items-start justify-between gap-6'}>
                                        <div className="bam">
                                            <Flex className={'gap-1'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] lg:w-[140px]'>Projects Included :</h2>
                                                <p className='text-[#605F62] text-[16px] leading-[150%]'>2 Projects</p>
                                            </Flex>
                                            <Flex className={'gap-1 mt-2 items-start'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] lg:w-[140px]'>Career Path :</h2>
                                                <p className='text-[#605F62] text-[16px] leading-[150%]'>Junior Presentation Designer, Creative Assistant</p>
                                            </Flex>
                                        </div>
                                        <div className="dan flex items-center gap-1 mt-4 lg:mt-0 ">
                                            <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Prerequisites:</h2>
                                            <p className='text-[#605F62] text-[16px] leading-[150%]'>None (Beginner-friendly introduction to design)</p>
                                        </div>
                                    </Flex>
                                </div>

                                <div className="3rdLine pb-6 border-b border-[#babab5] mt-6">
                                    <Flex className={'items-start flex-col lg:flex-row gap-6'}>

                                        <div className="bam w-full lg:w-[140px]">
                                            <Flex className={'gap-1 items-start'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Key Highlights :</h2>
                                            </Flex>
                                        </div>

                                        <div className="w-full lg:flex lg:justify-between lg:gap-6 mt-4 lg:mt-0">


                                            <div className='text-[#605F62] text-[16px] leading-[150%]  '>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Fundamental principles of graphic design</li>
                                                    <li>Understanding color, balance & composition</li>
                                                    <li>PowerPoint interface, transitions & animations</li>
                                                </ul>
                                            </div>

                                            <div className='text-[#605F62] text-[16px] leading-[150%]   mt-4 lg:mt-0'>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Creative presentation techniques</li>
                                                    <li>Interactive project & portfolio presentation</li>
                                                    <li>Foundation exam (MCQ & presentation-based)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Flex>
                                </div>

                                <div className="4thLine pb-6 border-b border-[#babab5] mt-6">
                                    <Flex className={'items-start flex-col lg:flex-row gap-6'}>

                                        <div className="bam w-full lg:w-[140px]">
                                            <Flex className={'gap-1 items-start'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Projects :</h2>
                                            </Flex>
                                        </div>

                                        <div className="w-full lg:flex lg:justify-between lg:gap-6 mt-4 lg:mt-0">
    

                                            <div className='text-[#605F62] text-[16px] leading-[150%]  '>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Corporate ID Card Design</li>
                                                    <li>Tri-Fold Brochure Design</li>
                                                    <li>Brand Logo & Identity System</li>
                                                    <li>Business Card & Stationery Set</li>
                                                </ul>
                                            </div>

                                            <div className='text-[#605F62] text-[16px] leading-[150%]   mt-4 lg:mt-0'>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Product Packaging & Label Design</li>
                                                    <li>Event Poster / Campaign Poster</li>
                                                    <li>Social Media Post Series</li>
                                                    <li>T-Shirt Graphic Design</li>
                                                </ul>
                                            </div>

                                            <div className='text-[#605F62] text-[16px] leading-[150%]   mt-4 lg:mt-0'>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Restaurant Menu Design</li>
                                                    <li>Flyer & Leaflet Design</li>
                                                    <li>Certificate Design</li>
                                                    <li>More 15+</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Flex>
                                </div>
                                <TableExample />
                            </div>
                        )}
                    </div>

                    <hr className='mt-6 border-t border-red-600' />

                    {/* --- Module 2 --- */}
                    <div className="Module02 pt-6">
                        <Flex
                            className={'justify-between items-center 1stHeader cursor-pointer'}
                            onClick={() => toggleModule(2)}
                        >
                            <div className="left">
                                <Flex className={'gap-2 items-center'}>
                                    <button className='py-2 px-3 bg-[linear-gradient(214.38deg,#FF8079_-2.24%,#FF1E1E_59.38%)] rounded-2xl text-[#FFFFFF] font-semibold text-[16px] leading-[150%]'>Module: 2</button>
                                    <h4 className='text-[#1F1E1E] font-semibold text-[18px] leading-[150%]'>Adobe Illustrator & Concept Development</h4>
                                </Flex>
                            </div>
                            <button className="right">
                                <Image className="" src={getIconSrc(isModule2Open)} />
                            </button>
                        </Flex>

                        {isModule2Open && (
                          <div className="Duration bg-[#2220610A] p-4 rounded-2xl mt-6">
                                <div className="1stLine pb-6 border-b border-[#babab5]">
                                    <Flex className={'flex-col lg:flex-row items-start justify-between gap-6'}>
                                        <div className="bam  ">
                                            <Flex className={'gap-1 items-center '}>
                                                <Image className="w-4 h-4" src="/images/Duration.png" />
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] '>Duration :</h2>
                                                <p className='text-[#605F62] text-[16px] leading-[150%]'>29 Classes</p>
                                            </Flex>
                                            <Flex className={'gap-1 mt-2 items-start'}>
                                                <Image className="" src="/images/Focus.png" />
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] lg:w-[65px]'>Focus :</h2>
                                                <div className='text-[#605F62] text-[16px] leading-[150%]'>
                                                    <ul>
                                                        <li>Vector Illustration, Marketing Material, Product Packaging, Branding & Conceptual Design</li>
                                                        <li>Master vector-based illustration and branding with Adobe Illustrator. From pen tool precision to professional</li>
                                                        <li>logo design and print-ready artwork, this module prepares you for both creative jobs and freelance projects</li>
                                                    </ul>
                                                </div>
                                            </Flex>
                                        </div>
                                        <div className="dan">
                                            <Flex className={'gap-1 items-center'}>
                                                <Image className="" src="/images/Breakdown.png" />
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Class Type Breakdown :</h2>
                                            </Flex>
                                            <div className='text-[#605F62] text-[16px] leading-[150%] mt-1'>
                                                <ul className='list-disc ml-5'>
                                                    <li>Lab (Practice): 9 Classes</li>
                                                    <li>Recorded Video: 9 Classes</li>
                                                    <li>Offline (Theory): 6 Classes</li>
                                                    <li>Online Theory: 5 Classes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Flex>
                                </div>

                                <div className="2ndLine pb-6 border-b border-[#babab5] mt-6">
                                    <Flex className={'flex-col lg:flex-row items-start justify-between'}>
                                        <div className="bam">
                                            <Flex className={'gap-1'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] lg:w-[140px]'>Projects Included :</h2>
                                                <p className='text-[#605F62] text-[16px] leading-[150%]'>12+ Projects</p>
                                            </Flex>
                                            <Flex className={'gap-1 mt-2 items-start'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%] lg:w-[140px]'>Career Path :</h2>
                                                <p className='text-[#605F62] text-[16px] leading-[150%]'>Graphic Designer, Brand Identity Designer, Illustrator, Print Designer, Freelance Vector Artist</p>
                                            </Flex>
                                        </div>
                                        <div className="dan flex items-center gap-1  mt-4 lg:mt-0">
                                            <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Prerequisites:</h2>
                                            <p className='text-[#605F62] text-[16px] leading-[150%]'>Adobe Illustrator Segments</p>
                                        </div>
                                    </Flex>
                                </div>

                                <div className="3rdLine pb-6 border-b border-[#babab5] mt-6">
                                    <Flex className={'items-start flex-col lg:flex-row gap-6'}>

                                        <div className="bam w-full lg:w-[140px]">
                                            <Flex className={'gap-1 items-start'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Key Highlights :</h2>
                                            </Flex>
                                        </div>

                                        <div className="w-full lg:flex lg:justify-between lg:gap-6 mt-4 lg:mt-0">


                                            <div className='text-[#605F62] text-[16px] leading-[150%]  '>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Pen tool, shape building & line art mastery</li>
                                                    <li>Logo design with grid & golden ratio</li>
                                                    <li>Business card, stationery & packaging design</li>
                                                    <li>Color psychology & concept development</li>
                                                </ul>
                                            </div>

                                            <div className='text-[#605F62] text-[16px] leading-[150%]   mt-4 lg:mt-0'>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Marketing materials (flyer, brochure, poster)</li>
                                                    <li>Print on demand & AI-integrated tools (ChatGPT, Ideogram, Leonardo, etc.)</li>
                                                    <li>Portfolio building & marketplace projects (Freelancer, Shutterstock)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Flex>
                                </div>

                                <div className="4thLine pb-6 border-b border-[#babab5] mt-6">
                                    <Flex className={'items-start flex-col lg:flex-row gap-6'}>

                                        <div className="bam w-full lg:w-[140px]">
                                            <Flex className={'gap-1 items-start'}>
                                                <h2 className='text-[#1F1E1E] font-semibold text-[16px] leading-[150%]'>Projects :</h2>
                                            </Flex>
                                        </div>

                                        <div className="w-full lg:flex lg:justify-between lg:gap-6 mt-4 lg:mt-0">
    

                                            <div className='text-[#605F62] text-[16px] leading-[150%]  '>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Corporate ID Card Design</li>
                                                    <li>Tri-Fold Brochure Design</li>
                                                    <li>Brand Logo & Identity System</li>
                                                    <li>Business Card & Stationery Set</li>
                                                </ul>
                                            </div>

                                            <div className='text-[#605F62] text-[16px] leading-[150%]   mt-4 lg:mt-0'>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Product Packaging & Label Design</li>
                                                    <li>Event Poster / Campaign Poster</li>
                                                    <li>Social Media Post Series</li>
                                                    <li>T-Shirt Graphic Design</li>
                                                </ul>
                                            </div>

                                            <div className='text-[#605F62] text-[16px] leading-[150%]   mt-4 lg:mt-0'>
                                                <ul className='list-disc ml-5 '>
                                                    <li>Restaurant Menu Design</li>
                                                    <li>Flyer & Leaflet Design</li>
                                                    <li>Certificate Design</li>
                                                    <li>More 15+</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Flex>
                                </div>
                                <TableExampleTwo />
                            </div>
                        )}
                    </div>

                    <hr className='mt-6 border-t border-red-600' />

                    {/* --- Module 3 --- */}
                    <div className="Module03 pt-6">
                        <Flex
                            className={'justify-between items-center 1stHeader cursor-pointer'}
                            onClick={() => toggleModule(3)}
                        >
                            <div className="left">
                                <Flex className={'gap-2 items-center'}>
                                    <button className='py-2 px-3 bg-[linear-gradient(214.38deg,#FF8079_-2.24%,#FF1E1E_59.38%)] rounded-2xl text-[#FFFFFF] font-semibold text-[16px] leading-[150%]'>Module: 3</button>
                                    <h4 className='text-[#1F1E1E] font-semibold text-[18px] leading-[150%]'>Adobe Photoshop Class</h4>
                                </Flex>
                            </div>
                            <button className="right">
                                <Image className="" src={getIconSrc(isModule3Open)} />
                            </button>
                        </Flex>

                        {isModule3Open && (
                            <div className="Duration bg-[#2220610A] p-4 rounded-2xl mt-6">
                                <p className='text-[#605F62] text-[16px] leading-[150%]'>Module 3-এর বিস্তারিত কন্টেন্ট এখানে থাকবে।</p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Module;