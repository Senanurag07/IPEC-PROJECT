"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

/* ---------------- ZOD SCHEMA ---------------- */
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full border border-blue-200 px-4 py-1 text-sm font-medium text-blue-600">
              Reach Us
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-black">
              Arrange a consultation or send us a message.
            </h2>

            <p className="mt-4 text-black leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div>
                <p className="font-semibold text-black">Mail Us</p>
                <p className="text-black">abcd@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold text-black mb-2">Follow Us</p>
                <div className="flex gap-3">
                  <IconCircle>
                    <FaXTwitter />
                  </IconCircle>
                  <IconCircle>
                    <FaFacebookF />
                  </IconCircle>
                  <IconCircle>
                    <FaInstagram />
                  </IconCircle>
                  <IconCircle>
                    <FaLinkedinIn />
                  </IconCircle>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                <div>
                  <p className="text-sm text-black">Give us a Free call</p>
                  <p className="font-semibold text-black">+00 995264442</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <FaPhone />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-gray-200 p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-black">
              Send Us a Message
            </h3>

            <p className="mt-2 text-black text-sm">
              Have questions or need assistance? Our team is always ready to
              guide you on your journey.
            </p>

            {/* Full Name */}
            <div className="mt-6">
              <label className="text-sm font-medium text-black">
                Full Name
              </label>
              <input
                {...register("fullName")}
                placeholder="Your full name"
                className="mt-1 w-full rounded-lg border border-gray-300 text-black px-4 py-2 outline-none focus:border-blue-500"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="text-sm font-medium text-black">Email</label>
              <input
                {...register("email")}
                placeholder="yourwinzy@gmail.com"
                className="mt-1 w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mt-4">
              <label className="text-sm font-medium text-black">
                Phone Number
              </label>
              <input
                {...register("phone")}
                placeholder="Your phone number"
                className="mt-1 w-full rounded-lg text-black border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="text-sm font-medium text-black">
                How can we help you?*
              </label>
              <textarea
                {...register("message")}
                placeholder="Type something..."
                rows={4}
                className="mt-1 w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Icon Wrapper ---------- */
function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-black hover:bg-blue-600 hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}
