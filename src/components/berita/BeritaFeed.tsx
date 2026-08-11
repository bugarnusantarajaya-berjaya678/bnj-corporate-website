"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import ArticleCard from "./ArticleCard";
import CategoryTabs from "./CategoryTabs";
import EmptyCategoryState from "./EmptyCategoryState";
import { ARTICLES, SLUG_TO_CATEGORY, type Category } from "./data";

// FILTER TAB + DAFTAR ARTIKEL (index /berita) — filter kategori client-side.
// Heading "Artikel" (style sama dengan heading "Video" di Section Video) +
// list kartu horizontal (ArticleCard).
//
// CAP + AKORDION + SCROLL — pola SAMA PERSIS dengan ArticleLainnya.tsx: tampil 5
// kartu; >5 -> tombol "Muat Lebih Banyak"/"Tampilkan Lebih Sedikit" (chevron
// rotate). Expanded -> list masuk container tinggi TETAP (620px mobile / 820px
// desktop) + `absolute inset-0 overflow-y-auto` (scroll internal, BUKAN flex-1),
// TANPA prefix md: (parity mobile+desktop). Ganti tab -> reset ke collapsed.
//
// Preselect kategori dari query param ?kategori=<slug> (breadcrumb Detail
// Artikel). Memakai useSearchParams -> parent (page.tsx) membungkus <Suspense>.
const CAP = 5;

export default function BeritaFeed() {
  const searchParams = useSearchParams();
  const initialCategory: Category =
    SLUG_TO_CATEGORY[searchParams.get("kategori") ?? ""] ?? "Semua";

  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () =>
      activeCategory === "Semua"
        ? ARTICLES
        : ARTICLES.filter((a) => a.category === activeCategory),
    [activeCategory],
  );

  const hasMore = filtered.length > CAP;
  const shown = expanded ? filtered : filtered.slice(0, CAP);
  const locked = expanded && hasMore;

  // Ganti tab -> reset ke collapsed (jangan pertahankan expanded kategori lama).
  const selectCategory = (cat: Category) => {
    setActiveCategory(cat);
    setExpanded(false);
  };

  return (
    <section className="w-full bg-white pb-[clamp(64px,8vw,110px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Tab kategori — komponen bersama CategoryTabs. Logic filter di sini. */}
        <CategoryTabs active={activeCategory} onSelect={selectCategory} />

        {/* Heading "Artikel" — style identik heading "Video" (Section Video). */}
        <h3 className="mb-6 text-[clamp(20px,2.2vw,24px)] font-bold text-[#171717]">
          Artikel
        </h3>

        {/* Tab kategori tanpa artikel (fase dummy, mis. Brand Incubation) ->
            empty-state FLAT (bukan §11 Coming Soon blur/lock). */}
        {filtered.length === 0 ? (
          <EmptyCategoryState message="Dokumentasi Brand Incubation sedang dibangun." />
        ) : (
          <>
            <div className={locked ? "relative h-[620px] md:h-[820px]" : ""}>
              <div
                className={
                  locked
                    ? "absolute inset-0 overflow-y-auto pr-1.5 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar]:w-1.5"
                    : ""
                }
              >
                {/* Daftar artikel — kartu horizontal bersama (ArticleCard). */}
                <div className="flex flex-col">
                  {shown.map((art) => (
                    <ArticleCard
                      key={art.id}
                      href={`/berita/${art.slug}`}
                      img={art.photos[0]}
                      category={art.category}
                      title={art.title}
                      date={art.date}
                    />
                  ))}
                  {/* Garis penutup daftar (border bawah kartu terakhir) */}
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
          </>
        )}
      </div>
    </section>
  );
}
