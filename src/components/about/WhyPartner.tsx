import {
  ClipboardCheck,
  Clock,
  Layers,
  Network,
  Search,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    icon: Clock,
    title: "Proven Operational Experience Since 2017",
    description:
      "Pengalaman operasional lebih dari delapan tahun dalam pengelolaan fitness, wellness, sport facility, dan program kesehatan korporasi.",
  },
  {
    icon: UserCheck,
    title: "Integrated Talent Pipeline",
    description:
      "Sistem pengembangan dan penyediaan instruktur profesional yang terstandarisasi untuk mendukung kebutuhan ekspansi dan operasional mitra.",
  },
  {
    icon: ClipboardCheck,
    title: "System-Based Management",
    description:
      "Pengelolaan operasional berbasis SOP, KPI, pelaporan, dan kontrol mutu yang terukur.",
  },
  {
    icon: Network,
    title: "Strategic Partnership Network",
    description:
      "Jaringan kolaborasi yang mencakup sektor pendidikan, korporasi, properti, dan wellness ecosystem.",
  },
  {
    icon: Search,
    title: "Strategic Investment Screening",
    description:
      "Pendekatan investasi yang mengutamakan evaluasi kelayakan bisnis, analisis risiko, dan potensi pertumbuhan sebelum suatu peluang direkomendasikan.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Control & Accountability",
    description:
      "Pendekatan operasional yang mengedepankan mitigasi risiko, transparansi, dan akuntabilitas.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth Model",
    description:
      "Model bisnis yang dirancang untuk bertumbuh secara berkelanjutan melalui sistem, talenta, dan kemitraan strategis.",
  },
  {
    icon: Layers,
    title: "Ecosystem-Driven Growth",
    description:
      "BNJ tidak hanya menyediakan layanan, tetapi membangun ekosistem yang menghubungkan operasional, talenta, teknologi, pendidikan, dan peluang bisnis.",
  },
];

export default function WhyPartner() {
  return (
    <section
      id="kenapa-partner"
      className="bg-white py-[var(--section-py)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="bnj-eyebrow">8 Alasan</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            Kenapa Partner Memilih BNJ
          </h2>
        </Reveal>

        <div className="mt-[var(--section-header-gap)] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              delay={(index % 4) * 0.08}
              className="h-full border border-neutral-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <reason.icon
                  className="h-6 w-6 text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="text-base font-bold leading-[1.3] text-neutral-900">
                {reason.title}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
