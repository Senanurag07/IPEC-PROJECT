import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import TurboChartSection from '../components/TurboChartSection'
import SampleChartSection from '../components/SampleChartSection'
import BenefitsOfTurboChart from '../components/BenefitsOfTurboChart'

function page() {
  return (
    <main>
        <HeroSection
        title="Turbo Chart Linear Project Software"
        subtitle="Advanced Data Visualization and Reporting for Oracle Primavera P6 Users"      
        bgImage="/assests/turbo-chart-hero.jpeg"
        />
        <TurboChartSection  />
        <SampleChartSection />
        <BenefitsOfTurboChart />
      
    </main>
  )
}

export default page
