import AnimatedHeading from "./AnimatedHeading";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero3.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl px-12 lg:px-24">
          {/* Animated Heading */}
          <AnimatedHeading />

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[42vw]
              text-[clamp(1rem,1.2vw,1.25rem)]
              leading-[1.7]
              text-white/90
            "
          >
            Professional pressure washing and exterior cleaning
            services for homes, driveways, roofs, patios, pathways,
            and commercial properties. We help restore curb appeal,
            remove years of built-up dirt, mold, mildew, and grime,
            keeping your property clean, protected, and looking its
            absolute best year-round.
          </p>

          {/* CTA Button */}
          <button
            className="
              mt-6
              rounded-full
              bg-[#04A14C]
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#038A40]
              hover:scale-105
            "
          >
            Our Services →
          </button>
        </div>
      </div>
    </section>
  );
}