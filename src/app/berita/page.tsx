import type { Metadata } from "next";
import BeritaHeader from "@/components/berita/BeritaHeader";
import BeritaSorotan from "@/components/berita/BeritaSorotan";
import BeritaFeed from "@/components/berita/BeritaFeed";
import BeritaVideo from "@/components/berita/BeritaVideo";

export const metadata: Metadata = {
  title: "Berita & Update BNJ | CV Bugar Nusantara Jaya",
  description:
    "Perkembangan terbaru dari seluruh unit bisnis BNJ: Essential Fitness Management, BNJ Digital Labs, ECA Aspire, dan BNJ Investment Ventures.",
};

export default function BeritaPage() {
  return (
    <main>
      {/*
        Preconnect ke domain YouTube — persiapan performa untuk facade embed
        video (iframe menyusul saat data video asli tersedia). Next.js meng-hoist
        <link> ini ke <head>.
      */}
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://i.ytimg.com" />

      {/*
        Navbar solid putih dari awal: Navbar global hanya transparan/overlay di
        "/" dan "/tentang-kami", jadi /berita otomatis dapat navbar putih solid.
      */}
      <BeritaHeader />
      <BeritaSorotan />
      <BeritaFeed />
      <BeritaVideo />
    </main>
  );
}
