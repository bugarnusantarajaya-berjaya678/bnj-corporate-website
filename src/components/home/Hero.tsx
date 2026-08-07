"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    desktop: "/images/Page-Home/Home-Hero-Slide-1.png",
    mobile: "/images/Page-Home/Home-Hero-Mobile-Slide-1.jpg",
    alt: "Sesi terapi dan pelatihan personal",
  },
  {
    desktop: "/images/Page-Home/Home-Hero-Slide-2.png",
    mobile: "/images/Page-Home/Home-Hero-Mobile-Slide-2.jpg",
    alt: "Tim profesional kesehatan BNJ",
  },
  {
    desktop: "/images/Page-Home/Home-Hero-Slide-3.png",
    mobile: "/images/Page-Home/Home-Hero-Mobile-Slide-3.jpg",
    alt: "Asesmen program kebugaran",
  },
  {
    desktop: "/images/Page-Home/Home-Hero-Slide-4.png",
    mobile: "/images/Page-Home/Home-Hero-Mobile-Slide-4.jpg",
    alt: "Tim medis dan instruktur BNJ",
  },
  {
    desktop: "/images/Page-Home/Home-Hero-Slide-5.png",
    mobile: "/images/Page-Home/Home-Hero-Mobile-Slide-5.jpg",
    alt: "Kepemimpinan BNJ",
  },
];

const texts = [
  {
    hDesktop: "Pelatihan Personal dengan Standar yang Konsisten, Sejak 2017",
    hMobile: "Pelatihan Personal, Standar Konsisten",
    pDesktop:
      "Essential Fitness Management melayani kebugaran personal dan korporat dengan pendekatan yang terstruktur dan terukur.",
    pMobile: "Kebugaran personal dan korporat yang terukur sejak 2017.",
  },
  {
    hDesktop: "Program Wellness yang Dipercaya Skala Korporat",
    hMobile: "Wellness Skala Korporat",
    pDesktop:
      "BNJ mengelola program kebugaran untuk 200+ klien korporat dan personal di seluruh Indonesia.",
    pMobile: "Dipercaya 200+ klien korporat dan personal di Indonesia.",
  },
  {
    hDesktop: "Teknologi yang Mendekatkan Layanan Kesehatan dan Kebugaran",
    hMobile: "Teknologi untuk Kesehatan & Kebugaran",
    pDesktop:
      "BNJ Digital Labs mengembangkan produk digital untuk mendukung layanan wellness yang lebih terhubung.",
    pMobile: "Produk digital BNJ Digital Labs yang lebih terhubung.",
  },
  {
    hDesktop: "Menuju Jaringan Expert Multi-Disiplin",
    hMobile: "Jaringan Expert Multi-Disiplin",
    pDesktop:
      "BNJ membangun kolaborasi lintas disiplin ilmu, dari kemitraan seperti ECA Aspire hingga jaringan expert yang terus berkembang.",
    pMobile: "Kolaborasi lintas disiplin, terus berkembang menuju 2027-2028.",
  },
  {
    hDesktop: "Satu Ekosistem, Satu Arah Pertumbuhan",
    hMobile: "Satu Ekosistem, Satu Arah",
    pDesktop:
      "CV Bugar Nusantara Jaya menyatukan lima unit bisnis dalam satu visi pertumbuhan yang berkelanjutan.",
    pMobile: "Lima unit bisnis, satu visi pertumbuhan berkelanjutan.",
  },
];

