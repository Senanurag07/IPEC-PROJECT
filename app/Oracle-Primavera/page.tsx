"use client"
import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import PrimaveraAccordion from '../components/oracle';


function page() {
  const data = [
    "90% says project management is critical or important to deliver successful projects and remain",
    "Yet 49% only follows formal project management practices",
    "Only 6% says their projects come in on time & on budget all of the time",
    "Less than 50% measure return on investment",
    "Only 20% use standardized project management solutions",
  ];
  return (
    <main>
      <HeroSection
      title="Oracle Primavera"
        subtitle="Comprehensive Project Portfolio Management Solutions for Successful Project Delivery"
        bgImage="/assests/hero1.jpg"
        />  
        <div className="max-container py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    
    {/* LEFT TITLE */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-black">
        Oracle Primavera
      </h2>
    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        Oracle Primavera is a top-rated project management solution for
        project-intensive industries like construction, manufacturing, and
        more. It enhances team productivity, portfolio predictability, and
        project management efficiency, helping businesses reduce costs,
        mitigate risks, and achieve organizational success.
      </p>

      <p>
        Oracle Primavera is a comprehensive project portfolio management
        solution that originated as a project scheduling tool and is now used
        by the entire project team and executives. After being acquired by
        Oracle in 2008, Primavera underwent significant enhancements and is now
        the leader in the Project Portfolio Management market segment. It has
        been successfully used for major projects in Malaysia and is widely
        deployed in the oil and gas industry. A recent survey sponsored by
        Oracle found that Primavera is the preferred solution for project
        portfolio management among senior executives and project managers
        worldwide due to its robust features and proven track record.
      </p>

      <p>
        Oracle Primavera P6 is a powerful project portfolio management solution
        that replaces discontinued products P3 Project Planner and Sure-Trak.
        It offers two modules: P6 EPPM for web-based access and P6 PPM for
        desktop/LAN use. This robust solution prioritizes, plans, manages, and
        executes projects, programs, and portfolios while offering role-specific
        functionality and adapting to various complexities. The latest release,
        version 22.12, includes advanced features for improved project
        management and performance.
      </p>
    </div>

  </div>
</div>
   <div className="w-full py-10 bg-[#f5f7fb] rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          {data.map((text, index) => (
            <div
              key={index}
              className={`relative w-[220px] h-[150px] bg-red-600 text-white flex items-center justify-center text-center px-5 text-sm font-medium clip-hex
              ${index !== 0 ? "-ml-[40px]" : ""}`}
              style={{ zIndex: data.length - index }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-hex {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
        }
      `}</style>
    </div>
  <PrimaveraAccordion />

    </main>
  )
}

export default page
