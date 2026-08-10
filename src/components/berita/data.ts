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
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ArticleCategory = Exclude<Category, "Semua">;

export const PAGE_SIZE = 6;

// Slug kategori untuk deep-link filter dari breadcrumb Detail Artikel
// (mis. /berita?kategori=essential-fitness-management memilih tab kategori itu).
export const CATEGORY_SLUGS: Record<ArticleCategory, string> = {
  "Essential Fitness Management": "essential-fitness-management",
  "BNJ Digital Labs": "bnj-digital-labs",
  "ECA Aspire": "eca-aspire",
  "BNJ Investment Ventures": "bnj-investment-ventures",
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
  img: string;
};

// Artikel sorotan (pinned) — 1 kartu besar di atas daftar.
export const SOROTAN: Article = {
  id: "sorotan-1",
  slug: "efm-raih-penghargaan-wellness-provider-terbaik",
  title:
    "EFM Raih Penghargaan Wellness Provider Terbaik Tiga Tahun Berturut-turut",
  category: "Essential Fitness Management",
  date: "14 Agustus 2026",
  img: photo(1),
};

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    slug: "efm-perluas-layanan-wellness-korporat-ke-5-kota-baru",
    title: "EFM Perluas Layanan Wellness Korporat ke 5 Kota Baru",
    category: "Essential Fitness Management",
    date: "10 Agustus 2026",
    img: photo(2),
  },
  {
    id: "art-2",
    slug: "bnj-digital-labs-fitur-booking-konsultasi-online",
    title: "BNJ Digital Labs Luncurkan Fitur Booking Sesi Konsultasi Online",
    category: "BNJ Digital Labs",
    date: "6 Agustus 2026",
    img: photo(3),
  },
  {
    id: "art-3",
    slug: "eca-aspire-summer-camp-perdana-sampoerna-academy",
    title: "ECA Aspire Gelar Summer Camp Perdana Bersama Sampoerna Academy",
    category: "ECA Aspire",
    date: "2 Agustus 2026",
    img: photo(4),
  },
  {
    id: "art-4",
    slug: "bnj-investment-ventures-roadmap-tahap-2-konsorsium",
    title: "BNJ Investment Ventures Umumkan Roadmap Tahap 2 Konsorsium",
    category: "BNJ Investment Ventures",
    date: "28 Juli 2026",
    img: photo(5),
  },
  {
    id: "art-5",
    slug: "efm-jalin-kerja-sama-baru-3-klien-korporat",
    title: "EFM Jalin Kerja Sama Baru dengan 3 Klien Korporat",
    category: "Essential Fitness Management",
    date: "22 Juli 2026",
    img: photo(6),
  },
  {
    id: "art-6",
    slug: "eca-school-advanced-program-peningkatan-peserta",
    title: "ECA School Advanced Program Catat Peningkatan Peserta 40%",
    category: "ECA Aspire",
    date: "15 Juli 2026",
    img: photo(7),
  },
  {
    id: "art-7",
    slug: "bnj-digital-labs-perkuat-jaringan-expert-multi-disiplin",
    title: "BNJ Digital Labs Perkuat Jaringan Expert Multi-Disiplin",
    category: "BNJ Digital Labs",
    date: "9 Juli 2026",
    img: photo(8),
  },
  {
    id: "art-8",
    slug: "bnj-rayakan-tiga-tahun-berbadan-hukum",
    title: "CV Bugar Nusantara Jaya Rayakan Tiga Tahun Berbadan Hukum",
    category: "BNJ Investment Ventures",
    date: "1 Juli 2026",
    img: photo(2),
  },
];

// ————————————————————————————————————————————————————————————————
// DETAIL ARTIKEL (/berita/[slug])
// ————————————————————————————————————————————————————————————————
// Fase dummy: hanya 1 artikel contoh (EFM) yang punya konten body lengkap,
// sebagai proof of routing. Slug lain dari index tetap clickable tapi
// belum punya entry di sini -> halaman detail memanggil notFound().
// Begitu backend Kelola Berita tersedia, ganti map ini ke fetch by slug.

export type RelatedArticle = {
  slug: string;
  title: string;
  category: string;
  img: string;
};

export type ArticleDetail = {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  coverImg: string;
  coverCaption: string;
  // Body: paragraf berurutan. Paragraf ke-3 (index 2) adalah kutipan langsung.
  paragraphs: string[];
  tags: string[];
  related: RelatedArticle[];
};

const ARTICLE_DETAILS: Record<string, ArticleDetail> = {
  "efm-perluas-layanan-wellness-korporat-ke-5-kota-baru": {
    slug: "efm-perluas-layanan-wellness-korporat-ke-5-kota-baru",
    title: "EFM Perluas Layanan Wellness Korporat ke 5 Kota Baru",
    category: "Essential Fitness Management",
    date: "10 Agustus 2026",
    // PLACEHOLDER SEMENTARA: foto generik bnj-photo-4.webp (beda dari foto slot
    // Sorotan/Daftar Artikel index), ganti ke foto EFM asli saat foto final ada.
    coverImg: photo(4),
    coverCaption: "Foto: Dok. BNJ",
    // Teks PERSIS dari hasil final Claude Design (Detail Artikel Berita.dc.html).
    paragraphs: [
      "Essential Fitness Management (EFM), unit operasional utama CV Bugar Nusantara Jaya (BNJ) yang telah beroperasi sejak 2017, mengumumkan perluasan layanan wellness korporat ke lima kota baru di luar Jabodetabek. Langkah ini merupakan respons atas permintaan klien korporat yang terus meningkat terhadap program kebugaran dan kesehatan karyawan berbasis tempat kerja.",
      "Perluasan ini mencakup penempatan personal trainer bersertifikat, program konsultasi kesehatan berkala, dan sesi kelas kebugaran korporat yang dapat disesuaikan dengan jadwal operasional masing-masing perusahaan klien. EFM menargetkan onboarding klien korporat pertama di kota-kota baru tersebut pada kuartal berikutnya.",
      "“Ekspansi ini merupakan bagian dari strategi BNJ untuk memperluas jangkauan layanan wellness korporat secara nasional, sejalan dengan visi holding company dalam membangun ekosistem kesehatan dan kebugaran yang terintegrasi,” ujar perwakilan manajemen EFM.",
      "Dengan penambahan lima kota ini, EFM kini melayani klien korporat di sembilan kota di Indonesia, memperkuat posisinya sebagai penyedia layanan wellness korporat dengan jangkauan operasional terluas di bawah payung CV Bugar Nusantara Jaya.",
    ],
    tags: ["EFM", "Wellness Korporat", "Ekspansi Layanan"],
    // Related PERSIS dari reference (kategori sama, artikel berbeda dari yang
    // sedang dibaca). PLACEHOLDER foto sementara.
    related: [
      {
        slug: "efm-jalin-kerja-sama-baru-3-klien-korporat",
        title: "EFM Jalin Kerja Sama Baru dengan 3 Klien Korporat",
        category: "Essential Fitness Management",
        img: photo(6),
      },
      {
        slug: "efm-raih-penghargaan-wellness-provider-terbaik",
        title:
          "EFM Raih Penghargaan Wellness Provider Terbaik Tiga Tahun Berturut-turut",
        category: "Essential Fitness Management",
        img: photo(1),
      },
      {
        slug: "efm-perkuat-tim-personal-trainer-bersertifikat",
        title: "EFM Perkuat Tim Personal Trainer Bersertifikat Internasional",
        category: "Essential Fitness Management",
        img: photo(8),
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
