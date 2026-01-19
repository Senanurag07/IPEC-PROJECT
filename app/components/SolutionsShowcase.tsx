"use client";

import Image from "next/image";

export default function SolutionsShowcase() {
  const showcases = [
    {
      id: "oracle",
      title: "Oracle",
      paragraphs: [
        `Oracle Corporation is an enterprise IT company. For more than 30 years, Oracle has been helping customers such as you manage their information systems.`,
        `With more than 380,000 customers—including 100 of the Fortune 100—and with deployments across a wide variety of industries in more than 145 countries around the globe, Oracle offers an optimized and fully integrated stack of business hardware and software systems. IPEC is Oracle Gold partner specialized in Oracle Primavera solution.`,
      ],
      imageSrc: "/assests/oraclegold.png",
      imageAlt: "Oracle Partner",
      imageFirst: true,
    },
    {
      id: "turbo",
      title: "Turbo Chart",
      paragraphs: [
        `Linear Project Software Pty Ltd is the developer for Turbo Chart software for generating Time Location charts that are used to visualise linear project schedules. IPEC Project Systems Sdn Bhd is the partner for Turbo Chart in Malaysia & Philippines.`,
      ],
      imageSrc: "/assests/linear.png",
      imageAlt: "Turbo Chart",
      imageFirst: false,
    },
      {
      id: "STO Navigator Inc.",
      title: "STO Navigator Inc.",
      paragraphs: [
        `STO Navigator™ Inc., headquartered in Vancouver, specializes in improving process uptime through optimized Shutdowns, Turnarounds, Outages, and Reliability Asset Management across major industrial sectors.`,
        `Their MMS® Methodology Management System reduces risk, controls STO execution, and helps clients exceed KPIs. The company delivers strong ROI by lowering cost, risk, and schedule duration, supported by an industry-leading WWT efficiency model. IPEC is a certified provider of STO Navigator MMS systems, dashboards, and training.`,
      ],
      imageSrc: "/assests/sto.png",
      imageAlt: "Oracle Partner",
      imageFirst: true,
    },
  
  ];
  return (
    <section className="w-full bg-white py-20">
      <div className=" max-container space-y-28">
        {showcases.map((item) => (
          <div
            key={item.id}
            className="grid items-center gap-16 md:grid-cols-2"
          >
            {item.imageFirst ? (
              <>
                <div className="flex justify-center">
                  <div className="relative h-[320px] w-full max-w-md rounded-3xl border border-blue-400 p-6">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-4 text-base leading-relaxed text-gray-600">
                    {item.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

         
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {item.title}
                  </h3>

                  <div className="text-base leading-relaxed text-gray-600">
                    {item.paragraphs.map((p, i) => (
                      <p key={i} className={i === 0 ? "mb-4" : undefined}>
                        {p}
                      </p>
                    ))}
                  </div>

                  <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                    View More
                  </button>
                </div>

                <div className="flex justify-center">
                  <div className="relative h-[320px] w-full max-w-md rounded-3xl border border-blue-400 p-6">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
