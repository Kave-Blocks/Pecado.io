import React from 'react'
import HeroCTA from './HeroCTA'
import DivFadeIn from '../../animations/DivFadeIn'

const Hero = () => {

  return (
    <div className='min-h-screen mx-auto max-w-screen-monitor justify-center items-center flex flex-col gap-y-[32px]'>
      <DivFadeIn>
        <div className="flex flex-col gap-y-6 w-full h-full">
            <h1 className='text-center leading-[70px] text-[64px] text-primary-color dark:text-white font-bold font-Montserrat'>
            Revolutionize Digital<br/>
                Asset Compliance
            </h1>
            <p className='text-secondary-color text-[20px] text-center'>
            Proprietary ledger technology for smart<br/>
            contracts under the US Securities framework
            </p>
            <HeroCTA />
        </div>
      </DivFadeIn>
    </div>
  )
}

export default Hero
