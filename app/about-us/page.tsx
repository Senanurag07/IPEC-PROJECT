import React from "react";
import ContactSection from "../components/ContactSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";

function page() {
  return (
    <main>
      <section className="w-full max-container py-20 lg:py-24 bg-white overflow-hidden">
        {/* CONTENT */}
        <div className=" mx-auto px-4 sm:px-6 text-center">
          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            Not just solutions. Shared <br className="hidden sm:block" />{" "}
            success.
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We help industrial organizations reduce risk, optimize shutdown
            performance, and achieve measurable ROI.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-medium w-full sm:w-auto">
              Contact Us
            </button>

            <button className="flex items-center justify-center gap-2 text-black font-medium w-full sm:w-auto">
              <span className="text-lg">📞</span>
              Schedule a Free Call
            </button>
          </div>
        </div>

        {/* IMAGE STRIP */}
        <div
          className="
            md:-mt-12
            flex
            flex-col
            sm:flex-row
            items-center
            sm:items-end
            justify-center
            gap-6
            sm:gap-8
            lg:gap-10
          "
        >
          {/* IMAGE 1 */}
          <div className="w-full sm:w-[220px] h-[220px] sm:h-[350px] rounded-3xl overflow-hidden">
            <img
              src="assests/hero1.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="w-full sm:w-[260px] h-[220px] sm:h-[250px] rounded-3xl overflow-hidden sm:-mt-10">
            <img
              src="assests/gallery.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 3 */}
          <div className="w-full sm:w-[220px] h-[200px] sm:h-[150px] rounded-3xl overflow-hidden">
            <img
              src="assests/gov.jpeg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 4 */}
          <div className="w-full sm:w-[260px] h-[220px] sm:h-[250px] rounded-3xl overflow-hidden sm:-mt-10">
            <img
              src="assests/home.jpeg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 5 */}
          <div className="w-full sm:w-[220px] h-[220px] sm:h-[350px] rounded-3xl overflow-hidden">
            <img
              src="assests/oil.jpeg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="w-full bg-white  ">
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
          At IPEC Project Systems Sdn Bhd, we specialize in providing world-class
          project and program management solutions to organizations in Malaysia.
          Our range of solutions for project planning and control, project
          scheduling and project management software help our clients to deliver
          projects on time and budget.
        </p>

        <p>
          With our core focus on Oracle Primavera EPPM solution, we have been
          assisting numerous clients with bespoke implementation services,
          professional services, and training courses. As an Approved Education
          Provider (AEP) with AACE International, we tailor our client engagements
          and training courses based on internationally recognized frameworks
          and recommended practices for cost, schedule, and project risk
          management.
        </p>

        <p>
          In line with our vision of being an integrated solution provider, we
          have partnered with renowned firms such as STO Navigator Inc and Linear
          Project Software Pvt Ltd. Our team of certified professionals works
          closely with our clients to understand their business goals, budget,
          and operational requirements to provide customized solutions that meet
          their needs.
        </p>

        <p>
          Our commitment to customer satisfaction and integrity is reflected in
          the high-quality services we provide, and we take pride in continuously
          improving our service level to exceed our clients’ expectations.
        </p>

        <p className="font-medium text-black">
          If you are looking for a reliable and experienced project management
          solutions provider in Malaysia, contact us today to experience the
          IPEC difference!
        </p>

      </div>
    </div>
  </div>
</div>
<div className="w-full mt-8 border-y">
  <div className="max-container py-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">

      <div className="flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-semibold">5+ Years</h3>
        <p className="text-sm text-gray-600 mt-1">Years Of Experience</p>
      </div>

      <div className="flex flex-col items-center md:border-l">
        <h3 className="text-3xl md:text-4xl font-semibold">50+</h3>
        <p className="text-sm text-gray-600 mt-1">Top specialists</p>
      </div>

      <div className="flex flex-col items-center md:border-l">
        <h3 className="text-3xl md:text-4xl font-semibold">85+</h3>
        <p className="text-sm text-gray-600 mt-1">Project Complete</p>
      </div>

      <div className="flex flex-col items-center md:border-l">
        <h3 className="text-3xl md:text-4xl font-semibold">60%</h3>
        <p className="text-sm text-gray-600 mt-1">senior engineers</p>
      </div>

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
        At the heart of IPEC Project Systems Sdn Bhd. are our core values, which
        have shaped our company’s culture and character.
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

      {/* CARD */}
      <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
          SERVICE ORIENTATED
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At IPEC, we are committed to providing exceptional service and value
          that exceeds our clients’ expectations. As a service-oriented company,
          we prioritize our clients’ needs and strive to deliver the highest
          level of service and satisfaction.
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
          SERVICE ORIENTATED
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At IPEC, we are committed to providing exceptional service and value
          that exceeds our clients’ expectations. As a service-oriented company,
          we prioritize our clients’ needs and strive to deliver the highest
          level of service and satisfaction.
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
          SERVICE ORIENTATED
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At IPEC, we are committed to providing exceptional service and value
          that exceeds our clients’ expectations. As a service-oriented company,
          we prioritize our clients’ needs and strive to deliver the highest
          level of service and satisfaction.
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
          SERVICE ORIENTATED
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At IPEC, we are committed to providing exceptional service and value
          that exceeds our clients’ expectations. As a service-oriented company,
          we prioritize our clients’ needs and strive to deliver the highest
          level of service and satisfaction.
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
          SERVICE ORIENTATED
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At IPEC, we are committed to providing exceptional service and value
          that exceeds our clients’ expectations. As a service-oriented company,
          we prioritize our clients’ needs and strive to deliver the highest
          level of service and satisfaction.
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-bold text-black mb-3 tracking-wide">
          SERVICE ORIENTATED
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At IPEC, we are committed to providing exceptional service and value
          that exceeds our clients’ expectations. As a service-oriented company,
          we prioritize our clients’ needs and strive to deliver the highest
          level of service and satisfaction.
        </p>
      </div>

    </div>
  </div>
</div>

<WhyChooseUs />
<TestimonialsSection />
<div className="w-full bg-white py-6 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* SECTION TITLE */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Our Team
      </h2>
    </div>

    {/* TEAM GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* CARD */}
      <div className="flex flex-col items-start">
        <div className="w-full h-[340px] rounded-3xl overflow-hidden">
          <img
            src="assests/mrlakhveer.png"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-black">
          Lakhbeer Singh
        </h3>

        <p className="text-gray-600 text-sm">
          Chief Financial Officer
        </p>

        <div className="flex items-center gap-3 mt-3">
          <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
            ✕
          </div>
          <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
            in
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="flex flex-col items-start">
        <div className="w-full h-[340px] rounded-3xl overflow-hidden">
          <img
            src="assests/mrlakhveer.png"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-black">
          Lakhbeer Singh
        </h3>

        <p className="text-gray-600 text-sm">
          Chief Financial Officer
        </p>

        <div className="flex items-center gap-3 mt-3">
          <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
            ✕
          </div>
          <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
            in
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="flex flex-col items-start">
        <div className="w-full h-[340px] rounded-3xl overflow-hidden">
          <img
            src="assests/mrlakhveer.png"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-black">
          Lakhbeer Singh
        </h3>

        <p className="text-gray-600 text-sm">
          Chief Financial Officer
        </p>

        <div className="flex items-center gap-3 mt-3">
          <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
            ✕
          </div>
          <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
            in
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



      <ContactSection />
    </main>
  );
}

export default page;
