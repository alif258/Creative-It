
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import SliderFour from './SliderFour'

const Feedback = () => {
  return (
    <>
      <Container className={'mt-12 px-4 sm:px-3 md:px-0'}>
          <Flex className={'justify-between pb-3 items-center  mb-3 '}>
            <p className='font-semibold text-[18px] leading-[150%] text-[#1F1E1E]'>Students Shared Their Feedback</p>
                    <Image src='/images/Reviews.png' className="" />

          </Flex>
          <SliderFour/>
        </Container>
    </>
  )
}

export default Feedback
