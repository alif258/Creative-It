import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import SliderThree from './SliderThree'

const VideoList = () => {
  return (
    <>
      <Container className={'mt-12'}>
          <Flex className={'justify-between pb-3 border-b mb-3 border-[#F0F1F5]'}>
            <p className='font-semibold text-[18px] leading-[150%] text-[#1F1E1E]'>Pre-Recorded Video List:</p>
            <p className='text-[14px] text-[#605F62] leading-[150%]'>(Before Starting The Course)</p>
          </Flex>
          <SliderThree/>
        </Container>
    </>
  )
}

export default VideoList
