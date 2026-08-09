import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="tk-hero relative isolate overflow-hidden bg-[#03428E]">
      <style>{heroCss}</style>

      <div className="absolute inset-0 -z-10">
        <picture className="tk-hero__pic">
          <source
            media="(max-width:767px)"
            srcSet="/images/Page-Tentang-Kami/Tentang-Kami-Hero-Section-Mobile.jpg"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Page-Tentang-Kami/Tentang-Kami-Hero-Section.png"
            alt="Kantor CV Bugar Nusantara Jaya"
          />
        </picture>
        {/* Left-side directional scrim (like Home) — keeps the text side
            readable while the right portion of the photo stays untinted.
            Mobile gets a stronger blend so the full-bleed image reads as one
            object instead of two separate colour blocks. */}
        <div className="tk-hero__scrim" aria-hidden />
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[4] block h-14 w-full sm:h-20 lg:h-[104px]"
      >
        <defs>
          <linearGradient id="tkHeroCutLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#03428E" />
            <stop offset="50%" stopColor="#6AA84F" />
            <stop offset="100%" stopColor="#0095DA" />
          </linearGradient>
        </defs>
        <path d="M0,44 C 300,-6 1080,72 1440,20 L1440,110 L0,110 Z" fill="#fff" />
        <path
          d="M0,44 C 300,-6 1080,72 1440,20"
          fill="none"
          stroke="url(#tkHeroCutLine)"
          strokeWidth="5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-[2] mx-auto flex min-h-[480px] max-w-7xl items-center px-6 pb-24 pt-24 sm:min-h-[540px] sm:pb-28 sm:pt-28 lg:min-h-[580px] lg:px-12 lg:pb-32 lg:pt-32">
        <Reveal className="tk-hero__text max-w-xl">
          <h1 className="text-[clamp(27px,3.4vw,42px)] font-bold leading-[1.18] text-white">
            Holding Company yang Membangun Lima Unit Bisnis Melalui Satu
            Sistem
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/85">
            CV Bugar Nusantara Jaya mengoperasikan lima unit bisnis di sektor
            fitness, wellness, sport, dan edukasi melalui sistem operasional
            yang terstandardisasi, kemitraan yang selektif, dan tata kelola
            yang terukur.
          </p>

          <Link
            href="/kontak"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-white/90"
          >
            Hubungi Kami
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const heroCss = `
.tk-hero__pic{position:absolute;inset:0;display:block;width:100%;height:100%;}
.tk-hero__pic img{width:100%;height:100%;object-fit:cover;object-position:70% center;display:block;}
.tk-hero__scrim{position:absolute;inset:0;
  background:linear-gradient(100deg, rgba(3,66,142,0.92) 0%, rgba(3,66,142,0.8) 30%, rgba(3,66,142,0.42) 50%, rgba(3,66,142,0.08) 66%, rgba(3,66,142,0) 78%);}
@media (max-width:767px){
  .tk-hero__pic img{object-position:center;}
  .tk-hero__scrim{background:linear-gradient(90deg, rgba(3,66,142,.94) 0%, rgba(3,66,142,.93) 46%, rgba(3,66,142,.9) 62%, rgba(3,66,142,.42) 82%, rgba(3,66,142,.18) 100%);}
  .tk-hero__text{max-width:75%;}
}
`;
