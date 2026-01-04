"use client";

type Benefit = {
  title: string;
  description: string;
};

export default function BenefitsOfTurboChart() {
  const benefits: Benefit[] = [
    {
      title: "Service Orientated",
      description:
        "At IPEC, we are committed to providing exceptional service and value that exceeds our clients’ expectations. As a service-oriented company, we prioritize our clients’ needs and strive to deliver the highest level of service and satisfaction.",
    },
    {
      title: "Service Orientated",
      description:
        "At IPEC, we are committed to providing exceptional service and value that exceeds our clients’ expectations. As a service-oriented company, we prioritize our clients’ needs and strive to deliver the highest level of service and satisfaction.",
    },
    {
      title: "Service Orientated",
      description:
        "At IPEC, we are committed to providing exceptional service and value that exceeds our clients’ expectations. As a service-oriented company, we prioritize our clients’ needs and strive to deliver the highest level of service and satisfaction.",
    },
    {
      title: "Service Orientated",
      description:
        "At IPEC, we are committed to providing exceptional service and value that exceeds our clients’ expectations. As a service-oriented company, we prioritize our clients’ needs and strive to deliver the highest level of service and satisfaction.",
    },
    {
      title: "Service Orientated",
      description:
        "At IPEC, we are committed to providing exceptional service and value that exceeds our clients’ expectations. As a service-oriented company, we prioritize our clients’ needs and strive to deliver the highest level of service and satisfaction.",
    },
    {
      title: "Service Orientated",
      description:
        "At IPEC, we are committed to providing exceptional service and value that exceeds our clients’ expectations. As a service-oriented company, we prioritize our clients’ needs and strive to deliver the highest level of service and satisfaction.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-container mx-auto px-4">

        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Benefits of TURBOCHART
          </h2>

          <p className="lg:col-span-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            At the heart of IPEC Project Systems Sdn Bhd. are our core values,
            which have shaped our company’s culture and character.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-2xl p-6 sm:p-7 bg-white"
            >
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 uppercase mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
