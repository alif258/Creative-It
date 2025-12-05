import React from 'react'
import Container from '../Container'
import Image from '../Image'

const OurExclusiveServices = () => {
    return (
        <>
           <Container className={'px-4 sm:px-3 md:px-0'}>
            
            {/* Title Section */}
            <div className="font-semibold text-[20px] text-[#342B27] leading-[120%] py-3 pl-6 bg-[#F4F4F4] mt-10 lg:mt-[100px] rounded-2xl mb-6">
                Our Exclusive Services
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* 1. Short Support */}
                <div className="py-[18px] px-2 flex flex-col bg-[#E9F9FC] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>Short Support</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>If you struggle with any lesson or tool, our mentors provide quick support, ensuring you always have guidance and never fall behind.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

                {/* 2. 24/7 Support */}
                <div className="py-[18px] px-2 flex flex-col bg-[#FDF2F2] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>24/7 Support</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>Creative IT Institute provides 24/7 support via phone, email, or chat, ensuring students get help anytime with classes or projects.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

                {/* 3. Practice Lab */}
                <div className="py-[18px] px-2 flex flex-col bg-[#E9F9FC] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>Practice Lab</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>Our modern lab lets students practice, complete assignments, and explore creativity with the latest software, building real experience and confidence.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

                {/* 4. Backup Class (Description Corrected) */}
                <div className="py-[18px] px-2 flex flex-col bg-[#FDF2F2] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>Backup Class</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>If you miss a scheduled session, our backup class system allows you to catch up on missed topics and practical work with dedicated trainer support.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

                {/* 5. Marketplace Account */}
                <div className="py-[18px] px-2 flex flex-col bg-[#FDF2F2] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>Marketplace Account</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>Our mentors guide you in setting up freelancing accounts, building your portfolio, communicating with clients, and starting your online career with confidence.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

                {/* 6. Extra Class */}
                <div className="py-[18px] px-2 flex flex-col bg-[#E9F9FC] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>Extra Class</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>Students who need extra practice can attend additional classes to clear doubts, revise lessons, and strengthen practical skills with dedicated trainer support.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

                {/* 7. Career Placement */}
                <div className="py-[18px] px-2 flex flex-col bg-[#FDF2F2] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>Career Placement</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>Creative IT Institute supports students with resume building, interview preparation, and job or internship guidance to help them start their professional design career.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

                {/* 8. Lifetime Support */}
                <div className="py-[18px] px-2 flex flex-col bg-[#E9F9FC] rounded-2xl">
                    <h4 className='font-semibold text-[20px] text-[#1F1E1E] leading-[150%] '>Lifetime Support</h4>
                    <p className='text-[14px] text-[#605F62] leading-[150%] h-[125px]'>After completing the course, you’ll get lifetime learning and career support — from project help to tools and freelancing guidance.</p>
                    <button className='mt-3 w-fit bg-[#FFFFFF] rounded-2xl flex gap-0.5 items-center py-2 px-2 border text-[#FF1E1E] font-semibold text-[12px] leading-[150%] '>
                        <p>Watch Video</p>
                        <Image src="/images/PlayBTN.png" alt="Play" className="" />
                    </button>
                </div>

            </div>
        </Container>
        </>
    )
}

export default OurExclusiveServices