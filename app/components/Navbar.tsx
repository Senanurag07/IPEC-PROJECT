"use client";

import { useState } from "react";
import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Career", href: "/career" },
  { name: "Training", href: "/training" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 flex h-16 items-center justify-between rounded-full bg-black/40 backdrop-blur-md px-4 sm:px-6 text-white">

          {/* Logo */}
          <Link
            href="/"
            className="rounded-full bg-cyan-300 px-4 py-1.5 text-sm sm:text-base font-bold text-black"
          >
            LOGO
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Toggle Menu"
          >
            {open ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-3 rounded-2xl bg-black/80 backdrop-blur-md px-6 py-6 text-white">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-cyan-300 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
