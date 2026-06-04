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

          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/90">
            Professional cleaning services for offices,
            homes, and commercial spaces.
          </p>

          <button className="mt-10 rounded-full bg-[#04A14C] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#038A40]">
            Our Services →
          </button>

        </div>
      </div>

    </section>
  );
}