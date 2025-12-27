"use client";

import Link from "next/link";

export default function FullWidthCTA() {
  return (
    <section className="relative w-full bg-blue-600 py-12 px-6 text-center overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Centralize your treasury, the <br className="hidden sm:block" />
          modern way.
        </h2>

        <div className="mt-10 flex justify-center">
          <Link
            href="/schedule-call"
            className="rounded-full bg-white px-8 py-3 text-sm sm:text-base font-semibold text-black hover:bg-gray-100 transition"
          >
            Schedule a Call
          </Link>
        </div>
      </div>

      {/* Arrow SVG Placeholder */}
      <div className="absolute right-10 bottom-10 z-10 pointer-events-none hidden sm:block">
        {/*
          🔹 Paste arrow SVG here
          Example:
          <svg>...</svg>
        */}
      </div>

    </section>
  );
}
