"use client";

import { useState } from "react";
import Image from "next/image";

// BROWSER VIDEO (client) — Filter kategori + Player kiri + Sidebar kanan.
// Data DUMMY statis di komponen (fase dummy). Backend "Kelola Video" menyusul
// terpisah: begitu tersedia, ganti VIDEOS ke fetch dari database + isi youtubeId,
// tanpa mengubah struktur UI ini.
//
// FOTO PLACEHOLDER SEMENTARA: semua thumbnail memakai bnj-photo-1..8.webp (foto
// generik, satu-satunya set foto tersedia di project ini saat fase dummy — ada
// di folder glance/ Tentang Kami). Thumbnail asli nanti AUTO-FETCH dari
// i.ytimg.com berdasarkan youtubeId yang diinput admin di backend Kelola Video.

const CATEGORIES = [
  "Semua",
  "Essential Fitness Management",
  "BNJ Digital Labs",
  "ECA Aspire",
  "BNJ Investment Ventures",
] as const;

type Filter = (typeof CATEGORIES)[number];
type VideoCategory = Exclude<Filter, "Semua">;

type PageVideo = {
  id: string;
  title: string;
  category: VideoCategory;
  time: string;
  duration: string;
  img: string;
  description: string;
  // youtubeId null selama fase dummy. Saat null, klik play menampilkan
  // placeholder (bukan iframe). Saat terisi dari backend, klik play menukar
  // thumbnail dengan <iframe> YouTube sungguhan (allowfullscreen aktif).
  youtubeId: string | null;
};

// bnj-photo-1..8.webp adanya di folder glance (Tentang Kami).
const photo = (n: number) =>
  `/images/Page-Tentang-Kami/glance/bnj-photo-${n}.webp`;

// Cap 5 video di sidebar sebelum tombol "Muat Lebih Banyak" (berlaku ulang
// tiap ganti kategori — jumlah video per kategori beda-beda).
const SIDEBAR_CAP = 5;

// 8 video dummy. "Semua" (8) > 5 -> memicu tombol "Muat Lebih Banyak" +
// scroll internal saat expand. Kategori lain <= 5 (tanpa tombol).
const VIDEOS: PageVideo[] = [
  {
    id: "v1",
    title: "Di Balik Standar Layanan EFM Sejak 2017",
    category: "Essential Fitness Management",
    time: "4 jam yang lalu",
    duration: "15:29",
    img: photo(3),
    description:
      "Cerita di balik konsistensi layanan personal training dan wellness korporat EFM selama hampir satu dekade.",
    youtubeId: null,
  },
  {
    id: "v2",
    title: "Proses Kemitraan ECA Aspire x Sampoerna Academy",
    category: "ECA Aspire",
    time: "1 hari yang lalu",
    duration: "09:47",
    img: photo(4),
    description:
      "Tim ECA Aspire membahas perjalanan membangun kemitraan strategis dengan Sampoerna Academy.",
    youtubeId: null,
  },
  {
    id: "v3",
    title: "Roadmap Investasi BNJ Menuju Tahap 2",
    category: "BNJ Investment Ventures",
    time: "3 hari yang lalu",
    duration: "12:03",
    img: photo(5),
    description:
      "Ringkasan arah konsorsium investasi BNJ pada tahap kedua ekspansi ekosistem bisnis.",
    youtubeId: null,
  },
  {
    id: "v4",
    title: "Fitur Booking Konsultasi Online di BNJ Digital Labs",
    category: "BNJ Digital Labs",
    time: "5 hari yang lalu",
    duration: "07:14",
    img: photo(6),
    description:
      "Demo singkat fitur booking sesi konsultasi online terbaru dari BNJ Digital Labs.",
    youtubeId: null,
  },
  {
    id: "v5",
    title: "Testimoni Klien Korporat Program Wellness EFM",
    category: "Essential Fitness Management",
    time: "1 minggu yang lalu",
    duration: "11:52",
    img: photo(7),
    description:
      "Klien korporat berbagi pengalaman menjalankan program wellness bersama tim EFM.",
    youtubeId: null,
  },
  {
    id: "v6",
    title: "Perayaan Tiga Tahun CV Bugar Nusantara Jaya Berbadan Hukum",
    category: "BNJ Investment Ventures",
    time: "2 minggu yang lalu",
    duration: "06:38",
    img: photo(8),
    description:
      "Momen perayaan tiga tahun BNJ resmi berbadan hukum sebagai holding company.",
    youtubeId: null,
  },
  {
    id: "v7",
    title: "Sesi Tanya Jawab Program Wellness Korporat EFM",
    category: "Essential Fitness Management",
    time: "3 minggu yang lalu",
    duration: "18:05",
    img: photo(2),
    description:
      "Rangkuman sesi tanya jawab seputar penerapan program wellness korporat di tempat kerja.",
    youtubeId: null,
  },
  {
    id: "v8",
    title: "Tur Fasilitas Pusat Kebugaran Mitra EFM",
    category: "Essential Fitness Management",
    time: "1 bulan yang lalu",
    duration: "08:20",
    img: photo(1),
    description:
      "Menjelajahi fasilitas pusat kebugaran mitra EFM dan standar operasional yang diterapkan.",
    youtubeId: null,
  },
];

