import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import AuthCTA from './AuthCTA'
import DarkMode from './DarkMode'
import DivFadeLeft from '../../animations/DivFadeLeft'

const Nav = () => {
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if(scrollY > 0){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[navRef])

  return (
    <div ref={navRef} className={`${isScrolled ? 'bg-primary-bg dark:bg-yellow-bg duration-500' : ''} fixed top-0 left-0 w-full py-5 z-50 px-20`}>
      <div className="mx-auto max-w-screen-monitor flex w-full justify-between items-center">
        <Logo isScrolled={isScrolled}/>
        <DivFadeLeft>
            <div className="flex flex-row justify-center items-center gap-x-2">
                <AuthCTA setIsScrolled={setIsScrolled}/>
                <DarkMode isScrolled={isScrolled}/>
            </div>
        </DivFadeLeft>
      </div>
    </div>
  )
}

export default Nav
