import { Dumbbell, GraduationCap, Network, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";

const missionPoints = [
  {
    icon: Dumbbell,
    text: "Mengembangkan dan mengelola layanan Fitness, Wellness, dan Sport Management yang profesional, terukur, serta berorientasi pada kualitas layanan dan keberlanjutan operasional.",
  },
  {
    icon: GraduationCap,
    text: "Membangun ekosistem pengembangan talenta dan kemitraan pendidikan yang menghasilkan tenaga profesional berkualitas sesuai kebutuhan industri.",
  },
  {
    icon: Network,
    text: "Mendorong inovasi melalui transformasi digital, pengembangan sistem operasional, serta kolaborasi strategis untuk menciptakan pertumbuhan bisnis yang berkelanjutan.",
  },
  {
    icon: TrendingUp,
    text: "Mengkurasi, mengembangkan, dan mengelola peluang investasi secara transparan, akuntabel, serta berbasis mitigasi risiko guna menciptakan pertumbuhan nilai jangka panjang.",
  },
];

const coreValues = [
  {
    letter: "B",
    title: "Bold Innovation",
    description:
      "Berani menghadirkan inovasi, solusi, dan model bisnis yang adaptif untuk menciptakan pertumbuhan yang berkelanjutan.",
  },
  {
    letter: "N",
    title: "Nurturing Partnership",
    description:
      "Membangun hubungan yang dilandasi kepercayaan, integritas, dan kolaborasi jangka panjang bersama pelanggan, mitra strategis, dan investor.",
  },
  {
    letter: "J",
    title: "Journey of Excellence",
    description:
      "Terus bertumbuh melalui peningkatan kualitas sistem, pengembangan talenta, serta budaya perbaikan berkelanjutan demi mencapai standar profesional terbaik.",
  },
];

export default function VisionMissionValues() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Arah dan Nilai Kami
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Fondasi yang Memandu Setiap Langkah BNJ
          </h2>
        </Reveal>

        {/* Visi — single Spotlight card */}
        <Reveal delay={0.05} className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Visi
          </p>
          <div className="relative mt-4 overflow-hidden rounded-2xl border border-neutral-200 p-8 shadow-[0_4px_24px_rgba(3,66,142,0.12)] sm:p-12">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
            />
            <p className="text-xl font-semibold leading-relaxed text-neutral-900 sm:text-2xl">
              Menjadi Holding Company &amp; Venture Builder terpercaya yang
              membangun ekosistem bisnis berkelanjutan di sektor Fitness,
              Wellness, Sport, dan Education melalui keunggulan operasional,
              pengembangan talenta, inovasi berbasis teknologi, serta
              kemitraan strategis yang menciptakan nilai jangka panjang.
            </p>
          </div>
        </Reveal>

        {/* Misi — 4-card flat grid with single top-accent */}
        <div className="mt-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
              Misi
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {missionPoints.map((point, index) => (
              <Reveal key={point.text} delay={(index % 4) * 0.08}>
                <div className="h-full border border-t-[3px] border-neutral-200 border-t-[#03428E] p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                    <point.icon className="h-6 w-6 text-[#03428E]" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Core Values — Spotlight Card pattern (3 cards, official exception) */}
        <div className="mt-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
              Core Values — B.N.J
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <Reveal key={value.letter} delay={index * 0.1}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-200 p-8 shadow-[0_12px_32px_rgba(3,66,142,0.08)]">
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
                  />
                  <span className="block text-[40px] font-extrabold leading-none text-[#03428E]">
                    {value.letter}
                  </span>
                  <h4 className="mt-4 text-[18px] font-semibold leading-[1.2] text-neutral-900 md:text-[22px]">
                    {value.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-[22px] font-bold italic leading-[1.2] text-[#03428E] md:text-[26px]">
              &ldquo;More Than Our Name. It Is the Way We Build Our
              Business.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
