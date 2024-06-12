import React from 'react'
import DivFadeIn from '../../animations/DivFadeIn'
import GetStartedCTA from './GetStartedCTA'

const GetStarted = () => {
  return (
    <div className='tablet:h-screen relative flex flex-col justify-center items-center gap-y-10 bg-primary-bg z-20 py-10 px-4 tablet:px-0'>
        <DivFadeIn>
            <div className="flex flex-col gap-y-6 w-full h-full">
                <h1 className='text-center tablet:leading-[70px] text-[24px] tablet:text-[48px] text-white font-bold font-Montserrat'>
                Unlock compliant digital<br/>
                investing with PECADO.IO.
                </h1>
                <p className='text-secondary-color text-[16px] tablet:text-[20px] text-center'>
                Enhancing Smart Contracts for Registered Digital Assets<br className='hidden tablet:block'/>
                Ensuring full compliance with US securities regulations.
                </p>
                <GetStartedCTA />
            </div>
      </DivFadeIn>
      <img src="/bgImg2.svg" alt=""  className='w-full absolute bottom-0 left-0 object-cover -z-10'/>
    </div>
  )
}

export default GetStarted