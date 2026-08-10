"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ARTICLES, CATEGORIES, PAGE_SIZE, type Category } from "./data";

// FILTER TAB + DAFTAR ARTIKEL — filter kategori client-side (tanpa reload),
// daftar kartu HORIZONTAL (thumbnail kiri + teks kanan), tombol "Muat Lebih
// Banyak" untuk menambah PAGE_SIZE artikel berikutnya.
export default function BeritaFeed() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");
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

        {/* Daftar artikel vertikal — kartu horizontal, border tipis atas per kartu, tanpa shadow */}
        <div className="flex flex-col">
          {visible.map((art) => (
            <a
              key={art.id}
              href="#"
              className="group flex items-center gap-5 border-t border-[#e5e5e5] py-[18px]"
            >
              {/* PLACEHOLDER SEMENTARA: ganti ke foto kategori sesuai saat foto final tersedia */}
              <span className="relative block h-[78px] w-[110px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={art.img}
                  alt={art.title}
                  fill
                  sizes="110px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#03428E]">
                  {art.category}
                </p>
                <h4 className="mt-1.5 text-base font-bold leading-[1.35] text-[#171717] transition-colors duration-200 group-hover:text-[#03428E]">
                  {art.title}
                </h4>
                <p className="mt-1.5 text-[13px] text-[#808080]">{art.date}</p>
              </div>
            </a>
          ))}
          {/* Garis penutup daftar (border bawah kartu terakhir) */}
          <div className="border-t border-[#e5e5e5]" />
        </div>

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
