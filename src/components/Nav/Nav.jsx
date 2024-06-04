import React from 'react'
import Logo from './Logo'
import AuthCTA from './AuthCTA'
import DarkMode from './DarkMode'
import DivFadeLeft from '../../animations/DivFadeLeft'

const Nav = () => {
  return (
    <div className='fixed top-0 left-0 w-full py-5 z-50 px-20'>
      <div className="mx-auto max-w-screen-monitor flex w-full justify-between items-center">
        <Logo />
        <DivFadeLeft>
            <div className="flex flex-row justify-center items-center gap-x-2">
                <AuthCTA />
                <DarkMode />
            </div>
        </DivFadeLeft>
      </div>
    </div>
  )
}

export default Nav
