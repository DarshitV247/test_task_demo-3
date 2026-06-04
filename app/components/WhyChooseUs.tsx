import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#014F4B]
        rounded-[32px]
        py-14
        lg:py-16
        mx-auto
        my-10
        w-[92%]
      "
    >
      {/* Background Pattern */}
      <div
        className="
          absolute inset-0
          opacity-10
          bg-cover
          bg-center
        "
      />

      <div className="relative z-10 px-8 lg:px-16">

        {/* Heading */}
        <div className="mb-16 max-w-5xl">

          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[4px] text-white">
            <span className="text-[#8CF36A] text-base">✦</span>
            WHY CHOOSE NEIGHBORHOOD WASH
          </p>

          <h2
            className="
              text-white
              font-extrabold
              leading-[1.05]
              text-[38px]
              md:text-[48px]
              lg:text-[60px]
            "
          >
            The Perfect{" "}
            <span className="text-[#04A14C]">
              Solution For
            </span>

            <br />

            <span className="text-[#04A14C]">
              Your Property
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-white/80">
            We provide professional pressure washing services that
            restore beauty, protect surfaces, and increase curb
            appeal for homes and businesses throughout the area.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

          {/* Left Image */}
          <div>

            <div className="overflow-hidden rounded-[28px]">

              <Image
                src="/images/why-choose-us.jpg"
                alt="Pressure Washing"
                width={1200}
                height={800}
                className="
                  h-[320px]
                  lg:h-[380px]
                  w-full
                  object-cover
                "
              />

            </div>

          </div>

          {/* Features */}
          <div className="space-y-10">

            {/* Feature 1 */}
            <div className="flex gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#8CF36A]">
                <Award
                  size={28}
                  className="text-[#014F4B]"
                />
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Trusted Professionals
                </h3>

                <p className="text-base leading-relaxed text-white/80">
                  Years of experience delivering reliable pressure
                  washing solutions with exceptional customer service.
                </p>
              </div>

            </div>

            {/* Feature 2 */}
            <div className="flex gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#8CF36A]">
                <Sparkles
                  size={28}
                  className="text-[#014F4B]"
                />
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Superior Results
                </h3>

                <p className="text-base leading-relaxed text-white/80">
                  Commercial-grade equipment removes dirt,
                  algae, mildew, stains, and buildup safely
                  and effectively.
                </p>
              </div>

            </div>

            {/* Feature 3 */}
            <div className="flex gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#8CF36A]">
                <ShieldCheck
                  size={28}
                  className="text-[#014F4B]"
                />
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Safe & Eco-Friendly
                </h3>

                <p className="text-base leading-relaxed text-white/80">
                  Safe cleaning methods for families, pets,
                  landscaping, and delicate exterior surfaces.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Decorative Stars */}
      <div className="absolute right-20 top-20 text-[#8CF36A] text-[90px] opacity-80">
        ✦
      </div>

      <div className="absolute right-40 top-40 text-[#8CF36A] text-[50px] opacity-70">
        ✦
      </div>

      <div className="absolute right-10 top-60 text-[#8CF36A] text-[35px] opacity-70">
        ✦
      </div>

    </section>
  );
}