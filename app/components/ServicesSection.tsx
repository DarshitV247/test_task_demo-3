import {
  Home,
  Building2,
  Droplets,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "House Washing",
    description:
      "Safe and effective exterior cleaning for your home.",
    icon: Home,
  },
  {
    title: "Commercial Services",
    description:
      "Keep your business clean, professional, and welcoming.",
    icon: Building2,
  },
  {
    title: "Driveway Cleaning",
    description:
      "Remove stains, algae, mold, and surface buildup.",
    icon: Droplets,
  },
  {
    title: "Roof Cleaning",
    description:
      "Protect your roof by removing moss and black streaks.",
    icon: ShieldCheck,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F7F6F3] py-[clamp(3rem,6vw,5rem)]">
      <div className="mx-auto max-w-[1700px] px-[clamp(12px,4vw,40px)]">

        <div
          className="
            grid
            gap-[clamp(14px,2vw,32px)]
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  h-[clamp(250px,24vw,290px)]
                  rounded-[clamp(24px,3vw,32px)]
                  bg-white
                  p-[clamp(16px,2.5vw,32px)]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                {/* Top Section */}
                <div className="flex items-start justify-between gap-3">

                  <h3
                    className="
                      max-w-[65%]
                      font-bold
                      leading-[1.05]
                      text-[#1D2A3B]
                      text-[clamp(1.3rem,2vw,1.875rem)]
                    "
                  >
                    {service.title}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-[#04A14C]
                      shadow-md
                      transition-all
                      duration-300
                      group-hover:scale-110
                      h-[clamp(58px,6vw,80px)]
                      w-[clamp(58px,6vw,80px)]
                      shrink-0
                    "
                  >
                    <Icon
                      size={32}
                      className="service-icon text-white"
                    />
                  </div>

                </div>

                {/* Divider */}
                <div className="my-[clamp(18px,2vw,28px)] h-px bg-slate-200" />

                {/* Description */}
                <p
                  className="
                    leading-relaxed
                    text-slate-600
                    text-[clamp(0.95rem,1vw,1.125rem)]
                  "
                >
                  {service.description}
                </p>

                {/* Original Corner Cutout */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    bg-[#F7F6F3]
                    rounded-tl-[clamp(24px,3vw,32px)]
                    h-[clamp(80px,8vw,96px)]
                    w-[clamp(80px,8vw,96px)]
                  "
                />

                {/* Original Floating Arrow */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    translate-x-[18%]
                    translate-y-[18%]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-md
                      transition-all
                      duration-300
                      group-hover:bg-[#04A14C]
                      group-hover:rotate-45
                      group-hover:scale-110
                      h-[clamp(52px,5vw,64px)]
                      w-[clamp(52px,5vw,64px)]
                    "
                  >
                    <ArrowRight
                      size={24}
                      className="
                        text-[#1D2A3B]
                        group-hover:text-white
                      "
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}