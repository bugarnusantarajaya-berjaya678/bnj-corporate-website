import Image from "next/image";
import { Book, Building2, Grid2X2, Users } from "lucide-react";
import bagoesPhoto from "../../../public/images/bagoes-soeharto.png.png";
import emmaPhoto from "../../../public/images/emma-warokka.png.png";
import Reveal from "@/components/Reveal";

const leaders = [
  {
    photo: bagoesPhoto,
    name: "Bagoes Soeharto",
    title: "Founder & President Director",
    bio: "Sarjana Ilmu Keolahragaan (UNJ), berpengalaman di industri Fitness, Wellness, dan Sport. Memimpin pengembangan Essential Fitness Management (EFM) sejak 2017 hingga pendirian CV Bugar Nusantara Jaya.",
  },
  {
    photo: emmaPhoto,
    name: "Emma Warokka",
    title: "Co-Founder & Public Relations Director",
    bio: "Berpengalaman lebih dari 15 tahun dalam komunikasi dan pengembangan kemitraan. Memimpin pengembangan Branding, Public Relations, dan Strategic Alliance CV Bugar Nusantara Jaya, serta berperan aktif dalam perluasan kemitraan dengan institusi pendidikan dan korporasi.",
  },
];

const divisions = [
  {
    icon: Grid2X2,
    title: "Digital Growth Division",
    description:
      "Tim spesialis teknologi dan pemasaran digital yang bertanggung jawab atas pembangunan infrastruktur komersial masa depan, termasuk website, sales funnel, konten edukatif, dan kampanye pemasaran digital berbasis data.",
  },
  {
    icon: Building2,
    title: "Facility Management, Asset Audit & HSE",
    description:
      "Tim operasional di bawah EFM yang bertanggung jawab langsung terhadap pengelolaan harian fasilitas sport club, properti, dan gym komersial — audit aset, preventive maintenance, hingga standar keselamatan.",
  },
  {
    icon: Book,
    title: "Curriculum Development & Training Faculty",
    description:
      "Tim akademik dan pelatih senior bersertifikasi internasional yang mengembangkan program kurikulum kebugaran non-formal untuk sekolah mitra, sekaligus dewan penguji Instructor Training Academy internal.",
  },
  {
    icon: Users,
    title: "Expert Network",
    description:
      "Legal, Finance, Sport Science, Medical, Education, Technology, Marketing, Operations.",
  },
];

export default function OrgStructure() {
  return (
    <section className="bg-white pt-14 pb-14 sm:pt-16 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]" />

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Struktur Organisasi
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Tim yang Menjalankan Ekosistem Bisnis
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Pimpinan Perusahaan
          </p>
        </Reveal>
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-7 md:grid-cols-2">
          {leaders.map((leader, index) => (
            <Reveal
              key={leader.name}
              delay={index * 0.1}
              className="overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_12px_32px_rgba(3,66,142,0.08)]"
            >
              <div className="relative aspect-[4/3.4] w-full">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-[19px] font-extrabold text-neutral-900">
                  {leader.name}
                </p>
                <p className="mt-1.5 text-[13px] font-semibold text-[#03428E]">
                  {leader.title}
                </p>
                <p className="mt-3.5 text-sm leading-relaxed text-neutral-600">
                  {leader.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 text-center text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            4 Divisi Operasional
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {divisions.map((division, index) => (
            <Reveal key={division.title} delay={(index % 4) * 0.08}>
              <div className="h-full border border-t-[3px] border-neutral-200 border-t-[#03428E] p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                  <division.icon
                    className="h-6 w-6 text-[#03428E]"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-[18px] font-semibold leading-[1.2] text-neutral-900 md:text-[22px]">
                  {division.title}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
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
