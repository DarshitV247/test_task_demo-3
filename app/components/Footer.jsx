"use client";

import Image from "next/image";
import {
  ArrowUp,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.jpg"
          alt="Pressure Washing"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#041B2D]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        {/* Newsletter */}
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold leading-tight text-white lg:text-[52px]">
            Join Our{" "}
            <span className="text-[#04A14C]">
              Newsletter
            </span>

            <br />

            <span className="text-[#04A14C]">
              Stay Up To
            </span>{" "}
            Date
          </h2>

          {/* Email Form */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Email address..."
              className="
                h-14
                flex-1
                rounded-full
                border-0
                bg-white
                px-8
                text-lg
                outline-none
              "
            />

            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#04A14C]
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#038A40]
              "
            >
              Subscribe Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/20" />

        {/* Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Neighborhood Wash"
              width={180}
              height={70}
            />

            <p className="mt-6 max-w-xs text-lg leading-relaxed text-white/75">
              Professional pressure washing services that
              restore beauty, protect surfaces, and increase
              curb appeal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-lg text-white/80">
              <li>
                <a
                  href="#"
                  className="transition hover:text-[#04A14C]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#04A14C]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#04A14C]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#04A14C]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-white">
              Working Time
            </h3>

            <div className="space-y-4 text-lg text-white/80">
              <p>Mon - Sat: 8:00am - 8:00pm</p>

              <p>Sunday: 9:00am - 12:00pm</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone
                size={24}
                className="text-[#04A14C] shrink-0"
              />

              <a
                href="tel:5405958008"
                className="
                  text-2xl
                  font-bold
                  text-[#04A14C]
                  hover:underline
                "
              >
                5405958008
              </a>
            </div>

            {/* Email */}
            <div className="mt-6 flex items-start gap-3">
              <Mail
                size={24}
                className="mt-1 shrink-0 text-[#04A14C]"
              />

              <a
                href="mailto:kyla.neighborhoodwash@gmail.com"
                className="
                  break-all
                  text-xl
                  font-semibold
                  text-white
                  transition
                  hover:text-[#04A14C]
                "
              >
                kyla.neighborhoodwash@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="mt-6 flex gap-3 text-white/80">
              <MapPin
                className="mt-1 shrink-0 text-[#04A14C]"
                size={22}
              />

              <p>
                Roanoke, Virginia,
                <br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6">
          <p className="text-center text-white/70">
            © 2026 Neighborhood Wash. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className="
          fixed
          bottom-8
          right-8
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#04A14C]
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
}