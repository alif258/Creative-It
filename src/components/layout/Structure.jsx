import React from 'react'
import Container from '../Container'
import Image from '../Image'


const Structure = () => {
    return (
        <>
            <Container className={'px-4 sm:px-3 md:px-0'}>

                <div
                    className="mb-2 py-4 mt-10 lg:mt-[100px] flex flex-col items-center rounded-2xl border bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] border-red-500"
                >
                    <h2 className='font-semibold text-[24px] text-[#1F1E1E] leading-[150%] text-center '>Course Outline Structure</h2>
                    <div className="flex items-center gap-2 mx-4">
                        <Image
                            src="/images/StructurLogo.png"
                            alt="pic1"
                            className="w-5 h-5"
                        />
                        <p className="font-semibold text-sm md:text-[16px] text-[#342B27] leading-[150%] text-center">
                            Provide required
                            <span className="text-[#CF0000]"> PDF + Class Recordings</span>
                            to ensure the best learning for our students.
                        </p>
                    </div>
                </div>


                <div className="">
                    <div className="grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-4 md:gap-6">

                        {/* 1st Item */}
                        <div className="flex flex-col items-center text-center bg-[#F0F1F5] py-3.5 rounded-2xl min-w-[100px]">
                            <Image src="/images/Simplification01.png" alt="pic1" className="w-12 h-12" />
                            <p className="font-semibold text-[16px] md:text-[20px] text-[#342B27] leading-[120%] mt-2">
                                3 Modules
                            </p>
                        </div>

                        {/* 2nd Item */}
                        <div className="flex flex-col items-center text-center bg-[#F0F1F5] py-3.5 rounded-2xl min-w-[100px]">
                            <Image src="/images/Simplification02.png" alt="pic2" className="w-12 h-12" />
                            <p className="font-semibold text-[16px] md:text-[20px] text-[#342B27] leading-[120%] mt-2">
                                52 Classes
                            </p>
                        </div>

                        {/* 3rd Item */}
                        <div className="flex flex-col items-center text-center bg-[#F0F1F5] py-3.5 rounded-2xl min-w-[100px]">
                            <img src="/images/Simplification03.png" alt="pic3" className="w-12 h-12" />
                            <p className="font-semibold text-[16px] md:text-[20px] text-[#342B27] leading-[120%] mt-2">
                                22 Projects
                            </p>
                        </div>

                        {/* 4th Item */}
                        <div className="flex flex-col items-center text-center bg-[#F0F1F5] py-3.5 rounded-2xl min-w-[100px]">
                            <Image src="/images/Simplification04.png" alt="pic4" className="w-12 h-12" />
                            <p className="font-semibold text-[16px] md:text-[20px] text-[#342B27] leading-[120%] mt-2">
                                80+ Topics
                            </p>
                        </div>



                        <div className="flex flex-col items-center text-center bg-[#F0F1F5] py-3.5 rounded-2xl min-w-[100px] ">
                            <Image src="/images/Simplification05.png" alt="pic5" className="w-12 h-12" />
                            <p className="font-semibold text-[16px] md:text-[20px] text-[#342B27] leading-[120%] mt-2">
                                23 Resources
                            </p>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Structure