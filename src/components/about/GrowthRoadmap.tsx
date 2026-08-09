"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Dumbbell,
  Handshake,
  HeartPulse,
  Landmark,
  Laptop,
  Stethoscope,
  Store,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type Initiative = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href?: string;
};

type Phase = {
  year: string;
  title: string;
  active: boolean;
  initiatives: Initiative[];
};

const roadmap: Phase[] = [
  {
    year: "2026",
    title: "Foundation & Ecosystem",
    active: true,
    initiatives: [
      {
        title: "Essential Fitness Management",
        desc: "Aktif sejak 2017, fondasi operasional BNJ di sektor fitness dan wellness korporat.",
        icon: Dumbbell,
        href: "/ekosistem-bisnis/efm",
      },
      {
        title: "BNJ Digital Labs",
        desc: "Kemitraan aktif dengan rumah sakit, klinik, dan fisioterapi untuk layanan kesehatan digital.",
        icon: Laptop,
        href: "/ekosistem-bisnis/digital-labs",
      },
      {
        title: "ECA Aspire",
        desc: "Program ekstrakurikuler aktif sejak tahun ajaran 2024/2025 bersama SKN.",
        icon: BookOpen,
        href: "/ekosistem-bisnis/educational-alliance#eca-aspire",
      },
    ],
  },
  {
    year: "2027",
    title: "Talent & Knowledge Ecosystem",
    active: false,
    initiatives: [
      {
        title: "BNJ Vitality Intelligence",
        desc: "Menuju peluncuran produk digital kesehatan berbasis AI.",
        icon: HeartPulse,
        href: "/ekosistem-bisnis/digital-labs#vitality-intelligence",
      },
      {
        title: "Jaringan Expert Multi-Disiplin",
        desc: "Perluasan kemitraan expert di bidang kesehatan (dokter, terapis, psikolog anak dan wanita).",
        icon: Stethoscope,
        href: "/ekosistem-bisnis/educational-alliance#expert-network",
      },
      {
        title: "Brand Incubation & Business Acceleration",
        desc: "Tahap perencanaan dan penyusunan kontrak kerja sama dengan calon brand yang akan di-incubate.",
        icon: ClipboardList,
      },
    ],
  },
  {
    year: "2028",
    title: "Portfolio Expansion",
    active: false,
    initiatives: [
      {
        title: "Brand Incubation & Business Acceleration",
        desc: "Pelaksanaan resmi dimulai, brand hasil incubation mulai beroperasi (pilates studio, archery club, running club).",
        icon: Store,
        href: "/ekosistem-bisnis/brand-incubation#portfolio-brand",
      },
      {
        title: "Jaringan Expert Multi-Disiplin",
        desc: "Membangun kemitraan dengan dosen dan tenaga ahli lintas bidang.",
        icon: Users,
        href: "/ekosistem-bisnis/educational-alliance#expert-network",
      },
      {
        title: "BNJ Investment Ventures: Tahap 1",
        desc: "Bootstrap mandiri, BNJ berinvestasi langsung dengan modal sendiri ke fasilitas fitness, sport, dan wellness.",
        icon: Landmark,
        href: "/ekosistem-bisnis/investment-ventures#tahap-1",
      },
    ],
  },
  {
    year: "2029",
    title: "Venture Building",
    active: false,
    initiatives: [
      {
        title: "BNJ Investment Ventures: Tahap 2",
        desc: "Membuka skema konsorsium dan investasi eksternal untuk ekspansi portofolio.",
        icon: Handshake,
        href: "/ekosistem-bisnis/investment-ventures#tahap-2",
      },
    ],
  },
  {
    year: "2030",
    title: "Scalable Ecosystem",
    active: false,
    initiatives: [
      {
        title: "BNJ Investment Ventures: Tahap 2 (Lanjutan)",
        desc: "Pelaksanaan penuh skema investor eksternal, memperbesar portofolio dari keberhasilan tahap sebelumnya.",
        icon: TrendingUp,
        href: "/ekosistem-bisnis/investment-ventures#tahap-2",
      },
    ],
  },
];

const LAST = roadmap.length - 1;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 44 : dir < 0 ? -44 : 0, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -44 : dir < 0 ? 44 : 0, opacity: 0 }),
};

