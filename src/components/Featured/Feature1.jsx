import React from 'react'
import DivFadeIn from '../../animations/DivFadeIn'
import DivFadeRight from '../../animations/DivFadeRight'

const Feature1 = () => {
  return (
    <div className="flex justify-center items-center tablet:min-h-screen mt-10 tablet:mt-[200px] px-4 tablet:px-8 laptop:px-0 pb-10 tablet:pb-0">
        <div className='mx-auto max-w-7xl flex justify-center items-center pt-2'>
        <div className="w-full flex flex-col gap-y-10">
            <DivFadeIn>
                <h2 className='text-[18px] tablet:text-[30px] laptop:text-[52px] text-primary-color font-bold tablet:w-[60%] font-Montserrat dark:text-white'>
                Designed to enhance smart contracts for Registered Digital Assets in adherence to US securities laws. 
                </h2>
            </DivFadeIn>
            <DivFadeRight>
                <img src="/featured1.svg" alt="" />
            </DivFadeRight>
            <DivFadeIn>
            <div className="flex flex-col gap-y-5 tablet:flex-row justify-between items-center">
                
                    <p className='text-[16px] tablet:text-[24px] laptop:text-[32px] tablet:w-[62%] font-Montserrat dark:text-white'>
                    Owned by P/E Capital Investments SEA Pte. Ltd., a subsidiary of <span className='text-primary-color font-bold dark:text-yellow-color'>Ashtree Block Ventures LLC</span>, ensures all digital assets are fully compliant and verifiable with the <span className='text-primary-color font-bold dark:text-yellow-color'>US SEC EDGAR system</span>.
                    </p>
                
                <button className='btn bg-primary-bg text-white dark:bg-yellow-bg dark:text-primary-color'>
                    Learn More About Us
                </button>
            </div>
            </DivFadeIn>
        </div>
    </div>
    </div>
  )
}

export default Feature1