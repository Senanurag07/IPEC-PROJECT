import React from "react";
import HeroSection from "../components/HeroSectiondynamic";
import ProjectLifeCycle from "../components/ProjectLifeCycle";
import Image from "next/image";

function page() {
  return (
    <main>
      <HeroSection
        title="IPEC Project System Solutions For The Complete Project Cycle"
        subtitle="Comprehensive Oracle Primavera solutions tailored to every phase of your project lifecycle."
        bgImage="/assests/hero1.jpg"
      />
      <ProjectLifeCycle />

      {/* Project Stages Image */}
      <section className="bg-gray-100 py-8 sm:py-10 ">
        <div className="max-container mx-auto px-4">
          <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] shadow-lg">
            <Image
              src="/assests/solutions-page-svg.jpeg"
              alt="Project Cycle"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              priority={false}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
