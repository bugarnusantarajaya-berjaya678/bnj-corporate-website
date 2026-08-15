"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Wrapper mosaic: kartu biru (heading+body+link) di kiri + track kartu foto
// yang scroll horizontal di kanan (konten mosaic melebihi lebar container di
// desktop/tablet — 5 kartu EFM/Semua atau 4 kartu ECA tidak muat dalam
// max-width 900px). Scroll native (bukan translateX px hard-coded) supaya
// robust terhadap jumlah/lebar kartu yang berbeda antar tab & responsive di
// semua breakpoint sekaligus (swipe mobile gratis, tidak perlu track ganda).
//
// Panah navigasi MENEMPEL pada track kartu itu sendiri (position:absolute di
// dalam wrapper track, bukan elemen kontrol terpisah) — TUGAS 9, sesuai
// prinsip navigasi carousel yang berlaku di seluruh situs.
export default function MosaicCarousel({
  panelHeading,
  panelBody,
  panelHref,
  children,
}: {
  panelHeading: string;
  panelBody: string;
  panelHref: string;
  children: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  const scrollByCards = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-[960px] md:pl-[60px]">
      <div className="flex flex-col gap-3.5 md:flex-row">
        <div className="flex w-full flex-col justify-center rounded-xl bg-[#03428E] p-5 md:h-[454px] md:w-[270px] md:shrink-0">
          <h3 className="m-0 text-[19px] font-bold leading-[1.3] text-white">
            {panelHeading}
          </h3>
          <p className="mt-2.5 text-sm leading-[1.55] text-white/80">
            {panelBody}
          </p>
          <Link
            href={panelHref}
            className="mt-3.5 w-fit text-xs font-semibold text-white underline underline-offset-[3px]"
          >
            Lihat Selengkapnya
          </Link>
        </div>

        <div className="relative min-w-0 flex-1">
          <div
            ref={trackRef}
            onScroll={updateEdges}
            className="flex h-[454px] gap-3.5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {children}
          </div>
          {canPrev && (
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Sebelumnya"
              className="absolute left-[-14px] top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#03428E] shadow-[0_4px_12px_rgba(3,66,142,0.35)] transition-colors hover:bg-[#032f66] max-md:hidden lg:left-[-22px]"
            >
              <ChevronLeft className="h-[18px] w-[18px] text-white" strokeWidth={2} />
            </button>
          )}
          {canNext && (
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Berikutnya"
              className="absolute right-[-14px] top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#03428E] shadow-[0_4px_12px_rgba(3,66,142,0.35)] transition-colors hover:bg-[#032f66] max-md:hidden lg:right-[-22px]"
            >
              <ChevronRight className="h-[18px] w-[18px] text-white" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
