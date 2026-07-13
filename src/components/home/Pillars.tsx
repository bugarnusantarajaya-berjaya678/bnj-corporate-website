import Image from "next/image";
import Link from "next/link";
import pillarEfm from "../../../public/images/pillar-efm.png";
import pillarBrandIncubation from "../../../public/images/pillar-brand-incubation.png";
import pillarEducationalAlliance from "../../../public/images/pillar-educational-alliance.png";
import pillarInvestmentVentures from "../../../public/images/pillar-investment-ventures.png";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import AnimatedCounter from "@/components/AnimatedCounter";

const pillars = [
  {
    number: 1,
    image: pillarEfm,
    title: "Essential Fitness Management",
    description:
      "Unit bisnis inti pengelolaan fitness, wellness, dan fasilitas olahraga sejak 2017",
  },
  {
    number: 2,
    image: pillarBrandIncubation,
    title: "Brand Incubation & Business Acceleration",
    description:
      "Pengembangan brand digital dan akselerasi bisnis kebugaran",
  },
  {
    number: 3,
    image: pillarEducationalAlliance,
    title: "Strategic Educational Alliance",
    description:
      "Kemitraan pendidikan dan pengembangan talenta instruktur profesional",
  },
  {
    number: 4,
    image: pillarInvestmentVentures,
    title: "Wellness & Sport Investment Ventures",
    description:
      "Alokasi modal dan ekspansi bisnis di sektor wellness dan olahraga",
  },
];

export default function Pillars() {
  return (
    <section id="ecosystem" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Our Ecosystem
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Empat Pilar Ekosistem Bisnis BNJ
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Empat unit bisnis yang saling terintegrasi untuk membangun
            pertumbuhan berkelanjutan di sektor Fitness, Wellness, Sport, dan
            Education.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={(index % 4) * 0.08}>
              <TiltCard className="h-full [transform-style:preserve-3d]">
                <Link
                  href="#"
                  className="group relative flex h-full flex-col overflow-hidden border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E]"
                >
                  <div className="relative h-48 w-full sm:h-56">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 flex flex-1 flex-col gap-2 bg-white p-6">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-4 top-2 hidden select-none text-6xl font-bold leading-none text-neutral-100 sm:block"
                    >
                      <AnimatedCounter value={pillar.number} duration={1} padZero />
                    </span>
                    <h3 className="relative text-lg font-semibold text-neutral-900">
                      {pillar.title}
                    </h3>
                    <p className="relative text-sm leading-relaxed text-neutral-600">
                      {pillar.description}
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
