import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import WelcomeIPECSection from '../components/WelcomeIPECSection'

function page() {
  return (
    <main>
      <HeroSection  
      title="Driving Project Sucess"
      subtitle="Your trusted Oracle Primavera support partner"
      bgImage="/assests/hero1.jpg"
      />    
      <WelcomeIPECSection />
    </main>
  )
}

export default page
