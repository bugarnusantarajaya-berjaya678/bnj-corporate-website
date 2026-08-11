"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// COVER CAROUSEL Detail Artikel — dipakai untuk foto cover 16:9 rounded.
// Kalau photos.length <= 1: render statis (identik cover lama, tanpa kontrol).
// Kalau > 1: carousel crossfade dengan LOGIC yang di-port PERSIS dari slideshow
// Hero Home (src/components/home/Hero.tsx): autoplay + jeda saat section keluar
// viewport (IntersectionObserver) + swipe mobile, ditambah kontrol dots (bawah)
// dan panah navigasi yang menempel di sisi foto (Prinsip Navigasi Carousel).
type Props = {
  photos: string[];
  alt: string;
  // className luar (mis. margin-top) — digabung ke container 16:9.
  className?: string;
};

export default function ArticleCoverCarousel({ photos, alt, className }: Props) {
  const box =
    "relative aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-[#f5f5f5]";
  const wrap = className ? `${box} ${className}` : box;

  // 1 foto -> statis (JANGAN paksa carousel).
  if (photos.length <= 1) {
    return (
      <div className={wrap}>
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

  return <CarouselInner photos={photos} alt={alt} wrap={wrap} />;
}

function CarouselInner({
  photos,
  alt,
  wrap,
}: {
  photos: string[];
  alt: string;
  wrap: string;
}) {
  const COUNT = photos.length;
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

  return (
    <div ref={boxRef} className={wrap}>
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

      {/* Panah navigasi — menempel di sisi foto (Prinsip Navigasi Carousel) */}
      <button
        type="button"
        aria-label="Foto sebelumnya"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors duration-200 hover:bg-black/60"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Foto berikutnya"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors duration-200 hover:bg-black/60"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots di bawah (overlay bawah foto, center) — pill aktif melebar,
          gaya identik Hero Home. */}
      <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2.5">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Foto ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full border border-white/60 transition-all duration-300 ${
              i === index ? "w-[26px] bg-white" : "w-2 bg-transparent hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
