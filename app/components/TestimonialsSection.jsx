"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/images/client-1.png",
    review:
      "Neighborhood Wash completely transformed our driveway and siding. The team was professional, punctual, and the results exceeded our expectations.",
  },
  {
    name: "Michael Carter",
    role: "Business Owner",
    image: "/images/client-2.png",
    review:
      "Excellent service from start to finish. Our storefront looks brand new after the pressure washing. Highly recommended for commercial properties.",
  },
  {
    name: "Emily Davis",
    role: "Property Manager",
    image: "/images/client-3.png",
    review:
      "Fast, friendly, and affordable. They removed years of dirt and buildup from multiple properties and delivered outstanding results every time.",
  },
  {
    name: "James Wilson",
    role: "Homeowner",
    image: "/images/client-4.png",
    review:
      "Very professional crew. They arrived on time, explained the entire cleaning process, and paid close attention to every detail. The results exceeded our expectations.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F3] py-16 md:py-24">
      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/world-map.png"
          alt="World Map"
          width={1800}
          height={900}
          className="
            w-[140%]
            md:w-[95%]
            max-w-[1800px]
            object-contain
            opacity-[0.08]
            md:opacity-[0.12]
            select-none
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1800px]">
        {/* Heading */}
        <div className="mb-12 md:mb-20 text-center">
          <p
            className="
              mb-3
              flex
              items-center
              justify-center
              gap-2
              text-sm
              md:text-base
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-500
            "
          >
            <span className="text-[#04A14C]">✦</span>
            WHAT CLIENTS SAY
          </p>

          <h2
            className="
              mx-auto
              max-w-full
              md:max-w-[70vw]
              lg:max-w-[60vw]
              font-extrabold
              leading-[1]
              text-[#1D2A3B]
              text-[clamp(2rem,6vw,5.5rem)]
            "
          >
            Hear What{" "}
            <span className="text-[#04A14C]">
              Our Happy Clients
            </span>{" "}
            Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                relative
                rounded-3xl
                bg-white/95
                p-6
                pt-14
                md:p-8
                md:pt-16
                text-center
                shadow-sm
                border
                border-slate-200
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Avatar */}
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="
                    h-20
                    w-20
                    md:h-24
                    md:w-24
                    rounded-full
                    border-4
                    border-white
                    object-cover
                    shadow-md
                  "
                />
              </div>

              {/* Review */}
              <p
                className="
                  min-h-[140px]
                  md:min-h-[180px]
                  text-base
                  md:text-lg
                  leading-[1.8]
                  text-slate-600
                "
              >
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-200" />

              {/* Name */}
              <h3
                className="
                  font-bold
                  text-[#1D2A3B]
                  text-2xl
                  md:text-3xl
                "
              >
                {testimonial.name}
              </h3>

              {/* Role */}
              <p
                className="
                  mt-2
                  text-slate-500
                  text-base
                  md:text-lg
                "
              >
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}