import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ClosingCta() {
  return (
    <section className="relative bg-[#03428E] py-14 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <div className="max-w-xl border-l-[5px] border-[#6AA84F] pl-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9FC9E8]">
              Mari Berkolaborasi
            </p>
            <h2 className="mt-3.5 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Siap Membangun Pertumbuhan Bersama BNJ?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Hubungi tim kami untuk mendiskusikan peluang kemitraan
              operasional, pendidikan, maupun investasi.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-white/90"
            >
              Hubungi Kami
            </Link>
            <a
              href="#pilar-bisnis"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Jelajahi Ekosistem Bisnis
            </a>
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
