"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function PrimaveraAccordion() {
  return (
    <div className="max-container py-16 space-y-6">

      {/* TOP CARD */}
      <div className="border rounded-xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Critical factors to be considered before implementing
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          Critical factors to be considered before implementing Oracle Primavera
          solution. Oracle Primavera offers unmatched flexibility and power to
          successfully help organizations to deliver projects on time and
          budget thus saving companies cost, increase productivity and deliver
          quality projects.
        </p>

        <Button variant="link" className="p-0 h-auto font-medium">
          Read More...
        </Button>
      </div>

      {/* ACCORDION */}
      <Accordion type="single" collapsible className="space-y-3">

        <AccordionItem value="p6" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Oracle Primavera P6
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Oracle Primavera P6 goes here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="unifier" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Primavera Unifier
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Primavera Unifier goes here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cloud" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Oracle Primavera Cloud
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Oracle Primavera Cloud goes here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="aconex" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Oracle Aconex
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Oracle Aconex goes here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="analytics" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Primavera P6 Analytics
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Primavera P6 Analytics goes here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="risk" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Primavera Risk Analysis
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Primavera Risk Analysis goes here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="autovue" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Oracle Autovue
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Oracle Autovue goes here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="crystal" className="border rounded-xl px-4">
          <AccordionTrigger className="text-base font-medium">
            Oracle Crystal Ball
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Detailed information about Oracle Crystal Ball goes here.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  )
}
