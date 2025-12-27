"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Harry Maguire",
    role: "CTO, company",
    message:
      "I’ve tried many platforms, but UI Wiki stands out for its attention to detail and clean aesthetics. Highly recommend!",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Harry Maguire",
    role: "CTO, company",
    message:
      "I’ve tried many platforms, but UI Wiki stands out for its attention to detail and clean aesthetics. Highly recommend!",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Harry Maguire",
    role: "CTO, company",
    message:
      "I’ve tried many platforms, but UI Wiki stands out for its attention to detail and clean aesthetics. Highly recommend!",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Harry Maguire",
    role: "CTO, company",
    message:
      "I’ve tried many platforms, but UI Wiki stands out for its attention to detail and clean aesthetics. Highly recommend!",
    avatar: "/assests/cards.jpg",
  },
];

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  return (
    <section className="bg-white py-12">
      <div className="px-6">
        {/* Header */}
        <div className="text-center max-container mx-auto">
          <span className="inline-block rounded-full border border-blue-200 px-4 py-1 text-sm font-medium text-blue-600">
            Reviews
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-black">
            Client Testimonials
          </h2>

          <p className="mt-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Embla */}
        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] pt-6"
              >
                <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm overflow-visible">
                  {/* Avatar */}
                  <div className="absolute z-20 -top-7 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-md overflow-hidden">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="pt-6 text-center">
                    <h4 className="font-semibold text-blue-600">{item.name}</h4>
                    <p className="text-sm text-black">{item.role}</p>

                    <p className="mt-4 text-black text-sm leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
