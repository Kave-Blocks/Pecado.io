import React from 'react'
import DivFadeRight from '../../animations/DivFadeRight'

const Logo = () => {
  return (
    <DivFadeRight>
      <img src="/logo.svg" alt="" className='object-cover'/>
    </DivFadeRight>
  )
}

export default Logo
