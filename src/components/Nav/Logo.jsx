import React from 'react'
import DivFadeRight from '../../animations/DivFadeRight'
import useDarkModeStore from '../../store/useDarkModeStore';

const Logo = ({ isScrolled }) => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <DivFadeRight>
      {isDarkMode ? (
        <>
       {isScrolled ? <span className='text-white font-Montserrat text-4xl font-semibold'>P<span className='text-primary-color'>E</span>CADO</span> : <span className='text-white font-Montserrat text-4xl font-semibold'>P<span className='text-yellow-color'>E</span>CADO</span>}
        </>
      ) : (
        <>
        {isScrolled ? <span className='text-white font-Montserrat text-4xl font-semibold'>P<span className='text-yellow-color'>E</span>CADO</span> : <span className='text-primary-color font-Montserrat text-4xl font-semibold'>P<span className='text-yellow-color'>E</span>CADO</span>}
        </>
      )}
      
    </DivFadeRight>
  )
}

export default Logo
