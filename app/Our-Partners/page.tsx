import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import SolutionsShowcase from '../components/SolutionsShowcase'

function page() {
  return (
    <main>
    <HeroSection 
        title="Our Partners"
        subtitle="Collaborating for Excellence: Our Trusted Partners"
        bgImage="/assests/our-partners.jpeg"  />
        <SolutionsShowcase />
    </main>
  )
}

export default page
