import React from 'react'
import DivFadeIn from '../../animations/DivFadeIn'

const Feature1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-[200px]">
        <div className='mx-auto max-w-7xl flex justify-center items-center pt-2'>
        <div className="w-full flex flex-col gap-y-10">
            <DivFadeIn>
                <h2 className='text-[52px] text-primary-color font-bold w-[60%] font-Montserrat dark:text-white'>
                Designed to enhance smart contracts for Registered Digital Assets in adherence to US securities laws. 
                </h2>
            </DivFadeIn>
            <img src="/featured1.svg" alt="" />
            <div className="flex flex-row justify-between items-center">
                <p className='text-[32px] w-[62%] font-Montserrat dark:text-white'>
                Owned by P/E Capital Investments SEA Pte. Ltd., a subsidiary of <span className='text-primary-color font-bold dark:text-yellow-color'>Ashtree Block Ventures LLC</span>, ensures all digital assets are fully compliant and verifiable with the <span className='text-primary-color font-bold dark:text-yellow-color'>US SEC EDGAR system</span>.
                </p>
                <button className='btn bg-primary-bg text-white dark:bg-yellow-bg dark:text-primary-color'>
                    Learn More About Us
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feature1