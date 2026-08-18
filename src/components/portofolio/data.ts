// Data statis untuk halaman /portofolio (fase dummy). Backend "Kelola
// Portofolio" menyusul terpisah — begitu tersedia, ganti sumber data ini ke
// fetch dari database tanpa mengubah komponen UI.
//
// Foto: 14 foto dokumentasi asli sudah dipindahkan flat ke public/images/
// (lihat CLAUDE.md TUGAS 1). Slot yang belum punya foto asli (kartu
// coming-soon: BNJ Digital Labs, Brand Incubation, BNJ Investment Ventures,
// dan carousel "Postingan Terbaru" 3 foto) memakai set foto generik
// bnj-photo-1..8.webp — satu-satunya set foto generik yang tersedia di
// project ini (lihat src/components/berita/data.ts).
const genericPhoto = (n: number) =>
  `/images/Page-Tentang-Kami/glance/bnj-photo-${n}.webp`;

export const CATEGORIES = [
  "Semua",
  "Essential Fitness Management",
  "BNJ Digital Labs",
  "Brand Incubation",
  "BNJ Investment Ventures",
  "ECA Aspire",
] as const;

export type Category = (typeof CATEGORIES)[number];

// ---------------------------------------------------------------------
// Panel biru (heading + body) per tab. "Semua" & tab pilar EFM/ECA berbagi
// 1 komponen mosaic (MosaicSection) dengan konten berbeda; Digital Labs /
// Brand Incubation / Investment Ventures pakai PillarComingSoonMosaic
// (mosaic blur+grayscale statis, sesuai file desain Claude Design).
// ---------------------------------------------------------------------
export const SEMUA_PANEL = {
  heading: "Lima Ekosistem Bisnis, Satu Komitmen Pertumbuhan",
  body: "Bukti nyata kontribusi BNJ ke klien dan mitra, dari fitness, teknologi, edukasi, hingga investasi.",
};

export const EFM_PANEL = {
  heading: "Essential Fitness Management",
  body: "Unit bisnis inti BNJ, beroperasi sejak 2017, mengelola lebih dari 200 klien personal training, korporat, dan event.",
  href: "/ekosistem-bisnis/efm",
};

export const ECA_PANEL = {
  heading: "ECA Aspire",
  body: "Unit pendidikan BNJ, 45+ program ekstrakurikuler lintas olahraga, robotik, seni, musik, dan bahasa, lewat kemitraan strategis dengan Sampoerna Academy dan sekolah mitra lainnya.",
  // Rute nyata halaman ECA Aspire masih memakai nama folder lama
  // "educational-alliance" (belum di-rename) — JANGAN pakai "/eca-aspire"
  // seperti draf desain, itu akan 404. Cross-check ke Navbar.tsx.
  href: "/ekosistem-bisnis/educational-alliance",
};

// Mosaic "Semua": 5 kartu ringkasan lintas unit bisnis.
export const SEMUA_CARDS = [
  {
    label: "Essential Fitness Management",
    img: "/images/Page-Portofolio/portofolio-mosaic-efm.png",
    doc: "12 Dokumentasi",
    href: "/ekosistem-bisnis/efm",
    comingSoon: false,
  },
  {
    label: "BNJ Digital Labs",
    img: "/images/Page-Portofolio/portofolio-mosaic-digital-labs.png",
    doc: null,
    href: "/ekosistem-bisnis/digital-labs",
    comingSoon: true,
  },
  {
    label: "Brand Incubation",
    img: "/images/Page-Portofolio/portofolio-mosaic-brand-incubation.png",
    doc: null,
    href: "/ekosistem-bisnis/brand-incubation",
    comingSoon: true,
  },
  {
    label: "ECA Aspire",
    img: "/images/Page-Portofolio/portofolio-mosaic-eca-aspire.png",
    doc: "5 Dokumentasi",
    href: "/ekosistem-bisnis/educational-alliance",
    comingSoon: false,
  },
  {
    label: "BNJ Investment Ventures",
    img: "/images/Page-Portofolio/portofolio-mosaic-investment-ventures.png",
    doc: null,
    href: "/ekosistem-bisnis/investment-ventures",
    comingSoon: true,
  },
] as const;

// Mosaic tab "Essential Fitness Management": 4 kartu sub-program (card5
// disembunyikan dibanding mosaic Semua).
export const EFM_CARDS = [
  {
    label: "Private Program",
    img: "/images/Page-Portofolio/portofolio-efm-private-program.png",
    doc: "12 Dokumentasi",
    href: "/portofolio/efm-private-program",
  },
  {
    label: "B2B Management",
    img: "/images/Page-Portofolio/portofolio-efm-b2b-management.png",
    doc: "9 Dokumentasi",
    href: "/portofolio/efm-b2b-management",
  },
  {
    label: "B2B Event",
    img: "/images/Page-Portofolio/portofolio-efm-b2b-event.jpeg",
    doc: "15 Dokumentasi",
    href: "/portofolio/efm-b2b-event",
  },
  {
    label: "Essential Community Hub",
    img: "/images/Page-Portofolio/portofolio-efm-community-hub.jpg",
    doc: "5 Dokumentasi",
    href: "/portofolio/efm-community-hub",
  },
] as const;

