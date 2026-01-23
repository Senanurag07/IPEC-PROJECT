import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import WelcomeIPECSection from '../components/WelcomeIPECSection'

function page() {
  return (
    <main>
      <HeroSection  
      title="Driving Project Sucess"
      subtitle="Your trusted Oracle Primavera support partner"
      bgImage="/assests/message-from-coo.jpeg"
      doesblackOverlay={false}
      />    
      <WelcomeIPECSection />
    </main>
  )
}

export default page
