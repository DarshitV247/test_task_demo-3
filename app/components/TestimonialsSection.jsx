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
      "Very professional crew. They arrived on time , explained the entire cleaning process, and paid close attention to every detail.The results exceeded our expectations.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F3] py-[6vw]">

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

      <div className="relative z-10 mx-auto w-[95vw] max-w-[1800px]">

        {/* Heading */}
        <div className="mb-[4vw] text-center">

          <p
            className="
              mb-[0.8vw]
              flex
              items-center
              justify-center
              gap-[0.5vw]
              text-[clamp(12px,0.8vw,16px)]
              font-bold
              uppercase
              tracking-[0.25vw]
              text-slate-500
            "
          >
            <span className="text-[#04A14C]">✦</span>
            WHAT CLIENTS SAY
          </p>

          <h2
            className="
              mx-auto
              max-w-[60vw]
              font-extrabold
              leading-[1]
              text-[#1D2A3B]
              text-[clamp(2.5rem,4.5vw,5.5rem)]
            "
          >
            Hear What{" "}
            <span className="text-[#04A14C]">
              Our Happy Clients
            </span>{" "}
            Say
          </h2>

        </div>

        {/* Testimonials */}
        <div
          className="
            grid
            gap-[1.5vw]
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                relative
                rounded-[1.5vw]
                bg-white/95
                p-[1.2vw]
                pt-[3vw]
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
                  width={80}
                  height={80}
                  className="
                    h-[4.5vw]
                    w-[4.5vw]
                    min-h-[70px]
                    min-w-[70px]
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
                  min-h-[8vw]
                  text-[clamp(0.95rem,1vw,1.15rem)]
                  leading-[1.8]
                  text-slate-600
                "
              >
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="my-[1.5vw] h-px bg-slate-200" />

              {/* Name */}
              <h3
                className="
                  font-bold
                  text-[#1D2A3B]
                  text-[clamp(1.5rem,2vw,2.3rem)]
                "
              >
                {testimonial.name}
              </h3>

              {/* Role */}
              <p
                className="
                  mt-[0.4vw]
                  text-slate-500
                  text-[clamp(0.95rem,1vw,1.15rem)]
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