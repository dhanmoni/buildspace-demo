import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import '../styles/Landing.css'

function Landing() {
  return (
    <div id="landing">
      <div id="landing-container">

        <Navbar/>
        <HeroSection/>
      </div>
    </div>
  )
}

export default Landing