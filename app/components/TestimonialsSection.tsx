"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Amit Bhuta",
    role: "Deputy Head of Planning, MMC · Gamuda KVMRT SSP Sdn Bhd",
    message:
      "We engaged IPEC to provide project management tools such as Primavera, Legare, Turbochart, and Claim Inspector, along with support services for the KVMRT Line 2 Project. The IPEC team delivered impeccable service, enabling our planning department to function seamlessly across multiple locations. I am happy to recommend their services to anyone seeking excellent service and innovative products in the project management arena.",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Shahzalan Adam",
    role: "Director · Seraya Teknologi Sdn Bhd",
    message:
      "IPEC handled the entire project planning process with excellence. They clearly understood our requirements and how our project operates. Their working schedule is flexible, and they demonstrated true professionalism throughout the engagement.",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Syafiq Husen",
    role: "Project Engineer · PBJV Group Sdn Bhd",
    message:
      "I completed both fundamental and advanced Primavera P6 training with IPEC. The team is very approachable, professional, and friendly. Their after-training support is exceptional—they even responded to my request on a Sunday almost immediately and guided me through every software-related challenge.",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Harith Khan",
    role: "Maintenance System Engineer · Enquest Petroleum Development (M) Sdn Bhd",
    message:
      "I had a great learning experience with IPEC. The trainer explained each step in detail and provided clear guidance throughout the sessions. Classes were punctual and covered all topics efficiently.",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Saiful Azuan Azizan",
    role: "Project Manager · Antara Koh (M) Sdn Bhd",
    message:
      "Training and customer services are very well managed. IPEC has been consistently supportive, and I look forward to working with them again in the future.",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Marcus Tan",
    role: "Conspec Builders (M) S/B",
    message:
      "IPEC is highly professional and demonstrates a deep understanding of Primavera. They showed flexibility and complied with strict client requirements. Their staff consistently worked beyond normal hours to meet challenging deadlines. It has been a pleasure working with IPEC, and I strongly recommend them.",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Logeswaran",
    role: "Toyo Engineering & Construction Sdn Bhd",
    message:
      "IPEC is a recognised Centre of Excellence for professional training, especially in Primavera scheduling and project planning. Their programmes are highly recommended for anyone seeking to enhance their skills in project planning, scheduling, or project management.",
    avatar: "/assests/cards.jpg",
  },
  {
    name: "Sharon Eveline",
    role: "Amalgamated Plant Engineering Sdn Bhd",
    message:
      "The entire course of Primavera-6 Advanced Training by IPEC was very useful. Huge thanks to the trainer, Mr. Vijayganesh for a great training. The trainer demonstrated a very high level of P6 system knowledge and was able to provide clear instruction and answers to all questions asked. I have enjoyed this training so much, and it has helped to improve my performance and productivity.",
    avatar: "/assests/cards.jpg",
  },
];

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
    },
    [WheelGesturesPlugin()]
  );

  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const closeModal = () => setSelectedTestimonial(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedTestimonial !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTestimonial]);

  return (
    <section className="bg-white py-6">
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
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] pt-6"
              >
                <div className="relative h-77 sm:h-77 md:h-70 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm overflow-visible flex flex-col">
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

                  <div className="pt-6 text-center flex flex-col flex-1">
                    <h4 className="font-semibold text-blue-600">{item.name}</h4>
                    <p className="text-base font-semibold text-black">
                      {item.role}
                    </p>

                    <p className="mt-4 text-black text-sm leading-relaxed flex-1">
                      {truncateText(item.message)}
                    </p>

                    {item.message.length > 150 && (
                      <button
                        onClick={() => setSelectedTestimonial(index)}
                        className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedTestimonial !== null && (
          <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600">
                    <Image
                      src={testimonials[selectedTestimonial].avatar}
                      alt={testimonials[selectedTestimonial].name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                      {testimonials[selectedTestimonial].name}
                    </h3>
                    <p className="text-sm font-medium text-black">
                      {testimonials[selectedTestimonial].role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Content - 70% visible with scroll */}
              <div className="p-6 max-h-[280px] overflow-y-auto">
                <p className="text-black text-base leading-relaxed">
                  {testimonials[selectedTestimonial].message}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