export default function GrowthRoadmap() {
  const [index, setIndex] = useState(0); // slide 2026 aktif saat load
  const [direction, setDirection] = useState(0);
  const touchX = useRef<number | null>(null);

  const goTo = (target: number) => {
    if (target < 0 || target > LAST || target === index) return;
    setDirection(target > index ? 1 : -1);
    setIndex(target);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 45) return;
    if (dx < 0) goTo(index + 1);
    else goTo(index - 1);
  };

  const arrowBtn = (dir: -1 | 1, extra = "") => {
    const disabled = dir < 0 ? index === 0 : index === LAST;
    const Icon = dir < 0 ? ChevronLeft : ChevronRight;
    return (
      <button
        type="button"
        onClick={() => goTo(index + dir)}
        disabled={disabled}
        aria-label={dir < 0 ? "Tahun sebelumnya" : "Tahun berikutnya"}
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#03428E] transition-colors hover:border-[#03428E] disabled:cursor-default disabled:opacity-40 disabled:hover:border-neutral-200 ${extra}`}
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
    );
  };

  const phase = roadmap[index];

  return (
    <section className="bg-white py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Roadmap Pertumbuhan
          </p>
          <h2 className="mt-4 text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            Corporate Growth Roadmap 2026–2030
          </h2>
          <p className="mt-3 text-[15px] font-semibold italic text-[#0095DA]">
            Grow with Proof, Scale with Trust
          </p>
        </Reveal>

        <div className="mx-auto mt-[var(--section-header-gap)] max-w-[860px]">
          {/* Strip pill tahun */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {roadmap.map((p, i) => {
              const isActive = i === index;
              return (
                <button
                  key={p.year}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Lihat tahun ${p.year}`}
                  aria-current={isActive}
                  className={`flex-1 cursor-pointer rounded-full py-1.5 text-center text-[11px] tracking-tight transition-colors duration-200 sm:text-xs ${
                    isActive
                      ? "bg-[#03428E] font-medium text-white"
                      : "bg-neutral-100 font-normal text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {p.year}
                </button>
              );
            })}
          </div>

          {/* Garis progres riil (statis): green sampai titik 2026, sisanya netral */}
          <div
            aria-hidden
            className="mt-2 h-[2px] w-full rounded-full bg-[linear-gradient(90deg,#6AA84F_0%,#6AA84F_10%,#E3E7EC_10%,#E3E7EC_100%)]"
          />

          {/* Slide + navigasi panah samping (desktop) */}
          <div className="mt-6 flex items-center gap-2 sm:gap-3">
            {arrowBtn(-1, "hidden sm:flex")}

            <div
              className="relative min-w-0 flex-1 overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={phase.year}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden rounded-[12px] border-[0.5px] border-neutral-200 bg-white"
                >
                  {/* Header slide — background Corporate Blue solid */}
                  <div className="bg-[#03428E] px-5 py-[18px] sm:px-6 sm:py-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-[28px] font-extrabold leading-none text-white sm:text-[32px]">
                        {phase.year}
                      </span>
                      <span className="rounded-full bg-white/[0.16] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                        {phase.active ? "Sedang Berjalan" : "Rencana Lanjutan"}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-white sm:text-lg">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Body konten — daftar inisiatif */}
                  <ul className="p-5 sm:p-6">
                    {phase.initiatives.map((item, i) => (
                      <li
                        key={item.title}
                        className={
                          i > 0
                            ? "mt-4 border-t-[0.5px] border-neutral-200 pt-4"
                            : ""
                        }
                      >
                        <div className="flex gap-3.5">
                          {/* Icon rounded-square sticker: green back layer + blue front */}
                          <div className="relative h-[43px] w-[43px] shrink-0">
                            <div className="absolute bottom-0 right-0 h-10 w-10 rounded-[11px] bg-[#6AA84F]" />
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#03428E]">
                              <item.icon
                                className="h-[18px] w-[18px] text-white"
                                strokeWidth={1.75}
                              />
                            </div>
                          </div>

                          <div className="min-w-0">
                            <h4 className="text-[15px] font-bold leading-snug text-neutral-900">
                              {item.title}
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                              {item.desc}
                            </p>
                            {item.href && (
                              <Link
                                href={item.href}
                                className="group mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#03428E] transition-colors hover:text-[#032f66]"
                              >
                                Pelajari Lebih Lanjut
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {arrowBtn(1, "hidden sm:flex")}
          </div>

          {/* Navigasi panah bawah (mobile) — di luar card, tidak menabrak teks */}
          <div className="mt-4 flex items-center justify-center gap-6 sm:hidden">
            {arrowBtn(-1)}
            {arrowBtn(1)}
          </div>
        </div>
      </div>
    </section>
  );
}
