import React from 'react'
import DivFadeIn from '../../animations/DivFadeIn'
import GetStartedCTA from './GetStartedCTA'

const GetStarted = () => {
  return (
    <div className='h-screen relative flex flex-col justify-center items-center gap-y-10 bg-primary-bg z-20'>
        <DivFadeIn>
            <div className="flex flex-col gap-y-6 w-full h-full">
                <h1 className='text-center leading-[70px] text-[48px] text-white font-bold font-Montserrat'>
                Unlock compliant digital<br/>
                investing with PECADO.IO.
                </h1>
                <p className='text-secondary-color text-[20px] text-center'>
                Enhancing Smart Contracts for Registered Digital Assets<br/>
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