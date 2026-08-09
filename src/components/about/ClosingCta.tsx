import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] pb-[var(--section-gap-y)] pt-[clamp(6rem,11vw,9.375rem)]">
      <svg
        aria-hidden
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[-1px] z-[4] block h-14 w-full sm:h-20 lg:h-[104px]"
      >
        <defs>
          <linearGradient id="tkCtaCutLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#03428E" />
            <stop offset="50%" stopColor="#6AA84F" />
            <stop offset="100%" stopColor="#0095DA" />
          </linearGradient>
        </defs>
        <path d="M0,66 C 300,116 1080,38 1440,90 L1440,0 L0,0 Z" fill="#fff" />
        <path
          d="M0,66 C 300,116 1080,38 1440,90"
          fill="none"
          stroke="url(#tkCtaCutLine)"
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <div className="max-w-xl border-l-[5px] border-[#6AA84F] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#9FC9E8]">
              Mari Berkolaborasi
            </p>
            <h2 className="mt-3.5 text-[26px] font-bold leading-[1.2] text-white md:text-[36px]">
              Siap Membangun Pertumbuhan Bersama BNJ?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              Hubungi tim kami untuk mendiskusikan peluang kemitraan
              operasional, pendidikan, maupun investasi bersama CV Bugar
              Nusantara Jaya.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-white/90"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/#pilar-bisnis"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Jelajahi Ekosistem Bisnis Kami
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[2px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_50%,rgba(255,255,255,0)_100%)]"
      />
    </section>
  );
}
