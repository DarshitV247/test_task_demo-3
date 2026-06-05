"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const headlines = [
  {
    line1: "Pressure",
    highlight1: "Washing",
    line2: "Done",
    highlight2: "Right",
  },
  {
    line1: "Restore",
    highlight1: "Curb",
    line2: "Appeal",
    highlight2: "Today",
  },
  {
    line1: "Clean",
    highlight1: "Homes",
    line2: "Happy",
    highlight2: "Neighbors",
  },
];

export default function AnimatedHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[160px] lg:min-h-[250px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="
              font-extrabold
              leading-[1.02]
              tracking-[-0.03em]
              text-white
            "
          >
            <span className="block text-[clamp(3rem,6vw,6.5rem)]">
              {headlines[index].line1}{" "}
              <span className="text-[#04A14C]">
                {headlines[index].highlight1}
              </span>
            </span>

            <span className="block text-[clamp(3rem,6vw,6.5rem)]">
              {headlines[index].line2}{" "}
              <span className="text-[#04A14C]">
                {headlines[index].highlight2}
              </span>
            </span>
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}