import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'

const employeeRules = [
  {
    title: "Professional Conduct",
    desc: "Uphold the highest standards of professionalism, integrity, and ethical behavior in all business activities. Demonstrate respect towards colleagues, clients, and stakeholders.",
  },
  {
    title: "Compliance with Laws",
    desc: "Adhere to all applicable laws and regulations, both nationally and internationally, in the course of employment.",
  },
  {
    title: "Confidentiality",
    desc: "Safeguard confidential information and trade secrets of the company and its clients. Avoid unauthorized disclosure.",
  },
  {
    title: "Workplace Equality",
    desc: "Embrace diversity and inclusivity. Refrain from any form of discrimination, harassment, or victimization.",
  },
  {
    title: "Protection of Company Assets",
    desc: "Use company resources responsibly and protect both physical and intellectual property.",
  },
  {
    title: "Conflict of Interest",
    desc: "Disclose any personal, financial, or other interests that may conflict with the interests of the company.",
  },
  {
    title: "Whistle blower Protection",
    desc: "Report any unethical behavior, malpractices, or wrongdoings promptly through established channels.",
  },
];
const partnerRules = [
  {
    title: "Professional Conduct",
    desc: "Uphold the highest standards of professionalism, integrity, and ethical behavior in all business activities. Demonstrate respect towards colleagues, clients, and stakeholders.",
  },
  {
    title: "Compliance with Laws",
    desc: "Adhere to all applicable laws and regulations, both nationally and internationally, in the course of employment.",
  },
  {
    title: "Confidentiality",
    desc: "Safeguard confidential information and trade secrets of the company and its clients. Avoid unauthorized disclosure.",
  },
  {
    title: "Workplace Equality",
    desc: "Embrace diversity and inclusivity. Refrain from any form of discrimination, harassment, or victimization.",
  },
  {
    title: "Protection of Company Assets",
    desc: "Use company resources responsibly and protect both physical and intellectual property.",
  },
  {
    title: "Conflict of Interest",
    desc: "Disclose any personal, financial, or other interests that may conflict with the interests of the company.",
  },
  {
    title: "Whistle blower Protection",
    desc: "Report any unethical behavior, malpractices, or wrongdoings promptly through established channels."
     },
];
const antiCorruptionRules = [
  {
    title: "Compliance with Laws",
    desc: "Adhere to all applicable laws and regulations, both nationally and internationally, in the course of employment.",
  },
  {
    title: "Prohibition of Bribery",
    desc: "Do not offer, promise, give, or accept any form of bribe, kickback, or improper advantage in business dealings.",
  },
  {
    title: "Gifts and Hospitality",
    desc: "Ensure that any gifts, hospitality, or entertainment offered or received are reasonable, transparent, and compliant with company policies.",
  },
  {
    title: "Confidentiality",
    desc: "Safeguard confidential information and trade secrets of the company and its clients. Avoid unauthorized disclosure.",
  },
  {
    title: "Workplace Equality",
    desc: "Embrace diversity and inclusivity. Refrain from any form of discrimination, harassment, or victimization.",
  },
];
const shareholdersRules = [
  {
    title: "Compliance with Laws",
    desc: "Adhere to all applicable laws and regulations, both nationally and internationally, in the course of employment.",
  },
  {
    title: "Prohibition of Bribery",
    desc: "Do not offer, promise, give, or accept any form of bribe, kickback, or improper advantage in business dealings.",
  },
  {
    title: "Gifts and Hospitality",
    desc: "Ensure that any gifts, hospitality, or entertainment offered or received are reasonable, transparent, and compliant with company policies.",
  },
  {
    title: "Confidentiality",
    desc: "Safeguard confidential information and trade secrets of the company and its clients. Avoid unauthorized disclosure.",
  },
  {
    title: "Workplace Equality",
    desc: "Embrace diversity and inclusivity. Refrain from any form of discrimination, harassment, or victimization.",
  },
];

function page() {
  return (
    <main>
      <HeroSection
      title="Code of Conduct for Employees, Shareholders, and Partners"
        subtitle=""
        bgImage='/assests/hero1.jpg'
        />
        <div className="w-full bg-white py-12">
  <div className="max-container ">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">

      {/* LEFT TITLE */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Introduction:
        </h2>
      </div>

      {/* RIGHT CONTENT */}
      <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
        <p>
          At IPEC Project Systems Sdn Bhd, we are dedicated to fostering a culture
          of integrity, transparency, and mutual respect. This Code of Conduct
          outlines the principles and expectations for the conduct of our
          employees, shareholders, and partners. Adherence to these principles
          is fundamental to our success and the trust we build within our
          community.
        </p>
      </div>

    </div>
  </div>
</div>

<div className="max-container py-4">

  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    For Employees:
  </h2>

  <div className="space-y-10">

    {employeeRules.map((item, index) => (
      <div key={index} className="relative pb-8">

        <h4 className="text-xl font-semibold mb-2">
          {item.title}:
        </h4>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          {item.desc}
        </p>

        {/* PREMIUM CENTER-THICK BORDER */}
        {index !== employeeRules.length - 1 && (
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        )}

      </div>
    ))}

  </div>

</div>
<div className="max-container py-4">

  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    For ShareHolders:
  </h2>

  <div className="space-y-10">

    {shareholdersRules.map((item, index) => (
      <div key={index} className="relative pb-8">

        <h4 className="text-xl font-semibold mb-2">
          {item.title}:
        </h4>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          {item.desc}
        </p>

        {/* CENTER-THICK / EDGE-THIN BORDER */}
        {index !== partnerRules.length - 1 && (
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        )}

      </div>
    ))}

  </div>

</div>
<div className="max-container py-4">

  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    For Partners:
  </h2>

  <div className="space-y-10">

    {partnerRules.map((item, index) => (
      <div key={index} className="relative pb-8">

        <h4 className="text-xl font-semibold mb-2">
          {item.title}:
        </h4>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          {item.desc}
        </p>

        {/* CENTER-THICK / EDGE-THIN BORDER */}
        {index !== partnerRules.length - 1 && (
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        )}

      </div>
    ))}

  </div>

</div>
<div className="max-container py-4">

  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    Anti-Corruption Clause:
  </h2>

  <div className="space-y-10">

    {antiCorruptionRules.map((item, index) => (
      <div key={index} className="relative pb-8">

        <h4 className="text-xl font-semibold mb-2">
          {item.title}:
        </h4>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          {item.desc}
        </p>

        {/* CENTER-THICK / EDGE-THIN DIVIDER */}
        {index !== antiCorruptionRules.length - 1 && (
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        )}

      </div>
    ))}

  </div>

</div>


    </main>
  )
}

export default page
