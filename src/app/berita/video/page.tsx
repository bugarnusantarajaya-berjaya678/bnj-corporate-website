import type { Metadata } from "next";
import VideoHeader from "@/components/berita/video/VideoHeader";
import VideoBrowser from "@/components/berita/video/VideoBrowser";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Video BNJ | CV Bugar Nusantara Jaya",
  description:
    "Dokumentasi dan cerita di balik layar dari seluruh unit bisnis BNJ: Essential Fitness Management, BNJ Digital Labs, ECA Aspire, dan BNJ Investment Ventures.",
};

export default function VideoPage() {
  return (
    <main>
      {/*
        Preconnect ke domain YouTube — persiapan performa untuk facade embed
        video (iframe player baru dimuat saat thumbnail diklik, dan thumbnail
        asli nanti auto-fetch dari i.ytimg.com). Next.js meng-hoist <link> ke <head>.
      */}
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://i.ytimg.com" />

      {/*
        Navbar solid putih dari awal (route ini bukan "/" / "/tentang-kami", jadi
        Navbar global otomatis solid).

        CTA penutup Flagship tier: reuse komponen bersama ClosingCta.tsx (sama
        persis Home / Tentang Kami / Berita) — wave bookend tri-warna putih->biru
        + 4 lingkaran + hairline 2px pemisah ke Footer sudah built-in di komponen.
        JANGAN tambah divider garis lurus manual di sini (itu pola pillar tier,
        akan dobel dengan wave). Footer di-render global dari layout.tsx.
      */}
      <VideoHeader />
      <VideoBrowser />
      <ClosingCta />
    </main>
  );
}
