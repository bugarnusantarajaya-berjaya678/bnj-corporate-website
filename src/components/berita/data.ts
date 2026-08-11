// Data DUMMY statis untuk halaman /berita + /berita/[slug] (fase dummy).
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
  "Brand Incubation",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ArticleCategory = Exclude<Category, "Semua">;

// Slug kategori untuk deep-link filter dari breadcrumb Detail Artikel
// (mis. /berita?kategori=essential-fitness-management memilih tab kategori itu).
export const CATEGORY_SLUGS: Record<ArticleCategory, string> = {
  "Essential Fitness Management": "essential-fitness-management",
  "BNJ Digital Labs": "bnj-digital-labs",
  "ECA Aspire": "eca-aspire",
  "BNJ Investment Ventures": "bnj-investment-ventures",
  "Brand Incubation": "brand-incubation",
};

// Kebalikan CATEGORY_SLUGS: slug -> nama kategori (dipakai BeritaFeed untuk
// membaca query param ?kategori= dan preselect tab yang sesuai).
export const SLUG_TO_CATEGORY: Record<string, ArticleCategory> =
  Object.fromEntries(
    Object.entries(CATEGORY_SLUGS).map(([cat, slug]) => [slug, cat]),
  ) as Record<string, ArticleCategory>;

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  // Foto artikel: array maks 4. photos[0] = cover (dipakai di Sorotan &
  // ArticleCard). Slot 2-4 hanya relevan untuk carousel Detail Artikel.
  photos: string[];
};

// Artikel sorotan (pinned) — 1 kartu besar di atas daftar.
export const SOROTAN: Article = {
  id: "sorotan-1",
  slug: "efm-raih-penghargaan-wellness-provider-terbaik",
  title:
    "EFM Raih Penghargaan Wellness Provider Terbaik Tiga Tahun Berturut-turut",
  category: "Essential Fitness Management",
  date: "14 Agustus 2026",
  photos: [photo(1)],
};

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    slug: "efm-perluas-layanan-wellness-korporat-ke-5-kota-baru",
    title: "EFM Perluas Layanan Wellness Korporat ke 5 Kota Baru",
    category: "Essential Fitness Management",
    date: "10 Agustus 2026",
    photos: [photo(2)],
  },
  {
    id: "art-2",
    slug: "bnj-digital-labs-fitur-booking-konsultasi-online",
    title: "BNJ Digital Labs Luncurkan Fitur Booking Sesi Konsultasi Online",
    category: "BNJ Digital Labs",
    date: "6 Agustus 2026",
    photos: [photo(3)],
  },
  {
    id: "art-3",
    slug: "eca-aspire-summer-camp-perdana-sampoerna-academy",
    title: "ECA Aspire Gelar Summer Camp Perdana Bersama Sampoerna Academy",
    category: "ECA Aspire",
    date: "2 Agustus 2026",
    photos: [photo(4)],
  },
  {
    id: "art-4",
    slug: "bnj-investment-ventures-roadmap-tahap-2-konsorsium",
    title: "BNJ Investment Ventures Umumkan Roadmap Tahap 2 Konsorsium",
    category: "BNJ Investment Ventures",
    date: "28 Juli 2026",
    photos: [photo(5)],
  },
  {
    id: "art-5",
    slug: "efm-jalin-kerja-sama-baru-3-klien-korporat",
    title: "EFM Jalin Kerja Sama Baru dengan 3 Klien Korporat",
    category: "Essential Fitness Management",
    date: "22 Juli 2026",
    photos: [photo(6)],
  },
  {
    id: "art-6",
    slug: "eca-school-advanced-program-peningkatan-peserta",
    title: "ECA School Advanced Program Catat Peningkatan Peserta 40%",
    category: "ECA Aspire",
    date: "15 Juli 2026",
    photos: [photo(7)],
  },
  {
    id: "art-7",
    slug: "bnj-digital-labs-perkuat-jaringan-expert-multi-disiplin",
    title: "BNJ Digital Labs Perkuat Jaringan Expert Multi-Disiplin",
    category: "BNJ Digital Labs",
    date: "9 Juli 2026",
    photos: [photo(8)],
  },
  {
    id: "art-8",
    slug: "bnj-rayakan-tiga-tahun-berbadan-hukum",
    title: "CV Bugar Nusantara Jaya Rayakan Tiga Tahun Berbadan Hukum",
    category: "BNJ Investment Ventures",
    date: "1 Juli 2026",
    photos: [photo(2)],
  },
];

// ————————————————————————————————————————————————————————————————
// DETAIL ARTIKEL (/berita/[slug])
// ————————————————————————————————————————————————————————————————
// Fase dummy: hanya 1 artikel contoh (EFM) yang punya konten body lengkap,
// sebagai proof of routing. Slug lain dari index tetap clickable tapi
// belum punya entry di sini -> halaman detail memanggil notFound().
// Begitu backend Kelola Berita tersedia, ganti map ini ke fetch by slug.

