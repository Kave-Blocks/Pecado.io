import React from 'react'
import HeroCTA from './HeroCTA'
import DivFadeIn from '../../animations/DivFadeIn'

const Hero = () => {

  return (
    <div className='relative pt-28 tablet:min-h-screen justify-center items-center flex flex-col gap-y-[32px] px-4 tablet:px-0'>
      <DivFadeIn>
        <div className="flex flex-col gap-y-6 w-full h-full">
            <h1 className='text-center tablet:leading-[70px] text-[24px] tablet:text-[64px] text-primary-color dark:text-white font-bold font-Montserrat'>
            Revolutionize Digital<br/>
                Asset Compliance
            </h1>
            <p className='text-secondary-color text-[16px] tablet:text-[20px] text-center'>
            Proprietary ledger technology for smart<br/>
            contracts under the US Securities framework
            </p>
            
        </div>
        <HeroCTA />
      </DivFadeIn>
      <img src="/bgImg1.svg" alt="" className='absolute -bottom-[630px] object-cover w-full -z-10 dark:z-0'/>
    </div>
  )
}

export default Hero
