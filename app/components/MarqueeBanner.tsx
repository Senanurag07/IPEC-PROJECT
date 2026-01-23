"use client";

import Image from "next/image";

const marqueeImages = [
  "/assests/oracle.jpg",
  "/assests/cdp.jpg",
  "/assests/oracle.png",
  "/assests/tc.png",
  "/assests/aace.jpeg",
  "/assests/projectnowintegration.jpeg",
];

export default function MarqueeBanner() {
  return (
    <section className="bg-[#f5f5f5] sm:py-10 py-8 overflow-hidden">
      <div className="relative w-full flex">
        {/* Marquee Track - Duplicate for seamless loop */}
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...marqueeImages, ...marqueeImages, ...marqueeImages].map(
            (img, index) => (
              <div
                key={index}
                className="relative h-16 sm:h-20 md:h-24 w-40 sm:w-45 md:w-50 shrink-0"
              >
                <Image
                  src={img}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
                  className="object-contain"
                  unoptimized
                />
              </div>
            )
          )}
        </div>

        {/* Second track for seamless infinite loop */}
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...marqueeImages, ...marqueeImages, ...marqueeImages].map(
            (img, index) => (
              <div
                key={`duplicate-${index}`}
                className="relative h-16 sm:h-20 md:h-24 w-40 sm:w-45 md:w-50 shrink-0"
              >
                <Image
                  src={img}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
                  className="object-contain"
                  unoptimized
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
