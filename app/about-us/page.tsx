import React from "react";
import ContactSection from "../components/ContactSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import Image from "next/image";

function page() {


  const data = [
    {
      name: "Asif Jan",
      role:"Regional Business Development Manager Collabro (Asia Pacific) Sdn Bhd",
          avatar: "/assests/cards.jpg",

      message:"IPEC has been Collabro’s partner for the last three years, during this period in my capacity as a Regional Business Development Manager for Collabro, I’ve found IPEC to be a thoroughly professional organization with client centric approach.IPEC has a very hard working and dedicated team that has helped us deliver complex project with a number of clients in Malaysia in record time. The team is has shown high degree of enthusiasm during the course project that we have worked together. I’ve found them to be extremely helpful as a partner.I highly recommend IPEC as solution provider in its area of business to any organization in the future.Sincerely,"
    },
    {
      name: "Ej (Ted) Lister",
      role:"President STO Navigator Inc",
          avatar: "/assests/cards.jpg",

      message:"IPEC lives up to its core values, in all aspects of project delivery. I know, because I’ve had the pleasure, on numerous occasions, to assist IPEC with training—related to Shutdown, Turnaround and Outage events using Primavera P6 to enhance Safety, Quality, Worker-efficiency, Cost and Schedule-duration—and they always put their clients’ interests first: ensuring top venues, quality programs and materials, and extended aftercare and support."
    }
  ]
  return (
    <main>
      <section className="w-full    relative max-container py-20 lg:py-24 bg-red-400 overflow-hidden">


        <div className="h-full w-full absolute inset-0 top-0 left-0 " >
          <Image src={'/assests/about-us-hero.jpeg'} className="object-cover object-contain" alt="about-hero-image" fill />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative mx-auto px-4 sm:px-6 text-center">
          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            More than systems.<br className="hidden sm:block" />{" "}
            Proven project outcomes.
          </h1>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            We help industrial organizations reduce risk, optimize shutdown
            performance, and achieve measurable ROI.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-medium w-full sm:w-auto">
              Contact Us
            </button>

            <button className="flex items-center justify-center gap-2 text-white/90 font-medium w-full sm:w-auto">
              <span className="text-lg text-white bg-white rounded-full px-1">📞</span>
              Schedule a Free Call
            </button>
          </div>
        </div>


        {/* IMAGE STRIP */}

      </section>


      <div className="w-full bg-white py-5 sm:py-8 ">
        <div className="max-container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

            {/* LEFT TITLE */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Who We Are ?
              </h2>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">

              <p>
                At IPEC Project Systems Sdn Bhd, we are a business solutions provider specializing in project, operations, and digital transformation solutions for organizations across Malaysia. While our foundation remains rooted in Oracle Primavera P6 project management solutions, we have expanded our offerings to help businesses enhance project performance, operational efficiency, and enterprise integration.
              </p>

              <p>
                With over a decade of experience, we have delivered end-to-end services in project planning and controls, Primavera P6 implementation, training, and system integration for clients in construction, oil & gas, infrastructure, and the public sector.
              </p>

              <p>
                As an Oracle Gold Partner and an Approved Education Provider (AEP) with AACE International, our training and consultancy services align with globally recognized standards in cost management, schedule control, and project risk management. Our hands-on training courses and implementation support have empowered professionals to deliver projects on time and within budget.
              </p>

              <p>
                At IPEC, we are committed to client-centric solutions, system integration, and digital enablement. From Primavera Cloud (OPC) and Unifier to our own ProjectNow Integrator and CDP dashboards, we help organizations make smarter decisions with real-time data, automation, and collaborative workflows.
              </p>

              <p className="font-medium text-black">
                If you're looking to enhance your project outcomes or embark on a broader digital transformation journey, IPEC Project Systems is your trusted partner in Malaysia for project excellence and business innovation.
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 border-y">
        <div className="max-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 text-center">

            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-semibold">14+ Years</h3>
              <p className="text-sm text-gray-600 mt-1">Years Of Experience</p>
            </div>

            <div className="flex flex-col items-center md:border-l">
              <h3 className="text-3xl md:text-4xl font-semibold">200+</h3>
              <p className="text-sm text-gray-600 mt-1">Project Complete</p>
            </div>

            <div className="flex col-span-2 sm:col-span-1 text-center flex-col items-center md:border-l">
              <h3 className="text-3xl md:text-4xl font-semibold">1500+</h3>
              <p className="text-sm text-gray-600 mt-1">People Trained</p>
            </div>
            {/* 
            <div className="flex flex-col items-center md:border-l">
              <h3 className="text-3xl md:text-4xl font-semibold">60%</h3>
              <p className="text-sm text-gray-600 mt-1">senior engineers</p>
            </div> */}

          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 md:py-20 lg:py-28">
        <div className="max-container">

          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our Core Values
            </h2>

            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              At IPEC Project Systems Sdn Bhd, our values shape everything we do — from how we work with clients to how we support our team. These principles guide our decisions, actions, and relationships, helping us build lasting partnerships and deliver meaningful results.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

            {/* CARD */}
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                💼 Service Excellence              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We put our clients first and are committed to delivering exceptional service and value, every time.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                🤝 Professionalism
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We act with integrity, respect, and responsibility in all interactions, upholding the highest professional standards.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                🧭 Integrity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in doing the right thing — being honest, transparent, and accountable in everything we do.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                🙌 Respect
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We treat everyone with fairness and dignity, valuing diverse perspectives and collaboration.

              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                💡 Innovation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We embrace change and continuously improve by developing smart, client-focused solutions that drive progress.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                🤝 Teamwork
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in the power of working together — sharing knowledge, supporting one another, and achieving more as a team.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                🔒 Trust
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trust is the foundation of our relationships. We earn it through consistent performance, ethical conduct, and delivering on our promises.

              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
                👥 People First
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our people are our greatest strength. We invest in their growth, well-being, and success, knowing they are key to our continued excellence.
              </p>
            </div>

          </div>
        </div>
      </div>

      <WhyChooseUs />
      <TestimonialsSection title={true} subtitle={true} is_button={false} data={data} />




      <ContactSection />
    </main>
  );
}

export default page;



      // <div className="w-full bg-white py-6 ">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6">

      //     {/* SECTION TITLE */}
      //     <div className="text-center mb-12">
      //       <h2 className="text-3xl md:text-4xl font-bold text-black">
      //         Our Team
      //       </h2>
      //     </div>

      //     {/* TEAM GRID */}
      //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      //       {/* CARD */}
      //       <div className="flex flex-col items-start">
      //         <div className="w-full h-[340px] rounded-3xl overflow-hidden">
      //           <img
      //             src="assests/mrlakhveer.png"
      //             className="w-full h-full object-cover"
      //           />
      //         </div>

      //         <h3 className="mt-4 text-lg font-semibold text-black">
      //           Lakhbeer Singh
      //         </h3>

      //         <p className="text-gray-600 text-sm">
      //           Chief Financial Officer
      //         </p>

      //         <div className="flex items-center gap-3 mt-3">
      //           <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
      //             ✕
      //           </div>
      //           <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
      //             in
      //           </div>
      //         </div>
      //       </div>

      //       {/* CARD */}
      //       <div className="flex flex-col items-start">
      //         <div className="w-full h-[340px] rounded-3xl overflow-hidden">
      //           <img
      //             src="assests/mrlakhveer.png"
      //             className="w-full h-full object-cover"
      //           />
      //         </div>

      //         <h3 className="mt-4 text-lg font-semibold text-black">
      //           Lakhbeer Singh
      //         </h3>

      //         <p className="text-gray-600 text-sm">
      //           Chief Financial Officer
      //         </p>

      //         <div className="flex items-center gap-3 mt-3">
      //           <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
      //             ✕
      //           </div>
      //           <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
      //             in
      //           </div>
      //         </div>
      //       </div>

      //       {/* CARD */}
      //       <div className="flex flex-col items-start">
      //         <div className="w-full h-[340px] rounded-3xl overflow-hidden">
      //           <img
      //             src="assests/mrlakhveer.png"
      //             className="w-full h-full object-cover"
      //           />
      //         </div>

      //         <h3 className="mt-4 text-lg font-semibold text-black">
      //           Lakhbeer Singh
      //         </h3>

      //         <p className="text-gray-600 text-sm">
      //           Chief Financial Officer
      //         </p>

      //         <div className="flex items-center gap-3 mt-3">
      //           <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
      //             ✕
      //           </div>
      //           <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
      //             in
      //           </div>
      //         </div>
      //       </div>

      //     </div>
      //   </div>
      // </div>