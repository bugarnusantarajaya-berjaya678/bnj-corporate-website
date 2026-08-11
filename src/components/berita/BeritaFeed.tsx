"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal";
import ArticleCard from "./ArticleCard";
import EmptyCategoryState from "./EmptyCategoryState";
import {
  ARTICLES,
  CATEGORIES,
  PAGE_SIZE,
  SLUG_TO_CATEGORY,
  type Category,
} from "./data";

// FILTER TAB + DAFTAR ARTIKEL — filter kategori client-side (tanpa reload),
// daftar kartu HORIZONTAL (thumbnail kiri + teks kanan), tombol "Muat Lebih
// Banyak" untuk menambah PAGE_SIZE artikel berikutnya.
//
// Preselect kategori dari query param ?kategori=<slug> (dipakai breadcrumb
// kategori di Detail Artikel untuk balik ke index dengan tab kategori aktif).
// Komponen ini memakai useSearchParams -> parent (page.tsx) membungkusnya
// dalam <Suspense>.
export default function BeritaFeed() {
  const searchParams = useSearchParams();
  const initialCategory: Category =
    SLUG_TO_CATEGORY[searchParams.get("kategori") ?? ""] ?? "Semua";

  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      activeCategory === "Semua"
        ? ARTICLES
        : ARTICLES.filter((a) => a.category === activeCategory),
    [activeCategory],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visible.length < filtered.length;

  const selectCategory = (cat: Category) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="w-full bg-white pb-[clamp(64px,8vw,110px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Tab kategori — aktif solid Corporate Blue, lainnya outline.
            Di mobile baris ini bisa di-scroll horizontal (tidak wrap). */}
        <div className="mb-7 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                aria-pressed={active}
                className={`shrink-0 whitespace-nowrap rounded-full px-[18px] py-[9px] text-[13px] font-semibold transition-colors duration-200 ${
                  active
                    ? "border border-[#03428E] bg-[#03428E] text-white"
                    : "border border-[#d4d4d4] bg-white text-[#525252] hover:border-[#03428E] hover:text-[#03428E]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tab kategori tanpa artikel (fase dummy, mis. Brand Incubation) ->
            empty-state FLAT (bukan §11 Coming Soon blur/lock). */}
        {filtered.length === 0 ? (
          <EmptyCategoryState message="Dokumentasi Brand Incubation sedang dibangun." />
        ) : (
          <>
            {/* Daftar artikel vertikal — kartu horizontal bersama (ArticleCard),
                border tipis atas per kartu, tanpa shadow. Setiap kartu clickable
                ke halaman detail /berita/[slug]. */}
            <div className="flex flex-col">
              {visible.map((art) => (
                <ArticleCard
                  key={art.id}
                  href={`/berita/${art.slug}`}
                  img={art.img}
                  category={art.category}
                  title={art.title}
                  date={art.date}
                />
              ))}
              {/* Garis penutup daftar (border bawah kartu terakhir) */}
              <div className="border-t border-[#e5e5e5]" />
            </div>
          </>
        )}

        {hasMore && (
          <Reveal className="mt-7 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-lg border border-[#d4d4d4] bg-white px-7 py-3 text-sm font-semibold text-[#171717] transition-colors duration-200 hover:border-[#03428E] hover:text-[#03428E]"
            >
              Muat Lebih Banyak
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
