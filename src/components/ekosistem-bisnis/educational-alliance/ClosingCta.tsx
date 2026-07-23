import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] py-14 sm:py-16 md:py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
      />
      <svg
        aria-hidden
        width="360"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        className="pointer-events-none absolute -bottom-24 -right-20 z-0"
      >
        <circle cx="180" cy="180" r="170" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="180" cy="180" r="120" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="180" cy="180" r="70" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <div className="max-w-xl border-l-[5px] border-[#6AA84F] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#9FC9E8]">
              Kemitraan Pendidikan
            </p>
            <h2 className="mt-3.5 text-[26px] font-bold leading-[1.3] text-white md:text-[30px]">
              Tertarik Berkolaborasi dengan Strategic Educational Alliance?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Hubungi tim kami untuk mendiskusikan peluang kemitraan
              pendidikan, baik di sektor olahraga dan kebugaran maupun bidang
              keahlian lainnya.
            </p>
            <p className="mt-2.5 text-xs leading-relaxed text-[#9FC9E8]/75">
              Mendukung ekosistem pendidikan yang berkelanjutan bersama
              institusi dan expert terpercaya.
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
              href="/portofolio"
              className="inline-flex items-center justify-center rounded-lg border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Lihat Program Kami
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
