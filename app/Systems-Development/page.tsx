import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import SystemDevelopmentIntegration from '../components/SystemDevelopmentIntegration'

function page() {
  return (
    <main>
        <HeroSection
        title="Systems Development"
        subtitle="Custom project management system development and integration services tailored to your unique business needs."
        bgImage="/assests/project-cdp.jpeg"
      />
      <SystemDevelopmentIntegration />
    </main>
  )
}

export default page
