import Image from "next/image";
import { Building2, MapPin, Network, Target } from "lucide-react";
import photo from "../../../public/images/about-team-environment.png.png";
import Reveal from "@/components/Reveal";

const facts = [
  {
    icon: Target,
    label: "Fokus Industri:",
    text: "Fitness, Wellness, Sport, Education",
  },
  {
    icon: Building2,
    label: "Model Bisnis:",
    text: "Holding Company & Venture Builder",
  },
  {
    icon: Network,
    label: "Kekuatan Inti:",
    text: "Operasional, Talenta, Teknologi, Kemitraan Strategis",
  },
  {
    icon: MapPin,
    label: "Cakupan Operasional:",
    text: "Indonesia",
  },
];

export default function AtAGlance() {
  return (
    <section className="bg-white py-[var(--section-gap-y)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            BNJ Sekilas
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            BNJ at a Glance
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-[var(--section-header-gap)] aspect-[16/9] w-full overflow-hidden rounded-2xl sm:aspect-[16/7]"
        >
          <Image
            src={photo}
            alt="Tim CV Bugar Nusantara Jaya"
            fill
            sizes="(min-width: 1024px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.55)_0%,rgba(3,41,89,0)_45%)]" />
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
            <div className="inline-flex min-w-[170px] items-center gap-3 rounded-[10px] bg-white px-4 py-3.5 shadow-[0_10px_28px_rgba(3,66,142,0.22)]">
              <Building2 className="h-5 w-5 shrink-0 text-[#03428E]" strokeWidth={2} />
              <div>
                <span className="block text-2xl font-bold leading-none text-[#03428E]">
                  4
                </span>
                <span className="mt-1 block text-xs font-semibold text-neutral-600">
                  Pilar Bisnis Terintegrasi
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {facts.map((fact) => (
            <Reveal
              key={fact.label}
              className="flex items-start gap-3.5 border border-neutral-200 p-5"
            >
              <fact.icon
                className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#03428E]"
                strokeWidth={1.5}
              />
              <span className="text-sm leading-relaxed text-neutral-900">
                <span className="font-semibold">{fact.label}</span>{" "}
                {fact.text}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
