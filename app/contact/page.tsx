import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'
import Image from 'next/image'

function page() {
  return (
    <main>
        <HeroSection 
            title="Contact Us"      
            subtitle='From first steps to full growth'
            bgImage="/assests/hero1.jpg"
      />
         <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-container px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Contact IPEC Project Systems – Your Trusted Oracle Primavera Partner
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Thank you for considering IPEC Project Systems Sdn Bhd for your
              Oracle Primavera and project management needs. Our team of
              Primavera-certified experts is ready to deliver end-to-end support
              — from outsourced and managed planning & scheduling services to
              Primavera P6 software consulting, implementation, and training.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Whether you are looking to optimize your existing Primavera
              investment or implement a new Primavera solution, we have the
              expertise, industry experience, and proven track record to ensure
              your projects are delivered on time, on budget, and to the
              highest quality standards.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Partner with IPEC Project Systems today and experience reliable,
              professional, and results-driven support for your Primavera P6
              projects. Let us help you streamline planning, enhance reporting,
              and achieve project success.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
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

    </main>
  )
}

export default page
