import React from "react";
import HeroSection from "../components/HeroSectiondynamic";
import PlanningAndScheduling from "../components/PlanningAndScheduling";
import PrimaveraSupportServices from "../components/PrimaveraSupportServices";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";
import IndustriesWeServe from "../components/IndustriesWeServe";

function page() {
  return (
    <main>
      <HeroSection
        title="Planning & Scheduling"
        subtitle="Your trusted Oracle Primavera support partner delivering end-to-end technical and functional support for project-driven organizations."
        bgImage="/assests/planning-hero.jpeg"
      />
      <PlanningAndScheduling />
      <div className="bg-gray-100">
        {" "}
        <PrimaveraSupportServices />

      </div>
      <IndustriesWeServe    />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}

export default page;
