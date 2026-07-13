import {
  Building2,
  ClipboardList,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: 8, suffix: "+", label: "Tahun Pengalaman Operasional" },
  { value: 200, suffix: "+", label: "Personal Training Clients" },
  { value: 10, suffix: "+", label: "Mitra Korporat & Institusi" },
];

const points = [
  { icon: Building2, text: "Holding Company & Venture Builder" },
  {
    icon: Handshake,
    text: "Corporate, Property & Educational Partnerships",
  },
  { icon: ClipboardList, text: "System-Based Operations & Reporting" },
  {
    icon: GraduationCap,
    text: "Active Educational Partnership Through ECA Aspire",
  },
];

export default function AtAGlance() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            BNJ at a Glance
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Fondasi Bisnis yang Terbangun Sejak 2017
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="flex h-full flex-col border border-neutral-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E]">
                <p className="text-5xl font-bold text-[#03428E] sm:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium leading-snug text-neutral-600 sm:text-base">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {points.map((point, index) => (
            <Reveal key={point.text} delay={(index % 2) * 0.1}>
              <div className="group flex h-full items-start gap-4 border border-neutral-200 p-6 transition-colors duration-200 hover:border-[#03428E]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-300 text-neutral-500 transition-all duration-200 group-hover:rotate-6 group-hover:scale-110 group-hover:border-[#03428E]/40 group-hover:text-[#03428E]">
                  <point.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="pt-2 text-sm font-medium leading-snug text-neutral-800 sm:text-base">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
