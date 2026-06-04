"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    title: "House Washing",
    image: "/images/house-washing.jpg",
  },
  {
    title: "Driveway Cleaning",
    image: "/images/driveway-cleaning.png",
  },
  {
    title: "Roof Cleaning",
    image: "/images/roof-cleaning.jpg",
  },
  {
    title: "Deck Cleaning",
    image: "/images/deck-cleaning.jpg",
  },
  {
    title: "Pressure Washing",
    image: "/images/pressure-washing.webp",
  },
];

export default function FeaturedServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#F7F6F3] py-14">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[4px] text-slate-600">
            <span className="text-[#04A14C]">✦</span>
            Featured Services
          </p>

          <h2
            className="
              mx-auto
              max-w-6xl
              text-[40px]
              md:text-[52px]
              lg:text-[64px]
              font-extrabold
              leading-[1.05]
              text-[#1D2A3B]
            "
          >
            <span className="whitespace-nowrap">
              Our Company Provides The Best
            </span>

            <br />

            <span className="text-[#04A14C]">
              Cleaning Service
            </span>
          </h2>

        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Services List */}
          <div>

            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  border-b
                  border-slate-200
                  py-6
                  transition-all
                  duration-300
                "
              >
                <h3
                  className={`
                    text-[28px]
                    lg:text-[34px]
                    font-bold
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "text-[#04A14C]"
                        : "text-[#1D2A3B]"
                    }
                  `}
                >
                  {service.title}
                </h3>

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "bg-[#04A14C]"
                        : "bg-white shadow-sm"
                    }
                  `}
                >
                  <ArrowRight
                    size={20}
                    className={
                      activeIndex === index
                        ? "text-white"
                        : "text-[#1D2A3B]"
                    }
                  />
                </div>

              </div>
            ))}

          </div>

          {/* Animated Image */}
          <div>

            <div className="relative h-[420px] lg:h-[500px] overflow-hidden rounded-[30px] shadow-lg">

              <AnimatePresence mode="wait">

                <motion.div
                  key={services[activeIndex].image}
                  initial={{
                    opacity: 0,
                    x: 50,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -50,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    fill
                    priority
                      unoptimized
                    className="object-cover"
                  />
                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}