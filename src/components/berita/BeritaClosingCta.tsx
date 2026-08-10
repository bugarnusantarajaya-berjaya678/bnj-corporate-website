import Link from "next/link";
import Reveal from "@/components/Reveal";

// CTA PENUTUP (pillar tier) — background solid Corporate Blue.
// Bookend pre-footer: garis tri-warna 3px di ATAS section (transisi putih -> biru),
// satu-satunya divider tri-warna di tengah/bawah halaman ini (§Divider bookend).
// Dekorasi: 4 lingkaran konsentris putih opacity 8% di pojok kanan-bawah.
// Pemisah CTA -> Footer (hairline putih) TIDAK ditambahkan manual di sini —
// sudah built-in di komponen Footer (border-top white/[0.12]) per §9, supaya
// tidak dobel.
export default function BeritaClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] py-[clamp(64px,8vw,96px)]">
      {/* Bookend tri-warna pre-footer (putih -> biru) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
      />

      {/* 4 lingkaran konsentris dekoratif, opacity 8% */}
      <svg
        width="360"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 z-0"
      >
        <circle cx="180" cy="180" r="170" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="180" cy="180" r="128" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="180" cy="180" r="86" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="180" cy="180" r="44" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <div className="max-w-xl border-l-[5px] border-[#6AA84F] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#9FC9E8]">
              Mari Berkolaborasi
            </p>
            <h2 className="mt-3.5 text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] text-white">
              Siap Membangun Pertumbuhan Bersama BNJ?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">
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
    </section>
  );
}
