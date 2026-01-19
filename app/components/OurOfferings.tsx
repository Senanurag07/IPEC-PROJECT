"use client";

import Image from "next/image";

const offerings = [
  {
    title: "PROJECT PLANNING & CONTROL SOFTWARE’S",
    image: "/assests/offering6.jpeg",
  },
  {
    title: "Consolidated Dashboard Platform(CDP)",
    image: "/assests/offering2.jpeg",
  },
  {
    title: "Construction Colloboration& Document Management Solution",
    image: "/assests/offering1.jpeg",
  },
  {
    title: "SYSTEM INTEGRATION & DEVELOPMENT",
    image: "/assests/offering5.jpeg",
  },
  {
    title: "PROFESSIONAL SERVICES & PREMIER SUPPORT SERVICES",
    image: "/assests/offering4.jpeg",
  },
  {
    title: "TRAINING & CERTIFICATION    (IMAGE NOT PROVIDED FOR THIS SECTION)",
    image: "/assests/offering6.jg",
  },
];

export default function OurOfferings() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            OUR OFFERINGS
          </h2>
          <p className="text-black pt-4">IPEC delivers an integrated portfolio of project management and digital solutions to support effective
project planning, execution, and control.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-55">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="px-6 py-4 text-center">
                <p className="text-sm sm:text-lg font-extrabold tracking-wide text-gray-800 uppercase">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
