"use client";

export default function TurboChartSection() {
  const handleDownload = () => {
    // 🔹 Place your PDF inside /public/pdfs/
    const pdfUrl = "/pdfs/turbo-chart-brochure.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Turbo-Chart-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gray-100 rounded-t-[80px] py-16">
      <div className="max-container mx-auto px-4">
        <div className="bg-white rounded-[40px] px-6 sm:px-10 py-14">

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-snug">
            THE EASIEST AND FASTEST WAY TO CREATE TIME LOCATION CHARTS FOR LINEAR
            PROJECTS
          </h2>

          {/* Description */}
          <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed max-w-5xl">
            <p>
              Turbo Chart is a software that helps manage construction projects
              easily and affordably. It has all the features you need to track
              progress, generate reports and create Time Location Charts
              quickly. It can work with different project scheduling data and
              specializes in producing Time Location Charts, which are diagrams
              that show all activities along a construction site in one chart.
              Turbo Chart makes this process simple and easy to understand.
            </p>

            <p>
              Turbo Chart is a software tool that simplifies the management of
              linear infrastructure and construction projects. It produces Time
              Location Charts that show the sequence and timing of operations at
              different locations, making it easier to identify conflicts and
              make decisions. It integrates location information into project
              schedules, making them more compact and readable.
            </p>

            <p>
              Turbo Chart works with Primavera P6 and MSP, eliminating the need
              for double data entry. It can also be used for vertical building
              projects by using the relative levels between floors as location
              values. With Turbo Chart, managing construction projects has
              become simpler and more effective.
            </p>

            <h3 className="font-semibold text-gray-900 text-base sm:text-lg pt-4">
              Designed to work with your existing project schedule data
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Primavera P6</li>
              <li>Microsoft Project</li>
              <li>Asta PowerProject</li>
              <li>Safran Project/Risk</li>
              <li>Any Spreadsheet ready data</li>
            </ul>

            <p>
              A time–distance chart is generally a diagram with one axis
              representing time and the other axis distance. The advantage of a
              time–distance diagram is that it nicely shows all visible
              activities along the construction site on a single diagram.
            </p>

            <p>
              In project management, a time–distance diagram (also known as
              Time-chainage diagram, Time-location diagram, Linear Schedule or
              Line of Balance chart) is a method of graphically presenting a
              time schedule for longitudinal projects such as pipeline, rail,
              bridge, tunnel, road, and transmission line construction.
            </p>
          </div>

          {/* CTA BOX */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-gray-900 font-semibold text-base sm:text-lg">
              Turbo-Chart and trial for 14 days for free
            </p>

            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm sm:text-base hover:bg-blue-700 transition"
            >
              Download PDF
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
