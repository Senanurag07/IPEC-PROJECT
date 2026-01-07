"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutIpecSection() {
  return (
    <section className="relative -mt-24 z-2 rounded-t-[80px] bg-white py-12 ">
      <div className="mx-auto max-container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT – Image Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/assests/home.jpeg" // replace image
                alt="IPEC Consulting"
                width={600}
                height={400}
                className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full object-cover"
              />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 rounded-full text-black bg-white px-4 py-2 text-sm font-semibold shadow">
                <span className="text-blue-600  font-bold">+72%</span> Candidate
                Growth
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assests/cards.jpg"
                      alt="User 1"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assests/cards.jpg"
                      alt="User 2"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assests/cards.jpg"
                      alt="User 3"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-black">Reached</p>
                  <p className="text-gray-500">2.2M Users</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – Content */}
          <div>
            {/* Pill */}
            <span className="inline-block rounded-full border border-blue-200 px-4 py-1 text-sm font-medium text-blue-600">
              Our Services
            </span>

            <h2 className="mt-6 text-3xl text-black sm:text-4xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-blue-600">
                IPEC Project Systems Sdn Bhd
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At <strong>IPEC Project Systems</strong>, we help organizations
              achieve <strong>project success</strong> with trusted{" "}
              <strong>Oracle Primavera solutions</strong>, advanced project
              management software, and integrated business services.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Driven by <strong>innovation</strong>, <strong>teamwork</strong>,
              and <strong>trust</strong>, we deliver solutions that improve{" "}
              <strong>
                project planning, scheduling, cost control, risk management, and
                reporting
              </strong>
              . Our experienced team ensures projects are delivered{" "}
              <strong>on time, on budget, and with maximum efficiency</strong>.
            </p>

            {/* List */}
            <div className="mt-6">
              <p className="font-semibold text-black mb-3">
                We are committed to:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • Delivering innovative solutions tailored to client needs
                </li>
                <li>• Fostering collaboration across all stakeholders</li>
                <li>• Building long-term trust through service excellence</li>
                <li>
                  • Creating growth opportunities for clients and partners
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-6 items-center">
              <Link
                href="/about"
                className="rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-500 transition"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="font-semibold text-gray-900 hover:underline"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
