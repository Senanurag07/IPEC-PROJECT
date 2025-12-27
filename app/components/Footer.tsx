"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#EEF2FF] py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-black px-6 sm:px-10 py-14 text-white">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* LOGO + DESC */}
            <div>
              <h3 className="text-2xl font-bold">IPC LOGO</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                The purpose of a FAQ is generally <br />
                to provide information.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms and Condition</Link></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/training">Training</Link></li>
                <li><Link href="/solutions">Solutions</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+00 32162133216</li>
                <li>ABCD@gmail.com</li>
                <li>Address Details</li>
              </ul>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="mt-14 rounded-full bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-black">

            <p className="text-sm font-medium">
              All Rights Reserved © IPC
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon><FaXTwitter /></SocialIcon>
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

/* -------- Social Icon Wrapper -------- */
function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}
