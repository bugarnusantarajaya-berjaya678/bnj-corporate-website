import type { Metadata } from "next";
import { Suspense } from "react";
import BeritaHeader from "@/components/berita/BeritaHeader";
import BeritaSorotan from "@/components/berita/BeritaSorotan";
import BeritaFeed from "@/components/berita/BeritaFeed";
import BeritaVideo from "@/components/berita/BeritaVideo";
import ClosingCta from "@/components/ClosingCta";

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

        CTA penutup Berita mengikuti Flagship tier (keputusan final Bagoes):
        pakai komponen ClosingCta bersama yang sama persis dengan Home & Tentang
        Kami (wave bookend tri-warna putih -> biru + 4 lingkaran + hairline 2px).
        Halaman ini tidak punya Hero band biru di atas, jadi wave pre-footer itu
        satu-satunya bookend tri-warna. Sambungan antar-section tengah murni
        whitespace.
      */}
      <BeritaHeader />
      <BeritaSorotan />
      {/* BeritaFeed memakai useSearchParams (baca ?kategori=) -> butuh
          Suspense boundary agar build statis tidak error. */}
      <Suspense fallback={null}>
        <BeritaFeed />
      </Suspense>
      <BeritaVideo />
      <ClosingCta />
    </main>
  );
}
