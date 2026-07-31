import Image from "next/image";
import {
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Network,
  Target,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import visionPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Vision.png";
import coreValuesPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Mision.png";

const missionPoints = [
  {
    icon: Dumbbell,
    title: "Layanan Profesional & Terukur",
    text: "Mengembangkan dan mengelola layanan Fitness, Wellness, dan Sport Management yang profesional, terukur, serta berorientasi pada kualitas layanan dan keberlanjutan operasional.",
  },
  {
    icon: GraduationCap,
    title: "Ekosistem Talenta & Pendidikan",
    text: "Membangun ekosistem pengembangan talenta dan kemitraan pendidikan yang menghasilkan tenaga profesional berkualitas sesuai kebutuhan industri.",
  },
  {
    icon: Network,
    title: "Inovasi & Transformasi Digital",
    text: "Mendorong inovasi melalui transformasi digital, pengembangan sistem operasional, serta kolaborasi strategis untuk menciptakan pertumbuhan bisnis yang berkelanjutan.",
  },
  {
    icon: TrendingUp,
    title: "Investasi Akuntabel & Terkurasi",
    text: "Mengkurasi, mengembangkan, dan mengelola peluang investasi secara transparan, akuntabel, serta berbasis mitigasi risiko guna menciptakan pertumbuhan nilai jangka panjang.",
  },
];

const coreValues = [
  {
    letter: "B",
    icon: Lightbulb,
    title: "Bold Innovation",
    description:
      "Berani menghadirkan inovasi dan model bisnis yang adaptif untuk pertumbuhan berkelanjutan.",
  },
  {
    letter: "N",
    icon: HeartHandshake,
    title: "Nurturing Partnership",
    description:
      "Membangun hubungan berlandaskan kepercayaan, integritas, dan kolaborasi jangka panjang.",
  },
  {
    letter: "J",
    icon: Target,
    title: "Journey of Excellence",
    description:
      "Terus bertumbuh melalui peningkatan sistem, talenta, dan budaya perbaikan berkelanjutan.",
  },
];

export default function VisionMissionValues() {
  return (
    <section className="bg-white py-[var(--section-gap-y)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Arah dan Nilai Kami
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:whitespace-nowrap md:text-[32px] lg:text-[36px]">
            Fondasi yang Memandu Setiap Langkah BNJ
          </h2>
        </Reveal>

        {/* Visi + Misi — solid Corporate Blue Spotlight card with photo */}
        <Reveal delay={0.05} className="mt-[var(--section-header-gap)]">
          <div className="relative isolate overflow-hidden rounded-3xl bg-[#03428E] shadow-[0_18px_44px_rgba(3,66,142,0.30),0_4px_12px_rgba(3,66,142,0.18)]">
            <div className="absolute inset-0 sm:left-auto sm:w-[55%] md:w-[60%]">
              <Image
                src={visionPhoto}
                alt=""
                fill
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 mix-blend-color bg-[#03428E]" />
            </div>
            <div className="absolute inset-0 bg-[#03428E]/60 sm:hidden" />
            <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#03428E_0%,#03428E_40%,rgba(3,66,142,0.72)_62%,rgba(3,66,142,0.28)_85%,rgba(3,66,142,0.12)_100%)] sm:block" />

            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="mx-auto max-w-xl text-center">
                <p className="mx-auto inline-block w-fit rounded-full bg-white px-5 py-1.5 text-sm font-bold uppercase tracking-[0.16em] text-[#03428E]">
                  Visi
                </p>
                <p className="mt-3.5 text-base font-semibold leading-relaxed text-white">
                  Menjadi Holding Company &amp; Venture Builder terpercaya yang
                  membangun ekosistem bisnis berkelanjutan di sektor Fitness,
                  Wellness, Sport, dan Education melalui keunggulan
                  operasional, pengembangan talenta, inovasi berbasis
                  teknologi, serta kemitraan strategis yang menciptakan nilai
                  jangka panjang.
                </p>
              </div>

              <div className="mx-auto mt-6 max-w-xl text-center sm:mt-8">
                <p className="mx-auto inline-block w-fit rounded-full bg-white px-5 py-1.5 text-sm font-bold uppercase tracking-[0.16em] text-[#03428E]">
                  Misi
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3.5 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4">
                {missionPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-white/70 bg-white/95 p-4 backdrop-blur-sm"
                  >
                    <point.icon
                      className="h-[26px] w-[26px] text-[#03428E]"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-3 text-[14px] font-bold text-neutral-900">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-neutral-600">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Core Values — solid Corporate Blue Spotlight card with photo */}
        <Reveal delay={0.1} className="mt-5">
          <div className="relative isolate overflow-hidden rounded-3xl bg-[#03428E] shadow-[0_18px_44px_rgba(3,66,142,0.30),0_4px_12px_rgba(3,66,142,0.18)]">
            <div className="absolute inset-0 sm:left-auto sm:w-[55%] md:w-[60%]">
              <Image
                src={coreValuesPhoto}
                alt=""
                fill
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 mix-blend-color bg-[#03428E]" />
            </div>
            <div className="absolute inset-0 bg-[#03428E]/60 sm:hidden" />
            <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#03428E_0%,#03428E_40%,rgba(3,66,142,0.72)_62%,rgba(3,66,142,0.28)_85%,rgba(3,66,142,0.12)_100%)] sm:block" />

            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="mx-auto max-w-xl text-center">
                <p className="mx-auto inline-block w-fit rounded-full bg-white px-5 py-1.5 text-sm font-bold uppercase tracking-[0.16em] text-[#03428E]">
                  Nilai Inti BNJ
                </p>
                <h2 className="mt-3.5 text-[26px] font-bold leading-[1.2] text-white md:text-[32px]">
                  Core Values B.N.J
                </h2>
                <p className="mt-3.5 text-[15px] leading-relaxed text-white/90">
                  Tiga nilai ini menjadi dasar setiap keputusan dan cara kerja
                  BNJ, dari pengelolaan operasional harian hingga pengembangan
                  kemitraan jangka panjang.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3.5 sm:mt-8 sm:flex-row sm:items-stretch">
                {coreValues.map((value) => (
                  <div
                    key={value.letter}
                    className="flex-1 rounded-2xl border border-white/70 bg-white/95 p-4 backdrop-blur-sm"
                  >
                    <span className="block text-[36px] font-extrabold leading-none text-[#6AA84F]">
                      {value.letter}
                    </span>
                    <h3 className="mt-3 flex items-center gap-2.5 text-[14px] font-bold text-neutral-900">
                      <value.icon
                        className="h-[20px] w-[20px] shrink-0 text-[#03428E]"
                        strokeWidth={1.5}
                      />
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-neutral-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-[var(--section-header-gap)] text-center text-[22px] font-bold italic leading-[1.2] text-[#03428E] md:text-[26px]">
            &ldquo;More Than Our Name. It Is the Way We Build Our
            Business.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
