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
    <footer className="relative mt-[clamp(3rem,6vw,6rem)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.jpg"
          alt="Pressure Washing"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#041B2D]/80" />
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-[clamp(12px,4vw,40px)]
          py-[clamp(3rem,5vw,5rem)]
        "
      >
        {/* Newsletter */}
        <div className="text-center">

          <h2
            className="
              font-extrabold
              leading-tight
              text-white
              text-[clamp(2rem,5vw,3.25rem)]
            "
          >
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

          {/* Form */}
          <div
            className="
              mx-auto
              mt-[clamp(1.5rem,3vw,2rem)]
              flex
              w-full
              max-w-[900px]
              flex-col
              gap-[clamp(10px,2vw,16px)]
              md:flex-row
            "
          >
            <input
              type="email"
              placeholder="Email address..."
              className="
                h-[clamp(50px,7vw,56px)]
                w-full
                flex-1
                rounded-full
                border-0
                bg-white
                px-[clamp(16px,4vw,32px)]
                text-[clamp(0.95rem,1vw,1.1rem)]
                outline-none
                placeholder:text-slate-400
              "
            />

            <button
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#04A14C]
                px-[clamp(20px,4vw,32px)]
                py-[clamp(14px,2vw,16px)]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#038A40]
                md:w-auto
                md:min-w-[220px]
              "
            >
              Subscribe Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-[clamp(2rem,5vw,4rem)] h-px bg-white/20" />

        {/* Footer Grid */}
       <div
  className="
    grid
    gap-[clamp(2rem,4vw,3rem)]
    sm:grid-cols-2
  lg:grid-cols-[1fr_1fr_1fr_1.8fr]
  "
>
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Neighborhood Wash"
              width={180}
              height={70}
              className="w-[clamp(130px,18vw,180px)] h-auto"
            />

            <p
              className="
                mt-5
                max-w-xs
                leading-relaxed
                text-white/75
                text-[clamp(0.95rem,1vw,1.125rem)]
              "
            >
              Professional pressure washing services.
             
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="
                mb-5
                font-bold
                text-white
                text-[clamp(1.5rem,2vw,2rem)]
              "
            >
              Quick Links
            </h3>

            <ul
              className="
                space-y-3
                text-white/80
                text-[clamp(0.95rem,1vw,1.1rem)]
              "
            >
              <li>
                <a href="#" className="transition hover:text-[#04A14C]">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#04A14C]">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#04A14C]">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#04A14C]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3
              className="
                mb-5
                font-bold
                text-white
                text-[clamp(1.5rem,2vw,2rem)]
              "
            >
              Working Time
            </h3>

            <div
              className="
                space-y-3
                text-white/80
                text-[clamp(0.95rem,1vw,1.1rem)]
              "
            >
              <p>Mon - Sat: 8:00am - 8:00pm</p>

              <p>Sunday: 9:00am - 12:00pm</p>
            </div>
          </div>

          {/* Contact */}
          <div>

            <div className="flex items-center gap-3">
              <Phone
                size={22}
                className="shrink-0 text-[#04A14C]"
              />

              <a
                href="tel:5405958008"
                className="
                  font-bold
                  text-[#04A14C]
                  hover:underline
                  text-[clamp(1.2rem,2vw,1.8rem)]
                "
              >
                (540)5958008
              </a>
            </div>

<div className="mt-5 flex items-center gap-3">
  <Mail
    size={22}
    className="shrink-0 text-[#04A14C]"
  />

  <a
    href="mailto:kyla.neighborhoodwash@gmail.com"
    className="
      text-white
      transition
      hover:text-[#04A14C]
      text-[clamp(0.95rem,1vw,1.05rem)]
      leading-none
    "
  >
    kyla.neighborhoodwash@gmail.com
  </a>
</div>

            <div
              className="
                mt-5
                flex
                gap-3
                text-white/80
                text-[clamp(0.95rem,1vw,1.1rem)]
              "
            >
              <MapPin
                size={22}
                className="mt-1 shrink-0 text-[#04A14C]"
              />

              <p>
                Roanoke, Virginia
                <br />
                United States
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-center
            px-[clamp(12px,4vw,40px)]
            py-6
          "
        >
          <p
            className="
              text-center
              text-white/70
              text-[clamp(0.85rem,1vw,1rem)]
            "
          >
            © 2026 Neighborhood Wash. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="
          fixed
          z-50
          flex
          items-center
          justify-center
          rounded-full
          bg-[#04A14C]
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          bottom-[clamp(16px,3vw,32px)]
          right-[clamp(16px,3vw,32px)]
          h-[clamp(48px,5vw,56px)]
          w-[clamp(48px,5vw,56px)]
        "
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
}