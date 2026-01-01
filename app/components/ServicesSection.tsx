"use client";

import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 rounded-t-[80px]">
      <div className="mx-auto max-container px-6 space-y-24">

        {/* --------- ROW 1 --------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative w-full h-70 sm:h-84 md:h-94 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assests/support.png"
              alt="Primavera Premier Support"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Primavera Premier Support
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              IPEC Project Systems Sdn Bhd is your trusted partner for Primavera
              Premier Support in Malaysia. With our technical and functional
              expertise, we offer a comprehensive support program for valued
              customers who are using Oracle Primavera software.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Technical Expertise</li>
              <li>• Functional Support</li>
              <li>• Comprehensive Program</li>
              <li>• Oracle Certified</li>
            </ul>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
              Read More : Primavera Premier Support
            </button>
          </div>
        </div>

        {/* --------- ROW 2 --------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Planning & Scheduling
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              IPEC Project Systems Sdn Bhd provides functional expertise to build
              project schedules, update schedules and provide standard and
              custom reports to help you complete your projects on-time and on
              budget.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Project Schedules</li>
              <li>• Custom Reports</li>
              <li>• On-time Delivery</li>
              <li>• Risk Mitigation</li>
            </ul>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
              Read More : Planning & Scheduling
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assests/graph.jpg"
              alt="Planning & Scheduling"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
