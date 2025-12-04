import React from 'react'
import Container from '../Container'

const Payment = () => {
    return (
        <>
            <Container className={'px-4 sm:px-3 md:px-0'}>
             
                <div className="font-semibold text-[20px] text-[#342B27] leading-[120%] py-3 pl-6 bg-[#F4F4F4] mt-10 lg:mt-[100px] rounded-2xl mb-2">Payment Methods</div>


                <div className="bg-[#FBFBFB] py-4 px-6 rounded-2xl">
                    <div className={'grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pb-6 border-b border-[#e0e3e8]'}>
                        <img src="/images/Bkash.png" alt="Bkash" className=" m-auto mb-1" />
                        <img src="/images/Nagad.png" alt="Nagad" className=" m-auto mb-1" />
                        <img src="/images/Rocket.png" alt="Rocket" className=" m-auto mb-1" />
                        <img src="/images/JaniNaPayment.png" alt="JaniNa Payment" className=" m-auto mb-1" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 items-start mt-6">
                    
                        <div className="left w-full lg:w-1/2">
                            <img src="/images/intiment.png" alt="Intimate" className="w-full rounded-xl" />

                        </div>
                     
                        <div className="right bg-[linear-gradient(114.36deg,rgba(255,0,4,0.05)_0.46%,rgba(0,3,207,0.05)_101.25%)] w-full lg:w-1/2 py-4 px-6 rounded-2xl">
                            <h2 className='font-semibold text-[20px] sm:text-[24px] text-[#1F1E1E] leading-[150%]'>
                                <span className='text-[#E73327]'>Creative IT Institute</span> -এ কোর্স ফি এককালীন অথবা সহজ কিস্তিতেও পরিশোধ করা যায়।
                            </h2>

                            <p className=' text-[16px] sm:text-[18px] text-[#342B27] leading-[150%] mt-[89px]'>At Creative IT Institute, students have the flexibility to pay their course fees through easy installments. This option is designed to make learning more accessible and affordable, allowing learners to continue their studies without financial pressure.</p>
                        </div>
                    </div>


                </div>

            </Container>
        </>
    )
}

export default Payment