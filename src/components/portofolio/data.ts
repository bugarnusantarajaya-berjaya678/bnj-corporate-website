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
// Brand Incubation / Investment Ventures pakai ComingSoonSection.
// ---------------------------------------------------------------------
export const SEMUA_PANEL = {
  heading: "Lima Ekosistem Bisnis, Satu Komitmen Pertumbuhan",
  body: "Dari fitness, teknologi, edukasi, hingga investasi, setiap unit bisnis BNJ terdokumentasi nyata sebagai bukti kontribusi ke klien dan mitra.",
};

export const EFM_PANEL = {
  heading: "Essential Fitness Management",
  body: "Essential Fitness Management (EFM) adalah unit bisnis inti BNJ yang telah beroperasi sejak 2017, mengelola lebih dari 200 klien personal training, korporat, dan event.",
  href: "/ekosistem-bisnis/efm",
};

export const ECA_PANEL = {
  heading: "ECA Aspire",
  body: "ECA Aspire adalah unit pendidikan BNJ yang menghadirkan 45+ program ekstrakurikuler lintas olahraga, robotik, seni, musik, dan bahasa, melalui kemitraan strategis dengan Sampoerna Academy dan sekolah mitra lainnya.",
  // Rute nyata halaman ECA Aspire masih memakai nama folder lama
  // "educational-alliance" (belum di-rename) — JANGAN pakai "/eca-aspire"
  // seperti draf desain, itu akan 404. Cross-check ke Navbar.tsx.
  href: "/ekosistem-bisnis/educational-alliance",
};

// Mosaic "Semua": 5 kartu ringkasan lintas unit bisnis.
export const SEMUA_CARDS = [
  {
    label: "Essential Fitness Management",
    img: "/images/portofolio-mosaic-efm.png",
    doc: "12 Dokumentasi",
    href: "/ekosistem-bisnis/efm",
    comingSoon: false,
  },
  {
    label: "BNJ Digital Labs",
    img: "/images/portofolio-mosaic-digital-labs.png",
    doc: null,
    href: "/ekosistem-bisnis/digital-labs",
    comingSoon: true,
  },
  {
    label: "Brand Incubation",
    img: "/images/portofolio-mosaic-brand-incubation.png",
    doc: null,
    href: "/ekosistem-bisnis/brand-incubation",
    comingSoon: true,
  },
  {
    label: "ECA Aspire",
    img: "/images/portofolio-mosaic-eca-aspire.png",
    doc: "5 Dokumentasi",
    href: "/ekosistem-bisnis/educational-alliance",
    comingSoon: false,
  },
  {
    label: "BNJ Investment Ventures",
    img: "/images/portofolio-mosaic-investment-ventures.png",
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
    img: "/images/portofolio-efm-private-program.png",
    doc: "12 Dokumentasi",
    href: "/portofolio/efm-private-program",
  },
  {
    label: "B2B Management",
    img: "/images/portofolio-efm-b2b-management.png",
    doc: "9 Dokumentasi",
    href: "/portofolio/efm-b2b-management",
  },
  {
    label: "B2B Event",
    img: "/images/portofolio-efm-b2b-event.jpeg",
    doc: "15 Dokumentasi",
    href: "/portofolio/efm-b2b-event",
  },
  {
    label: "Essential Community Hub",
    img: "/images/portofolio-efm-community-hub.jpg",
    doc: "5 Dokumentasi",
    href: "/portofolio/efm-community-hub",
  },
] as const;

// Mosaic tab "ECA Aspire": 4 kartu program.
export const ECA_CARDS = [
  {
    label: "Basic School Program",
    img: "/images/portofolio-eca-basic.png",
    doc: "6 Dokumentasi",
    href: "/portofolio/eca-basic-school-program",
  },
  {
    label: "Advanced School Program",
    img: "/images/portofolio-eca-advanced.png",
    doc: "4 Dokumentasi",
    href: "/portofolio/eca-advanced-school-program",
  },
  {
    label: "Summer Camp",
    img: "/images/portofolio-eca-summercamp.png",
    doc: "10 Dokumentasi",
    href: "/portofolio/eca-summer-camp",
  },
  {
    label: "Field Trip",
    img: "/images/portofolio-eca-field-trip.png",
    doc: "5 Dokumentasi",
    href: "/portofolio/eca-field-trip",
  },
] as const;

// Tab coming-soon: Digital Labs, Brand Incubation, Investment Ventures.
// Foto TETAP dummy blur (belum ada dokumentasi nyata) — lihat CLAUDE.md
// TUGAS 6, foto-foto ini SENGAJA tidak diganti.
export const COMING_SOON_TABS: Record<
  "BNJ Digital Labs" | "Brand Incubation" | "BNJ Investment Ventures",
  {
    heading: string;
    body: string;
    href: string;
    photos: [string, string, string];
  }
> = {
  "BNJ Digital Labs": {
    heading: "BNJ Digital Labs",
    body: "BNJ Digital Labs adalah unit inovasi teknologi BNJ yang sedang membangun fondasi produk digital untuk mendukung operasional dan pengalaman klien di seluruh ekosistem bisnis, dimulai dari kemitraan dengan rumah sakit, klinik, dan fisioterapi.",
    href: "/ekosistem-bisnis/digital-labs",
    photos: [genericPhoto(2), genericPhoto(5), genericPhoto(8)],
  },
  "Brand Incubation": {
    heading: "Brand Incubation & Business Acceleration",
    body: "Brand Incubation & Business Acceleration adalah unit BNJ yang mengakselerasi pertumbuhan brand pihak ketiga di bidang fitness, sport, dan wellness. Saat ini masih dalam fase perencanaan, dengan eksekusi akselerasi brand pertama direncanakan mulai 2028.",
    href: "/ekosistem-bisnis/brand-incubation",
    photos: [genericPhoto(3), genericPhoto(7), genericPhoto(8)],
  },
  "BNJ Investment Ventures": {
    heading: "BNJ Investment Ventures",
    body: "BNJ Investment Ventures adalah unit BNJ yang berinvestasi pada fasilitas fitness, sport, dan wellness untuk memperluas portofolio bisnis jangka panjang. Direncanakan mulai beroperasi pada 2028, diawali investasi mandiri BNJ.",
    href: "/ekosistem-bisnis/investment-ventures",
    photos: [genericPhoto(4), genericPhoto(6), genericPhoto(1)],
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
    img: "/images/portofolio-efm-community-hub.jpg",
    doc: "7 Dokumentasi",
    href: "/portofolio/efm-community-hub",
  },
  {
    title: "Summer Camp",
    img: "/images/portofolio-eca-summercamp.png",
    doc: "10 Dokumentasi",
    href: "/portofolio/eca-summer-camp",
  },
  {
    title: "B2B Event",
    img: "/images/portofolio-efm-b2b-event.jpeg",
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
