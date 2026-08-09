"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const pillars = [
  {
    href: "/ekosistem-bisnis/efm",
    img: "/images/Page-Home/Home-Ekosistem-EFM.png",
    pos: "50% 45%",
    label: "EFM",
    title: "Essential Fitness Management",
    desc: "Fitness, wellness & fasilitas olahraga sejak 2017.",
    alt: "Essential Fitness Management",
  },
  {
    href: "/ekosistem-bisnis/digital-labs",
    img: "/images/Page-Home/Home-Ekosistem-Digital-Labs.png",
    pos: "68% 50%",
    label: "DIGITAL LABS",
    title: "BNJ Digital Labs",
    desc: "Produk digital untuk layanan kesehatan & rehabilitasi.",
    alt: "BNJ Digital Labs",
  },
  {
    href: "/ekosistem-bisnis/brand-incubation",
    img: "/images/Page-Home/Home-Ekosistem-Bisnis-Brand-Incubation.png",
    pos: "66% 50%",
    label: "BRAND INCUBATION",
    title: "Brand Incubation & Business Acceleration",
    desc: "Brand digital & akselerasi bisnis kebugaran.",
    alt: "Brand Incubation & Business Acceleration",
  },
  {
    href: "/ekosistem-bisnis/educational-alliance",
    img: "/images/Page-Home/Home-Ekosistem-Bisnis-Educational.png",
    pos: "center 25%",
    label: "STRATEGIC ALLIANCE",
    title: "Strategic Educational Alliance",
    desc: "Kemitraan pendidikan & ekosistem expert multi-disiplin.",
    alt: "Strategic Educational Alliance",
  },
  {
    href: "/ekosistem-bisnis/investment-ventures",
    img: "/images/Page-Home/Home-Ekosistem-Bisnis-Investment.png",
    pos: "58% 50%",
    label: "INVESTMENT VENTURES",
    title: "BNJ Investment Ventures",
    desc: "Alokasi modal & ekspansi bisnis wellness dan olahraga.",
    alt: "BNJ Investment Ventures",
  },
];

export default function Pillars() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const i =
      max <= 0
        ? 0
        : Math.round((track.scrollLeft / max) * (pillars.length - 1));
    setActive(i);
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    let t: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (t) return;
      t = setTimeout(() => {
        t = null;
        sync();
      }, 90);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      if (t) clearTimeout(t);
    };
  }, [sync]);

  const step = () => {
    const track = trackRef.current;
    if (!track) return 320;
    const card = track.querySelector<HTMLElement>("[data-pil-card]");
    return card ? card.getBoundingClientRect().width + 24 : 320;
  };

  const scrollByStep = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
  };

  const goToDot = (n: number) => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    track.scrollTo({
      left: (n / (pillars.length - 1)) * max,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="pilar-bisnis"
      className="w-full bg-white px-6 py-[var(--section-py)] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="m-0 text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Ekosistem Bisnis
          </p>
          <h2 className="mt-4 text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            5 Ekosistem Bisnis Saling Terintegrasi
          </h2>
          <p className="mt-4 text-[clamp(15px,1.2vw,16px)] leading-relaxed text-neutral-600">
            Setiap pilar bisnis BNJ dibangun untuk saling mendukung, menciptakan
            ekosistem yang berkelanjutan dari operasional, talenta, hingga
            investasi.
          </p>
        </div>

        <div className="eco-carousel relative mt-10 flex items-center gap-[clamp(12px,1.6vw,20px)]">
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={() => scrollByStep(-1)}
            className="eco-prev hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#03428E] transition-opacity duration-300 md:flex"
            style={{ opacity: atStart ? 0.35 : 1 }}
          >
            <ChevronLeft className="h-[18px] w-[18px] text-white" />
          </button>

          <div
            ref={trackRef}
            className="eco-track flex min-w-0 flex-1 gap-6 overflow-x-auto scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:none] pb-1"
          >
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                data-pil-card
                className="eco-card group relative block aspect-[4/3] overflow-hidden rounded-[14px] bg-neutral-100 no-underline [scroll-snap-align:start]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: p.pos }}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(3,52,112,0)_0%,rgba(3,52,112,.62)_45%,rgba(3,52,112,.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-[clamp(16px,1.8vw,22px)]">
                  <div className="min-w-0">
                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
                      {p.label}
                    </p>
                    <h3 className="mt-1.5 text-[clamp(17px,1.5vw,20px)] font-bold leading-[1.25] text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 truncate text-[13px] leading-[1.4] text-white/85">
                      {p.desc}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                    <ArrowRight className="h-4 w-4 text-[#03428E]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Berikutnya"
            onClick={() => scrollByStep(1)}
            className="eco-next hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#03428E] transition-opacity duration-300 md:flex"
            style={{ opacity: atEnd ? 0.35 : 1 }}
          >
            <ChevronRight className="h-[18px] w-[18px] text-white" />
          </button>
        </div>

        {/* Navigasi panah bawah (mobile <768px) — di bawah card, sejajar horizontal.
            Swipe gesture native (track overflow-x scroll-snap) tetap jadi navigasi utama. */}
        <div className="mt-5 flex items-center justify-center gap-6 md:hidden">
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={() => scrollByStep(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#03428E] transition-opacity duration-300"
            style={{ opacity: atStart ? 0.35 : 1 }}
          >
            <ChevronLeft className="h-[18px] w-[18px] text-white" />
          </button>
          <button
            type="button"
            aria-label="Berikutnya"
            onClick={() => scrollByStep(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#03428E] transition-opacity duration-300"
            style={{ opacity: atEnd ? 0.35 : 1 }}
          >
            <ChevronRight className="h-[18px] w-[18px] text-white" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {pillars.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => goToDot(i)}
              className="h-2 rounded-full p-0 transition-all duration-300"
              style={
                i === active
                  ? { width: 26, background: "#03428E", border: 0 }
                  : {
                      width: 8,
                      background: "transparent",
                      border: "1px solid #c4c9d0",
                    }
              }
            />
          ))}
        </div>
      </div>

      <style>{`
        .eco-track::-webkit-scrollbar{display:none;}
        .eco-card{flex:0 0 calc((100% - 24px) / 2.35);}
        @media (max-width:900px){.eco-card{flex:0 0 calc((100% - 24px) / 1.4);}}
        @media (max-width:640px){
          .eco-carousel{gap:0;}
          .eco-card{flex:0 0 100%;}
        }
      `}</style>
    </section>
  );
}
