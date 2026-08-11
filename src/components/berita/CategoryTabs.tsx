"use client";

import { CATEGORIES, type Category } from "./data";

// FILTER TAB KATEGORI (presentational, bersama) — diekstrak dari BeritaFeed
// (index Berita) supaya markup + style tab identik saat direuse di section
// "Artikel Lainnya" halaman Detail. Logic filter tetap di masing-masing parent
// (BeritaFeed / ArticleLainnya) — komponen ini murni render tab + panggil
// onSelect, TIDAK menyimpan state sendiri.
export default function CategoryTabs({
  active,
  onSelect,
}: {
  active: Category;
  onSelect: (cat: Category) => void;
}) {
  return (
    <div className="mb-7 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            aria-pressed={isActive}
            className={`shrink-0 whitespace-nowrap rounded-full px-[18px] py-[9px] text-[13px] font-semibold transition-colors duration-200 ${
              isActive
                ? "border border-[#03428E] bg-[#03428E] text-white"
                : "border border-[#d4d4d4] bg-white text-[#525252] hover:border-[#03428E] hover:text-[#03428E]"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
