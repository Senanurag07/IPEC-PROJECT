"use client";

import Image from "next/image";

const offerings = [
  {
    title: "PROJECT PLANNING & CONTROL SOFTWARE’S",
    image: "/assests/offering1.jpeg",
  },
  {
    title: "MANAGED PROJECT PLANNING & CONTROL SERVICES",
    image: "/assests/offering2.jpeg",
  },
  {
    title: "TRAINING & CERTIFICATION",
    image: "/assests/offering3.jpeg",
  },
  {
    title: "SYSTEM INTEGRATION & DEVELOPMENT",
    image: "/assests/offering4.jpeg",
  },
  {
    title: "COMPUTERISED MAINTENANCE MANAGEMENT SYSTEM (CMMS)",
    image: "/assests/offering5.jpeg",
  },
  {
    title: "PROFESSIONAL SERVICES & PREMIER SUPPORT SERVICES",
    image: "/assests/offering6.jpeg",
  },
];

export default function OurOfferings() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Offerings
          </h2>
          <p className="text-black pt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim aliquam consequatur?</p>
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
                <p className="text-sm sm:text-base font-semibold tracking-wide text-gray-800 uppercase">
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
