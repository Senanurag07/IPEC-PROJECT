import React from 'react'
import HeroSection from './components/HeroSection'
import AboutIpecSection from './components/AboutIpecSection'
import OurServicesSection from './components/OurServicesSection'
import HowWeWorkSection from './components/HowWeWorkSection'
import FullWidthCTA from './components/FullWidthCTA'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import WhoWeWorkWith from './components/WhoWeWorkWith'

function page() {
  return (
    <div>
      {/* <HeroVideo  /> */}
      <HeroSection />
      <AboutIpecSection />
      <OurServicesSection />
      <HowWeWorkSection />
      <FullWidthCTA />
      <WhoWeWorkWith />

      <TestimonialsSection  />
      <ContactSection />
      
    </div>
  )
}

export default page
