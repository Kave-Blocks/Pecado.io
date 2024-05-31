import React from 'react'
import Logo from './Logo'
import AuthCTA from './AuthCTA'
import DarkMode from './DarkMode'

const Nav = () => {
  return (
    <div className='mx-auto max-w-screen-monitor w-full py-5 z-50'>
      <div className="flex w-full justify-between items-center">
        <Logo />
        <div className="flex flex-row justify-center items-center gap-x-2">
            <AuthCTA />
            <DarkMode />
        </div>
      </div>
    </div>
  )
}

export default Nav
