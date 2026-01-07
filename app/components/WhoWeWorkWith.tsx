"use client";

import Image from "next/image";

const partners = [
  {
    title: "Construction & Engineering",
    image: "/assests/construction.jpeg",
  },
  {
    title: "Oil & Gas",
    image: "/assests/oil.jpeg",
  },
  {
    title: "High Tech",
    image: "/assests/hightech.jpeg",
  },
  {
    title: "Property",
    image: "/assests/property.jpeg",
  },
  {
    title: "Utility & Transport",
    image: "/assests/utility.jpeg",
  },
  {
    title: "Government",
    image: "/assests/gov.jpeg",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Who We Work With
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We collaborate with organizations across industries to deliver
            integrated project and asset management solutions.
          </p>
        </div>

        {/* Grid (same as Offerings) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-[220px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* White Centered Text Box */}
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
