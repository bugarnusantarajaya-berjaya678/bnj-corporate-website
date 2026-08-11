"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { Article } from "./data";

// SIDEBAR "ARTIKEL TERKAIT" — kolom kanan Detail Artikel (desktop/tablet), pindah
// ke bawah body saat mobile. Kartu TEXT-ONLY (tanpa thumbnail): pill kategori +
// headline + tanggal, dipisah hairline antar kartu. 5 kartu awal tampil natural
// (tanpa scroll). Sisanya di balik tombol "Muat Lebih Banyak".
//
// FIX SCROLL (pola VideoBrowser height-lock): saat expanded & total > CAP, list
// masuk container ber-tinggi TETAP (md:h-[540px]) dengan `md:absolute md:inset-0
// md:overflow-y-auto` -> scroll INTERNAL, tinggi sidebar TIDAK memanjang ke bawah
// tanpa batas. SENGAJA pakai absolute inset-0, BUKAN flex-1 (flex-1 terbukti
// menumbuhkan tinggi alih-alih scroll di VideoBrowser). Mobile: natural (page
// scroll), tanpa height-lock.
const CAP = 5;

export default function RelatedSidebar({ articles }: { articles: Article[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = articles.length > CAP;
  const shown = expanded ? articles : articles.slice(0, CAP);
  const locked = expanded && hasMore;

  return (
    <div>
      {/* Divider pemisah dari Referensi di atasnya — HANYA mobile (<768px).
          Desktop: sidebar absolute top-align dengan foto cover, tidak butuh
          divider. Style + spacing 1 bahasa dengan divider "Artikel Lainnya". */}
      <div className="mb-8 mt-[clamp(56px,8vw,80px)] border-t border-[#E5E7EB] md:hidden" />

      <h3 className="mb-4 text-[clamp(19px,2vw,22px)] font-bold text-[#171717]">
        Artikel Terkait
      </h3>

      <div className={locked ? "relative md:h-[540px]" : ""}>
        <div
          className={
            locked
              ? "md:absolute md:inset-0 md:overflow-y-auto md:pr-1.5 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar]:w-1.5"
              : ""
          }
        >
          <div className="flex flex-col">
            {shown.map((a) => (
              <Link
                key={a.id}
                href={`/berita/${a.slug}`}
                className="group block border-t border-neutral-200 py-4"
              >
                <span className="inline-flex items-center rounded-full bg-[#E6F1FB] px-2.5 py-1 text-[11px] font-semibold text-[#0C447C]">
                  {a.category}
                </span>
                <h4 className="mt-2 text-[15px] font-bold leading-[1.4] text-[#171717] transition-colors duration-200 group-hover:text-[#03428E]">
                  {a.title}
                </h4>
                <p className="mt-1.5 text-[12px] text-[#808080]">{a.date}</p>
              </Link>
            ))}
            {/* Garis penutup daftar */}
            <div className="border-t border-neutral-200" />
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
  );
}
