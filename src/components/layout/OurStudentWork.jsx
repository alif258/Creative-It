import React from 'react'
import Container from '../Container'
import InfiniteScroller from './InfiniteScroller'

const OurStudentWork = () => {
    return (
        <><div className="mt-[100px] bg-[#EEF1F4] py-6 ">
            <Container className={'px-4 sm:px-3 md:px-0'}>
                <div className="font-semibold text-[24px]  text-[#1F1E1E] leading-[150%] pb-8 border-b border-[#d8d1e0]">Our Students' Work</div>
            </Container>
            <InfiniteScroller />
        </div>
        </>
    )
}

export default OurStudentWork
