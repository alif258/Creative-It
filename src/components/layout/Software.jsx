import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import SliderTwo from './SliderTwo'

const Software = () => {
  return (
    <>
      <div className="bg-[#EEFAFE] py-4 px-4 sm:px-3 md:px-0">
        <Container>
          <Flex className={'justify-between pb-4 border-b mb-4 border-[#F0F1F5]'}>
            <p className='font-semibold text-[18px] leading-[150%] text-[#1F1E1E]'>Software Taught:</p>
            <p className='text-[14px] text-[#605F62] leading-[150%]'>(AI Driven)</p>
          </Flex>
          <SliderTwo />
        </Container>
      </div>
    </>
  )
}

export default Software
