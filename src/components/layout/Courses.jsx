import React from 'react'
import Flex from '../Flex'
import Container from '../Container'

const Courses = () => {
  return (
    <>
      <Container className={'mt-12 px-4 sm:px-3 md:px-0'}>
        <Flex className={'justify-between pb-2 border-b border-[#F0F1F5]'}>
          <p className='font-semibold text-[18px] leading-[150%] text-[#1F1E1E]'>This Course is For:</p>
          <p className='text-[14px] text-[#605F62] leading-[150%]'>(Everyone)</p>
        </Flex>

      
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 lg:gap-6 mb-12 mt-3">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center rounded-2xl text-center min-w-[100px]"> 
            <img src="/images/student.png" alt="pic1" className="mb-1 w-full" />
            <p className='text-[14px] text-[#605F62] leading-[150%]'>Students</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center rounded-2xl text-center min-w-[100px]">
            <img src="/images/job.png" alt="pic2" className="mb-1 w-full" />
            <p className='text-[14px] text-[#605F62] leading-[150%]'>Job Seekers</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center rounded-2xl text-center min-w-[100px]">
            <img src="/images/entrepreneurs.png" alt="pic3" className="mb-1 w-full" />
            <p className='text-[14px] text-[#605F62] leading-[150%]'>Entrepreneurs</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center rounded-2xl text-center min-w-[100px]">
            <img src="/images/ai.png" alt="pic4" className="mb-1 w-full" />
            <p className='text-[14px] text-[#605F62] leading-[150%]'>AI Enthusiasts</p>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center rounded-2xl text-center min-w-[100px]">
            <img src="/images/tech.png" alt="pic5" className="mb-1 w-full" />
            <p className='text-[14px] text-[#605F62] leading-[150%]'>Tech Learners</p>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col items-center rounded-2xl text-center min-w-[100px]">
            <img src="/images/mens.png" alt="pic5" className="mb-1 w-full" />
            <p className="text-wrap text-[14px] text-[#605F62] leading-[150%]">
              Marketers looking to create professional visuals and grow online
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Courses