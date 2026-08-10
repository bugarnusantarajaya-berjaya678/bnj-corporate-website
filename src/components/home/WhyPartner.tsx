import Link from "next/link";
import { ArrowRight, ClipboardCheck, Layers, Network, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    icon: ClipboardCheck,
    accent: "border-t-[#03428E]",
    title: "System-Based Management",
    description:
      "Pengelolaan operasional berbasis SOP, KPI, pelaporan, dan kontrol mutu yang terukur.",
  },
  {
    icon: Network,
    accent: "border-t-[#6AA84F]",
    title: "Strategic Partnership Network",
    description:
      "Jaringan kolaborasi yang mencakup sektor pendidikan, korporasi, properti, dan wellness ecosystem.",
  },
  {
    icon: TrendingUp,
    accent: "border-t-[#0095DA]",
    title: "Scalable Growth Model",
    description:
      "Model bisnis yang dirancang untuk bertumbuh secara berkelanjutan melalui sistem, talenta, dan kemitraan strategis.",
  },
  {
    icon: Layers,
    accent: "border-t-[#03428E]",
    title: "Ecosystem-Driven Growth",
    description:
      "BNJ tidak hanya menyediakan layanan, tetapi membangun ekosistem yang menghubungkan operasional, talenta, teknologi, pendidikan, dan peluang bisnis.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-white py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="bnj-eyebrow">Keunggulan Kami</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            Kenapa Partner Memilih BNJ
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.1}>
              <div
                className={`h-full border border-t-[3px] border-neutral-200 bg-white p-6 ${reason.accent}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                  <reason.icon
                    className="h-6 w-6 text-[#03428E]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base font-bold text-neutral-900">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/tentang-kami#kenapa-partner"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#03428E]"
          >
            Lihat Semua Keunggulan
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
