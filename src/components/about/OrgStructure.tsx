import { BookOpen, Building2, Network, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const divisions = [
  {
    number: 1,
    icon: TrendingUp,
    title: "Digital Growth",
    description:
      "Tim spesialis teknologi dan pemasaran digital yang bertanggung jawab atas pembangunan infrastruktur komersial masa depan — mengelola pembuatan website profesional, arsitektur sistem penjualan (sales funnel), produksi konten video tutorial edukatif bersama para expert, hingga optimalisasi kampanye pemasaran digital berbasis data.",
  },
  {
    number: 2,
    icon: Building2,
    title: "Facility Management, Asset Audit & HSE",
    description:
      "Tim operasional dan facility management di bawah unit Essential Fitness Management (EFM) yang bertanggung jawab langsung terhadap pengelolaan harian fasilitas sport club, properti, dan gym komersial — audit kelayakan aset, preventive maintenance, efisiensi biaya operasional, serta standar keselamatan (Health, Safety, and Environment).",
  },
  {
    number: 3,
    icon: BookOpen,
    title: "Curriculum Development & Training Faculty",
    description:
      "Tim akademik dan pelatih senior bersertifikasi internasional yang mengembangkan program kurikulum kebugaran non-formal terstruktur bagi sekolah mitra (seperti program ECA Aspire), sekaligus menjadi dewan penguji pada Instructor Training Academy internal.",
  },
  {
    number: 4,
    icon: Network,
    title: "Expert Network",
    description:
      "Legal, Finance, Sport Science, Medical, Education, Technology, Marketing, Operations.",
  },
];

export default function OrgStructure() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Organizational Structure
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Organizational Structure &amp; Expert Network
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Empat divisi lintas-fungsi beroperasi di bawah kepemimpinan
            Founder &amp; President Director serta Co-Founder &amp; PR
            Director, mendukung seluruh unit bisnis dan mitra strategis BNJ.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {divisions.map((division, index) => (
            <Reveal key={division.title} delay={(index % 2) * 0.08}>
              <div className="group relative h-full overflow-hidden border border-neutral-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-2 select-none text-6xl font-bold leading-none text-neutral-100"
                >
                  <AnimatedCounter value={division.number} duration={1} padZero />
                </span>
                <div className="relative flex h-11 w-11 items-center justify-center border border-neutral-300 text-neutral-500 transition-all duration-200 group-hover:scale-110 group-hover:border-[#03428E]/40 group-hover:text-[#03428E]">
                  <division.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-neutral-900">
                  {division.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">
                  {division.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
