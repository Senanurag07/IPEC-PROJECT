import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactSection from '../components/ContactSection'

function page() {
  return (
    <main>
      <HeroSection 
        title="Our Services"
        subtitle="From first steps to full growth"
        bgImage="/assests/hero1.jpg"
      />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection   />
    </main>
  )
}

export default page
