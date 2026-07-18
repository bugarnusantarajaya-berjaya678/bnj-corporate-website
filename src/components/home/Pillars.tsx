import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Rocket,
  TrendingUp,
} from "lucide-react";
import pillarEfm from "../../../public/images/pillar-efm.png";
import pillarDigitalLabs from "../../../public/images/pillar-digital-labs.png";
import pillarBrandIncubation from "../../../public/images/pillar-brand-incubation.png";
import pillarEducationalAlliance from "../../../public/images/pillar-educational-alliance.png";
import pillarInvestmentVentures from "../../../public/images/pillar-investment-ventures.png";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const pillars = [
  {
    icon: Dumbbell,
    image: pillarEfm,
    title: "Essential Fitness Management",
    description:
      "Unit bisnis inti pengelolaan fitness, wellness & fasilitas olahraga, beroperasi sejak 2017.",
    href: "/ekosistem-bisnis/efm",
  },
  {
    icon: HeartPulse,
    image: pillarDigitalLabs,
    title: "BNJ Digital Labs",
    description:
      "Kemitraan produk digital untuk layanan kesehatan & rehabilitasi.",
    href: "/ekosistem-bisnis/digital-labs",
  },
  {
    icon: Rocket,
    image: pillarBrandIncubation,
    title: "Brand Incubation & Business Acceleration",
    description:
      "Pengembangan brand digital dan akselerasi bisnis kebugaran.",
    href: "/ekosistem-bisnis/brand-incubation",
  },
  {
    icon: GraduationCap,
    image: pillarEducationalAlliance,
    title: "Strategic Educational Alliance",
    description:
      "Kemitraan pendidikan & pengembangan ekosistem expert multi-disiplin.",
    href: "/ekosistem-bisnis/educational-alliance",
  },
  {
    icon: TrendingUp,
    image: pillarInvestmentVentures,
    title: "Wellness & Sport Investment Ventures",
    description:
      "Alokasi modal & ekspansi bisnis di sektor wellness dan olahraga.",
    href: "/ekosistem-bisnis/investment-ventures",
  },
];

export default function Pillars() {
  return (
    <section id="pilar-bisnis" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Ekosistem Bisnis
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Empat Pilar yang Saling Terintegrasi
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Setiap pilar bisnis BNJ dibangun untuk saling mendukung,
            menciptakan ekosistem yang berkelanjutan dari operasional,
            talenta, hingga investasi.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={(index % 5) * 0.08}
              className="w-full max-w-[380px] flex-1 basis-[280px]"
            >
              <TiltCard className="h-full [transform-style:preserve-3d]">
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col overflow-hidden border border-neutral-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#03428E] hover:shadow-[0_16px_32px_-12px_rgba(3,66,142,0.35)]"
                >
                  <div className="relative h-44 w-full bg-neutral-100">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 bg-white p-6">
                    <pillar.icon
                      className="h-6 w-6 text-[#03428E]"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-1 text-lg font-semibold text-neutral-900">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {pillar.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#03428E]">
                      Lihat Detail
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
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
