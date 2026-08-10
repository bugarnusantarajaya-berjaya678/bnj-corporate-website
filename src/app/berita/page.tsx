import type { Metadata } from "next";
import BeritaHeader from "@/components/berita/BeritaHeader";
import BeritaSorotan from "@/components/berita/BeritaSorotan";
import BeritaFeed from "@/components/berita/BeritaFeed";

export const metadata: Metadata = {
  title: "Berita & Update BNJ | CV Bugar Nusantara Jaya",
  description:
    "Perkembangan terbaru dari seluruh unit bisnis BNJ: Essential Fitness Management, BNJ Digital Labs, ECA Aspire, dan BNJ Investment Ventures.",
};

export default function BeritaPage() {
  return (
    <main>
      {/*
        Navbar solid putih dari awal: Navbar global hanya transparan/overlay di
        "/" dan "/tentang-kami", jadi /berita otomatis dapat navbar putih solid.
      */}
      <BeritaHeader />
      <BeritaSorotan />
      <BeritaFeed />
    </main>
  );
}
