"use client";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f6f8fc] py-16 sm:py-20">
      <div className="mx-auto max-container px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          
          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                {/* Number badge */}
                <div className="relative rounded w-12 h-12">
                  <div className="absolute inset-0 border-4 border-t-amber-400 border-l-amber-400 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold">
                    {item.number}
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-md bg-yellow-400 -z-10" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const features = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    number: "01",
    title: "Strategy",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    number: "01",
    title: "Strategy",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    number: "01",
    title: "Strategy",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
];
