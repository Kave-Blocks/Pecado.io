import React from 'react'

const AuthCTA = ({ setIsScrolled }) => {
    
  return (
    <div className='flex flex-row gap-x-2'>
      <button className='btn btn-md'>Log in</button>
      <button className={`btn btn-md bg-[#11112F] ${setIsScrolled ? 'bg-primary-bg text-white' : 'dark:bg-yellow-bg text-white'}`}>Create account</button>
    </div>
  )
}

export default AuthCTA
