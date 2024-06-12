import React from 'react'
import DivFadeRight from '../../animations/DivFadeRight'
import DivFadeLeft from '../../animations/DivFadeLeft'

const Featured3 = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center pt-20 tablet:pt-0'>
        <div className="mx-auto max-w-7xl w-full flex flex-col px-4 tablet:px-0">
            <DivFadeRight>
            <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center py-10 border-t-[1px] border-[#818181]">
                <h3 className='flex-[1] text-blue text-[30px] md:text-[48px] font-Montserrat font-bold dark:text-yellow-color'>Regulatory<br/> Compliance</h3>
                <p className='flex-[1] text-base tablet:w-[80%] dark:text-white'>
                    At PECADO.IO, compliance is our top priority. Our Registered Digital Assets (RDAs) are filed as securities and can be verified through the <span className='text-blue dark:text-yellow-color'>US SEC EDGAR system</span> using the <span className='text-blue dark:text-yellow-color'>Central Index Key (CIK) number</span>.
                </p>
            </div>
            </DivFadeRight>
            <DivFadeLeft>
            <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center py-10 border-t-[1px] border-[#818181]">
                <h3 className='flex-[1] text-blue text-[30px] md:text-[48px] font-Montserrat font-bold dark:text-yellow-color'>Partners/<br/> Affiliates</h3>
                <p className='flex-[1] text-base tablet:w-[80%] dark:text-white'>
                We collaborate with industry-leading partners to provide a robust and compliant digital asset platform. Our primary partners include <span className='text-blue dark:text-yellow-color'>P/E Capital DAO LLC, Ashtree Block Ventures LLC</span>, and <span className='text-blue dark:text-yellow-color'>P/E Capital Investment Management Partners</span>.
                </p>
            </div>
            </DivFadeLeft>
            <DivFadeRight>
            <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center py-10 border-t-[1px] border-[#818181]">
                <h3 className='flex-[1] text-blue text-[30px] md:text-[48px] font-Montserrat font-bold dark:text-yellow-color'>Leadership<br/> Team</h3>
                <p className='flex-[1] text-base tablet:w-[80%] dark:text-white'>
                Our founders bring decades of expertise in investment and regulatory compliance. <span className='text-blue dark:text-yellow-color'>Eliseo Jojo L Prisno CRPC</span>, MS, a FINRA Registered Investment Advisor, and <span className='text-blue dark:text-yellow-color'>Candy L Emnas Prisno</span>, lead our mission to revolutionize digital asset compliance.
                </p>
            </div>
            </DivFadeRight>
            <DivFadeLeft>
            <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center py-10 border-t-[1px] border-b-[1px] border-[#818181]">
                <h3 className='flex-[1] text-blue text-[30px] md:text-[48px] font-Montserrat font-bold dark:text-yellow-color'>Ledger<br/> Technology</h3>
                <p className='flex-[1] text-base tablet:w-[80%] dark:text-white'>
                PECADO.IO leverages <span className='text-blue dark:text-yellow-color'>advanced ledger technology</span> to enhance the security and compliance of smart contracts. Our platform ensures that all transactions are transparent, secure, and compliant with <span className='text-blue dark:text-yellow-color'>US regulations</span>.
                </p>
            </div>
            </DivFadeLeft>
        </div>
        <img src="/FeaturedImg2.svg" alt=""  className='w-full object-cover mt-20'/>
    </div>
  )
}

export default Featured3