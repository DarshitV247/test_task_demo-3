"use client";

export default function ScrollingServices() {
  const text =
    "PRESSURE WASHING ✦ SOFT WASHING ✦ DRIVEWAY CLEANING ✦ HOUSE WASHING ✦ DECK CLEANING ✦ ROOF CLEANING ✦ ";

  return (
    <section className="overflow-hidden bg-[#F7F6F3] pt-0 pb-8">
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="text-[48px] md:text-[64px] lg:text-[80px] font-extrabold uppercase tracking-[-0.03em] text-black/10">
            {text}
          </span>

          <span
            className="ml-20 text-[48px] md:text-[64px] lg:text-[80px] font-extrabold uppercase tracking-wide text-black/10"
            aria-hidden="true"
          >
            {text}
          </span>
        </div>
      </div>
    </section>
  );
}