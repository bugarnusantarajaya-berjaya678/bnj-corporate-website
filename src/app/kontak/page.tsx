import type { Metadata } from "next";
import ContactHeader from "@/components/kontak/ContactHeader";
import UnitContactBlock from "@/components/kontak/UnitContactBlock";
import Faq from "@/components/kontak/Faq";

export const metadata: Metadata = {
  title: "Hubungi Kami | CV Bugar Nusantara Jaya",
  description:
    "Hubungi CV Bugar Nusantara Jaya. Pilih unit bisnis yang sesuai kebutuhan Anda (Essential Fitness Management, BNJ Digital Labs, ECA Aspire, BNJ Investment Ventures) atau kirim pesan langsung ke tim kami.",
};

export default function KontakPage() {
  return (
    <main>
      {/*
        Divider tri-warna HANYA di 1 titik: garis tipis pre-footer di bawah.
        Halaman Kontak tidak punya Hero band biru maupun CTA penutup biru,
        jadi tidak ada bookend lain yang berhak dapat tri-warna. Sambungan
        antar-section di tengah dibentuk murni dari whitespace (--section-py).
      */}
      <ContactHeader />
      <UnitContactBlock />
      <Faq />

      {/* Garis tipis tri-warna — satu-satunya di halaman ini, tepat sebelum Footer */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
      />
    </main>
  );
}
