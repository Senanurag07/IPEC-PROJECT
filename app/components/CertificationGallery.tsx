"use client";

import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface CertificationGalleryProps {
  logos: string[];        // top logos (3)
  images: string[];       // gallery images
}

export default function CertificationGallery({
  logos,
  images,
}: CertificationGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full rounded-3xl bg-gray-50 px-6 py-10 md:px-10">
      {/* ================= TOP LOGOS ================= */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="relative h-30 w-50">
            <Image
              src={logo}
              alt={`certification-${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="relative">
        {/* LEFT ARROW */}
        <button
          onClick={scrollPrev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2
                     rounded-full bg-black/70 p-2 text-white
                     transition hover:bg-black"
        >
          <BiChevronLeft size={22} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollNext}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2
                     rounded-full bg-black/70 p-2 text-white
                     transition hover:bg-black"
        >
          <BiChevronRight size={22} />
        </button>

        {/* EMBLA VIEWPORT */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_100%]"
              >
                <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[420px]">
                  <Image
                    src={src}
                    alt={`gallery-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
