"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
    
export default function PrimaveraTrainingFAQ() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mb-14 grid gap-10 md:grid-cols-2">
          {/* LEFT */}
          <h2 className="text-3xl font-bold uppercase tracking-wide text-black md:text-4xl">
            PRIMAVERA TRAINING FAQ
          </h2>

          {/* RIGHT */}
          <p className="max-w-xl text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam,
          </p>
        </div>

        {/* ================= FAQ ================= */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          <AccordionItem
            value="item-1"
            className="rounded-2xl bg-gray-50 px-6"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black">
              What services does Triloe offer?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-gray-600">
              We offer branding, digital marketing, performance campaigns, and
              content strategy tailored to your business goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="rounded-2xl bg-gray-50 px-6"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black">
              How does the process work?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-gray-600">
              Our process begins with understanding your requirements, followed
              by strategy development, execution, optimization, and reporting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="rounded-2xl bg-gray-50 px-6"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black">
              Who are your ideal clients?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-gray-600">
              Our ideal clients include organizations seeking professional
              project management training and enterprise-level consulting
              solutions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="rounded-2xl bg-gray-50 px-6"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black">
              How long does a project usually take?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-gray-600">
              Project duration depends on scope and complexity, but most
              engagements range from a few weeks to several months.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="rounded-2xl bg-gray-50 px-6"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black">
              Do you offer customized training programs?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-gray-600">
              Yes, all our Primavera training programs can be customized to meet
              organizational and project-specific requirements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
