import Image from "next/image";
import { Activity, Monitor, SearchCheck, SquareCheckBig, Target } from "lucide-react";
import photo from "../../../../public/images/Page-Brand-Incubation/brand-incubation-brand-development.png";
import Reveal from "@/components/Reveal";

const stages = [
  {
    icon: SearchCheck,
    title: "Screening & Assessment",
    description:
      "Pemetaan menyeluruh kondisi bisnis mitra saat ini. Mulai dari brand positioning, kanal pemasaran, hingga performa penjualan yang berjalan.",
  },
  {
    icon: Target,
    title: "Analisis & Diagnosis",
    description:
      "Mengidentifikasi akar masalah yang menghambat pertumbuhan, bukan sekadar gejala di permukaan, dasar bagi solusi yang tepat sasaran.",
  },
  {
    icon: SquareCheckBig,
    title: "Strategi & Langkah Aksi",
    description:
      "Penyusunan langkah strategis yang terukur dan realistis dieksekusi, disesuaikan dengan skala dan kapasitas bisnis mitra.",
  },
  {
    icon: Activity,
    title: "Monitoring & Evaluasi Berkala",
    description:
      "Pemantauan progres secara berkala sepanjang masa kerjasama, dengan evaluasi rutin untuk memastikan strategi tetap relevan dan efektif.",
  },
];

export default function BrandDevelopment() {
  return (
    <section className="bg-white pt-14 pb-12 sm:pt-16 md:pt-24 md:pb-14 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative border-r-[5px] border-[#6AA84F] pr-6 text-right">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 right-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:right-3 sm:text-[90px] lg:-top-10 lg:text-[150px]"
            >
              01
            </span>
            <div className="relative z-10 flex flex-wrap items-center justify-end gap-3">
              <h2 className="text-[26px] font-bold uppercase leading-[1.25] text-[#03428E] md:text-[36px]">
                Brand Development &amp;
                <br />
                Digital Strategy
              </h2>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <Monitor className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
            </div>
            <span className="relative z-10 mt-3.5 inline-block rounded-full bg-[#8A93A0]/28 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6b7480]">
              Target Pengembangan 2027
            </span>
            <p className="relative z-10 ml-auto mt-3.5 max-w-[460px] text-base leading-relaxed text-neutral-600">
              Membangun fondasi strategi digital dan pengembangan brand bagi
              mitra di sektor kebugaran dan wellness, sebagai langkah awal
              menuju inkubasi brand fisik yang direncanakan mulai 2027.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Ilustrasi strategi pengembangan brand"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
            <p className="mt-2.5 text-xs italic text-neutral-400">
              Ilustrasi strategi pengembangan brand
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Metodologi
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            4 Tahapan Brand Development &amp; Digital Strategy
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <Reveal
              key={stage.title}
              className="border border-neutral-200 border-t-[3px] border-t-[#03428E] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <stage.icon
                  className="h-[22px] w-[22px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[17px] font-bold text-neutral-900">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {stage.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
