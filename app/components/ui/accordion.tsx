"use client";

import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

export const Accordion = RadixAccordion.Root;
export const AccordionItem = RadixAccordion.Item;

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, any>(
  ({ children, ...props }, ref) => (
    <RadixAccordion.Trigger ref={ref} {...props}>
      {children}
    </RadixAccordion.Trigger>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<HTMLDivElement, any>(
  ({ children, ...props }, ref) => (
    <RadixAccordion.Content ref={ref} {...props}>
      {children}
    </RadixAccordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export default Accordion;
