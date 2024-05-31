import React from 'react'
import Nav from '../../components/Nav/Nav'
import useDarkModeStore from '../../store/useDarkModeStore'
import Hero from '../../components/Hero/Hero';

const Home = () => {
    const { isDarkMode } = useDarkModeStore();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col w-full dark:bg-primary-bg">
        <Nav />
        <Hero />
      </div>
    </div>
  )
}

export default Home
