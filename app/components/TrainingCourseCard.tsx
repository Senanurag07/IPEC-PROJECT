"use client";

import Image from "next/image";
import { FiClock, FiBookOpen, FiArrowRight } from "react-icons/fi";

export interface TrainingCourseCardProps {
  image: string;
  tag?: string;
  duration: string;
  level: string;
  title: string;
  description: string;
  onEnroll?: () => void;
}

export default function TrainingCourseCard({
  image,
  tag,
  duration,
  level,
  title,
  description,
  onEnroll,
}: TrainingCourseCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
      {/* IMAGE */}
      <div className="relative h-[230px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* TAG */}
        {tag && (
          <span
            className="absolute left-4 top-4 rounded-lg bg-white
                       px-3 py-1 text-sm font-semibold text-blue-700 shadow"
          >
            {tag}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-6 py-5">
        {/* META */}
        <div className="mb-4 flex items-center gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <FiClock />
            {duration}
          </span>

          <span className="flex items-center gap-2">
            <FiBookOpen />
            {level}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold leading-snug text-gray-900">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 text-base leading-relaxed text-gray-600">
          {description}
        </p>

        {/* CTA */}
        <button
          onClick={onEnroll}
          className="mt-6 flex items-center justify-center gap-2
                     rounded-xl border-2 border-blue-600 py-3
                     text-base font-semibold text-blue-600
                     transition hover:bg-blue-600 hover:text-white"
        >
          Enroll Now
          <FiArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}
