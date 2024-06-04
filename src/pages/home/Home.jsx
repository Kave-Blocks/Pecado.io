import React from 'react'
import Nav from '../../components/Nav/Nav'
import useDarkModeStore from '../../store/useDarkModeStore'
import Hero from '../../components/Hero/Hero';
import Feature1 from '../../components/Featured/Feature1';
import Featured2 from '../../components/Featured/Featured2';
import ProprietaryCards from '../../components/ProprietaryCards/ProprietaryCards';
import Featured3 from '../../components/Featured/Featured3';
import GetStarted from '../../components/GetStarted/GetStarted';
import Footer from '../../components/Footer/Footer';
import SubFooter from '../../components/Footer/SubFooter';

const Home = () => {
    const { isDarkMode } = useDarkModeStore();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col w-full dark:bg-primary-bg">
        <Nav />
        <Hero />
        <Feature1 />
        <Featured2 />
        <ProprietaryCards />
        <Featured3 />
        <GetStarted />
        <Footer />
        <SubFooter />
      </div>
    </div>
  )
}

export default Home
