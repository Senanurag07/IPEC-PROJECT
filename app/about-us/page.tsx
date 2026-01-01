import React from "react";
import HeroSection from "../components/HeroSectiondynamic";

function page() {
  return (
    <main>
      <HeroSection
        title="About Us"
        subtitle="From first steps to full growth"
        bgImage="/assests/hero1.jpg"
      />
    </main>
  );
}

export default page;
