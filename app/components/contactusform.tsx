"use client";

import { z } from "zod";
import React, { useState, FormEvent } from "react";

const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

type FormErrors = Partial<Record<keyof ContactForm, string>>;

export default function ContactFormSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      // Zod uses `issues` to list validation problems
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactForm | undefined;
        if (key) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="w-full bg-gray-50 py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
              Tell us about your project
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            {/* SVG PLACEHOLDER */}
            <div className="w-full max-w-md">{/* paste your svg here */}</div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <h3 className="text-xl font-semibold text-black">
              Send Us a Message
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Have questions or need assistance? Our team is always ready to
              guide you on your journey.
            </p>

            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-full font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
