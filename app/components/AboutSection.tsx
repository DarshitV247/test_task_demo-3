import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#F7F6F3] pt-16 pb-6 overflow-hidden">
      <div className="w-full px-8 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[40%_60%]">

          {/* Left Illustration */}
          <div className="relative flex items-center justify-center overflow-hidden h-full min-h-[26vw]">
            <Image
              src="/images/about-cleaner.png"
              alt="Cleaning Illustration"
              width={2000}
              height={2000}
              className="
                h-[32vw]
                w-auto
                opacity-90
                contrast-[2.5]
                brightness-40
                saturate-125
                object-contain
              "
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
            <h2
              className="
                font-extrabold
                leading-[1]
                text-slate-900
                text-[clamp(2.3rem,3.2vw,4rem)]
              "
            >
              <span className="block">
                We Deliver{" "}
                <span className="text-[#04A14C]">
                  Professional
                </span>
              </span>

              <span className="block">
                Pressure{" "}
                <span className="text-[#04A14C]">
                  Washing
                </span>{" "}
                Services.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-10 max-w-[900px] text-xl leading-relaxed text-slate-600">
              At Neighborhood Wash, we specialize in delivering high-quality
              exterior cleaning solutions that help homeowners and businesses
              maintain clean, attractive, and well-protected properties. Our
              experienced team uses professional-grade equipment and proven
              cleaning techniques to safely remove dirt, grime, mold, mildew,
              algae, and other stubborn contaminants from a variety of surfaces.
              From house washing and driveway cleaning to roof treatments,
              pathway restoration, deck cleaning, and commercial pressure
              washing, we are committed to providing outstanding results,
              exceptional customer service, and long-lasting curb appeal for
              every property we serve.
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