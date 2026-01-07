"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Primavera Premier Support",
    description:
      "IPEC Project Systems Sdn Bhd is your trusted partner for Primavera Premier Support in Malaysia. With our technical and functional expertise, we offer a comprehensive support program for valued customers who are using Oracle Primavera software.",
    linkText: "Read More : Primavera Premier Support",
    href: "/services/primavera-premier-support",
  },
  {
    title: "Planning & Scheduling",
    description:
      "IPEC Project Systems Sdn Bhd is your trusted partner for Primavera Premier Support in Malaysia. With our technical and functional expertise, we offer a comprehensive support program for valued customers who are using Oracle Primavera software.",
    linkText: "Read More : Planning & Scheduling",
    href: "/services/planning-scheduling",
  },
];

export default function OurServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full border  border-blue-200 px-4 py-1 text-sm font-medium text-blue-600">
              Reach Us
            </span>

            <h2 className="mt-4 text-3xl  text-black sm:text-4xl font-bold">
              Our Services
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-2 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg sm:text-xl text-black font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* CTA BAR */}
                <Link
                  href={service.href}
                  className="mt-6 flex items-center justify-between rounded-xl bg-blue-50 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-blue-100 transition"
                >
                  <span>{service.linkText}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <FaArrowRight size={14} />
                  </span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
