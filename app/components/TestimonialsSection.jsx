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
    image: "/images/client-1.png",
    review:
      "Excellent service from start to finish. Our storefront looks brand new after the pressure washing. Highly recommended for commercial properties.",
  },
  {
    name: "Emily Davis",
    role: "Property Manager",
    image: "/images/client-1.png",
    review:
      "Fast, friendly, and affordable. They removed years of dirt and buildup from multiple properties and delivered outstanding results every time.",
  },
  {
    name: "James Wilson",
    role: "Homeowner",
    image: "/images/client-1.png",
    review:
      "Very professional crew. They arrived on time and made our home look brand new.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F3] py-24">

      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <Image
          src="/images/world-map.png"
          alt="World Map"
          width={1800}
          height={900}
          className="
            w-[95%]
            max-w-[1800px]
            object-contain
            opacity-[0.12]
            select-none
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[4px] text-slate-500">
            <span className="text-[#04A14C]">✦</span>
            WHAT CLIENTS SAY
          </p>

          <h2 className="mx-auto max-w-5xl text-[42px] font-extrabold leading-none text-[#1D2A3B] md:text-[60px] lg:text-[72px]">
            Hear What{" "}
            <span className="text-[#04A14C]">
              Our Happy Clients
            </span>{" "}
            Say
          </h2>

        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                relative
                rounded-[30px]
                bg-white/95
                p-4
                pt-10
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
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">

                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={70}
                  height={70}
                  className="
                    h-[70px]
                    w-[70px]
                    rounded-full
                    border-4
                    border-white
                    object-cover
                    shadow-md
                  "
                />

              </div>

              {/* Review */}
              <p className="min-h-[180px] text-[18px] leading-relaxed text-slate-600">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-slate-200" />

              {/* Name */}
              <h3 className="text-[30px] font-bold text-[#1D2A3B]">
                {testimonial.name}
              </h3>

              <p className="mt-2 text-lg text-slate-500">
                {testimonial.role}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}