"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactCompareSlider = dynamic(
  () =>
    import("react-compare-slider").then(
      (mod) => mod.ReactCompareSlider
    ),
  { ssr: false }
);

const ReactCompareSliderImage = dynamic(
  () =>
    import("react-compare-slider").then(
      (mod) => mod.ReactCompareSliderImage
    ),
  { ssr: false }
);

const projects = [
  {
    title: "House Washing",
    before: "/images/before-house.png",
    after: "/images/after-house.png",
  },
  {
    title: "Driveway Cleaning",
    before: "/images/before-driveway.png",
    after: "/images/after-driveway.png",
  },
  {
    title: "Roof Cleaning",
    before: "/images/before-roof.png",
    after: "/images/after-roof.png",
  },
  {
    title: "Pathway Cleaning",
    before: "/images/before-pathway.png",
    after: "/images/after-pathway.png",
  },
];

export default function BeforeAfterSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-[#F7F6F3] py-[4vw]">
      <div className="mx-auto w-[95vw] max-w-[1800px]">

        {/* Heading */}
        <div className="mb-[4vw] text-center">

          <p
            className="
              mb-[0.8vw]
              text-[clamp(12px,0.75vw,16px)]
              font-bold
              uppercase
              tracking-[0.4vw]
              text-[#04A14C]
            "
          >
            Real Results
          </p>

          <h2
            className="
              font-black
              text-[#1D2A3B]
              leading-[1]
             text-[clamp(2rem,3.5vw,4rem)]
            "
          >
            Before & <span className="text-[#04A14C]">After</span> Transformations
          </h2>

          <p
            className="
              mx-auto
              mt-[1vw]
              max-w-[45vw]
              text-slate-600
              text-[clamp(0.95rem,1vw,1.15rem)]
            "
          >
            Drag the slider to see the dramatic difference our
            professional cleaning services make.
          </p>

        </div>

        {/* Cards */}
        <div
          className="
            grid
            gap-[1.8vw]
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-[1.4vw]
                bg-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="relative">

                {/* Before Badge */}
                <div
                  className="
                    absolute
                    left-[0.8vw]
                    top-[0.8vw]
                    z-20
                    rounded-full
                    bg-red-500
                    px-[0.7vw]
                    py-[0.3vw]
                    text-[clamp(10px,0.65vw,13px)]
                    font-bold
                    text-white
                  "
                >
                  BEFORE
                </div>

                {/* After Badge */}
                <div
                  className="
                    absolute
                    right-[0.8vw]
                    top-[0.8vw]
                    z-20
                    rounded-full
                    bg-[#04A14C]
                    px-[0.7vw]
                    py-[0.3vw]
                    text-[clamp(10px,0.65vw,13px)]
                    font-bold
                    text-white
                  "
                >
                  AFTER
                </div>

                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={project.before}
                      alt={`${project.title} Before`}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={project.after}
                      alt={`${project.title} After`}
                    />
                  }
                  style={{
                    width: "100%",
                    height: "15vw",
                    minHeight: "260px",
                  }}
                />
              </div>

              <div className="p-[1.4vw] text-center">

                <h3
                  className="
                    font-bold
                    text-[#1D2A3B]
                    text-[clamp(1.1rem,1.25vw,1.6rem)]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-[0.6vw]
                    text-slate-600
                    leading-[1.6]
                    text-[clamp(0.85rem,0.85vw,1rem)]
                  "
                >
                  Professional pressure washing completed by
                  Neighborhood Wash.
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}