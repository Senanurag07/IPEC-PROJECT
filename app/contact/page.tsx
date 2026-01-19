import React from "react";
import HeroSection from "../components/HeroSectiondynamic";
import Image from "next/image";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import { Contact } from "lucide-react";
import ContactFormSection from "../components/contactusform";

function page() {
  return (
    <main>
      <HeroSection
        title="Contact Us"
        subtitle="From first steps to full growth"
        bgImage="/assests/hero1.jpg"
      />
      <section className="bg-white py-16 sm:py-16">
        <div className="mx-auto max-container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Contact IPEC Project Systems – Your Trusted Oracle Primavera
                Partner
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Thank you for considering IPEC Project Systems Sdn Bhd for your
                Oracle Primavera and project management needs. Our team of
                Primavera-certified experts is ready to deliver end-to-end
                support — from outsourced and managed planning & scheduling
                services to Primavera P6 software consulting, implementation,
                and training.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Whether you are looking to optimize your existing Primavera
                investment or implement a new Primavera solution, we have the
                expertise, industry experience, and proven track record to
                ensure your projects are delivered on time, on budget, and to
                the highest quality standards.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Partner with IPEC Project Systems today and experience reliable,
                professional, and results-driven support for your Primavera P6
                projects. Let us help you streamline planning, enhance
                reporting, and achieve project success.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assests/cards.jpg"
                alt="IPEC Project Systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
       <ContactFormSection />
      <div className="max-container py-20 space-y-12">
        {/* ===== CARD 1 ===== */}
        <div className="border rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* MAP */}
          <div className="w-full h-[280px] md:h-[360px] rounded-xl bg-gray-100 overflow-hidden">
  <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.87737720711!2d101.64311380000001!3d3.1271065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc492d5c21014f%3A0x1dc733b278422695!2sIPEC%20Project%20Systems%20Sdn%20Bhd!5e0!3m2!1sen!2sin!4v1768799525539!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* DETAILS */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="size-4  rounded-full" />
                <FaLocationArrow className="text-blue-500 size-4 absolute" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">
                  Office Address:
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                  IPEC Project Systems Sdn Bhd 3A13, Unit 13, Floor 3A, Block F,
                  Phileo Damansara 1, Jalan 16/11, Off Jalan Damansara, 46350
                  Petaling Jaya, Selangor, Malaysia
                </p>
              </div>
            </div>

            <div className="border-t pt-6 flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <div className="size-4  rounded-sm" />

                <FaMailBulk className="text-blue-500 size-4 absolute" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Email</h4>
                <p className="text-sm text-gray-600">produce-ui@gmail.com</p>
              </div>
            </div>

            <div className="border-t pt-6 flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
              <div className="size-4  rounded-full" />
                <FaPhone className="text-blue-500 size-4 absolute"  />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Phone</h4>
                <p className="text-sm text-gray-600">+91 00000 00000</p>
              </div>
            </div>

            <div className="border-t pt-6 flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="size-4  rounded-full" />
                <FaPhone className="text-blue-500 size-4 absolute"  />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Phone</h4>
                <p className="text-sm text-gray-600">+91 00000 00000</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CARD 2 (REVERSED) ===== */}
        <div className="border rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* DETAILS */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="size-4  rounded-full" />
                <FaLocationArrow className="text-blue-500 size-4 absolute" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">
                  Office Address:
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                  IPEC Project Systems Sdn Bhd 3A13, Unit 13, Floor 3A, Block F,
                  Phileo Damansara 1, Jalan 16/11, Off Jalan Damansara, 46350
                  Petaling Jaya, Selangor, Malaysia
                </p>
              </div>
            </div>

            <div className="border-t pt-6 flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="size-4  rounded-sm" />

                <FaMailBulk className="text-blue-500 size-4 absolute" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Email</h4>
                <p className="text-sm text-gray-600">produce-ui@gmail.com</p>
              </div>
            </div>

            <div className="border-t pt-6 flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="size-4  rounded-full" />
                <FaPhone className="text-blue-500 size-4 absolute"  />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Phone</h4>
                <p className="text-sm text-gray-600">+91 00000 00000</p>
              </div>
            </div>

            <div className="border-t pt-6 flex gap-4">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="size-4  rounded-full" />
                <FaPhone className="text-blue-500 size-4 absolute"  />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Phone</h4>
                <p className="text-sm text-gray-600">+91 00000 00000</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-[280px] md:h-[360px] rounded-xl bg-gray-100 overflow-hidden order-1 lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.87737720711!2d101.64311380000001!3d3.1271065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc492d5c21014f%3A0x1dc733b278422695!2sIPEC%20Project%20Systems%20Sdn%20Bhd!5e0!3m2!1sen!2sin!4v1768799525539!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
