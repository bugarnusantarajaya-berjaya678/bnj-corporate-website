import Image from "next/image";
import { Frame, PieChart, Settings, Share2, TrendingUp } from "lucide-react";
import photo from "../../../../public/images/Page-Brand-Incubation/brand-incubation-business-acceleration.png";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    icon: Settings,
    title: "Strategi & Sistem Operasional",
    description:
      "Membangun ulang fondasi strategi marketing dan sistem operasional bisnis dari nol, disesuaikan dengan kebutuhan spesifik mitra.",
  },
  {
    icon: Frame,
    title: "Dukungan Teknologi & Otomasi",
    description:
      "Menghadirkan dukungan teknologi berbasis AI untuk operasional administratif, mempercepat proses kerja sehari-hari.",
  },
  {
    icon: Share2,
    title: "Pengelolaan Media Sosial End-to-End",
    description:
      "Mulai dari konsep konten, copywriting, publikasi, hingga pelaporan performa. Dikelola penuh oleh tim BNJ.",
  },
  {
    icon: PieChart,
    title: "Pelaporan Kinerja Terukur",
    description:
      "Rekap dan analisis performa bisnis dilaporkan secara berkala (bulanan, tri-semester, atau tahunan), memberi mitra visibilitas penuh atas hasil kerjasama.",
  },
];

export default function BusinessAcceleration() {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Ilustrasi program akselerasi bisnis"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
            <p className="mt-2.5 text-xs italic text-neutral-400">
              Ilustrasi program akselerasi bisnis
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative border-l-[5px] border-[#6AA84F] pl-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 left-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:left-3 sm:text-[90px] lg:-top-10 lg:text-[150px]"
            >
              02
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <TrendingUp className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold uppercase leading-[1.25] text-[#03428E] md:text-[36px]">
                Business Acceleration
                <br />
                Program
              </h2>
            </div>
            <span className="relative z-10 mt-3.5 inline-block rounded-full bg-[#8A93A0]/28 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6b7480]">
              Target Pengembangan 2027
            </span>
            <p className="relative z-10 mt-3.5 max-w-[460px] text-base leading-relaxed text-neutral-600">
              Program akselerasi bisnis BNJ dirancang bertahap: fase awal
              berfokus pada penguatan strategi digital, dengan rencana
              perluasan ke inkubasi brand offline di sektor kebugaran, seperti
              studio kebugaran, klub olahraga, dan komunitas olahraga mulai
              2027.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Cakupan Program
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            4 Pilar Business Acceleration Program
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Reveal
              key={pillar.title}
              className="border border-neutral-200 border-t-[3px] border-t-[#03428E] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <pillar.icon
                  className="h-[22px] w-[22px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[17px] font-bold text-neutral-900">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
