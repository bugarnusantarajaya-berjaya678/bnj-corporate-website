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
| BNJ Digital Labs | - | Belum lulus audit | KPI card "Fitur Tersedia" foto kosong |
| EFM | - | Belum diaudit | Dibangun sebelum skill ini ada |
| Tentang Kami | - | Belum dibangun | - |
