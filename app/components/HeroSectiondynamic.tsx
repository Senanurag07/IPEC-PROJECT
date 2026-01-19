"use client";

import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

export default function HeroSection({
  title,
  subtitle,
  bgImage,
}: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full ">
      
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-fit"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-14 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="text-white font-bold tracking-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="mt-3 text-white/90
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

     
    </section>
  );
}
