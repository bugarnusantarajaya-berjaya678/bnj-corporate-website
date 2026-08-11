"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ArticleCard from "./ArticleCard";
import CategoryTabs from "./CategoryTabs";
import { ARTICLES, type Category } from "./data";

// SECTION "ARTIKEL LAINNYA" — full-width (bukan kolom baca sempit), di bawah
// tag artikel, sebelum ClosingCta. Struktur identik "Daftar Artikel" index:
// heading + filter tab (REUSE CategoryTabs) + list ArticleCard horizontal.
// Filter logic sama dengan index (client-side by category), EXCLUDE artikel
// yang sedang dibuka. Rata kiri ke container standar.
//
// CAP + AKORDION + SCROLL — pola SAMA dengan RelatedSidebar (yang reuse dari
// VideoBrowser): tampil 5 kartu; >5 -> tombol "Muat Lebih Banyak"/"Tampilkan
// Lebih Sedikit" (chevron rotate). Saat expanded list masuk container tinggi
// TETAP + `absolute inset-0 overflow-y-auto` (scroll internal, BUKAN flex-1).
// Beda dari sidebar: lock TIDAK diberi prefix `md:` -> berlaku di SEMUA
// breakpoint (parity desktop+mobile, syarat eksplisit). Tinggi > sidebar karena
// kartu di sini punya thumbnail (lebih tinggi per-baris): ~5 kartu per breakpoint.
const CAP = 5;

export default function ArticleLainnya({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const [active, setActive] = useState<Category>("Semua");
  const [expanded, setExpanded] = useState(false);

  const pool = ARTICLES.filter((a) => a.slug !== currentSlug);
  const filtered =
    active === "Semua" ? pool : pool.filter((a) => a.category === active);
  const hasMore = filtered.length > CAP;
  const shown = expanded ? filtered : filtered.slice(0, CAP);
  const locked = expanded && hasMore;

  // Ganti tab -> reset ke collapsed (jangan pertahankan expanded kategori lama:
  // mis. expanded 11 "Semua" lalu pindah "Digital Labs" 2 kartu harus collapsed).
  const selectCategory = (cat: Category) => {
    setActive(cat);
    setExpanded(false);
  };

  return (
    <section className="w-full bg-white pt-[clamp(32px,4vw,48px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h3 className="mb-5 text-[clamp(19px,2vw,22px)] font-bold text-[#171717]">
          Artikel Lainnya
        </h3>

        <CategoryTabs active={active} onSelect={selectCategory} />

        <div className={locked ? "relative h-[620px] md:h-[820px]" : ""}>
          <div
            className={
              locked
                ? "absolute inset-0 overflow-y-auto pr-1.5 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar]:w-1.5"
                : ""
            }
          >
            <div className="flex flex-col">
              {shown.map((a) => (
                <ArticleCard
                  key={a.id}
                  href={`/berita/${a.slug}`}
                  img={a.photos[0]}
                  category={a.category}
                  title={a.title}
                  date={a.date}
                />
              ))}
              {/* Garis penutup daftar */}
              <div className="border-t border-[#e5e5e5]" />
            </div>
          </div>
        </div>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#d4d4d4] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#171717] transition-colors duration-200 hover:border-[#03428E] hover:text-[#03428E]"
          >
            {expanded ? "Tampilkan Lebih Sedikit" : "Muat Lebih Banyak"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
              strokeWidth={2}
            />
          </button>
        )}
      </div>
    </section>
  );
}