// Mosaic tab "ECA Aspire": 4 kartu program.
export const ECA_CARDS = [
  {
    label: "Basic School Program",
    img: "/images/Page-Portofolio/portofolio-eca-basic.png",
    doc: "6 Dokumentasi",
    href: "/portofolio/eca-basic-school-program",
  },
  {
    label: "Advanced School Program",
    img: "/images/Page-Portofolio/portofolio-eca-advanced.png",
    doc: "4 Dokumentasi",
    href: "/portofolio/eca-advanced-school-program",
  },
  {
    label: "Summer Camp",
    img: "/images/Page-Portofolio/portofolio-eca-summercamp.png",
    doc: "10 Dokumentasi",
    href: "/portofolio/eca-summer-camp",
  },
  {
    label: "Field Trip",
    img: "/images/Page-Portofolio/portofolio-eca-field-trip.png",
    doc: "5 Dokumentasi",
    href: "/portofolio/eca-field-trip",
  },
] as const;

// Tab pilar individual diklik langsung: Digital Labs, Brand Incubation,
// Investment Ventures. Foto TETAP dummy blur (belum ada dokumentasi nyata)
// — lihat CLAUDE.md TUGAS 6, foto-foto ini SENGAJA tidak diganti. Semua
// kartu (termasuk kartu pertama Digital Labs) tanpa label teks, badge
// "Segera Hadir" di tengah foto — seragam dengan kartu dummy lain.
export const PILLAR_COMING_SOON_TABS: Record<
  "BNJ Digital Labs" | "Brand Incubation" | "BNJ Investment Ventures",
  {
    heading: string;
    body: string;
    href: string;
    cards: { img: string; alt: string; label?: string; href?: string }[];
  }
> = {
  "BNJ Digital Labs": {
    heading: "BNJ Digital Labs",
    body: "Unit inovasi teknologi BNJ, membangun fondasi produk digital untuk ekosistem bisnis, dimulai dari kemitraan rumah sakit, klinik, dan fisioterapi.",
    href: "/ekosistem-bisnis/digital-labs",
    cards: [
      {
        img: genericPhoto(2),
        alt: "Ilustrasi BNJ Vitality Intelligence",
        href: "/ekosistem-bisnis/digital-labs",
      },
      { img: genericPhoto(5), alt: "Ilustrasi pengembangan produk" },
      { img: genericPhoto(8), alt: "Ilustrasi pengembangan produk" },
    ],
  },
  "Brand Incubation": {
    heading: "Brand Incubation & Business Acceleration",
    body: "Unit akselerasi brand pihak ketiga BNJ di bidang fitness, sport, dan wellness, eksekusi akselerasi brand pertama direncanakan mulai 2028.",
    href: "/ekosistem-bisnis/brand-incubation",
    cards: [
      { img: genericPhoto(3), alt: "Ilustrasi pengembangan produk" },
      { img: genericPhoto(7), alt: "Ilustrasi pengembangan produk" },
      { img: genericPhoto(8), alt: "Ilustrasi pengembangan produk" },
    ],
  },
  "BNJ Investment Ventures": {
    heading: "BNJ Investment Ventures",
    body: "Unit investasi BNJ pada fasilitas fitness, sport, dan wellness, direncanakan beroperasi 2028 diawali investasi mandiri.",
    href: "/ekosistem-bisnis/investment-ventures",
    cards: [
      { img: genericPhoto(4), alt: "Ilustrasi pengembangan produk" },
      { img: genericPhoto(6), alt: "Ilustrasi pengembangan produk" },
      { img: genericPhoto(1), alt: "Ilustrasi pengembangan produk" },
    ],
  },
};

// Trust bar: 4 poin kepercayaan, sama di semua tab.
export const TRUST_POINTS = [
  {
    title: "Dokumentasi Terverifikasi",
    subtitle: "Diaudit tim internal BNJ",
  },
  {
    title: "5 Ekosistem Bisnis Terintegrasi",
    subtitle: "Fitness, teknologi, edukasi & investasi",
  },
  {
    title: "200+ Klien EFM",
    subtitle: "Kemitraan jangka panjang",
  },
  {
    title: "Sejak 2017",
    subtitle: "Sembilan tahun beroperasi",
  },
] as const;

// Postingan Terbaru: carousel global (tidak digated tab), 3 foto sementara
// sesuai instruksi TUGAS 9 — data dinamis menyusul saat backend Portofolio
// dibangun.
export const POSTINGAN_TERBARU = [
  {
    title: "Essential Community Hub",
    img: "/images/Page-Portofolio/portofolio-efm-community-hub.jpg",
    doc: "7 Dokumentasi",
    href: "/portofolio/efm-community-hub",
  },
  {
    title: "Summer Camp",
    img: "/images/Page-Portofolio/portofolio-eca-summercamp.png",
    doc: "10 Dokumentasi",
    href: "/portofolio/eca-summer-camp",
  },
  {
    title: "B2B Event",
    img: "/images/Page-Portofolio/portofolio-efm-b2b-event.jpeg",
    doc: "15 Dokumentasi",
    href: "/portofolio/efm-b2b-event",
  },
] as const;

export const VIDEOS = [
  {
    title: "Di Balik Standar Layanan EFM Sejak 2017",
    time: "4 hari yang lalu",
    duration: "15:29",
    img: genericPhoto(3),
    href: "https://youtube.com/@BugarNusantaraJaya",
  },
  {
    title: "Proses Pengembangan Produk BNJ Digital Labs",
    time: "1 minggu yang lalu",
    duration: "09:47",
    img: genericPhoto(7),
    href: "https://youtube.com/@BugarNusantaraJaya",
  },
  {
    title: "Kemitraan ECA Aspire x Sampoerna Academy",
    time: "2 minggu yang lalu",
    duration: "11:05",
    img: genericPhoto(6),
    href: "https://youtube.com/@BugarNusantaraJaya",
  },
] as const;
