"use client";

import Image from "next/image";

export default function WelcomeIPECSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-container mx-auto px-4">
        <div className="bg-white rounded-[40px] px-6 sm:px-10 py-14">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 text-gray-800 text-sm sm:text-base leading-relaxed space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Welcome to IPEC Project Systems Sdn Bhd
              </h2>

              <p>
                I am excited to share with you how IPEC Project Systems can help
                you manage your projects and programs. Our team of experienced
                professionals has been delivering top-quality project
                management software solutions using Oracle Primavera for over a
                decade in Malaysia.
              </p>

              <p>
                At IPEC, we understand that managing projects can be
                challenging, especially with the increasing complexity and
                risks involved. That’s why we offer industry-leading solutions
                such as Oracle Primavera solution, Turbo Chart for Linear
                Project Management and MAPCON CMMS for asset management to
                streamline the process and make it more efficient and
                cost-effective.
              </p>

              <p>
                We measure our performance by customer satisfaction and hold
                ourselves to the highest standards of quality in all our work.
                We believe in using best practices and integrated project
                controls systems to ensure that your projects are managed
                effectively.
              </p>

              <p>
                Moreover, we recognize that AI and BIM are transforming the
                project management field, and we are committed to keeping up
                with these changes to provide you with the latest tools and
                technologies to optimize your project’s performance.
                AI-powered project management tools enable you to make
                data-driven decisions to stay ahead of the competition.
              </p>

              <p>
                We strive to continuously improve our service levels and
                welcome your feedback to understand your vision and
                organizational expectations. Please contact us to schedule a
                meeting, and we will be delighted to introduce our team and
                provide you with references from our satisfied clients.
              </p>

              <p>
                Thank you for considering IPEC Project Systems for your project
                management needs. We look forward to hearing from you soon.
              </p>

              <p className="font-semibold text-gray-900">Thank you.</p>

              {/* Signature */}
              <div className="pt-4">
                <p className="font-semibold text-gray-900">
                  Lakhbeer Singh
                </p>
                <p className="text-gray-700">
                  Chief Operating Officer
                </p>
                <a
                  href="mailto:sales@ipecsystems.com.my"
                  className="text-blue-600 underline"
                >
                  sales@ipecsystems.com.my
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative h-124 sm:h-170  overflow-hidden">
                <Image
                  src="/assests/mrlakhveer.png"
                  alt="Lakhbeer Singh"
                  height={600}
                  width={400}
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
