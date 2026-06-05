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
    <section className="bg-[#F7F6F3] py-[clamp(3rem,8vw,7rem)]">
      <div className="mx-auto max-w-[1600px] px-[clamp(12px,4vw,50px)]">

        {/* Heading */}
        <div className="mb-[clamp(2rem,5vw,5rem)] text-center">

          <p
            className="
              mb-3
              flex
              items-center
              justify-center
              gap-2
              font-bold
              uppercase
              tracking-[0.25em]
              text-slate-600
              text-[clamp(0.7rem,1vw,0.9rem)]
            "
          >
            <span className="text-[#04A14C]">✦</span>
            Featured Services
          </p>

          <h2
            className="
              mx-auto
              max-w-6xl
              font-extrabold
              leading-[0.95]
              tracking-[-0.03em]
              text-[#1D2A3B]
              text-[clamp(2rem,5vw,4.5rem)]
            "
          >
            Our Company Provides The Best
            <br />
            <span className="text-[#04A14C]">
              Cleaning Service
            </span>
          </h2>

        </div>

        {/* Content */}
        <div
          className="
            grid
            items-center
            gap-[clamp(2rem,5vw,5rem)]
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >

          {/* Image - First on Mobile */}
          <div className="order-1 lg:order-2">

            <div
              className="
                relative
                overflow-hidden
                rounded-[clamp(20px,3vw,30px)]
                shadow-lg
                h-[clamp(260px,45vw,550px)]
              "
            >

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

          {/* Services - Second on Mobile */}
          <div className="order-2 lg:order-1">

            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  border-b
                  border-slate-200
                  py-[clamp(14px,2vw,24px)]
                  transition-all
                  duration-300
                "
              >

                <h3
                  className={`
                    font-bold
                    transition-all
                    duration-300
                    text-[clamp(1.2rem,2.2vw,2.1rem)]
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
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    h-[clamp(40px,4vw,52px)]
                    w-[clamp(40px,4vw,52px)]
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

        </div>

      </div>
    </section>
  );
}