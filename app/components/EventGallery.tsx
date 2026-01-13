"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";

interface EventGalleryProps {
  title: string;
  subtitle: string;
  images?: string[];
  date: string;
  author: string;
}

export default function EventGallery({
  title,
  subtitle,
  images = [],
  date,
  author,
}: EventGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full bg-white max-container rounded-2xl p-6 md:p-8 shadow-sm">
      {/* TITLE */}
      <h2 className="text-lg md:text-xl font-semibold text-black">{title}</h2>

      {/* SUBTITLE */}
      <p className="mt-2 text-sm md:text-base text-gray-600 max-w-5xl">
        {subtitle}
      </p>

      {/* CAROUSEL */}
      <div className="relative mt-6">
        {/* LEFT ARROW */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/80 p-2 text-white hover:bg-black transition"
        >
          <BiChevronLeft size={20} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/80 p-2 text-white hover:bg-black transition"
        >
          <BiChevronRight size={20} />
        </button>

        {/* EMBLA VIEWPORT */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%]"
              >
                <div className="overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={src}
                    alt={`event-${index}`}
                    width={400}
                    height={260}
                    className="h-55 w-full object-cover md:h-65"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-6 flex items-center justify-between">
        {/* DATE */}
        <span className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700">
          {date}
        </span>

        {/* AUTHOR */}
        <span className="text-sm text-gray-600">
          By <span className="font-medium text-gray-800">{author}</span>
        </span>
      </div>
    </section>
  );
}
