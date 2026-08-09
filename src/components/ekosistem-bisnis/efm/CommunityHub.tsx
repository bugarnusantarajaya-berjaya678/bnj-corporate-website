import Image from "next/image";
import { GraduationCap, Heart, Users } from "lucide-react";
import photo from "../../../../public/images/Page-EFM/EFM-Community-Hub..jpg";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    icon: Heart,
    label: "Isu Kesehatan Mental, Wellness & Olahraga Rekreasional",
  },
  {
    icon: GraduationCap,
    label: "Kolaborasi Sekolah, Kampus, LSM & Instansi",
  },
  {
    icon: Users,
    label: "Penguatan Partisipasi Pemuda Berbasis Komunitas",
  },
];

export default function CommunityHub() {
  return (
    <section className="bg-white pt-12 pb-14 sm:pt-14 sm:pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Kegiatan komunitas Essential Community Hub"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
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
              04
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <Users className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold leading-[1.2] text-[#03428E] md:text-[36px]">
                Essential Community Hub
              </h2>
            </div>
            <p className="relative z-10 mt-5 text-base leading-relaxed text-neutral-600">
              Mengangkat isu-isu penting seputar kesehatan mental, wellness,
              dan olahraga rekreasional melalui kolaborasi lintas entitas.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <Reveal
              key={highlight.label}
              className="flex items-start gap-3.5 border border-neutral-200 p-5"
            >
              <highlight.icon
                className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#03428E]"
                strokeWidth={1.5}
              />
              <span className="text-sm font-semibold leading-relaxed text-neutral-900">
                {highlight.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
