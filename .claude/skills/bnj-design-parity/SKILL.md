---
name: bnj-design-parity
description: Checklist wajib untuk memastikan hasil build website BNJ di localhost identik dengan referensi asli di Claude Design. WAJIB dijalankan setelah membangun atau merevisi section/halaman apapun di project bnj-corporate-website, SEBELUM commit — mencakup pengecekan divider (bukan wave), typography (skala resmi BNJ), background section, dan slot foto. Selalu konsultasi skill ini walau perubahan terlihat kecil (mis. "cuma ganti satu section"), karena drift visual (wave divider, garis tri-warna hilang, ukuran heading beda) sudah beberapa kali lolos tanpa audit eksplisit di project ini.
---

# BNJ Design Parity Check

## Kapan skill ini dipakai

Jalankan skill ini setiap kali:
- Selesai handoff halaman baru dari Claude Design ke Claude Code
- Selesai merevisi section apapun di halaman yang sudah ada
- Sebelum commit ke branch `design-reference`
- Sebelum merge `design-reference` ke `main`

Jangan skip walau perubahan terasa kecil — kasus di project ini (wave divider tersisa, garis tri-warna Hero hilang, ukuran H2 beda antar halaman) semuanya lolos karena dianggap "perubahan kecil, nggak perlu diaudit".

## Referensi wajib

Dua dokumen ini adalah source of truth. Baca keduanya sebelum memeriksa apapun:
- `docs/BNJ_Section_Pattern_Mapping.md` — aturan divider, layout section, komponen (garis vertikal, angka dekoratif, badge, dsb)
- `docs/BNJ_Typography_Standard.md` — skala ukuran/weight heading dan body text

## Langkah pemeriksaan

1. **Ambil referensi asli** — buka file `.dc.html` halaman terkait di branch `design-reference` (hasil export/handoff Claude Design) sebagai ground truth.
2. **Screenshot localhost:3000** — capture tiap section dari Hero sampai Footer, sejajarkan dengan referensi.
3. **Periksa 5 kategori di bawah**, section per section.
4. **Laporkan sebelum commit** — tulis ringkasan ketidaksesuaian yang ditemukan dan yang sudah diperbaiki. Jangan commit kalau masih ada item yang belum sesuai tanpa alasan yang dicatat.

## Item Pemeriksaan

### A. Divider
- Divider bawah Hero: garis diagonal tebal, gradasi tri-warna kiri-ke-kanan Corporate Blue (`#03428E`) → Growth Green (`#6AA84F`) → Digital Blue (`#0095DA`). **Bukan** wave/curve.
- Divider antar-section lain (termasuk sebelum CTA penutup): garis horizontal tipis 2-3px, gradasi tri-warna sama. **Bukan** wave/curve, **bukan** diagonal pendek.
- Urutan warna tri-warna konsisten kiri-ke-kanan di semua divider, termasuk versi mirrored (hanya sudut dibalik, urutan warna tetap).
- Scroll penuh satu halaman untuk memastikan tidak ada wave/curve shape tersisa di section manapun — ini pola bug yang paling sering lolos di project ini.

### B. Typography
- H1 Hero: 48px Bold (mobile 32px)
- H2 Section Title: 36px Bold (mobile 26px) — harus identik di semua halaman, bukan custom per halaman
- H3/H4/H5: sesuai tabel skala di `BNJ_Typography_Standard.md`
- Label kategori uppercase (mis. "EKOSISTEM BISNIS"): 12px SemiBold — satu-satunya elemen yang boleh all-caps
- Body text minimum 14px (idealnya 16px) — bukan warisan spec cetak 12px
- Font Inter di semua elemen, maksimal 2 weight per section

### C. Layout & Background
- Background section konten: putih/netral. Solid warna penuh **hanya** boleh di CTA penutup & Footer.
- Pola zigzag foto+teks (kalau ada): posisi selang-seling antar section, garis vertikal hijau 5px + angka dekoratif transparan ikut menyesuaikan sisi teks.
- Grid card: flat fill, border tipis/top-accent, tanpa drop shadow.

