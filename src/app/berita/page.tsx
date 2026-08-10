import type { Metadata } from "next";
import BeritaHeader from "@/components/berita/BeritaHeader";
import BeritaSorotan from "@/components/berita/BeritaSorotan";
import BeritaFeed from "@/components/berita/BeritaFeed";
import BeritaVideo from "@/components/berita/BeritaVideo";
import BeritaClosingCta from "@/components/berita/BeritaClosingCta";

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

        Divider tri-warna hanya di 1 titik bookend pre-footer (di dalam
        BeritaClosingCta). Halaman ini tidak punya Hero band biru di atas, jadi
        tidak ada bookend tri-warna atas. Sambungan antar-section tengah murni
        whitespace. Pemisah CTA -> Footer: hairline putih 2px di dalam
        BeritaClosingCta (konvensi CTA pilar), di atas border built-in Footer.
      */}
      <BeritaHeader />
      <BeritaSorotan />
      <BeritaFeed />
      <BeritaVideo />
      <BeritaClosingCta />
    </main>
  );
}
