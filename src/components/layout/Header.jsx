import Image from '../Image'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>

      <div className="topSection pt-4 sm:pt-6 md:pt-8 pb-3 sm:pb-4 md:pb-5 flex justify-center text-center bg-linear-to-r from-[#292F99] to-[#0E1033]
             text-white text-[14px] sm:text-[16px] leading-[150%] px-4 sm:px-6 md:px-0">
        Banner of the Campaign - আমাদের এই কোর্সে এখন ঈদ অফার চলছে।  অফারটি জানতে এখানে ক্লিক করুন Button will be here।
      </div>

      <Container>
        <div className="
      mainMenu 
      px-4          
      sm:px-4       
      md:px-0       
      py-3 sm:py-4 md:py-4 
      flex flex-col md:flex-row 
      justify-between items-center 
      gap-4 md:gap-0">

          <div className="logo flex w-full justify-between items-center md:w-auto">
            <Image src='/images/citLogo.png' className="w-32 sm:w-36 md:w-40" />

            <button
              className="md:hidden text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>


          <div className={`menu w-full md:w-auto 
        ${open ? "block" : "hidden"} 
        md:block transition-all duration-300`}>
            <ul>
              <Flex className='flex-col md:flex-row items-start md:items-center flex-wrap md:flex-nowrap gap-4 sm:gap-6 md:gap-10 font-semibold text-[#1F1E1E] text-[14px] sm:text-[16px] md:text-[18px] leading-[150%]'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/'}><li>Success Story</li></Link>
                <Link to={'/'}><li>Diploma</li></Link>
                <Link to={'about'}><li>About</li></Link>
                <Link to={'/'}><li>Contact</li></Link>
              </Flex>
            </ul>

            <div className="mt-4 md:hidden">
              <button className=' items-center font-semibold text-white text-[14px] flex gap-1 py-2 px-3 bg-gradient-to-r from-[#FF1E1E] to-[#FF5E5E] rounded-2xl'>
                <Image src='/images/Frame.png' className="w-4 h-4" />
                <p>Browse Course</p>
              </button>
            </div>
          </div>


          <div className="btn hidden md:block">
            <button className=' items-center font-semibold text-white text-[14px] sm:text-[16px] flex gap-1 py-2 px-3 sm:py-2.5 sm:px-4 md:py-2.5 md:px-4 bg-gradient-to-r from-[#FF1E1E] to-[#FF5E5E] rounded-2xl'>
              <Image src='/images/Frame.png' className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
              <p>Browse Course</p>
            </button>
          </div>

        </div>
      </Container>



      <div className="overflow-hidden w-full bg-[#f4f4f4] py-1.5">
        <div className="flex animate-slide whitespace-nowrap">
          <p className="text-[10px] sm:text-[12px] mr-[50px] sm:mr-[80px] md:mr-[102px] text-[#7E7E7E]">
            CIT তে <span className="text-[#DA7325]">কোর্স ফি</span> এককালীন অথবা <span className="text-[#DA7325]">সহজ কিস্তিতে পরিশোধ</span> করা যায়।
          </p>
          <p className="text-[10px] sm:text-[12px] mr-[50px] sm:mr-[80px] md:mr-[102px] text-[#7E7E7E]">
            CIT তে <span className="text-[#DA7325]">কোর্স ফি</span> এককালীন অথবা <span className="text-[#DA7325]">সহজ কিস্তিতে পরিশোধ</span> করা যায়।
          </p>
          <p className="text-[10px] sm:text-[12px] mr-[50px] sm:mr-[80px] md:mr-[102px] text-[#7E7E7E]">
            CIT তে <span className="text-[#DA7325]">কোর্স ফি</span> এককালীন অথবা <span className="text-[#DA7325]">সহজ কিস্তিতে পরিশোধ</span> করা যায়।
          </p>
          <p className="text-[10px] sm:text-[12px] mr-[50px] sm:mr-[80px] md:mr-[102px] text-[#7E7E7E]">
            CIT তে <span className="text-[#DA7325]">কোর্স ফি</span> এককালীন অথবা <span className="text-[#DA7325]">সহজ কিস্তিতে পরিশোধ</span> করা যায়।
          </p>
        </div>

        <style>
          {`
                      @keyframes slide {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-50%); }
                      }

                      .animate-slide {
                        display: flex;
                        animation: slide 20s linear infinite;
                      }
                    `}
        </style>
      </div>

    </>
  )
}

export default Header
