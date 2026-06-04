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
    <section className="bg-[#F7F6F3] py-20">
      <div className="mx-auto max-w-[1700px] px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  h-[290px]
                  rounded-[32px]
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                {/* Top Section */}
                <div className="flex items-start justify-between">

                  <h3 className="max-w-[180px] text-[30px] font-bold leading-[1.05] text-[#1D2A3B]">
                    {service.title}
                  </h3>

                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-[#04A14C]
                      shadow-md
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={34}
                      className="service-icon text-white"
                    />
                  </div>

                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-slate-200" />

                {/* Description */}
                <p className="text-[18px] leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Corner Cutout */}
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-[32px] bg-[#F7F6F3]" />

                {/* Arrow Button */}
                <div className="absolute bottom-0 right-0 translate-x-[18%] translate-y-[18%]">

                  <div
                    className="
                      flex
                      h-16
                      w-16
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
                    "
                  >
                    <ArrowRight
                      size={24}
                      className="text-[#1D2A3B] group-hover:text-white"
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