### D. Konten & Foto
- Semua slot foto terisi — tidak ada kotak abu-abu placeholder "browse files" yang lolos ke localhost.
- Foto relevan dengan konteks section, bukan foto acak.
- Foto ilustrasi AI-generated: tanpa label "AI generated", tanpa logo BNJ ditempel di atas foto, pakai caption generik bila perlu.
- Nama klien/mitra yang ditampilkan (logo, testimoni) sudah dikonfirmasi statusnya — bukan yang belum ada MoU resmi.
- Tidak ada video/embed error (cek konfigurasi YouTube embed bila ada).

### E. Ringkasan Wajib di Akhir
Setelah pemeriksaan, laporkan dalam bentuk list:
1. Section yang divider/typography-nya sudah diperbaiki
2. Slot foto yang masih berstatus "sementara/perlu diganti" untuk diaudit ulang nanti
3. Konfirmasi eksplisit: apakah halaman ini sudah 1:1 sama dengan referensi Claude Design, atau ada bagian yang masih menyimpang dan kenapa


### F. Responsive
- Cek tampilan di 3 lebar: 375px (mobile), 768px (tablet), 1440px (desktop)
- Tidak ada elemen terpotong/overflow horizontal
- Navbar berubah jadi hamburger menu di mobile
- Grid card menyesuaikan jumlah kolom sesuai breakpoint

## Log Halaman (update manual tiap selesai audit)

