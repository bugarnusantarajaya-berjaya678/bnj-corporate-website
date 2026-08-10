// Data DUMMY statis untuk halaman /berita (fase dummy).
// Backend "Kelola Berita" + "Kelola Video" menyusul terpisah — begitu tersedia,
// ganti sumber data ini ke fetch dari database, tanpa mengubah komponen UI.
//
// FOTO PLACEHOLDER SEMENTARA: semua slot foto memakai bnj-photo-1..8.webp
// (foto generik). WAJIB diganti ke foto kategori yang sesuai
// (EFM / BNJ Digital Labs / ECA Aspire / BNJ Investment Ventures) begitu foto
// final per artikel/video tersedia. Variasi foto dijaga agar tidak mengulang
// foto yang sama persis di slot yang berdekatan.

// bnj-photo-1..8.webp adanya di folder glance (Tentang Kami) — satu-satunya
// set foto generik yang tersedia di project ini saat fase dummy.
const photo = (n: number) =>
  `/images/Page-Tentang-Kami/glance/bnj-photo-${n}.webp`;

export const CATEGORIES = [
  "Semua",
  "Essential Fitness Management",
  "BNJ Digital Labs",
  "ECA Aspire",
  "BNJ Investment Ventures",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const PAGE_SIZE = 6;

export type Article = {
  id: string;
  title: string;
  category: Exclude<Category, "Semua">;
  date: string;
  img: string;
};

// Artikel sorotan (pinned) — 1 kartu besar di atas daftar.
export const SOROTAN: Article = {
  id: "sorotan-1",
  title:
    "EFM Raih Penghargaan Wellness Provider Terbaik Tiga Tahun Berturut-turut",
  category: "Essential Fitness Management",
  date: "14 Agustus 2026",
  img: photo(1),
};

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "EFM Perluas Layanan Wellness Korporat ke 5 Kota Baru",
    category: "Essential Fitness Management",
    date: "10 Agustus 2026",
    img: photo(2),
  },
  {
    id: "art-2",
    title:
      "BNJ Digital Labs Luncurkan Fitur Booking Sesi Konsultasi Online",
    category: "BNJ Digital Labs",
    date: "6 Agustus 2026",
    img: photo(3),
  },
  {
    id: "art-3",
    title: "ECA Aspire Gelar Summer Camp Perdana Bersama Sampoerna Academy",
    category: "ECA Aspire",
    date: "2 Agustus 2026",
    img: photo(4),
  },
  {
    id: "art-4",
    title: "BNJ Investment Ventures Umumkan Roadmap Tahap 2 Konsorsium",
    category: "BNJ Investment Ventures",
    date: "28 Juli 2026",
    img: photo(5),
  },
  {
    id: "art-5",
    title: "EFM Jalin Kerja Sama Baru dengan 3 Klien Korporat",
    category: "Essential Fitness Management",
    date: "22 Juli 2026",
    img: photo(6),
  },
  {
    id: "art-6",
    title: "ECA School Advanced Program Catat Peningkatan Peserta 40%",
    category: "ECA Aspire",
    date: "15 Juli 2026",
    img: photo(7),
  },
  {
    id: "art-7",
    title: "BNJ Digital Labs Perkuat Jaringan Expert Multi-Disiplin",
    category: "BNJ Digital Labs",
    date: "9 Juli 2026",
    img: photo(8),
  },
  {
    id: "art-8",
    title: "CV Bugar Nusantara Jaya Rayakan Tiga Tahun Berbadan Hukum",
    category: "BNJ Investment Ventures",
    date: "1 Juli 2026",
    img: photo(2),
  },
];

export type Video = {
  id: string;
  title: string;
  time: string;
  duration: string;
  img: string;
  // youtubeId menyusul saat data video asli tersedia dari backend Kelola Video.
  // Selama masih null, kartu video menampilkan facade (thumbnail + play) tanpa
  // memuat iframe YouTube sungguhan.
  youtubeId: string | null;
};

export const VIDEOS: Video[] = [
  {
    id: "vid-1",
    title: "Di Balik Standar Layanan EFM Sejak 2017",
    time: "4 jam yang lalu",
    duration: "15:29",
    img: photo(3),
    youtubeId: null,
  },
  {
    id: "vid-2",
    title: "Proses Kemitraan ECA Aspire x Sampoerna Academy",
    time: "1 hari yang lalu",
    duration: "09:47",
    img: photo(4),
    youtubeId: null,
  },
  {
    id: "vid-3",
    title: "Roadmap Investasi BNJ Menuju Tahap 2",
    time: "3 hari yang lalu",
    duration: "12:03",
    img: photo(5),
    youtubeId: null,
  },
];
