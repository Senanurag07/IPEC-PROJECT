"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    color: "bg-purple-500",
    title: "Heading goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet.",
  },
  {
    number: "02",
    color: "bg-orange-400",
    title: "Heading goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet.",
  },
  {
    number: "03",
    color: "bg-green-400",
    title: "Heading goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet.",
  },
  {
    number: "04",
    color: "bg-yellow-400",
    title: "Heading goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-container px-6">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block rounded-full border border-blue-200 px-4 py-1 text-sm font-medium text-blue-600">
              Our Process
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-black">
              How we Work?
            </h2>
          </div>

          <p className="text-black leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>

        {/* IMAGE */}
        <div className="mt-12 overflow-hidden rounded-3xl">
          <Image
            src="/assests/hero1.jpg" // replace image
            alt="How We Work"
            width={1200}
            height={500}
            className="h-65 sm:h-80 md:h-100 w-full object-cover"
          />
        </div>


      </div>
    </section>
  );
}


        // {/* STEPS */}
        // <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">

        //   {/* DOTTED LINE (Desktop only) */}
        //   <div className="hidden lg:block absolute top-6 left-0 w-full border-t border-dashed border-blue-200" />

        //   {steps.map((step, index) => (
        //     <div key={index} className="relative text-center lg:text-left">
              
        //       {/* Number */}
        //       <div className="flex justify-center lg:justify-start">
        //         <div className="relative text-4xl font-bold text-black">
        //           {step.number}
        //           <span
        //             className={`absolute -bottom-1 left-0 h-2 w-full rounded-full ${step.color}`}
        //           />
        //         </div>
        //       </div>

        //       <h3 className="mt-6 text-lg font-semibold text-black">
        //         {step.title}
        //       </h3>

        //       <p className="mt-2 text-sm text-black leading-relaxed">
        //         {step.description}
        //       </p>
        //     </div>
        //   ))}
        // </div>