import React from 'react'
import HeroSection from './components/HeroSection'
import AboutIpecSection from './components/AboutIpecSection'
import OurServicesSection from './components/OurServicesSection'
import HowWeWorkSection from './components/HowWeWorkSection'
import FullWidthCTA from './components/FullWidthCTA'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

function page() {
  return (
    <div>
      <HeroSection />
      <AboutIpecSection />
      <OurServicesSection />
      <HowWeWorkSection />
      <FullWidthCTA />
      <TestimonialsSection  />
      <ContactSection />
      
    </div>
  )
}

export default page