export default function VideoBrowser() {
  const [activeCategory, setActiveCategory] = useState<Filter>("Semua");
  const [activeId, setActiveId] = useState<string>(VIDEOS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const filtered =
    activeCategory === "Semua"
      ? VIDEOS
      : VIDEOS.filter((v) => v.category === activeCategory);
  const activeVideo =
    filtered.find((v) => v.id === activeId) ?? filtered[0] ?? VIDEOS[0];
  const hasMore = !expanded && filtered.length > SIDEBAR_CAP;
  const visible = expanded ? filtered : filtered.slice(0, SIDEBAR_CAP);

  // Ganti kategori: reset video aktif ke video pertama kategori, tutup player,
  // reset cap sidebar (perilaku cap 5 berlaku ulang per kategori).
  function selectCategory(cat: Filter) {
    const next =
      cat === "Semua" ? VIDEOS : VIDEOS.filter((v) => v.category === cat);
    setActiveCategory(cat);
    setActiveId(next[0]?.id ?? VIDEOS[0].id);
    setIsPlaying(false);
    setExpanded(false);
  }

  // Klik item sidebar: ganti video player + highlight aktif, kembali ke state
  // thumbnail (tidak reload halaman).
  function selectVideo(id: string) {
    setActiveId(id);
    setIsPlaying(false);
  }

  return (
    <>
      {/* ===== FILTER TAB KATEGORI ===== */}
      <section className="w-full bg-white pb-[clamp(32px,4vw,40px)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Mobile: scroll horizontal 1 baris (flex-nowrap + overflow-x-auto,
              scrollbar disembunyikan). Desktop: wrap. */}
          <div className="flex flex-nowrap gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => selectCategory(cat)}
                  aria-pressed={active}
                  className={`shrink-0 whitespace-nowrap rounded-full px-[18px] py-[9px] text-[13px] font-semibold transition-colors duration-200 ${
                    active
                      ? "border border-[#03428E] bg-[#03428E] text-white"
                      : "border border-[#d4d4d4] bg-white text-[#525252] hover:border-[#03428E] hover:text-[#03428E]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PLAYER + SIDEBAR ===== */}
      <section className="w-full bg-white pb-[clamp(64px,8vw,110px)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:px-12 md:grid-cols-[65%_35%] md:items-stretch">
          {/* --- Player kiri --- */}
          <div>
            <div className="relative aspect-video overflow-hidden rounded-[12px] bg-black">
              {isPlaying ? (
                activeVideo.youtubeId ? (
                  // Embed sungguhan (baru dimuat saat diklik — tetap lazy).
                  // allowFullScreen + allow="fullscreen" -> tombol fullscreen
                  // YouTube aktif (auto-rotate landscape mobile native browser).
                  <iframe
                    className="absolute inset-0 h-full w-full border-0"
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                    title={activeVideo.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  // Placeholder fase dummy: youtubeId belum ada. src iframe akan
                  // diisi dari data backend Kelola Video (link YouTube diinput
                  // admin). Struktur player sudah siap menampung iframe di atas.
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#03428E]/[0.06] px-6 text-center">
                    <span className="text-sm font-semibold text-[#03428E]">
                      Video Segera Hadir
                    </span>
                    <span className="max-w-[300px] text-xs leading-relaxed text-[#525252]">
                      Pemutar YouTube akan dimuat di sini saat link video asli
                      tersedia dari backend Kelola Video.
                    </span>
                  </div>
                )
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label={`Putar video: ${activeVideo.title}`}
                  className="group absolute inset-0 h-full w-full"
                >
                  {/* PLACEHOLDER SEMENTARA: thumbnail bnj-photo generik — nanti
                      auto-fetch dari i.ytimg.com berdasarkan youtubeId. */}
                  <Image
                    src={activeVideo.img}
                    alt={activeVideo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 65vw"
                    className="object-cover"
                    priority
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/15">
                    <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black/55 transition-colors duration-200 group-hover:bg-black/70">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        aria-hidden
                      >
                        <polygon points="6 4 20 12 6 20" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>

            <h3 className="mt-5 text-[clamp(19px,2.2vw,22px)] font-bold leading-[1.35] text-[#171717]">
              {activeVideo.title}
            </h3>
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#E6F1FB] px-3 py-[5px] text-[12px] font-semibold text-[#0C447C]">
                {activeVideo.category}
              </span>
              <span className="text-[13px] text-[#808080]">
                {activeVideo.time}
              </span>
            </div>
            <p className="mt-3 max-w-[640px] text-[14px] leading-[1.6] text-[#525252]">
              {activeVideo.description}
            </p>
          </div>

          {/* --- Sidebar kanan --- */}
          {/* relative -> anchor untuk list absolute di desktop (lihat catatan di
              bawah). Grid md:items-stretch bikin tinggi grid item ini = tinggi
              blok kiri (player+judul+kategori+deskripsi). */}
          <div className="relative flex min-h-0 flex-col md:h-full">
            {/* Mobile: hairline + label "Video lainnya" (desktop disembunyikan). */}
            <div className="mb-4 block border-t border-[#e5e5e5] pt-4 md:hidden">
              <p className="text-[13px] text-[#808080]">Video lainnya</p>
            </div>

            {/*
              Desktop: list absolute inset-0 -> mengisi TINGGI grid item (= tinggi
              blok kiri) TAPI keluar dari flow, jadi konten sidebar TIDAK ikut
              menambah tinggi baris grid. Efeknya tinggi sidebar SELALU terkunci ke
              tinggi blok kiri: collapse (5 item + tombol) muat tanpa scroll; expand
              (semua video) melebihi -> scroll internal DI CONTAINER INI (bukan
              scroll halaman), tinggi total SIDEBAR TETAP sama. (Pakai flex-1 biasa
              tidak cukup: konten yang melebihi justru menumbuhkan baris grid.)
              Mobile: flex-none + overflow-visible -> stack natural, tanpa
              height-match / scroll internal.
            */}
            <div className="flex flex-none flex-col gap-1 overflow-visible md:absolute md:inset-0 md:min-h-0 md:overflow-y-auto">
              {visible.map((v) => {
                const active = v.id === activeVideo.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => selectVideo(v.id)}
                    className={`flex shrink-0 items-start gap-3 rounded-lg p-2.5 text-left transition-colors duration-200 ${
                      active ? "bg-[#F5F5F5]" : "bg-transparent hover:bg-[#FAFAFA]"
                    }`}
                  >
                    <span className="relative block h-[60px] w-[100px] shrink-0 overflow-hidden rounded-[7px]">
                      {/* PLACEHOLDER SEMENTARA: thumbnail bnj-photo — nanti
                          i.ytimg.com by youtubeId. */}
                      <Image
                        src={v.img}
                        alt={v.title}
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                      <span className="absolute bottom-1 right-1 rounded bg-black/70 px-[5px] py-[2px] text-[10px] font-semibold text-white">
                        {v.duration}
                      </span>
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="line-clamp-2 text-[13px] font-bold leading-[1.35] text-[#171717]">
                        {v.title}
                      </span>
                      <span className="mt-1.5 text-[12px] text-[#808080]">
                        {v.time}
                      </span>
                    </span>
                  </button>
                );
              })}

              {hasMore && (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="shrink-0 rounded-lg border border-[#d4d4d4] bg-white p-2.5 text-[13px] font-semibold text-[#171717] transition-colors duration-200 hover:border-[#03428E] hover:text-[#03428E]"
                >
                  Muat Lebih Banyak
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
