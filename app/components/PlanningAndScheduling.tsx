"use client";

import Image from "next/image";

type Phase = {
  title: string;
  items: string[];
  color: string;
};

export default function PlanningAndScheduling() {
  const phases: Phase[] = [
    {
      title: "Initiate",
      color: "bg-[#0B2A55]",
      items: [
        "Initiation Meeting",
        "Project Plan – Time, Scope & Cost",
        "Design of Resource Breakdown Structure (RBS)",
        "Project Charter",
      ],
    },
    {
      title: "Plan",
      color: "bg-[#2F66B1]",
      items: [
        "Preliminary Project Communication",
        "Work Breakdown Structure (WBS)",
        "Detailed Project Plan",
        "Determining Cost",
        "Baseline Approval",
      ],
    },
    {
      title: "Execute",
      color: "bg-[#4A4A4A]",
      items: [
        "Update Progress",
        "Monitor Project Schedule",
        "Earned Value Management (EVM)",
        "Understanding Variance",
        "Reporting",
        "Re-baseline Schedule",
      ],
    },
    {
      title: "Close Out",
      color: "bg-[#F3C24F]",
      items: ["Documentation", "Handover"],
    },
  ];

  return (
    <section className="bg-gray-100 rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[80px] py-12 sm:py-16">
      <div className="max-container mx-auto px-4">
        {/* White Card */}
        <div className="bg-white rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Image */}
            <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/assests/support.png" // replace path
                alt="Planning & Scheduling"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Planning & Scheduling
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  IPEC Project Systems Sdn Bhd offers expertise in building,
                  updating, and managing project schedules, delivering standard
                  and custom reports, and creating Integrated Master Schedules
                  for effective project management and proactive risk
                  mitigation.
                </p>

                <p>
                  As a trusted provider of Critical Path Method (CPM)
                  construction scheduling and project management assistance in
                  Malaysia, we specialize in Oracle Primavera P6. Our
                  experienced planners/schedulers work throughout the project
                  lifecycle ensuring smooth management and submission of work
                  programs.
                </p>

                <p>
                  Our consultants are skilled in scheduling, updating, and
                  monitoring projects using industry-standard methods and
                  software. Services are available onsite or remotely depending
                  on project length and complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Workflow */}
          <div className="mt-10 sm:mt-12 lg:mt-14 bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {phases.map((phase, index) => (
                <div key={index}>
                  {/* Phase Header */}
                  <div
                    className={`${phase.color} text-white font-semibold text-sm sm:text-base text-center py-2 sm:py-2.5 rounded-md mb-3 sm:mb-4`}
                  >
                    {phase.title.toUpperCase()}
                  </div>

                  {/* Items */}
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    {phase.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
