import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ClosingCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#03428E] px-6 pb-[var(--section-py)] pt-[var(--section-py-emphasis)] lg:px-12">
      {/* Flagship bookend: mirrored wave (white -> blue), vertical mirror of Hero */}
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-1px] z-[4] block h-14 w-full sm:h-20 lg:h-[104px]"
      >
        <defs>
          <linearGradient id="homeCtaCutLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#03428E" />
            <stop offset="50%" stopColor="#6AA84F" />
            <stop offset="100%" stopColor="#0095DA" />
          </linearGradient>
        </defs>
        <path d="M0,66 C 300,116 1080,38 1440,90 L1440,0 L0,0 Z" fill="#fff" />
        <path
          d="M0,66 C 300,116 1080,38 1440,90"
          fill="none"
          stroke="url(#homeCtaCutLine)"
          strokeWidth="5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        viewBox="0 0 400 400"
        width="520"
        height="520"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-1/2 z-0 -translate-y-1/2 opacity-[0.08]"
      >
        <circle cx="200" cy="200" r="199" />
        <circle cx="200" cy="200" r="158" />
        <circle cx="200" cy="200" r="117" />
        <circle cx="200" cy="200" r="76" />
      </svg>

      <div className="relative z-[1] mx-auto max-w-7xl">
        <Reveal>
          <p className="m-0 text-xs font-medium uppercase tracking-[0.2em] text-[#9FC9E8]">
            Mari Berkolaborasi
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-[560px]">
              <h2 className="m-0 text-[clamp(22px,2.3vw,27px)] font-bold leading-[1.3] text-white">
                Siap Membangun Pertumbuhan Bersama BNJ?
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/75">
                Hubungi tim kami untuk mendiskusikan peluang kemitraan
                operasional, pendidikan, maupun investasi.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/kontak"
                className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-lg bg-white px-7 py-3.5 text-sm font-semibold leading-[1.2] text-[#03428E] transition-colors duration-200 hover:bg-white/90"
              >
                Hubungi Kami
              </Link>
              <a
                href="#pilar-bisnis"
                className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-lg border border-white/40 px-[27px] py-[13px] text-sm font-semibold leading-[1.2] text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                Jelajahi Ekosistem Bisnis
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
