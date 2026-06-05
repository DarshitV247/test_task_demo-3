"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How often should I pressure wash my home?",
    answer:
      "Most homes benefit from professional pressure washing every 12–24 months to remove dirt, mold, algae, and stains while maintaining curb appeal.",
  },
  {
    question: "Is pressure washing safe for my property?",
    answer:
      "Yes. We use professional equipment and proper pressure levels to safely clean your home, driveway, roof, pathways, and other exterior surfaces.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "No. As long as we have access to the areas being cleaned and an outdoor water source, you do not need to be present.",
  },
  {
    question: "How long does a typical cleaning take?",
    answer:
      "Most residential cleaning projects are completed within a few hours depending on the size and condition of the property.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Absolutely. We provide free, no-obligation estimates so you know exactly what to expect before any work begins.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F6F3] py-[6vw]">
      {/* Background Map */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/images/world-map.png')]
          bg-center
          bg-no-repeat
          bg-contain
          opacity-10
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-[95vw]
          max-w-[1800px]
        "
      >
        {/* Heading */}
<div
  className="
    mb-[4vw]
    flex
    flex-col
    items-center
    justify-center
    text-center
  "
>
  <p
    className="
      mb-[0.8vw]
      flex
      items-center
      justify-center
      gap-[0.5vw]
      font-bold
      uppercase
      tracking-[0.25vw]
      text-[#04A14C]
      text-[clamp(12px,0.8vw,16px)]
    "
  >
    ✓ Frequently Asked Questions
  </p>

  <h2
    className="
      mx-auto
      max-w-[55vw]
      font-black
      leading-[0.95]
      text-[#1D2A3B]
      text-center
      text-[clamp(2.2rem,4.5vw,5.5rem)]
    "
  >
    You Have{" "}
    <span className="text-[#04A14C]">
      Questions,
    </span>

    <br />

    <span className="text-[#04A14C]">
      We Have
    </span>{" "}
    Answers
  </h2>
</div>
        {/* Content */}
        <div
          className="
            grid
            items-center
            gap-[2vw]
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          {/* Image */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.8vw]
              shadow-xl
              h-[24vw]
              min-h-[280px]
            "
          >
            <Image
              src="/images/faq-pressure-washing.jpg"
              alt="Pressure Washing Service"
              fill
              className="object-cover"
            />
          </div>

          {/* FAQ */}
          <div className="space-y-[0.6vw]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-[1.2vw]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-[1.8vw]
                    py-[1vw]
                    text-left
                  "
                >
                  <span
                    className="
                      font-bold
                      text-[#1D2A3B]
                      text-[clamp(0.95rem,1.05vw,1.25rem)]
                    "
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {activeIndex === index ? (
                      <Minus
                        size={22}
                        className="text-[#04A14C]"
                      />
                    ) : (
                      <Plus
                        size={22}
                        className="text-[#1D2A3B]"
                      />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-[1.8vw] pb-[1vw]">
                        <p
                          className="
                            text-slate-600
                            leading-[1.7]
                            text-[clamp(0.85rem,0.9vw,1rem)]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}