"use client";

type Stage = {
  id: number;
  title: string;
  description: string;
};

export default function ProjectLifeCycle() {
  const stages: Stage[] = [
    {
      id: 1,
      title: "Initiation Stage",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet viverra eget eu. Tincidunt feugiat felis augue scelerisque porttitor amet dictum natoque.",
    },
    {
      id: 2,
      title: "Planning",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet viverra eget eu. Tincidunt feugiat felis augue scelerisque porttitor amet dictum natoque.",
    },
    {
      id: 3,
      title: "Execution Stage",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet viverra eget eu. Tincidunt feugiat felis augue scelerisque porttitor amet dictum natoque.",
    },
    {
      id: 4,
      title: "Monitoring & Control Stage",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet viverra eget eu. Tincidunt feugiat felis augue scelerisque porttitor amet dictum natoque.",
    },
    {
      id: 5,
      title: "Closure Stage",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet viverra eget eu. Tincidunt feugiat felis augue scelerisque porttitor amet dictum natoque.",
    },
  ];

  return (
    <section className="bg-gray-100 rounded-t-[80px] py-16">
      <div className="max-container mx-auto px-4">
        <div className="bg-white rounded-[40px] px-6 sm:px-10 py-14">

          {/* Heading */}
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              5 Stages of the project Life Cycle
            </h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna
              enim blandit vitae.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical dotted line */}
            <div className="absolute left-5 top-0 h-full border-l border-dashed border-blue-400 hidden sm:block" />

            <div className="space-y-12">
              {stages.map((stage) => (
                <div
                  key={stage.id}
                  className="flex flex-col sm:flex-row gap-6 sm:gap-10"
                >
                  {/* Number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                      {stage.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
