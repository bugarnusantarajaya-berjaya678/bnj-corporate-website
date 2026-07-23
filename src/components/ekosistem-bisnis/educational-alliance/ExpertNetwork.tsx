import Image from "next/image";
import {
  BookOpen,
  Briefcase,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  LayoutGrid,
  Monitor,
  Network,
  Scale,
  Users,
  Video,
} from "lucide-react";
import photo from "../../../../public/images/Page-Educational/EFM-edu-jaringan-expert.png";
import Reveal from "@/components/Reveal";

const fields = [
  { icon: HeartPulse, label: "Kesehatan" },
  { icon: Scale, label: "Hukum" },
  { icon: Monitor, label: "Teknologi" },
  { icon: Briefcase, label: "Bisnis" },
  { icon: GraduationCap, label: "Pendidikan" },
  { icon: Dumbbell, label: "Olahraga & Kebugaran" },
];

const outputs = [
  {
    icon: BookOpen,
    title: "Produk Edukasi Digital",
    description:
      "Materi pembelajaran digital yang dikembangkan bersama dosen dan tenaga ahli lintas bidang.",
  },
  {
    icon: Users,
    title: "Seminar Online & Offline",
    description:
      "Sesi berbagi pengetahuan bersama expert, diselenggarakan secara daring maupun tatap muka.",
  },
  {
    icon: Video,
    title: "Konten Berbasis Teknologi",
    description:
      "Konten pembelajaran yang memanfaatkan platform digital untuk jangkauan yang lebih luas.",
  },
  {
    icon: LayoutGrid,
    title: "Brand Pendidikan per Bidang",
    description:
      "Setiap bidang keahlian direncanakan berkembang menjadi brand pendidikan tersendiri.",
  },
];

export default function ExpertNetwork() {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Ilustrasi jaringan expert multi-disiplin"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
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
                <Network className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold leading-[1.25] text-[#03428E] md:text-[36px]">
                Jaringan Expert Multi-Disiplin
              </h2>
            </div>
            <span className="relative z-10 mt-3.5 inline-block rounded-full bg-[#8A93A0]/28 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6b7480]">
              Target Pengembangan 2027-2028
            </span>
            <h3 className="relative z-10 mt-5 text-xl font-extrabold leading-[1.3] text-neutral-900">
              Kolaborasi Dengan Para Ahli
            </h3>
            <p className="relative z-10 mt-3.5 max-w-[460px] text-base leading-relaxed text-neutral-600">
              Menghadirkan dosen universitas dan tenaga ahli profesional dari
              berbagai disiplin ilmu, mencakup kesehatan, hukum, teknologi,
              bisnis, dan lainnya, untuk menghasilkan produk digital edukasi,
              seminar online dan offline, serta konten pembelajaran berbasis
              teknologi. Setiap bidang keahlian direncanakan berkembang
              menjadi brand pendidikan tersendiri, mengikuti model portofolio
              BNJ Digital Labs.
            </p>

            <div className="relative z-10 mt-5 flex flex-wrap gap-2.5">
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Multi-Disiplin
              </span>
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Kolaborasi Expert &amp; Akademisi
              </span>
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Brand per Bidang Keahlian
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Bidang Keahlian yang Dicakup
          </p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Enam Disiplin Ilmu, Satu Jaringan Kolaborasi
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {fields.map((field) => (
            <Reveal
              key={field.label}
              className="flex flex-col items-center gap-2.5 rounded-[10px] border border-neutral-200 px-3 py-5 text-center"
            >
              <field.icon className="h-6 w-6 text-[#03428E]" strokeWidth={1.5} />
              <span className="text-[13px] font-semibold text-neutral-900">
                {field.label}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#6AA84F]">
            Bentuk Kolaborasi &amp; Output
          </p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Dari Kolaborasi Menjadi Produk Nyata
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outputs.map((output) => (
            <Reveal
              key={output.title}
              className="rounded-[10px] border border-neutral-200 p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#6AA84F]/8">
                <output.icon
                  className="h-[22px] w-[22px] text-[#6AA84F]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[15px] font-bold text-neutral-900">
                {output.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                {output.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
