"use client";

import { useState } from "react";
import FilterTabs from "./FilterTabs";
import SemuaMosaic from "./SemuaMosaic";
import EfmMosaic from "./EfmMosaic";
import EcaMosaic from "./EcaMosaic";
import ComingSoonSection from "./ComingSoonSection";
import TrustBar from "./TrustBar";
import PostinganTerbaru from "./PostinganTerbaru";
import type { Category } from "./data";

// Section "Filter Tab + Konten" — orkestrasi utama halaman /portofolio.
// Satu state activeCategory menentukan mosaic/empty-state mana yang
// tampil (TUGAS 3-6, 12); trust bar (TUGAS 7) & Postingan Terbaru
// (TUGAS 9) GLOBAL, sama di semua tab, tidak digated filter pilar.
export default function FilterContent() {
  const [active, setActive] = useState<Category>("Semua");

  return (
    <section className="w-full bg-white px-6 pb-[var(--section-py)] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <FilterTabs active={active} onSelect={setActive} />

        {(active === "Semua" || active === "Essential Fitness Management") &&
          (active === "Semua" ? <SemuaMosaic /> : <EfmMosaic />)}
        {active === "ECA Aspire" && <EcaMosaic />}
        {active === "BNJ Digital Labs" && (
          <ComingSoonSection tab="BNJ Digital Labs" />
        )}
        {active === "Brand Incubation" && (
          <ComingSoonSection tab="Brand Incubation" />
        )}
        {active === "BNJ Investment Ventures" && (
          <ComingSoonSection tab="BNJ Investment Ventures" />
        )}

        <TrustBar />
        <PostinganTerbaru />
      </div>
    </section>
  );
}
