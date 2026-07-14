import { Dumbbell, GraduationCap, LineChart, Rocket } from "lucide-react";
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
    icon: Rocket,
    text: "Mendorong inovasi melalui transformasi digital, pengembangan sistem operasional, serta kolaborasi strategis untuk menciptakan pertumbuhan bisnis yang berkelanjutan.",
  },
  {
    icon: LineChart,
    text: "Mengkurasi, mengembangkan, dan mengelola peluang investasi secara transparan, akuntabel, serta berbasis mitigasi risiko guna menciptakan pertumbuhan nilai jangka panjang.",
  },
];

const coreValues = [
  {
    letter: "B",
    title: "BOLD INNOVATION",
    description:
      "Berani menghadirkan inovasi, solusi, dan model bisnis yang adaptif untuk menciptakan pertumbuhan yang berkelanjutan.",
  },
  {
    letter: "N",
    title: "NURTURING PARTNERSHIP",
    description:
      "Membangun hubungan yang dilandasi kepercayaan, integritas, dan kolaborasi jangka panjang bersama pelanggan, mitra strategis, dan investor.",
  },
  {
    letter: "J",
    title: "JOURNEY OF EXCELLENCE",
    description:
      "Fokus bertumbuh melalui peningkatan kualitas sistem, pengembangan talenta, serta budaya perbaikan berkelanjutan demi mencapai standar profesional terbaik.",
  },
];

export default function VisionMissionValues() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Vision */}
        <Reveal>
          <div className="relative overflow-hidden border border-neutral-200 p-8 sm:p-12">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-6 select-none text-[5.5rem] font-bold leading-none text-neutral-100 sm:text-[7.5rem] lg:text-[9rem]"
            >
              VISION
            </span>
            <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
              Vision
            </p>
            <p className="relative mt-4 max-w-3xl text-xl font-semibold leading-relaxed text-neutral-900 sm:text-2xl">
              Menjadi Holding Company &amp; Venture Builder terpercaya yang
              membangun ekosistem bisnis berkelanjutan di sektor Fitness,
              Wellness, Sport, dan Education melalui keunggulan operasional,
              pengembangan talenta, inovasi berbasis teknologi, serta
              kemitraan strategis yang menciptakan nilai jangka panjang.
            </p>
          </div>
        </Reveal>

        {/* Mission */}
        <Reveal delay={0.1}>
          <p className="mt-16 text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Mission
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {missionPoints.map((point, index) => (
            <Reveal key={point.text} delay={(index % 2) * 0.1}>
              <div className="group flex h-full items-start gap-4 border border-neutral-200 p-6 transition-colors duration-200 hover:border-[#03428E]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-300 text-neutral-500 transition-all duration-200 group-hover:rotate-6 group-hover:scale-110 group-hover:border-[#03428E]/40 group-hover:text-[#03428E]">
                  <point.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="pt-1 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-20 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
              Core Values BNJ
            </p>
            <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              More Than Our Name. It Is the Way We Build Our Business.
            </h3>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {coreValues.map((value, index) => (
            <Reveal key={value.letter} delay={index * 0.1}>
              <div className="group relative h-full overflow-hidden border border-neutral-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-2 top-0 select-none text-8xl font-bold leading-none text-neutral-100 transition-colors duration-300 group-hover:text-[#03428E]/10"
                >
                  {value.letter}
                </span>
                <p className="relative text-lg font-bold tracking-tight text-[#03428E]">
                  {value.letter} — {value.title}
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
