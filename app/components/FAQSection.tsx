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
    <section className="relative overflow-hidden bg-[#F7F6F3] py-16 md:py-24">
      {/* Background Map */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/images/world-map.png')]
          bg-center
          bg-no-repeat
          bg-contain
          opacity-[0.06]
          md:opacity-10
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-[92%]
          max-w-[1800px]
        "
      >
        {/* Heading */}
        <div
          className="
            mb-12
            md:mb-20
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          <p
            className="
              mb-3
              flex
              items-center
              justify-center
              gap-2
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#04A14C]
              text-sm
              md:text-base
            "
          >
            ✓ Frequently Asked Questions
          </p>

          <h2
            className="
              mx-auto
              max-w-full
              md:max-w-[75vw]
              lg:max-w-[55vw]
              font-black
              leading-[1]
              text-[#1D2A3B]
              text-center
              text-[clamp(2rem,6vw,5.5rem)]
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
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          {/* Image */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              shadow-xl
              h-[260px]
              sm:h-[350px]
              lg:h-[24vw]
              lg:min-h-[450px]
            "
          >
            <Image
              src="/images/faq-pressure-washing.jpg"
              alt="Pressure Washing Service"
              fill
              className="object-cover"
            />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-sm
                  border
                  border-slate-200
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
                    px-5
                    py-5
                    md:px-7
                    md:py-6
                    text-left
                  "
                >
                  <span
                    className="
                      pr-4
                      font-bold
                      text-[#1D2A3B]
                      text-base
                      md:text-lg
                      lg:text-xl
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
                    className="shrink-0"
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
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 md:px-7 md:pb-6">
                        <p
                          className="
                            text-slate-600
                            leading-[1.8]
                            text-sm
                            md:text-base
                            lg:text-lg
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