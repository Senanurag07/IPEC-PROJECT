"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import TrainingCourseCard from "../components/TrainingCourseCard";

const courses = [
  {
    image: "/assests/cards.jpg",
    tag: "Oracle",
    duration: "3 days",
    level: "Beginner to Intermediate",
    title: "Primavera P6 Professional - Project management",
    description:
      "Learn to create and manage projects efficiently, assign resources, track progress, and generate reports with Primavera P6 Professional.",
  },
  {
    image: "/assests/cards.jpg",
    tag: "Oracle",
    duration: "3 days",
    level: "Beginner to Intermediate",
    title: "Primavera P6 Professional - Project management",
    description:
      "Learn to create and manage projects efficiently, assign resources, track progress, and generate reports with Primavera P6 Professional.",
  },
  {
    image: "/assests/cards.jpg",
    tag: "Oracle",
    duration: "3 days",
    level: "Beginner to Intermediate",
    title: "Primavera P6 Professional - Project management",
    description:
      "Learn to create and manage projects efficiently, assign resources, track progress, and generate reports with Primavera P6 Professional.",
  },
   {
    image: "/assests/cards.jpg",
    tag: "Oracle",
    duration: "3 days",
    level: "Beginner to Intermediate",
    title: "Primavera P6 Professional - Project management",
    description:
      "Learn to create and manage projects efficiently, assign resources, track progress, and generate reports with Primavera P6 Professional.",
  },
];

export default function OtherTrainingCourses() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-14">
      {/* ================= HEADING ================= */}
      <h2 className="mb-10 text-center text-2xl font-semibold tracking-wide text-gray-900 md:text-3xl">
        OTHER TRAINING COURSES
      </h2>

      {/* ================= CAROUSEL ================= */}
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
          {/* EMBLA CONTAINER */}
          <div className="flex gap-6 px-4">
            {courses.map((course, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%]"
              >
                <TrainingCourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
