"use client";

import Image from "next/image";

const partners = [
  {
    title: "Construction& Engineering ",
    image: "/assests/construction.jpeg",
  },
  {
    title: "⁠oil & gas",
    image:"/assests/oil.jpeg",
  },
  {
    title: "high tech",
    image: "/assests/hightech.jpeg",
  },
  {
    title: "property",
    image: "/assests/gov.jpeg",
  },
  {
    title: "⁠utlity & transport",
    image: "/assests/utility.jpeg",
  },
  {
    title: "Government",
    image: "/assests/gov.jpeg",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-container px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Who We Work With
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We collaborate with institutions, organizations, and innovators who
            are shaping the future of education and professional excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {partners.map((item, index) => (
            <div
              key={index}
              className="group relative h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-xl"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
