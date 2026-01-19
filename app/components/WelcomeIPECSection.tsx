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
                Welcome to{" "}
                <span className="font-bold">IPEC Project Systems Sdn Bhd</span>
              </h2>

              <p>
                Welcome to IPEC Project Systems Sdn Bhd, a leading provider of
                <span className="font-bold">
                  {" "}
                  integrated business and project solutions
                </span>{" "}
                for organizations across Malaysia. While we continue to be a
                trusted name in
                <span className="font-bold">
                  {" "}
                  Oracle Primavera project management,{" "}
                </span>{" "}
                our business has evolved to deliver comprehensive solutions that
                drive project success and enable digital transformation.
              </p>

              <p>
                Our foundation is built on more than a decade of experience in
                 <span className="font-bold"> Primavera P6 EPPM, Primavera Cloud (OPC),
                </span>{" "}
                and <span className="font-bold">linear scheduling tools</span>{" "}
                such as <span className="font-bold">AI, BIM, Turbo Chart.</span>
                Today, we go beyond planning and scheduling to deliver
                integrated platforms that connect people, systems, and data
                across the project lifecycle.
              </p>

              <p>We proudly offer two of our flagship solutions:</p>

              <p>
                <strong>ProjectNow CDP</strong> is a real-time project reporting
                and performance monitoring solution for contractors and project
                owners, delivering complete visibility into progress, costs,
                risks, safety, and KPIs. Seamlessly integrated with Oracle
                Primavera P6, ERP systems, and Microsoft SharePoint EDMS, it
                unifies structured project data with document collaboration to
                streamline reporting, improve decision-making, and enhance
                transparency across all stakeholders—helping projects stay on
                time, on budget, and fully compliant.
              </p>

              <p>
                <strong>
                  ProjectNow CIP (Construction Integration Platform)
                </strong>{" "}
                is an advanced integration middleware that connects Oracle
                Primavera with third-party systems such as{" "}
                <span className="font-bold">SAP, CMMS, BIM platforms,</span> and
                other enterprise tools. ProjectNow CIP eliminates data silos,
                automates project data flow, and ensures consistent, accurate,
                and timely information across the organization.
              </p>

              <p className=" ">
                At IPEC, we understand the complexities of today’s project
                environments. Our mission is to simplify that complexity through{" "}
                <span className="font-bold">
                  smart integration, automated workflows, and customized
                  dashboards{" "}
                </span>
                that align with your business goals.
              </p>

              <p>
                We are committed to client success, continuous innovation, and
                service excellence. Our team of certified professionals takes a
                hands-on approach to every engagement, delivering solutions that
                are practical, scalable, and tailored to your operational needs.
              </p>

              <p>
                As the industry embraces technologies like AI, BIM, and
                real-time analytics, IPEC remains at the forefront—helping
                organizations like yours build smarter, manage better, and
                transform faster.
              </p>

              <p>
                We invite you to connect with us to learn how we can support
                your journey. Let us show you what’s possible with IPEC as your
                trusted digital transformation and project delivery partner.
              </p>

              <p className="font-semibold text-gray-900">
                Thank you for considering IPEC Project Systems.
              </p>

              {/* Signature */}
              <div className="pt-4 space-y-1">
                <p className="font-semibold text-gray-900">Warm regards,</p>
                <p className="font-semibold text-gray-900">Lakhbeer Singh</p>
                <p className="text-gray-700">Chief Operating Officer</p>
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
              <div className="relative h-124 sm:h-170 overflow-hidden">
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
