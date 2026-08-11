import type { Metadata } from "next";
import VideoHeader from "@/components/berita/video/VideoHeader";

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
        Navbar global otomatis solid). CTA penutup + Footer disambung di bagian
        berikutnya (reuse komponen bersama Flagship tier).
      */}
      <VideoHeader />
    </main>
  );
}
