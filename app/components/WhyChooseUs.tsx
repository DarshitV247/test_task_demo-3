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
        rounded-[clamp(24px,3vw,32px)]
        py-[clamp(3rem,6vw,5rem)]
        mx-auto
        my-[clamp(2rem,4vw,4rem)]
        w-[94%]
      "
    >
      {/* Mobile / Tablet Decorative Background */}
      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
          lg:hidden
        "
      >
        <div
          className="
            absolute
            top-[8%]
            right-[5%]
            text-[#8CF36A]/10
            text-[70px]
          "
        >
          ✦
        </div>

        <div
          className="
            absolute
            bottom-[15%]
            left-[5%]
            text-[#8CF36A]/10
            text-[50px]
          "
        >
          ✦
        </div>
      </div>

      <div
        className="
          relative
          z-10
          px-[clamp(16px,4vw,64px)]
        "
      >
        {/* Heading */}
        <div className="mb-[clamp(2rem,5vw,4rem)] max-w-5xl">

          <p
            className="
              mb-4
              flex
              items-center
              gap-3
              font-bold
              uppercase
              tracking-[0.25em]
              text-white
              text-[clamp(0.7rem,1vw,0.85rem)]
            "
          >
            <span className="text-[#8CF36A] text-base">
              ✦
            </span>

            WHY CHOOSE NEIGHBORHOOD WASH
          </p>

          <h2
            className="
              font-extrabold
              leading-[1.05]
              text-white
              text-[clamp(2rem,5vw,3.75rem)]
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

          <p
            className="
              mt-5
              max-w-3xl
              leading-relaxed
              text-white/80
              text-[clamp(0.95rem,1.2vw,1.125rem)]
            "
          >
            We provide professional pressure washing
            services that restore beauty, protect
            surfaces, and increase curb appeal for homes
            and businesses throughout the area.
          </p>

        </div>

        {/* Main Content */}
        <div
          className="
            grid
            items-center
            gap-[clamp(2rem,5vw,4rem)]
            lg:grid-cols-[1fr_0.9fr]
          "
        >
          {/* Image */}
          <div>

            <div
              className="
                overflow-hidden
                rounded-[clamp(22px,3vw,28px)]
              "
            >
              <Image
                src="/images/why-choose-us.jpg"
                alt="Pressure Washing"
                width={1200}
                height={800}
                className="
                  w-full
                  object-cover
                  h-[clamp(240px,40vw,380px)]
                "
              />
            </div>

          </div>

          {/* Features */}
          <div className="space-y-[clamp(1.5rem,3vw,2.5rem)]">

            {/* Feature 1 */}
            <div className="flex gap-[clamp(12px,2vw,20px)]">

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8CF36A]
                  h-[clamp(52px,6vw,64px)]
                  w-[clamp(52px,6vw,64px)]
                "
              >
                <Award
                  size={28}
                  className="text-[#014F4B]"
                />
              </div>

              <div>
                <h3
                  className="
                    mb-2
                    font-bold
                    text-white
                    text-[clamp(1.25rem,2vw,1.5rem)]
                  "
                >
                  Trusted Professionals
                </h3>

                <p
                  className="
                    leading-relaxed
                    text-white/80
                    text-[clamp(0.95rem,1vw,1rem)]
                  "
                >
                  Years of experience delivering
                  reliable pressure washing solutions
                  with exceptional customer service.
                </p>
              </div>

            </div>

            {/* Feature 2 */}
            <div className="flex gap-[clamp(12px,2vw,20px)]">

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8CF36A]
                  h-[clamp(52px,6vw,64px)]
                  w-[clamp(52px,6vw,64px)]
                "
              >
                <Sparkles
                  size={28}
                  className="text-[#014F4B]"
                />
              </div>

              <div>
                <h3
                  className="
                    mb-2
                    font-bold
                    text-white
                    text-[clamp(1.25rem,2vw,1.5rem)]
                  "
                >
                  Superior Results
                </h3>

                <p
                  className="
                    leading-relaxed
                    text-white/80
                    text-[clamp(0.95rem,1vw,1rem)]
                  "
                >
                  Commercial-grade equipment removes
                  dirt, algae, mildew, stains, and
                  buildup safely and effectively.
                </p>
              </div>

            </div>

            {/* Feature 3 */}
            <div className="flex gap-[clamp(12px,2vw,20px)]">

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8CF36A]
                  h-[clamp(52px,6vw,64px)]
                  w-[clamp(52px,6vw,64px)]
                "
              >
                <ShieldCheck
                  size={28}
                  className="text-[#014F4B]"
                />
              </div>

              <div>
                <h3
                  className="
                    mb-2
                    font-bold
                    text-white
                    text-[clamp(1.25rem,2vw,1.5rem)]
                  "
                >
                  Safe & Eco-Friendly
                </h3>

                <p
                  className="
                    leading-relaxed
                    text-white/80
                    text-[clamp(0.95rem,1vw,1rem)]
                  "
                >
                  Safe cleaning methods for families,
                  pets, landscaping, and delicate
                  exterior surfaces.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Desktop Decorative Stars */}
      <div
        className="
          hidden
          lg:block
          absolute
          right-[5%]
          top-[8%]
          text-[#8CF36A]
          text-[clamp(70px,6vw,90px)]
          opacity-80
          pointer-events-none
        "
      >
        ✦
      </div>

      <div
        className="
          hidden
          lg:block
          absolute
          right-[12%]
          top-[20%]
          text-[#8CF36A]
          text-[clamp(40px,4vw,50px)]
          opacity-70
          pointer-events-none
        "
      >
        ✦
      </div>

      <div
        className="
          hidden
          lg:block
          absolute
          right-[3%]
          top-[38%]
          text-[#8CF36A]
          text-[clamp(25px,3vw,35px)]
          opacity-70
          pointer-events-none
        "
      >
        ✦
      </div>

    </section>
  );
}