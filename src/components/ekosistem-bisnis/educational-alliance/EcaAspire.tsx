import Image from "next/image";
import {
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Star,
  Sun,
  Trophy,
} from "lucide-react";
import mainPhoto from "../../../../public/images/Page-Educational/EFM-edu-eca-aspire.png";
import basicPhoto from "../../../../public/images/Page-Educational/EFM-edu-eca-basic.png";
import advancedPhoto from "../../../../public/images/Page-Educational/EFM-edu-eca-advanced.png";
import summerCampPhoto from "../../../../public/images/Page-Educational/EFM-edu-eca-summercamp.png";
import fieldTripPhoto from "../../../../public/images/Page-Educational/EFM-edu-eca-field-trip.png";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/ekosistem-bisnis/efm/CountUp";

const programs = [
  {
    photo: basicPhoto,
    icon: BookOpen,
    title: "School Basic Program",
    description:
      "Program reguler dengan 45+ pilihan aktivitas, mendukung character building, creativity week, dan skill assessment.",
  },
  {
    photo: advancedPhoto,
    icon: Trophy,
    title: "School Advanced Program",
    description:
      "Jalur intensif untuk siswa berprestasi, fokus pada kesiapan kompetisi dan pertunjukan.",
  },
  {
    photo: summerCampPhoto,
    icon: Sun,
    title: "Summer Camp",
    description:
      "Program liburan tematik: coaching clinic, creative workshop, dan leadership & team building.",
  },
  {
    photo: fieldTripPhoto,
    icon: MapPin,
    title: "Field Trip",
    description:
      "Kunjungan edukatif ke creative studio, STEAM center, dan sports arena.",
  },
];

const reasons = [
  {
    icon: Award,
    title: "Instruktur Berpengalaman & Bersertifikasi",
    description:
      "Instruktur berpengalaman di bidangnya masing-masing dan bersertifikasi/berijazah sesuai bidang keahlian.",
  },
  {
    icon: LayoutDashboard,
    title: "Monitoring Program Terstruktur",
    description:
      "Setiap program dipantau secara terstruktur untuk menjaga konsistensi kualitas.",
  },
  {
    icon: CheckCircle2,
    title: "Pencatatan Kehadiran Siswa",
    description: "Kehadiran siswa dicatat secara rutin dan rapi di setiap sesi.",
  },
  {
    icon: FileText,
    title: "Rapor Perkembangan Siswa",
    description: "Perkembangan setiap siswa dirangkum dalam laporan berkala.",
  },
  {
    icon: MessageSquare,
    title: "Komunikasi Rutin dengan Orang Tua",
    description:
      "Menjaga keterbukaan informasi antara program dan orang tua siswa.",
  },
  {
    icon: Star,
    title: "Survei Kepuasan Berkala",
    description: "Evaluasi rutin untuk memastikan kualitas program tetap terjaga.",
  },
  {
    icon: BookOpen,
    title: "Kurikulum Terstruktur & Terukur",
    description:
      "Setiap program dirancang dengan kurikulum yang jelas, disesuaikan dengan standar sekolah national-plus maupun internasional.",
  },
  {
    icon: Handshake,
    title: "Kemitraan Jangka Panjang & Terpercaya",
    description:
      "Telah menjadi mitra ekstrakurikuler sejak tahun ajaran 2024/2025, dipercaya oleh Sampoerna Academy BSD dan sejumlah sekolah internasional lainnya.",
  },
];

export default function EcaAspire() {
  return (
    <section id="eca-aspire" className="scroll-mt-28 bg-white pt-14 pb-12 sm:pt-16 md:pt-24 md:pb-14 lg:pt-32 lg:pb-16">
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
              <h2 className="text-[26px] font-bold leading-[1.3] text-[#03428E] md:text-[36px]">
                ECA Aspire
              </h2>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <GraduationCap
                  className="h-[30px] w-[30px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <span className="relative z-10 mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#6AA84F]/28 py-1 pl-2 pr-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6AA84F]">
              <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
              Aktif Sejak 2025
            </span>
            <h3 className="relative z-10 mt-5 text-xl font-extrabold leading-[1.3] text-neutral-900">
              Mitra Strategis Sekolah Nasional Plus &amp; Internasional
            </h3>
            <p className="relative z-10 ml-auto mt-3.5 max-w-[460px] text-base leading-relaxed text-neutral-600">
              BNJ, melalui kemitraan dengan CV Sang Kreasi Nusantara (SKN),
              telah mengelola ECA Aspire sejak 2025, penyedia program
              ekstrakurikuler terstruktur untuk sekolah national-plus dan
              internasional, dengan kemitraan strategis bersama Sampoerna
              Academy BSD dan sejumlah sekolah internasional lainnya. ECA
              Aspire merupakan brand yang telah terdaftar HAKI atas nama SKN,
              menjadi fondasi kuat bagi keberlanjutan program ini.
            </p>
            <p className="relative z-10 ml-auto mt-2.5 max-w-[460px] text-xs italic text-neutral-400">
              Terdaftar KBLI 85410
            </p>

            <div className="relative z-10 mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-[10px] border border-neutral-200 bg-white px-[18px] py-4 text-right">
                <CountUp
                  target={45}
                  className="block text-2xl font-extrabold leading-none text-[#03428E]"
                />
                <span className="mt-1.5 block text-[12.5px] font-semibold text-neutral-600">
                  Pilihan Aktivitas ECA
                </span>
              </div>
              <div className="rounded-[10px] border border-neutral-200 bg-white px-[18px] py-4 text-right">
                <CountUp
                  target={4}
                  suffix=""
                  className="block text-2xl font-extrabold leading-none text-[#03428E]"
                />
                <span className="mt-1.5 block text-[12.5px] font-semibold text-neutral-600">
                  Kategori Program
                </span>
              </div>
              <div className="rounded-[10px] border border-neutral-200 bg-white px-[18px] py-4 text-right">
                <span className="block text-2xl font-extrabold leading-none text-[#03428E]">
                  30
                </span>
                <span className="mt-1.5 block text-[12.5px] font-semibold text-neutral-600">
                  Program (Tahun Ajaran 2026/2027)
                </span>
              </div>
              <div className="rounded-[10px] border border-neutral-200 bg-white px-[18px] py-4 text-right">
                <CountUp
                  target={3}
                  suffix=""
                  className="block text-2xl font-extrabold leading-none text-[#03428E]"
                />
                <span className="mt-1.5 block text-[12.5px] font-semibold text-neutral-600">
                  Target Sekolah Internasional Baru (2026)
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={mainPhoto}
                alt="Sekolah Ekstrakurikuler ECA Aspire"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
            <p className="mt-2.5 text-xs italic text-neutral-400">
              Sekolah Ekstrakurikuler ECA Aspire
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Layanan ECA Aspire
          </p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            4 Program Ekstrakurikuler Terstruktur
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Reveal
              key={program.title}
              className="flex h-full flex-col border border-neutral-200 border-t-[3px] border-t-[#03428E] overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={program.photo}
                  alt={program.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                  <program.icon
                    className="h-[22px] w-[22px] text-[#03428E]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[15px] font-bold text-neutral-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                  {program.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Mengapa Memilih ECA Aspire
          </p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Standar Kualitas yang Terjaga di Setiap Program
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Reveal
              key={reason.title}
              className="border border-neutral-200 border-t-[3px] border-t-[#03428E] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <reason.icon
                  className="h-[22px] w-[22px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[17px] font-bold text-neutral-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
