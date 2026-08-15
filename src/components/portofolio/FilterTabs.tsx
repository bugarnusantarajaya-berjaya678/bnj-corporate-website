import { CATEGORIES, type Category } from "./data";

// Baris tab filter — style pill identik dengan CategoryTabs.tsx (Berita)
// supaya konsisten lintas halaman: aktif solid Corporate Blue, non-aktif
// outline abu-abu. TUGAS 12: 6 tab total (2 tab baru Brand Incubation &
// BNJ Investment Ventures disisipkan lewat urutan CATEGORIES di data.ts).
export default function FilterTabs({
  active,
  onSelect,
}: {
  active: Category;
  onSelect: (cat: Category) => void;
}) {
  return (
    <div className="mx-auto max-w-[960px] md:pl-[60px]">
      <div className="mb-9 flex flex-nowrap gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden">
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
    </div>
  );
}