| Halaman | Tanggal Audit | Status | Catatan |
|---|---|---|---|
| Home | - | Belum lulus audit | Wave divider, missing tri-warna hero divider, typography drift |
| BNJ Digital Labs | 2026-07-19 | Lulus audit (C & D — badge layout/animasi + Coming Soon §11 toggle) | Resync ke revisi Digital Labs Detail.dc.html terbaru: 11/11 slot foto terisi dari public/images/Page-BNJ-Digital-Labs/, aspect-ratio intro photo (Produk Digital & Vitality Intelligence) 16:11, icon & badge "Target Pengembangan"/Hero range 2026-2027, roadmap connector line ditambahkan. Update lanjutan: 2 badge info Hero dibuat sejajar 1 baris (flex-row, w-fit, stack cuma <768px) + animasi floating idle (5px/3.2s, `--animate-float-badge` di globals.css). Section "4 Fitur Utama Tersedia" & "2 Keunggulan Utama" (BNJ Vitality Intelligence) diterapkan pola §11 Kondisi Samar/Coming Soon, sekarang dikontrol lewat `const VITALITY_COMING_SOON` di `VitalityIntelligence.tsx` (bukan hardcoded) — diverifikasi manual dengan set true/false bergantian: true menampilkan foto grayscale+blur-[5px] + badge "Detail Segera Hadir"/icon lock + deskripsi & tag di-blur, false menampilkan versi full-reveal bersih tanpa sisa class blur/badge. Verifikasi lewat curl ke server lokal (bukan screenshot Playwright — tidak terpasang di environment ini); rekomendasi cek visual 375/768/1440px manual sebelum merge ke main. **Catatan tooling:** `--animate-float-badge`/`@keyframes float-badge` sempat terlihat "hilang" saat verifikasi CSS chunk dev server via `grep -o` satu-baris — ternyata false alarm, CSS dev Turbopack di-pretty-print multi-baris jadi butuh `grep -A` (bukan CSS-nya yang salah). Delay badge kedua dinaikkan dari .4s ke .6s biar masuk rentang 0.5-1s yang diminta. |
| EFM | 2026-07-21 | Resync selesai (kode), visual belum di-screenshot | Full resync ke revisi terbaru "Essential Fitness Management (detail).dc.html": Fitness & Sport Management → **B2B Management** (§3b Grid Bertingkat: 2 card besar Community Wellness Program + Facility Management, masing-masing dengan sub-grid detail — file di-rename `FitnessSportManagement.tsx`→`B2BManagement.tsx`); Fitness & Sport Event → **Event Management** (tambah sub-section "3 Layanan Inti Event Management" — file di-rename `FitnessSportEvent.tsx`→`EventManagement.tsx`); Milestone diubah dari Varian A (vertikal) ke **Varian B (carousel horizontal)** dengan autoplay 5s/progress-bar scrubber/navigasi panah dua-arah + play-pause, diverifikasi lewat trace logika kode (bukan klik manual browser — Playwright tidak terpasang di environment ini); Klien & Mitra diubah dari grid statis ke **marquee loop** (reuse `--animate-marquee` dari globals.css, pause on hover). Private Program: stat card count-up dipindah dari overlay-foto ke card di bawah paragraf, grid kategori diperbarui (item & 2-kolom divider check-icon). 10/10 slot foto section + 10/10 logo klien terisi dari `public/images/Page-EFM/` (2 file di-rename `.JPG`/`.JPEG`→`.jpg`/`.jpeg` karena Next.js type declarations case-sensitive). Heading/eyebrow yang sempat disalin literal dari clamp() reference (32px/tracking 0.2em) diselaraskan balik ke skala resmi H2 36/26px + label 12px SemiBold tracking 0.05em. **Item belum diselaraskan (menunggu keputusan Bagoes):** ClosingCta dipertahankan versi lama (eyebrow + border hijau + 2 tombol per §8) karena reference terbaru menunjukkan versi lebih sederhana (1 tombol, tanpa eyebrow/border) — kemungkinan reference belum final di bagian ini; SectionDivider tetap dipasang antar section 01-04 (reference tidak menunjukkan divider di situ, tapi menghapusnya akan menyimpang dari pola halaman pilar lain yang sudah lulus audit); Facility Management sub-grid tetap 1 grid 8-item 2-kolom sesuai reference meski §3b menyarankan pecah jadi 2 sub-grid berlabel di atas 4 item. **Belum dicek:** screenshot visual 375/768/1440px (tidak ada Playwright), scroll-through manual untuk wave-divider check. |
| Brand Incubation | 2026-07-21 | Full build selesai (kode), visual belum di-screenshot | Halaman dibangun dari nol menggantikan placeholder "Halaman Ini Sedang Dalam Pengembangan", sesuai "Brand Incubation Detail.dc.html": Hero (badge Rocket, 2 floating info badge, foto caption), section 01 "Brand Development & Digital Strategy" (layout zigzag RTL — teks kanan/rata-kanan + foto kiri-kanan terbalik dari EFM, garis vertikal hijau di kanan, angka "01" di kanan, badge pill abu-abu "Target Pengembangan 2027") + grid "4 Tahapan" (Screening & Assessment/Analisis & Diagnosis/Strategi & Langkah Aksi/Monitoring & Evaluasi Berkala), divider statis 3px (bukan `<SectionDivider/>` animated, mengikuti pola Digital Labs `page.tsx`), section 02 "Business Acceleration Program" (foto kiri/teks kanan, garis hijau kiri, angka "02" kiri) + grid "4 Pilar" (Strategi & Sistem Operasional/Dukungan Teknologi & Otomasi/Pengelolaan Media Sosial End-to-End/Pelaporan Kinerja Terukur), Roadmap horizontal 2-titik (2026 aktif / 2027 rencana lanjutan — struktur disalin dari `digital-labs/Roadmap.tsx` yang sudah terverifikasi), ClosingCta (2 tombol, tombol kedua self-link ke halaman sendiri mengikuti pola established di Digital Labs ClosingCta, bukan bug). 3/3 slot foto terisi dari `public/images/Page-Brand-Incubation/` (hero-page, brand-development, business-acceleration) — tidak ada slot kosong. **Deviasi disengaja dari reference mentah:** ukuran H2 section-intro (judul "Brand Development & Digital Strategy" / "Business Acceleration Program") dinaikkan dari clamp 20-32px di reference ke skala resmi 26px/36px + eyebrow diselaraskan ke 12px SemiBold tracking 0.05em (reference pakai font-medium/tracking 0.2em) — supaya konsisten dengan EFM & typography doc, bukan ikut drift lama Digital Labs. Ditambahkan garis pemisah putih tipis sebelum Footer (§9, wajib menurut pattern doc) meski tidak eksplisit ada di reference .dc.html ini. **Belum dicek:** screenshot visual 375/768/1440px (Playwright tidak terpasang), scroll-through manual wave-divider check. Tidak ada section Milestone/Klien & Mitra di halaman ini — sesuai reference (unit bisnis baru, belum ada histori/klien terkonfirmasi untuk ditampilkan). |
| Tentang Kami | - | Belum dibangun | - |
| BNJ Investment Ventures | 2026-07-22 | Full build selesai (kode), visual belum di-screenshot | Halaman dibangun dari nol menggantikan placeholder "Halaman Ini Sedang Dalam Pengembangan", sesuai "Investment Ventures Detail.dc.html" (diambil via DesignSync MCP dari project `71bb435d-8ee8-45e2-9883-8dc3ab79eed4`). Nama pilar diperbarui dari "Wellness & Sport Investment Ventures" ke **BNJ Investment Ventures** secara konsisten di Hero badge kategori, `Navbar.tsx` (dropdown Ekosistem Bisnis), `Footer.tsx` (link nav), dan `home/Pillars.tsx` (grid 4 Pilar Home) — 4 titik referensi lama sudah diganti semua. Struktur: Hero (badge TrendingUp, 2 info badge floating — Users "Direncanakan Mulai 2028" & TrendingUp "Bagian dari Roadmap 2026-2030"), Section 01 "Investasi Portofolio Mandiri" (zigzag RTL — teks kanan/border-hijau kanan, angka "01" kanan, icon DollarSign, pill hijau "Tahap 1 · 2028", foto `EFM-invest-investasi-mandiri.png`), divider tipis 3px, Section 02 "Membuka Jalur Investasi Eksternal" (zigzag LTR — foto kiri/teks kanan, border-hijau kiri, angka "02" kiri, icon LineChart, pill hijau "Tahap 2 · 2029-2030", foto `EFM-invest-investasi-eksternal.png`), Roadmap 2 titik (2028 & 2029-2030, **keduanya "Rencana Lanjutan"/inactive** karena unit ini belum beroperasi — connector line untuk kondisi ini disederhanakan jadi satu garis abu solid, bukan gradient split, karena tidak ada titik aktif), ClosingCta (2 tombol, pola identik Brand Incubation). 3/3 slot foto terisi dari `public/images/Page-BNJ-Investment/` (hero-section, investasi-mandiri, investasi-eksternal) — tidak ada slot kosong/placeholder. Pill badge "Tahap 1/2 · [tahun]" (hijau, `#4b8f2f` on `#6AA84F`/15%) sengaja dipertahankan berbeda dari pill abu-abu "Target Pengembangan" di Brand Incubation — ini styling baru yang eksplisit ada di reference-nya sendiri (bukan drift), dipertahankan apa adanya. **Deviasi disengaja dari reference mentah:** ukuran H2 zigzag section (judul "Investasi Portofolio Mandiri" / "Membuka Jalur Investasi Eksternal") dinaikkan dari clamp 20-32px di reference ke skala resmi 26px/36px, dan ukuran icon-box dari clamp 40-56px ke fixed 56px (h-14 w-14) — konsisten dengan pola yang sudah dipakai Brand Incubation & EFM, bukan ikut reference mentah yang belum diselaraskan skala. Verifikasi: curl ke server lokal (restart bersih, cache `.next` dihapus) mengonfirmasi 200 OK di semua route terkait (halaman ini, Home, EFM, Brand Incubation, Digital Labs), ketiga foto ter-decode sukses lewat `/_next/image` optimizer (tanpa error "Memory limit exceeded" — dimensi file dicek dulu, maks 4000x2400px, aman), 0 em-dash tersisa, 0 sisa nama lama. **Belum dicek:** screenshot visual 375/768/1440px (Playwright tidak terpasang di environment ini) — verifikasi responsive dilakukan lewat trace class Tailwind (grid-cols-1 lg:grid-cols-2, clip-path 3-breakpoint Hero), bukan visual langsung. Tidak ada section Milestone/Klien & Mitra di halaman ini — sesuai reference (unit bisnis belum beroperasi, belum ada histori/klien untuk ditampilkan). Tidak ada Badge Row §5 — sudah tercakup oleh Roadmap §4 untuk komunikasi status masa depan, tidak perlu duplikasi pola.
