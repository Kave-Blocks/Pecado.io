import React from 'react'

const HeroCTA = () => {
  return (
    <div className='flex flex-row gap-x-3 justify-center items-center1 dark:z-10 mt-10'>
      {/* <button className='btn bg-primary-bg text-white dark:bg-yellow-bg dark:text-primary-color'>Explore Our Technology</button>
      <button className='btn bg-secondary-bg'>Discover Our Assets</button> */}
      <a href="https://aix-app.pecado.io/" target="_blank" className='btn cursor-pointer'>
      Visit AIX
      </a>
    </div>
  )
}

export default HeroCTA
