"use client";

import Image, { type StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import founderPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Struktur-Founder.png";
import coFounderPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Struktur-CoFounder.png";
import digitalGrowthPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Struktur-Digital-Growth.png";
import facilityManagementPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Struktur-Facility-Management.png";
import curriculumDevelopmentPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Struktur-Curriculum-Development.png";
import expertNetworkPhoto from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Struktur-Expert-Network.png";

type TeamCard = {
  id: string;
  photo: StaticImageData;
  label: string;
  name: string;
  title?: string;
  detail: string;
};

const cards: TeamCard[] = [
  {
    id: "founder",
    photo: founderPhoto,
    label: "Pimpinan",
    name: "Bagoes Soeharto",
    title: "Founder & President Director",
    detail:
      "Sarjana Ilmu Keolahragaan (UNJ), berpengalaman di industri Fitness, Wellness, dan Sport. Memimpin pengembangan Essential Fitness Management (EFM) sejak 2017 hingga pendirian CV Bugar Nusantara Jaya.",
  },
  {
    id: "cofounder",
    photo: coFounderPhoto,
    label: "Pimpinan",
    name: "Emma Warokka",
    title: "Co-Founder & Public Relations Director",
    detail:
      "Berpengalaman lebih dari 15 tahun dalam komunikasi dan pengembangan kemitraan. Memimpin pengembangan Branding, Public Relations, dan Strategic Alliance CV Bugar Nusantara Jaya, serta berperan aktif dalam perluasan kemitraan dengan institusi pendidikan dan korporasi.",
  },
  {
    id: "digital-growth",
    photo: digitalGrowthPhoto,
    label: "Divisi",
    name: "Digital Growth",
    detail:
      "Tim spesialis teknologi dan pemasaran digital yang bertanggung jawab atas pembangunan infrastruktur komersial masa depan, termasuk website, sales funnel, konten edukatif, dan kampanye pemasaran digital berbasis data.",
  },
  {
    id: "facility-management",
    photo: facilityManagementPhoto,
    label: "Divisi",
    name: "Facility Management, Asset Audit & HSE",
    detail:
      "Tim operasional di bawah EFM yang bertanggung jawab langsung terhadap pengelolaan harian fasilitas sport club, properti, dan gym komersial. Mencakup audit aset, preventive maintenance, hingga standar keselamatan.",
  },
  {
    id: "curriculum-development",
    photo: curriculumDevelopmentPhoto,
    label: "Divisi",
    name: "Curriculum Development & Training Faculty",
    detail:
      "Tim akademik dan pelatih senior bersertifikasi internasional yang mengembangkan program kurikulum kebugaran non-formal untuk sekolah mitra, sekaligus dewan penguji Instructor Training Academy internal.",
  },
  {
    id: "expert-network",
    photo: expertNetworkPhoto,
    label: "Rencana Divisi",
    name: "Expert Network",
    detail:
      "Jaringan expert multi-disiplin yang akan mendukung operasional BNJ ke depan, mencakup bidang Legal, Finance, Sport Science, Medical, Education, Technology, Marketing, dan Operations.",
  },
];

export default function OrgStructure() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [panel, setPanel] = useState({ left: 0, width: 0, connector: 0, top: 0 });
  const [activeDot, setActiveDot] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = () => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 5);
    setAtEnd(track.scrollLeft >= max - 5);
    setActiveDot(
      max <= 0
        ? 0
        : Math.max(
            0,
            Math.min(
              cards.length - 1,
              Math.round((track.scrollLeft / max) * (cards.length - 1)),
            ),
          ),
    );

    if (openIndex !== null) {
      const card = cardRefs.current[openIndex];
      if (card) {
        const wrapperRect = wrapper.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const cardLeft = cardRect.left - wrapperRect.left;
        const cardCenter = cardLeft + cardRect.width / 2;
        const panelWidth = Math.min(cardRect.width * 1.5, wrapperRect.width);
        let panelLeft = cardLeft;
        panelLeft = Math.max(0, Math.min(panelLeft, wrapperRect.width - panelWidth));
        const connector = Math.max(
          24,
          Math.min(cardCenter - panelLeft, panelWidth - 24),
        );
        setPanel({
          left: panelLeft,
          width: panelWidth,
          connector,
          top: cardRect.height,
        });
      }
    }
  };

  useLayoutEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => measure();
    const onResize = () => measure();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "16") || 16;
    const step = first.getBoundingClientRect().width + gap;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const to = cards.length > 1 ? (i / (cards.length - 1)) * max : 0;
    track.scrollTo({ left: to, behavior: "smooth" });
  };

  const toggleCard = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-white py-[var(--section-gap-y)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Struktur Organisasi
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Tim yang Menjalankan Ekosistem Bisnis
          </h2>
        </Reveal>

        <div className="mt-[var(--section-header-gap)]">
        <div ref={wrapperRef} className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((card, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="relative w-[220px] flex-none snap-start overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_12px_32px_rgba(3,66,142,0.08)] transition-shadow duration-300 sm:w-[250px] md:w-[270px]"
                  style={{ aspectRatio: "4 / 4.6" }}
                >
                  <Image
                    src={card.photo}
                    alt={card.name}
                    fill
                    sizes="(min-width: 768px) 270px, (min-width: 640px) 250px, 220px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 right-16">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
                      {card.label}
                    </p>
                    <p className="mt-2 text-[19px] font-bold leading-[1.25] text-white">
                      {card.name}
                    </p>
                    {card.title ? (
                      <p className="mt-1 text-[12px] font-medium leading-[1.35] text-white/85">
                        {card.title}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleCard(i)}
                    aria-expanded={isOpen}
                    aria-label={`Lihat profil ${card.name}`}
                    className="absolute bottom-5 right-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
                  >
                    <ChevronDown
                      className={`h-[18px] w-[18px] text-[#03428E] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      strokeWidth={2.2}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Sebelumnya"
            className="absolute left-[-16px] top-1/2 hidden h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full bg-[#03428E] shadow-[0_4px_14px_rgba(3,66,142,0.28)] transition-opacity disabled:pointer-events-none disabled:opacity-40 sm:flex"
          >
            <ChevronDown className="h-[18px] w-[18px] rotate-90 text-white" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Berikutnya"
            className="absolute right-[-16px] top-1/2 hidden h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full bg-[#03428E] shadow-[0_4px_14px_rgba(3,66,142,0.28)] transition-opacity disabled:pointer-events-none disabled:opacity-40 sm:flex"
          >
            <ChevronDown className="h-[18px] w-[18px] -rotate-90 text-white" strokeWidth={2.2} />
          </button>
        </div>

        {openIndex !== null ? (
          <div
            className="relative mt-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_18px_44px_rgba(3,66,142,0.18)]"
            style={{
              marginLeft: panel.left,
              width: panel.width,
            }}
          >
            <div
              className="absolute -top-[7px] h-3.5 w-3.5 rotate-45 border-l border-t border-neutral-200 bg-white"
              style={{ left: panel.connector - 7 }}
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#03428E]">
              {cards[openIndex].label}
            </p>
            <p className="mt-2 text-[18px] font-bold leading-[1.25] text-neutral-900">
              {cards[openIndex].name}
            </p>
            {cards[openIndex].title ? (
              <p className="mt-1 text-[13px] font-semibold text-[#03428E]">
                {cards[openIndex].title}
              </p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {cards[openIndex].detail}
            </p>
          </div>
        ) : null}
        </div>

        <p className="mt-4 text-center text-[13px] italic text-neutral-400">
          Klik ikon panah pada tiap kartu untuk melihat profil lengkap
        </p>

        <div className="mt-[18px] flex items-center justify-center gap-2">
          {cards.map((card, i) => (
            <button
              key={card.id}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ke kartu ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeDot === i
                  ? "h-[9px] w-[9px] bg-[#03428E]"
                  : "h-[7px] w-[7px] border border-neutral-300 bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
