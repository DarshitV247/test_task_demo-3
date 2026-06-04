import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#F7F6F3] py-24 overflow-hidden">
      <div className="w-full px-8 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[40%_60%]">
          {/* Left Illustration */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/about-cleaner.png"
              alt="Cleaning Illustration"
              width={2000}
              height={1600}
              className="w-[900%] opacity-30"
            />
          </div>

          {/* Right Content */}
          <div className="w-full">
            {/* Small Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[#04A14C] text-xl">✦</span>

              <p className="font-semibold uppercase tracking-[4px] text-slate-600">
                About Neighborhood Wash
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-extrabold leading-[1.05] text-slate-900">
              <span className="block text-4xl lg:text-5xl xl:text-6xl">
                We Deliver <span className="text-[#04A14C]">Professional</span>
              </span>

              <span className="block mt-2 text-4xl lg:text-5xl xl:text-6xl">
                Pressure <span className="text-[#04A14C]">Washing</span>{" "}
                Services.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-10 max-w-[900px] text-xl leading-relaxed text-slate-600">
              We help homeowners and businesses restore the beauty of their
              properties through professional pressure washing, soft washing,
              driveway cleaning, deck restoration, and exterior surface
              cleaning.
            </p>

            {/* Button */}
            <button className="mt-10 rounded-full bg-[#04A14C] px-8 py-4 font-semibold text-white transition hover:bg-[#038A40]">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
