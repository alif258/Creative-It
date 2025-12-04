import React from 'react'
import Banner from '../layout/Banner'
import OurFacilities from '../layout/OurFacilities'
import SliderOne from '../layout/SliderOne'
import Highlights from '../layout/Highlights'
import Courses from '../layout/Courses'
import Software from '../layout/Software'
import VideoList from '../layout/VideoList'
import Structure from '../layout/Structure'
import Payment from '../layout/Payment'
import FAQ from '../layout/FAQ'
import OurStudentWork from '../layout/OurStudentWork'
import Admission from '../layout/Admission'
import Feedback from '../layout/Feedback'
import OurExclusiveServices from '../layout/OurExclusiveServices'
import Module from '../layout/Module'

const Home = () => {
  return (
    <div>
      <Banner />
      <OurFacilities />
      <SliderOne />
      <Highlights />
      <Courses />
      <Software />
      <VideoList />
      <Structure />
      <Module/>
      <Admission />
      <OurStudentWork />
      <Feedback />
      <FAQ />
      <OurExclusiveServices />
      <Payment />
    </div>
  )
}

export default Home
