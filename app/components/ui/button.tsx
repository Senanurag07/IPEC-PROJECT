"use client";

import { cx } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "default" | "link";
};

export function Button({
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center";
  const variantClass =
    variant === "link"
      ? "text-blue-600 hover:underline p-0 h-auto"
      : "px-4 py-2 bg-blue-600 text-white rounded";

  return (
    <button className={cx(base, variantClass, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
