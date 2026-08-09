import Image from "next/image";
import {
  Building2,
  Calendar,
  Heart,
  HeartPulse,
  KeyRound,
  Layers,
  Lightbulb,
  PanelLeft,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import photo from "../../../../public/images/Page-EFM/EFM-B2B-Management.png";
import Reveal from "@/components/Reveal";

const communityWellnessItems = [
  { icon: Sparkles, label: "Fitness & Sport Program" },
  { icon: HeartPulse, label: "Sport Treatment" },
  { icon: Stethoscope, label: "Medical Check-Up" },
];

const facilityManagementItems = [
  { icon: ShieldAlert, label: "Kondisi & Risiko Fasilitas" },
  { icon: Wind, label: "Kualitas Udara & Kelembaban" },
  { icon: Lightbulb, label: "Pencahayaan & Kenyamanan Ruangan" },
  { icon: Zap, label: "Keamanan Sauna & Kelistrikan" },
  { icon: Layers, label: "Kondisi Lapangan & Permukaan" },
  { icon: Sun, label: "Pencahayaan & Keamanan Area Luar" },
  { icon: Calendar, label: "Booking & Penjadwalan Fasilitas" },
  { icon: KeyRound, label: "Akses & Kontrol Pengguna" },
];

export default function B2BManagement() {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Layanan B2B Management dikelola Essential Fitness Management"
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
              02
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <Building2 className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold leading-[1.2] text-[#03428E] md:text-[36px]">
                B2B Management
              </h2>
            </div>
            <p className="relative z-10 mt-5 text-base leading-relaxed text-neutral-600">
              EFM menghadirkan solusi kebugaran korporat yang menyeluruh,
              mencakup program olahraga dan kesehatan untuk karyawan maupun
              penghuni, serta pengelolaan penuh fasilitas olahraga di
              lingkungan perkantoran, perumahan, dan apartemen.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Program B2B
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            2 Layanan Inti B2B Management
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_12px_32px_rgba(3,66,142,0.08)] transition-transform duration-300 hover:-translate-y-1">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
            />
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#03428E]/8">
              <Heart className="h-[30px] w-[30px] text-[#03428E]" strokeWidth={1.5} />
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6AA84F]">
              Program B2B
            </p>
            <h3 className="mt-2.5 text-[22px] font-extrabold leading-[1.3] text-neutral-900">
              Community Wellness Program
            </h3>
            <p className="mt-3.5 text-sm leading-relaxed text-neutral-600">
              Program kebugaran dan kesehatan berkelanjutan untuk karyawan
              maupun penghuni, mencakup kelas latihan rutin, penanganan
              cedera oleh tenaga profesional bersertifikasi, hingga
              pemeriksaan kesehatan berkala bersama mitra klinik dan rumah
              sakit terpercaya.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-neutral-100 pt-5 sm:grid-cols-3">
              {communityWellnessItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 pr-3 ${
                    index > 0 ? "sm:border-l sm:border-neutral-200 sm:pl-3" : ""
                  }`}
                >
                  <item.icon
                    className="h-4 w-4 shrink-0 text-[#03428E]"
                    strokeWidth={2}
                  />
                  <span className="text-xs font-semibold text-neutral-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_12px_32px_rgba(3,66,142,0.08)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
            />
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#03428E]/8">
              <PanelLeft className="h-[30px] w-[30px] text-[#03428E]" strokeWidth={1.5} />
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6AA84F]">
              Program B2B
            </p>
            <h3 className="mt-2.5 text-[22px] font-extrabold leading-[1.3] text-neutral-900">
              Facility Management
            </h3>
            <p className="mt-3.5 text-sm leading-relaxed text-neutral-600">
              Pengelolaan menyeluruh fasilitas olahraga di perkantoran,
              perumahan, dan apartemen. Dari penyediaan tenaga hingga
              perawatan harian, didukung sistem analisis berbasis AI yang
              dipadukan evaluasi langsung oleh ahli untuk memastikan setiap
              fasilitas aman dan optimal digunakan.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-y-3 border-t border-neutral-100 pt-5">
              {facilityManagementItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 pr-3 ${
                    index % 2 === 1 ? "border-l border-neutral-200 pl-3" : ""
                  } ${index >= 2 ? "border-t border-neutral-100 pt-3" : ""}`}
                >
                  <item.icon
                    className="h-4 w-4 shrink-0 text-[#03428E]"
                    strokeWidth={2}
                  />
                  <span className="text-xs font-semibold text-neutral-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
