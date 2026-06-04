"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Neighborhood Wash"
            width={240}
            height={80}
            priority
            className="h-auto w-[140px] md:w-[180px] lg:w-[240px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 text-xl font-semibold text-white">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="
                  relative
                  transition-all
                  duration-300
                  hover:text-[#04A14C]
                  after:absolute
                  after:left-1/2
                  after:-translate-x-1/2
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
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="text-right text-white">
            <p className="text-sm opacity-80">Need Help?</p>
            <p className="text-lg font-bold">(540) 595-8008</p>
          </div>

          <button className="rounded-full bg-[#04A14C] px-7 py-3 font-semibold text-white transition hover:bg-[#038A40]">
            Get A Quote!
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full lg:hidden">
          <div className="mx-4 rounded-2xl bg-black/90 backdrop-blur-md shadow-2xl">
            <ul className="flex flex-col gap-5 p-6 text-white text-lg font-semibold">

              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-[#04A14C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <button className="mt-3 rounded-full bg-[#04A14C] px-6 py-3 font-semibold text-white">
                Get A Quote!
              </button>

            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}