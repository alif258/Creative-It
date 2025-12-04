import Container from '../Container'



const OurFacilities = () => {


    return (
        <>
            <Container className="px-4 sm:px-3 md:px-0">
               <div className="px-4 sm:px-6 md:px-5 py-5 shadow-sm rounded-2xl">
                 <div className="w-full flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-[72px] gap-y-4 font-medium text-[14px] leading-[150%] text-[#605F62] mb-4">
                    {[
                        "Marketplace Account Open Support",
                        "24/7 Support",
                        "Short Support",
                        "Job Preparation Support",
                        "Career Placement Support",
                        "Corporate Access Program (CAP)",
                        "Extra Class",
                        "Practice Lab",
                        "Backup Class",
                        "Mentor Support",
                        "CIT Tools",
                        "Class Resources"
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-1 flex-[1_1_calc(50%-0.5rem)] sm:flex-[1_1_calc(33%-0.5rem)] md:flex-[1_1_calc(20%-0.8rem)] min-w-[150px]"
                        >
                            <i className="fa-solid fa-check text-[#9DBE27]"></i>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
               </div>


               
            </Container>
        </>
    )
}

export default OurFacilities
