"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1150299954?background=1&autoplay=1&muted=1&loop=1"
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.77vh",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Consulting for Excellence
          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base md:text-xl text-white/90">
            Integrated Digital & AI Solutions for Smarter Project Delivery
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-500 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/schedule-call"
              className="flex items-center gap-2 text-sm sm:text-base font-medium text-white hover:underline"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                ☎
              </span>
              Schedule a Free Call
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Right SVG Placeholder */}
      <div className="absolute bottom-0 right-0 z-1 pointer-events-none w-58 h-58 sm:w-64 sm:h-64 md:w-80 md:h-96 lg:w-[366px] lg:h-[434px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 366 434"
          fill="none"
          className="w-full h-full"
        >
          <path
            d="M39.0311 428.01C3.83917 354.73 -24.875 203.532 141.804 184.974C350.151 161.776 488.32 393.206 288.596 313.18C128.816 249.159 457.629 85.1423 642.007 11.1364"
            stroke="#2563EB"
            strokeWidth="24"
          />
        </svg>
      </div>
    </section>
  );
}
