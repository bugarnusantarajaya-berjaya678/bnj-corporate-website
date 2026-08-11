import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/berita/Breadcrumb";

// PAGE HEADER (§0) halaman /berita/video — background putih polos, tanpa Hero
// foto. Eyebrow "INSIDE BNJ" memakai token bersama .bnj-eyebrow (font-semibold/600,
// uppercase, tracking 0.05em, Corporate Blue) — bukan restyle manual.
//
// Skala H1 STANDAR (BNJ_Typography_Standard.md: clamp(27px,3.4vw,42px) Bold 700),
// bukan 44px/800 di reference mentah — deviasi disengaja agar konsisten dengan
// BeritaHeader/Detail Artikel yang sudah diselaraskan ke skala 0.9x.
//
// pt disamakan dengan BeritaHeader (clamp(56px,7vw,96px)) supaya jarak
// Navbar -> Page Header konsisten dengan halaman Berita/Kontak (tidak terjepit
// dekat Navbar). Navbar global otomatis solid putih di route ini (hanya "/" &
// "/tentang-kami" yang overlay transparan).
export default function VideoHeader() {
  return (
    <section className="w-full bg-white pt-[clamp(56px,7vw,96px)] pb-[clamp(32px,4vw,40px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          {/* Breadcrumb (di bawah Navbar, di atas Page Header) — komponen bersama,
              sejajar pola Detail Artikel. "Video" = current page, tidak clickable. */}
          <Breadcrumb
            items={[{ label: "Berita", href: "/berita" }, { label: "Video" }]}
          />
          <p className="bnj-eyebrow mt-5">Inside BNJ</p>
          <h1 className="mt-4 text-[clamp(27px,3.4vw,42px)] font-bold leading-[1.15] tracking-[-0.01em] text-[#171717]">
            Video BNJ
          </h1>
          <p className="mt-4 max-w-[560px] text-base leading-[1.65] text-[#525252]">
            Dokumentasi dan cerita di balik layar dari seluruh unit bisnis BNJ.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
