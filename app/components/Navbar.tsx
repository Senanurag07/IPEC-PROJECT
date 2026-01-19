"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

const navLinks = [
   {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
    subLinks: [
      { name: "Message From COO", href: "/Project-Sucess" },
      { name: "Our Partners", href: "/Our-Partners" },
    ],
  },

  {
    name: "Solutions",
    href: "/Project-cycle",
    subLinks: [
      { name: "Oracle Primavera", href: "/Oracle-Primavera" },
      {
        name: "Turbo Chart Linear Project Software",
        href: "/Turbo-Chart",
      },
      { name: "Systems Development", href: "/Systems-Development" },
      { name: "ProjectNow  Integration (CIP)", href: "Systems-Development" },
      { name: "ProjectNow Dashboard (CDP)", href: "Systems-Development" },
      { name: "Mapcon CMMS", href: "Systems-Development" },
    ],
  },

  {
    name: "Training",
    href: "/Training",
  },
  {
    name: "Events",
    href: "/Event",
  },
  {
    name: "Services",
    href: "/",
    subLinks: [
      { name: "Primavera Premier Support", href: "Premier-Support" },
      { name: "Planning & Scheduling", href: "/Planning-Scheduling" },
    ],
  },

  { name: "Career", href: "/Career" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-container">
        <div className="mt-4 flex h-16 items-center justify-between rounded-full bg-black/40 backdrop-blur-md px-4 text-white">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-36 flex items-center">
            <Image
              src="/assests/ipclogo.png"
              alt="IPEC Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* ================= Desktop Nav ================= */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {/* Nav Item */}
                <Link
                  href={link.href}
                  className="flex items-center gap-1 leading-none hover:text-cyan-300 transition"
                >
                  <span className="flex items-center">{link.name}</span>

                  {link.subLinks && (
                    <FaChevronDown className="text-[10px] translate-y-px" />
                  )}
                </Link>

                {/* ===== Premium Dropdown ===== */}
                {link.subLinks && (
                  <div
                    className="absolute left-1/2 top-full z-50 mt-4 w-72 
                               -translate-x-1/2 rounded-2xl bg-white text-black
                               border border-gray-100 shadow-xl
                               opacity-0 invisible scale-95 translate-y-2
                               group-hover:opacity-100 group-hover:visible
                               group-hover:scale-100 group-hover:translate-y-0
                               transition-all duration-200 ease-out"
                  >
                    {/* Arrow */}
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2
                                 h-4 w-4 rotate-45 bg-white
                                 border-l border-t border-gray-100"
                    />

                    <ul className="py-4">
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block px-6 py-3 text-sm font-medium
                                       text-gray-700 hover:bg-gray-50
                                       hover:text-blue-600 transition"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-white px-5 py-2
                       text-sm font-semibold text-black hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        {open && (
          <div className="lg:hidden mt-3 rounded-2xl bg-black/80 backdrop-blur-md px-6 py-6 text-white">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="w-full flex justify-between items-center"
                      >
                        {link.name}
                        <FaChevronDown
                          className={`text-xs transition-transform ${
                            activeMobileDropdown === link.name
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeMobileDropdown === link.name && (
                        <ul className="mt-2 ml-3 space-y-2 text-sm text-white/90">
                          {link.subLinks.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full justify-center rounded-full
                         bg-white px-5 py-2 text-sm font-semibold text-black"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
