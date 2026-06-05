"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
<nav
  className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500 ${
    scrolled
      ? "bg-[#041B2D] border-b border-white/10 shadow-lg"
      : "bg-transparent"
  }`}
>
  <div
    className="
      mx-auto
      flex
      items-center
      justify-between
      w-full
      max-w-[1600px]
      px-[clamp(16px,4vw,40px)]
      py-[4px]
    "
  >
        <div
          className="
            mx-auto
            flex
            items-center
            justify-between
            w-full
            max-w-[1600px]
            px-[clamp(10px,4vw,60px)]
            py-[4px]
          "
        >
          {/* Logo */}
<Link
  href="#home"
  className="
    rounded-xl
    bg-white/10
    backdrop-blur-md
    px-3
    py-2
    border
    border-white/10
  "
>
  <img
  src="/images/logo.png"
  alt="Neighborhood Wash"
  className="
    h-[80px]
    w-auto
    object-contain
    brightness-[1.7]
    contrast-[1.35]
    saturate-[1.3]
    drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]
  "
/>
</Link>
<ul
  className={`
    hidden
    lg:flex
    items-center
    gap-[clamp(22px,2vw,50px)]
    ${
      scrolled
        ? "text-[#04A14C]"
        : "text-white"
    }
  `}
>
  {links.map((link) => (
    <li key={link.name}>
      <a
        href={link.href}
        className="
          relative
          font-semibold
          text-[clamp(15px,1vw,18px)]
          transition-all
          duration-300
          hover:text-[#04A14C]
          after:absolute
          after:left-0
          after:-bottom-2
          after:h-[2px]
          after:w-0
          after:bg-[#04A14C]
          after:transition-all
          after:duration-300
          hover:after:w-full
        "
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-[clamp(15px,2vw,30px)]">
            <div className="text-right text-white">
              <p className="text-[clamp(10px,0.8vw,13px)] opacity-70">
                Call Us
              </p>

              <p className="font-bold text-[clamp(14px,1vw,20px)]">
                (540) 595-8008
              </p>
            </div>

            <button
              className="
                rounded-full
                bg-[#04A14C]
                text-white
                font-semibold
                px-[clamp(18px,2vw,30px)]
                py-[clamp(10px,1vw,14px)]
                transition-all
                duration-300
                hover:bg-[#038A40]
                hover:scale-105
              "
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              lg:hidden
              flex
              items-center
              justify-center
              rounded-lg
              bg-white/10
              backdrop-blur-md
              text-white
              h-[clamp(38px,10vw,48px)]
              w-[clamp(38px,10vw,48px)]
            "
          >
            <Menu size={22} />
          </button>
        </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[9998]
          bg-black/60 backdrop-blur-sm
          transition-all duration-300 lg:hidden
          ${
            isOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-[9999]
          h-screen
          w-[85vw]
          max-w-[380px]
          bg-[#041B2D]
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-[clamp(14px,4vw,24px)]">
          <div className="leading-none">
            <h2
              className="
                font-black
                uppercase
                text-white
                text-[clamp(1rem,3vw,1.4rem)]
              "
            >
              Neighborhood
            </h2>

            <h2
              className="
                font-black
                uppercase
                text-[#04A14C]
                text-[clamp(1rem,3vw,1.4rem)]
              "
            >
              Wash
            </h2>

            <p
              className="
                mt-1
                uppercase
                tracking-[0.15em]
                text-white/60
                text-[10px]
              "
            >
              Pressure Washing Experts
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <X size={28} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex h-[calc(100%-85px)] flex-col justify-between">
          <div className="px-[clamp(14px,4vw,24px)]">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-5
                  text-white
                  font-medium
                  transition-all
                  hover:text-[#04A14C]
                "
              >
                {link.name}
                <ArrowRight size={18} />
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 p-[clamp(14px,4vw,24px)]">
            <a
              href="tel:5405958008"
              className="
                mb-4
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white/5
                py-4
                text-white
                font-semibold
              "
            >
              <Phone size={18} />
              (540) 595-8008
            </a>

            <button
              className="
                w-full
                rounded-full
                bg-[#04A14C]
                py-4
                text-white
                font-semibold
              "
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}