import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import PrimaveraSupportServices from '../components/PrimaveraSupportServices'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactSection from '../components/ContactSection'

function page() {
  return (
    <main>
      <HeroSection 
      title="Primavera Premier Support"
      subtitle='Your trusted Oracle Primavera support partner delivering end-to-end technical and functional support for project-driven organizations.'
      bgImage='/assests/premier-support.jpeg'
      />
      <PrimaveraSupportServices />
      <WhyChooseUs />
      <ContactSection />
    </main>
  )
}

export default page
