import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

const Banner = () => {
  return (
    <>
      <div
        className="bg-cover bg-center pt-[68px] pb-10 px-4 sm:px-6 md:px-0"
        style={{ backgroundImage: "url('/images/bannerBg.png')" }}
      >
        <Container>
          <Flex className="flex-col md:flex-row gap-6">

            {/* Left Section */}
            <div className="left w-full md:w-1/2">
              <p className="font-semibold text-[14px] md:text-[16px] leading-[150%] text-[#342B27] mb-1">
                1,240 Students enrolled in the course
              </p>

              <div className="mb-2 flex flex-wrap items-center gap-2">
                <div className="star flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fa-solid fa-star  
                  bg-gradient-to-r from-[#ED7A02] to-[#F9A61A] 
                  bg-clip-text text-transparent"
                    ></i>
                  ))}
                </div>
                <p className="font-semibold text-[12px] md:text-[14px] leading-[150%] text-[#342B27]">
                  18,500 Reviews
                </p>
              </div>

              <h1 className="font-extrabold text-[32px] md:text-[48px] leading-[120%] text-[#1F1E1E] mb-3">
                Professional Graphics Design
              </h1>

              <div className="Delivery flex flex-wrap gap-3 font-semibold text-[12px] md:text-[14px] leading-[150%] text-[#342B27] mb-3">
                <Flex className="gap-1 items-center">
                  <Image src="/images/Frame01.png" />
                  <p>Theory</p>
                </Flex>
                <Flex className="gap-1 items-center">
                  <Image src="/images/Frame02.png" />
                  <p>Lab Based</p>
                </Flex>
                <Flex className="gap-1 items-center">
                  <Image src="/images/Frame03.png" />
                  <p>Online Live Class</p>
                </Flex>
                <Flex className="gap-1 items-center">
                  <Image src="/images/Frame04.png" />
                  <p>Recorded Video</p>
                </Flex>
              </div>

              <p className="text-[12px] md:text-[14px] leading-[120%] text-[#1F1E1E] my-3">
                The Professional Graphic Design program is a hybrid learning experience designed to transform students into industry-ready designers through a blend of theory, hands-on practice, and AI-powered creativity. This four-month course combines offline lab-based training, online theory sessions, and self-paced recorded classes, ensuring flexibility and comprehensive learning for all participants.
              </p>

              <div className="flex flex-wrap gap-7">
                <div>
                  <h3 className="font-bold text-[24px] md:text-[32px] leading-[150%] text-[#E73327]">4 Month</h3>
                  <p className="font-semibold text-[12px] md:text-[14px] leading-[150%] text-[#1F1E1E]">Course Duration</p>
                </div>
                <div>
                  <h3 className="font-bold text-[24px] md:text-[32px] leading-[150%] text-[#E73327]">22+</h3>
                  <p className="font-semibold text-[12px] md:text-[14px] leading-[150%] text-[#1F1E1E]">Industrial Project</p>
                </div>
                <div>
                  <h3 className="font-bold text-[24px] md:text-[32px] leading-[150%] text-[#E73327]">52</h3>
                  <p className="font-semibold text-[12px] md:text-[14px] leading-[150%] text-[#1F1E1E]">Classes</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="right w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
              <Image className="w-full" src="/images/Video.png" />
              <div className="btn mt-4 flex sm:flex-row gap-3 w-full justify-between">
                <button className="font-semibold border text-[#E73327] text-[16px] flex justify-center py-4 sm:px-10 rounded-2xl w-1/2">
                  Join Free Class
                </button>
                <button className="font-semibold text-white text-[16px] flex justify-center py-4 sm:px-10 bg-gradient-to-r from-[#FF1E1E] to-[#FF5E5E] rounded-2xl w-1/2">
                  Get Admission
                </button>
              </div>
            </div>

          </Flex>
        </Container>
      </div>

    </>
  )
}

export default Banner
