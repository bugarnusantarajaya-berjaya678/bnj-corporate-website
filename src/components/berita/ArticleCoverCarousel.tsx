"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

// COVER CAROUSEL Detail Artikel — dipakai untuk foto cover 16:9 rounded.
// Kalau photos.length <= 1: render statis (identik cover lama, tanpa kontrol).
// Kalau > 1: carousel crossfade dengan LOGIC yang di-port PERSIS dari slideshow
// Hero Home (src/components/home/Hero.tsx): autoplay + jeda saat section keluar
// viewport (IntersectionObserver) + swipe mobile, ditambah kontrol dots (bawah).
//
// Panah navigasi (§Prinsip Navigasi Carousel): tombol SOLID Corporate Blue,
// icon putih, DI LUAR tepi foto (tidak overlap) — desktop di sisi kiri/kanan,
// mobile (<768px) pindah ke bawah foto. Ukuran/struktur/disabled meniru arrowBtn
// GrowthRoadmap (§4a) & Milestone (§6): h-9 w-9 rounded-full, disabled opacity-40
// dievaluasi tiap navigasi (prev mati di slide pertama, next mati di terakhir).
type Props = {
  photos: string[];
  alt: string;
  // className luar (mis. margin-top) — dipasang di wrapper terluar.
  className?: string;
};

const BOX =
  "relative aspect-[16/9] w-full min-w-0 flex-1 overflow-hidden rounded-[14px] bg-[#f5f5f5]";

export default function ArticleCoverCarousel({ photos, alt, className }: Props) {
  // 1 foto -> statis (JANGAN paksa carousel).
  if (photos.length <= 1) {
    return (
      <div className={className ? `${BOX} ${className}` : BOX}>
        <Image
          src={photos[0]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 760px) 100vw, 760px"
          className="object-cover"
        />
      </div>
    );
  }

  return <CarouselInner photos={photos} alt={alt} className={className} />;
}

function CarouselInner({
  photos,
  alt,
  className,
}: {
  photos: string[];
  alt: string;
  className?: string;
}) {
  const COUNT = photos.length;
  const LAST = COUNT - 1;
  const [index, setIndex] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleRef = useRef(true);

  const interval = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:767px)").matches
      ? 7500
      : 6000;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % COUNT),
      interval(),
    );
  }, [COUNT]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % COUNT) + COUNT) % COUNT);
      if (visibleRef.current) startTimer();
    },
    [COUNT, startTimer],
  );

  useEffect(() => {
    startTimer();
    const section = boxRef.current;
    let observer: IntersectionObserver | null = null;
    if (section && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries[0].isIntersecting;
          visibleRef.current = visible;
          if (visible) {
            if (!timerRef.current && !resumeRef.current) startTimer();
          } else {
            stopTimer();
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(section);
    }

    // touch swipe (mobile only)
    let sx = 0;
    let sy = 0;
    let tracking = false;
    const onTouchStart = (e: TouchEvent) => {
      if (
        !window.matchMedia("(max-width:767px)").matches ||
        e.touches.length !== 1
      )
        return;
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
      tracking = true;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx;
      const dy = t.clientY - sy;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      setIndex((i) => (i + (dx < 0 ? 1 : COUNT - 1)) % COUNT);
      // pause then resume
      stopTimer();
      if (resumeRef.current) clearTimeout(resumeRef.current);
      resumeRef.current = setTimeout(() => {
        resumeRef.current = null;
        if (visibleRef.current) startTimer();
      }, 4000);
    };
    section?.addEventListener("touchstart", onTouchStart, { passive: true });
    section?.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      stopTimer();
      if (resumeRef.current) clearTimeout(resumeRef.current);
      observer?.disconnect();
      section?.removeEventListener("touchstart", onTouchStart);
      section?.removeEventListener("touchend", onTouchEnd);
    };
  }, [startTimer, stopTimer, COUNT]);

  // Panah: solid Corporate Blue + icon putih, disabled opacity-40 di ujung.
  // Ukuran/struktur meniru arrowBtn GrowthRoadmap/Milestone (h-9 w-9 rounded-full).
  const arrowBtn = (dir: -1 | 1, extra = "") => {
    const disabled = dir < 0 ? index === 0 : index === LAST;
    const Icon = dir < 0 ? ChevronLeft : ChevronRight;
    return (
      <button
        type="button"
        onClick={() => goTo(index + dir)}
        disabled={disabled}
        aria-label={dir < 0 ? "Foto sebelumnya" : "Foto berikutnya"}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#03428E] text-white transition-colors hover:bg-[#032f66] disabled:cursor-default disabled:opacity-40 disabled:hover:bg-[#03428E] ${extra}`}
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
    );
  };

  return (
    <div className={className}>
      {/* Desktop (>=768px): panah DI LUAR foto (kiri-kanan), tidak overlap. */}
      <div className="flex items-center gap-3 md:gap-4">
        {arrowBtn(-1, "hidden md:flex")}
        <div ref={boxRef} className={BOX}>
          {/* Layer crossfade — opacity 1.1s (identik Hero Home) */}
          {photos.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
              style={{ opacity: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              <Image
                src={src}
                alt={i === index ? alt : ""}
                fill
                priority={i === 0}
                sizes="(max-width: 760px) 100vw, 760px"
                className="object-cover"
              />
            </div>
          ))}

          {/* Dots di bawah (overlay bawah foto, center) — TIDAK berubah. */}
          <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2.5">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Foto ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full border border-white/60 transition-all duration-300 ${
                  i === index
                    ? "w-[26px] bg-white"
                    : "w-2 bg-transparent hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
        {arrowBtn(1, "hidden md:flex")}
      </div>

      {/* Mobile (<768px): panah pindah ke BAWAH foto, sejajar horizontal. */}
      <div className="mt-4 flex items-center justify-center gap-6 md:hidden">
        {arrowBtn(-1)}
        {arrowBtn(1)}
      </div>
    </div>
  );
}
