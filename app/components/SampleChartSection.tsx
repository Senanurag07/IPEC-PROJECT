"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function SampleChartSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    "/assests/sample1.png",
    "/assests/sample2.jpg",
    "/assests/sample2.jpg",
    "/assests/sample2.jpg",
    "/assests/sample2.jpg",
    "/assests/sample2.jpg",
  ];

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="bg-white py-16">
      <div className="max-container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Sample Chart
        </h2>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((src, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[50%] flex-[0_0_100%] sm:flex-[0_0_50%] px-2"
                >
                  <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-xl overflow-hidden border">
                    <Image
                      src={src}
                      alt={`Sample Chart ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-16 right-0 flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-gray-200 shadow flex items-center justify-center hover:bg-black hover:text-white text-black"
            >
              ←
            </button>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-gray-200 shadow flex items-center justify-center hover:bg-black hover:text-white text-black"
            >
              →
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                selectedIndex === index ? "w-6 bg-blue-600" : "w-2 bg-blue-300"
              }`}
            />
          ))}
        </div>

        {/* Description */}
        <div className="mt-10 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-5xl">
          <p>
            The Time Location diagram shows both the optimal sequence of
            operations at the same location, but also which operations take
            place at the same time in other locations. Conflicts become visible
            through overlapping lines and areas.
          </p>

          <p>
            Traditional CPM schedules and network diagrams are quite detailed,
            but they fail to provide a visual connection between the Project
            plan and the Project itself. By the addition of location
            information, Turbo Chart adds an extra dimension to your schedule,
            giving you more information than an equivalent Gantt chart.
          </p>

          <p>
            Turbo Chart is integrated with Primavera P6 software to enable
            schedule data to be transferred easily into Turbo Chart without
            double data entry. Turbo Chart can also be applied to vertical
            building projects just as easily as linear infrastructure projects.
          </p>
        </div>
      </div>
    </section>
  );
}
