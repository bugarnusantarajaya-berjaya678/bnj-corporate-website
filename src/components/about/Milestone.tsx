"use client";

import Image, { type StaticImageData } from "next/image";
import {
  Award,
  Feather,
  Handshake,
  Home,
  Layers,
  Maximize2,
  Settings,
  Share2,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import photo2017 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2017.png";
import photo2018 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2018.jpg";
import photo2019 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2019.jpg";
import photo2020 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2020.jpg";
import photo2021 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2021.jpg";
import photo2022 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2022.jpg";
import photo2023 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2023.jpeg";
import photo2024 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2024.png";
import photo2025 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2025.png";
import photo2026 from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Milesstone-2026.jpg";

type MilestoneEntry = {
  year: string;
  icon: LucideIcon;
  title: string;
  description: string;
  photo: StaticImageData;
};

const milestones: MilestoneEntry[] = [
  {
    year: "2017",
    icon: Home,
    title: "Fondasi EFM",
    description:
      "Essential Fitness Management (EFM) didirikan sebagai fondasi pengalaman operasional BNJ dalam bidang fitness management, personal training, dan layanan wellness.",
    photo: photo2017,
  },
  {
    year: "2018",
    icon: Maximize2,
    title: "Ekspansi Perdana ke Danau Toba",
    description:
      "EFM memperluas jangkauan program wellness ke luar Jakarta untuk pertama kalinya, berpartisipasi dalam program Car Free Day “Save Danau Toba” di Parapat bersama Polres Simalungun dan Efarina TV, sebagai bagian dari rangkaian menyambut Asian Games 2018.",
    photo: photo2018,
  },
  {
    year: "2019",
    icon: Users,
    title: "Ekspansi Kemitraan Korporat & Institusi",
    description:
      "EFM memperluas jangkauan program wellness ke kawasan Sumatera Utara dan merambah klien korporat baru seperti Wuling Motors dan OJK, memperkuat fondasi operasional yang kelak menjadi dasar berdirinya CV Bugar Nusantara Jaya.",
    photo: photo2019,
  },
  {
    year: "2020",
    icon: Settings,
    title: "Penguatan Sistem Operasional",
    description:
      "Memperkuat sistem operasional, standardisasi layanan, pengembangan instruktur, serta penerapan kerangka kendali mutu (quality control).",
    photo: photo2020,
  },
  {
    year: "2021",
    icon: ShieldCheck,
    title: "Konsistensi Kendali Mutu",
    description:
      "Melanjutkan penguatan sistem operasional dan kerangka kendali mutu secara berkelanjutan di seluruh unit operasional.",
    photo: photo2021,
  },
  {
    year: "2022",
    icon: Award,
    title: "BNJ Resmi Berdiri",
    description:
      "BNJ resmi didirikan sebagai entitas usaha yang mengintegrasikan berbagai aktivitas bisnis dalam struktur manajemen yang lebih terarah dan terorganisir.",
    photo: photo2022,
  },
  {
    year: "2023",
    icon: Handshake,
    title: "Penguatan Kemitraan Korporat",
    description: "Partnership dengan Antasari Place (150+ peserta) dan Goodlife.",
    photo: photo2023,
  },
  {
    year: "2024",
    icon: Layers,
    title: "Ekspansi Cabang Layanan",
    description:
      "Penambahan cabang Boxing, Running, Golf, Judo, BJJ, dan Sport Treatment ke Private Program EFM.",
    photo: photo2024,
  },
  {
    year: "2025",
    icon: Share2,
    title: "Ekspansi Multi-Sektor",
    description:
      "Memperluas jaringan korporat dengan AIA Insurance dan Pfizer, sekaligus memulai kemitraan pendidikan pertama BNJ bersama Sang Kreasi Nusantara (SKN) melalui ECA Aspire, titik awal BNJ melangkah keluar dari fokus tunggal EFM.",
    photo: photo2025,
  },
  {
    year: "2026",
    icon: Feather,
    title: "Fase Ekspansi Multi-Lini Bisnis",
    description:
      "BNJ resmi mengembangkan ekosistem bisnis multi-pilar dengan aktifnya BNJ Digital Labs, menandai transisi dari perusahaan berbasis EFM tunggal menjadi holding company dengan beberapa lini bisnis terintegrasi.",
    photo: photo2026,
  },
];

const AUTOPLAY_MS = 5000;

export default function Milestone() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  const touchX = useRef<number | null>(null);

  const goPrev = () =>
    setActive((i) => (i - 1 + milestones.length) % milestones.length);
  const goNext = () => setActive((i) => (i + 1) % milestones.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 45) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  // Panah navigasi slide — sama untuk versi samping (desktop) & bawah (mobile).
  const arrowBtn = (dir: -1 | 1, extra = "") => {
    const Icon = dir < 0 ? ChevronLeft : ChevronRight;
    return (
      <button
        type="button"
        onClick={() => (dir < 0 ? goPrev() : goNext())}
        aria-label={dir < 0 ? "Milestone sebelumnya" : "Milestone berikutnya"}
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#03428E] transition-colors hover:border-[#03428E] ${extra}`}
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
      </button>
    );
  };

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return;
      setActive((i) => (i + 1) % milestones.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const current = milestones[active];

  return (
    <section className="bg-white py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Perjalanan Kami
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            Milestone CV Bugar Nusantara Jaya
          </h2>

          <div
            className="mt-[var(--section-header-gap)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Strip tab icon tahun — jalan pintas klik-langsung, scroll
                horizontal sendiri di mobile, tanpa panah navigasi. */}
            <div className="flex items-start justify-between gap-1 overflow-x-auto border-b border-neutral-200 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-2">
              {milestones.map((m, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex flex-none flex-col items-center gap-2 px-1.5 py-1.5 sm:min-w-[76px] sm:px-2"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                        isActive
                          ? "scale-110 bg-[#03428E] shadow-[0_10px_24px_rgba(3,66,142,0.28)]"
                          : "bg-neutral-100"
                      }`}
                    >
                      <m.icon
                        className={`h-[18px] w-[18px] transition-colors duration-300 sm:h-[22px] sm:w-[22px] ${
                          isActive ? "text-white" : "text-neutral-400"
                        }`}
                        strokeWidth={1.6}
                      />
                    </span>
                    <span
                      className={`text-sm font-bold transition-colors duration-300 ${
                        isActive ? "text-[#03428E]" : "text-neutral-400"
                      }`}
                    >
                      {m.year}
                    </span>
                    <span
                      className={`block h-1 w-10 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-[#03428E]" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 sm:gap-3">
              {arrowBtn(-1, "hidden sm:flex")}
              <div
                className="min-w-0 flex-1 rounded-3xl bg-white p-2 shadow-[0_14px_40px_rgba(3,66,142,0.18)] sm:p-3"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[16/7] md:aspect-[3/1]">
                <Image
                  src={current.photo}
                  alt={`Momen BNJ tahun ${current.year}, ${current.title}`}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,52,112,0.92)_0%,rgba(3,52,112,0.88)_34%,rgba(3,66,142,0.6)_52%,rgba(3,66,142,0.15)_68%,rgba(3,66,142,0)_78%)]" />
                <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 md:p-10">
                  <div className="max-w-full sm:max-w-[65%] md:max-w-[58%]">
                    <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[13px] font-bold tracking-[0.1em] text-[#03428E]">
                      {current.year}
                    </span>
                    <div className="mt-3.5 border-l-[3px] border-[#6AA84F] pl-4">
                      <h3 className="text-lg font-bold leading-tight text-white [text-shadow:0_2px_10px_rgba(0,20,60,0.35)] sm:text-2xl md:text-[28px]">
                        {current.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] font-medium leading-relaxed text-white/90 sm:text-[15px] md:text-base">
                        {current.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              {arrowBtn(1, "hidden sm:flex")}
            </div>

            <div className="mt-4 flex items-center justify-center gap-6 sm:hidden">
              {arrowBtn(-1)}
              {arrowBtn(1)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
