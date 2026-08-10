import Reveal from "@/components/Reveal";

// HEADER halaman /berita — background putih polos, skala H1 STANDAR
// (BNJ_Typography_Standard.md: H1 clamp(27px,3.4vw,42px) Bold), bukan skala
// komposisi Hero (tanpa foto full-bleed di atas).
export default function BeritaHeader() {
  return (
    <section className="w-full bg-white pt-[clamp(56px,7vw,96px)] pb-[clamp(40px,5vw,56px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#03428E]">
            Berita
          </p>
          <h1 className="mt-4 text-[clamp(27px,3.4vw,42px)] font-bold leading-[1.15] tracking-[-0.01em] text-[#171717]">
            Berita &amp; Update BNJ
          </h1>
          <p className="mt-4 max-w-[560px] text-base leading-[1.65] text-[#525252]">
            Perkembangan terbaru dari seluruh unit bisnis BNJ.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