const COUNT = slides.length;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
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
  }, []);

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
    [startTimer],
  );

  useEffect(() => {
    startTimer();
    const section = sectionRef.current;
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
  }, [startTimer, stopTimer]);

  return (
    <div className="relative">
      <style>{heroCss}</style>
      <section ref={sectionRef} className="home-hero">
        {/* slideshow layers */}
        <div className="home-hero__bg">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="home-hero__slide"
              style={{ opacity: i === index ? 1 : 0 }}
            >
              <picture>
                <source media="(max-width:767px)" srcSet={slide.mobile} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.desktop} alt={slide.alt} />
              </picture>
            </div>
          ))}
        </div>

        {/* wave divider (Flagship bookend: hero -> white) */}
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden
          className="home-hero__wave"
        >
          <defs>
            <linearGradient id="homeHeroCutLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#03428E" />
              <stop offset="50%" stopColor="#6AA84F" />
              <stop offset="100%" stopColor="#0095DA" />
            </linearGradient>
          </defs>
          <path d="M0,44 C 300,-6 1080,72 1440,20 L1440,110 L0,110 Z" fill="#fff" />
          <path
            d="M0,44 C 300,-6 1080,72 1440,20"
            fill="none"
            stroke="url(#homeHeroCutLine)"
            strokeWidth="5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="home-hero__scrim" aria-hidden />

        <div className="home-hero__content">
          <div className="home-hero__text">
            <div className="home-hero__stack">
              {texts.map((t, i) => (
                <div
                  key={i}
                  className="home-hero__tslide"
                  style={{ opacity: i === index ? 1 : 0 }}
                  aria-hidden={i !== index}
                >
                  <h1>
                    <span className="d-only">{t.hDesktop}</span>
                    <span className="m-only">{t.hMobile}</span>
                  </h1>
                  <p>
                    <span className="d-only">{t.pDesktop}</span>
                    <span className="m-only">{t.pMobile}</span>
                  </p>
                </div>
              ))}
            </div>

            <a href="#pilar-bisnis" className="home-hero__cta">
              <span className="d-only">Jelajahi Ekosistem Bisnis Kami</span>
              <span className="m-only">Jelajahi Ekosistem</span>
            </a>

            <div className="home-hero__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="home-hero__dot"
                  data-active={i === index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const heroCss = `
.home-hero{
  width:100%;position:relative;overflow:hidden;background:#03428E;
  min-height:clamp(400px,40vw,760px);display:flex;align-items:stretch;box-sizing:border-box;
}
.home-hero__bg{position:absolute;inset:0;z-index:1;}
.home-hero__slide{position:absolute;inset:0;transition:opacity 1.1s ease;}
.home-hero__slide picture{display:block;width:100%;height:100%;}
.home-hero__slide img{width:100%;height:100%;object-fit:cover;object-position:center;display:block;}
.home-hero__wave{
  position:absolute;left:0;right:0;bottom:-1px;width:100%;
  height:clamp(56px,8vw,104px);z-index:4;display:block;pointer-events:none;
}
.home-hero__scrim{display:none;position:absolute;inset:0;z-index:2;
  background:linear-gradient(90deg, rgba(3,66,142,.97) 0%, rgba(3,66,142,.95) 55%, rgba(3,66,142,.88) 72%, rgba(3,66,142,.45) 86%, rgba(3,66,142,.06) 100%);}
.home-hero__content{
  position:relative;z-index:3;max-width:1280px;width:100%;margin:0 auto;
  padding:clamp(108px,11vw,135px) clamp(24px,4vw,48px) clamp(100px,11vw,135px);
  box-sizing:border-box;display:flex;align-items:center;
}
.home-hero__text{max-width:min(680px,58%);}
.home-hero__stack{display:grid;align-items:start;margin-bottom:28px;min-height:236px;}
.home-hero__tslide{grid-area:1/1;transition:opacity 1.1s ease;}
.home-hero__tslide h1{font-size:clamp(27px,3.4vw,42px);font-weight:800;line-height:1.18;color:#fff;margin:0 0 18px;}
.home-hero__tslide p{margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,.85);max-width:520px;}
.home-hero__cta{
  display:inline-flex;align-items:center;justify-content:center;border-radius:8px;background:#fff;
  padding:12px 24px;font-size:14px;font-weight:600;line-height:1.2;width:fit-content;color:#03428E;white-space:nowrap;text-decoration:none;
}
.home-hero__dots{margin-top:40px;display:flex;align-items:center;gap:10px;}
.home-hero__dot{width:8px;height:8px;border-radius:999px;border:1px solid rgba(255,255,255,.55);background:transparent;padding:0;cursor:pointer;transition:width .3s ease, background .3s ease, border-color .3s ease;}
.home-hero__dot[data-active="true"]{width:26px;background:#fff;border-color:rgba(255,255,255,.9);}
.home-hero .d-only{display:inline;}
.home-hero .m-only{display:none;}
@media (max-width:1023px) and (min-width:768px){
  .home-hero__text{max-width:min(600px,64%);}
  .home-hero__stack{min-height:244px;}
}
@media (max-width:767px){
  .home-hero{flex-direction:row;min-height:500px;}
  .home-hero__content{padding:104px 24px 40px;align-items:flex-start;}
  .home-hero__text{max-width:62%;}
  .home-hero__cta{white-space:normal;max-width:100%;padding:12px 18px;text-align:center;}
  .home-hero__stack{min-height:172px;}
  .home-hero__scrim{display:block;background:linear-gradient(90deg, rgba(3,66,142,.94) 0%, rgba(3,66,142,.93) 46%, rgba(3,66,142,.9) 62%, rgba(3,66,142,.42) 82%, rgba(3,66,142,.18) 100%);}
  .home-hero__bg{background:#03428E;}
  .home-hero__slide img{object-fit:cover;object-position:26% center;}
  .home-hero__slide picture img{object-position:left center;}
  .home-hero__tslide h1{font-size:18px;line-height:1.26;}
  .home-hero__tslide p{font-size:14px;line-height:1.6;}
  .home-hero .m-only{display:inline;}
  .home-hero .d-only{display:none;}
}
`;
