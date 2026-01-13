"use client";

import * as React from "react";
import * as RadixPopover from "@radix-ui/react-popover";

export const Popover = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content>
>(({ children, className, ...props }, ref) => {
  return (
    <RadixPopover.Content ref={ref} {...props} className={className}>
      {children}
    </RadixPopover.Content>
  );
});
PopoverContent.displayName = "PopoverContent";

export default Popover;
