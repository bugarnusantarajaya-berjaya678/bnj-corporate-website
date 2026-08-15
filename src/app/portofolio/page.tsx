import type { Metadata } from "next";
import Hero from "@/components/portofolio/Hero";
import IntroBanner from "@/components/portofolio/IntroBanner";
import FilterContent from "@/components/portofolio/FilterContent";
import CompanyProfile from "@/components/portofolio/CompanyProfile";
import VideoTerbaru from "@/components/portofolio/VideoTerbaru";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Portofolio & Klien | CV Bugar Nusantara Jaya",
  description:
    "Rekam jejak dokumentasi lima ekosistem bisnis BNJ: Essential Fitness Management, BNJ Digital Labs, Brand Incubation, BNJ Investment Ventures, dan ECA Aspire.",
};

// /portofolio — halaman hub (tier Flagship, sama seperti Home/Tentang
// Kami/Berita) sehingga CTA penutup WAJIB reuse ClosingCta bersama, bukan
// implementasi lokal (lihat CLAUDE.md "CTA Flagship tier"). Halaman ini
// tidak pakai Page Header §0 terpisah — Hero "Rekam Jejak BNJ" langsung
// berperan sebagai H1 utama.
export default function PortofolioPage() {
  return (
    <main>
      <Hero />
      <IntroBanner />
      <FilterContent />
      <CompanyProfile />
      <VideoTerbaru />
      <ClosingCta />
    </main>
  );
}
