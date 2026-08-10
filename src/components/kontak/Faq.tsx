"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "Apa itu CV Bugar Nusantara Jaya (BNJ)?",
    a: "Holding company & venture builder yang menaungi 5 unit bisnis terintegrasi di bidang fitness, wellness, sport, dan pendidikan - Essential Fitness Management, BNJ Digital Labs, Brand Incubation & Business Acceleration, Strategic Educational Alliance (ECA Aspire), dan BNJ Investment Ventures.",
  },
  {
    q: "Unit bisnis mana yang harus saya hubungi untuk kebutuhan saya?",
    a: "Essential Fitness Management untuk operasional fitness/wellness korporat, BNJ Digital Labs untuk kemitraan rumah sakit/klinik/produk digital, ECA Aspire untuk program ekstrakurikuler sekolah (basic dan advanced program, summer camp, field trip), BNJ Investment Ventures untuk peluang kemitraan usaha dan investasi.",
  },
  {
    q: "Bagaimana proses menjadi mitra BNJ?",
    a: "Mulai dari mengisi formulir kontak sesuai unit bisnis terkait, dilanjutkan diskusi awal dengan tim BNJ untuk memahami kebutuhan Anda, lalu penjajakan kerja sama lebih lanjut.",
  },
  {
    q: "Berapa lama waktu respons setelah mengirim pesan?",
    a: "Pesan yang masuk pada jam operasional (08.00-17.00, Senin-Sabtu) akan direspons maksimal 30 menit melalui email balasan, dilanjutkan kontak langsung dari admin atau PIC melalui WhatsApp di +62 811-1992-0666.",
  },
  {
    q: "Apakah BNJ menerima kemitraan atau investasi dari individu, atau hanya korporat?",
    a: "Mengikuti roadmap resmi BNJ, BNJ Investment Ventures Tahap 1 berjalan dengan investasi mandiri menggunakan modal BNJ sendiri, dilanjutkan Tahap 2 yang membuka skema konsorsium dan investor eksternal secara bertahap. Silakan hubungi tim kami untuk mendiskusikan peluang sesuai tahap yang berlaku.",
  },
  {
    q: "Apa saja layanan ECA Aspire, dan apakah resmi di bawah BNJ?",
    a: "ECA Aspire adalah program kemitraan strategis antara BNJ dan SKN, menghadirkan ekosistem ekstrakurikuler sekolah yang lengkap: ECA School Basic Program (beragam pilihan program pengembangan bakat dan karakter siswa), ECA School Advanced Program (pembinaan intensif untuk kompetisi dan performa), Summer Camp, dan Field Trip. BNJ berperan aktif di setiap lini operasional ECA Aspire, mulai dari sistem manajemen, pengembangan SDM dan tim, pengembangan program dan layanan jasa, hingga strategi marketing.",
  },
  {
    q: "Bagaimana cara bermitra dengan BNJ Digital Labs untuk expert atau institusi?",
    a: 'Terbuka untuk kemitraan individu (dokter, terapis, psikolog) maupun institusi (rumah sakit, klinik, korporat kesehatan) yang ingin bergabung dalam jaringan expert atau kolaborasi layanan digital BNJ. Silakan hubungi kami melalui formulir kontak dengan memilih tujuan "BNJ Digital Labs" untuk memulai diskusi awal.',
  },
  {
    q: "Bagaimana cara mendaftar atau mendapat layanan EFM untuk perusahaan saya?",
    a: 'Hubungi langsung melalui email essentialfitnessmanagement@gmail.com atau tombol "Kirim Pesan ke EFM" di atas.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="w-full bg-white px-6 py-[var(--section-py)] lg:px-12">
      <div className="mx-auto max-w-[800px]">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#03428E]">
          FAQ
        </p>
        <h2 className="mb-8 mt-4 text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-[#171717]">
          Pertanyaan yang Sering Diajukan
        </h2>

        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.q} className="border-t border-[#e5e5e5]">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
              >
                <span
                  className={`text-[15px] font-bold ${
                    open ? "text-[#03428E]" : "text-[#171717]"
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-[18px] w-[18px] shrink-0 text-[#03428E] transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  strokeWidth={2}
                />
              </button>
              {open ? (
                <p className="mb-5 mt-0 text-sm leading-[1.65] text-[#525252]">
                  {faq.a}
                </p>
              ) : null}
            </div>
          );
        })}
        <div className="border-t border-[#e5e5e5]" />
      </div>
    </section>
  );
}
