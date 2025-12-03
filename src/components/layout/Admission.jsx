import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Admission = () => {
    return (
        <>
            <Container className={'bg-[#FDF2F2] mt-[100px] rounded-2xl py-6 px-14'}>
                <h1 className='font-semibold text-[45px] text-[#ec3127] leading-[150%] items-center text-center pb-4 border-b border-[#f9dbdb]'>Admission Is Going On</h1>


                <Flex className={'gap-12 mt-4'}>
                    <div className="online  w-1/2 flex flex-col items-center text-center">

                        <h5 className='font-semibold text-[16px] text-[#342B27] leading-6'>
                            Enroll now to any of our Offline Courses (On- Campus)
                        </h5>

                        <div className="mt-4 items-center mb-2 flex p-7 rounded-2xl justify-between bg-[url('/images/AdBG.png')] w-full bg-cover bg-center">
                            <div className="">
                                <p className='font-semibold text-[18px] leading-8 text-[#FFFFFF]'>Course Fee Offline</p>
                                <h3 className='font-semibold text-[32px] leading-[38.4px] text-[#FFFFFF]'>BDT. 50000 </h3>
                            </div>
                            <div className="items-center">  <button className='font-semibold text-[18px] text-[#ec3127] leading-8 bg-white py-2.5 px-[70px] rounded-2xl border '>Get Admission</button></div>
                        </div>

                        <button className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] w-full border py-2 cursor-pointer rounded-2xl border-red-600'>
                            Get Discount
                        </button>

                    </div>
                    <div className="offline  w-1/2 flex flex-col items-center text-center">

                        <h5 className='font-semibold text-[16px] text-[#342B27] leading-6'>
                            Online (Live Class) courses as per your suitable time.
                        </h5>
                        <div className="mt-4 items-center mb-2 flex p-7 rounded-2xl justify-between bg-[url('/images/AdBG.png')] w-full bg-cover bg-center">
                            <div className="">
                                <p className='font-semibold text-[18px] leading-8 text-[#FFFFFF]'>Course Fee Online</p>
                                <h3 className='font-semibold text-[32px] leading-[38.4px] text-[#FFFFFF]'>BDT. 25000 </h3>
                            </div>
                            <div className="items-center">  <button className='font-semibold text-[18px] text-[#ec3127] leading-8 bg-white py-2.5 px-[70px] rounded-2xl border '>Get Admission</button></div>
                        </div>

                        <button className='font-semibold text-[14px] text-[#1F1E1E] leading-[150%] w-full border py-2 cursor-pointer rounded-2xl border-red-600'>
                            Get Discount
                        </button>

                    </div>
                </Flex>

            </Container>
        </>
    )
}

export default Admission