// Referensi sumber (opsional) — jurnal/artikel eksternal untuk artikel bertema
// kesehatan/fitness. Kalau tidak ada, section Referensi tidak dirender.
export type ArticleReference = {
  title: string;
  source: string;
  url?: string;
};

export type ArticleDetail = {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  // Foto artikel: array maks 4. photos[0] = cover. Jika photos.length > 1,
  // cover di Detail Artikel dirender sebagai carousel (crossfade + dots +
  // panah), jika 1 foto tetap statis.
  photos: string[];
  coverCaption: string;
  // Body: paragraf berurutan. Paragraf ke-3 (index 2) adalah kutipan langsung.
  paragraphs: string[];
  tags: string[];
  // Sidebar "Artikel Terkait" TIDAK lagi dari sini — dihitung dari ARTICLES
  // (kategori sama, exclude current) di page.tsx. Field `related` lama dihapus.
  references?: ArticleReference[];
};

const ARTICLE_DETAILS: Record<string, ArticleDetail> = {
  "efm-perluas-layanan-wellness-korporat-ke-5-kota-baru": {
    slug: "efm-perluas-layanan-wellness-korporat-ke-5-kota-baru",
    title: "EFM Perluas Layanan Wellness Korporat ke 5 Kota Baru",
    category: "Essential Fitness Management",
    date: "10 Agustus 2026",
    // PLACEHOLDER SEMENTARA: foto generik. photos[0] = cover (bnj-photo-4, beda
    // dari foto slot Sorotan/Daftar Artikel index); slot 2-4 diisi variasi
    // berbeda untuk menguji carousel (>1 foto). Ganti ke foto EFM asli nanti.
    photos: [photo(4), photo(1), photo(6), photo(8)],
    coverCaption: "Foto: Dok. BNJ",
    // Teks PERSIS dari hasil final Claude Design (Detail Artikel Berita.dc.html).
    paragraphs: [
      "Essential Fitness Management (EFM), unit operasional utama CV Bugar Nusantara Jaya (BNJ) yang telah beroperasi sejak 2017, mengumumkan perluasan layanan wellness korporat ke lima kota baru di luar Jabodetabek. Langkah ini merupakan respons atas permintaan klien korporat yang terus meningkat terhadap program kebugaran dan kesehatan karyawan berbasis tempat kerja.",
      "Perluasan ini mencakup penempatan personal trainer bersertifikat, program konsultasi kesehatan berkala, dan sesi kelas kebugaran korporat yang dapat disesuaikan dengan jadwal operasional masing-masing perusahaan klien. EFM menargetkan onboarding klien korporat pertama di kota-kota baru tersebut pada kuartal berikutnya.",
      "“Ekspansi ini merupakan bagian dari strategi BNJ untuk memperluas jangkauan layanan wellness korporat secara nasional, sejalan dengan visi holding company dalam membangun ekosistem kesehatan dan kebugaran yang terintegrasi,” ujar perwakilan manajemen EFM.",
      "Dengan penambahan lima kota ini, EFM kini melayani klien korporat di sembilan kota di Indonesia, memperkuat posisinya sebagai penyedia layanan wellness korporat dengan jangkauan operasional terluas di bawah payung CV Bugar Nusantara Jaya.",
    ],
    tags: ["EFM", "Wellness Korporat", "Ekspansi Layanan"],
    // PLACEHOLDER SEMENTARA: 3 referensi contoh (url example.com, jelas dummy)
    // untuk mengisi section Referensi di fase dummy — konsisten dengan seluruh
    // konten Berita lain yang masih placeholder. Ganti dengan sumber/jurnal asli
    // saat artikel kesehatan/fitness sungguhan tersedia dari backend.
    references: [
      {
        title:
          "Efektivitas Program Wellness Berbasis Tempat Kerja terhadap Produktivitas Karyawan",
        source: "Jurnal Kesehatan Kerja Indonesia, Vol. 12 No. 2 (2025)",
        url: "https://example.com/jurnal-wellness-korporat",
      },
      {
        title:
          "Dampak Aktivitas Fisik Terstruktur pada Kesehatan Karyawan Korporat",
        source: "Indonesian Journal of Occupational Health, 2024",
        url: "https://example.com/aktivitas-fisik-korporat",
      },
      {
        title:
          "Pedoman Penyelenggaraan Kebugaran Karyawan di Lingkungan Kerja",
        source: "Kementerian Kesehatan RI (2023)",
      },
    ],
  },
};

export function getArticleDetail(slug: string): ArticleDetail | null {
  return ARTICLE_DETAILS[slug] ?? null;
}

// Slug yang di-prerender statis (punya konten lengkap). Slug dummy lain
// dari index tetap ter-route tapi menghasilkan 404 (notFound) di fase ini.
export function getDetailSlugs(): string[] {
  return Object.keys(ARTICLE_DETAILS);
}

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
