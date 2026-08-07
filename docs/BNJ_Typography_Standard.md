# BNJ Website — Typography Standard

Diturunkan dari **BNJ Design Playbook v1.0** (Typography Scale, hal. 10) dan disesuaikan untuk konteks digital/website. Dokumen ini adalah acuan wajib untuk semua heading, label, dan body text di seluruh halaman — tujuannya supaya "judul section" dan elemen teks lain terlihat identik di Home, Digital Labs, EFM, Tentang Kami, dan halaman berikutnya, alih-alih berbeda gaya per halaman.

Font: **Inter**, semua weight. Sentence case — tidak pernah all-caps untuk body copy (all-caps hanya untuk label kategori kecil, lihat di bawah).

---

## Skala Tipografi Web

> **REVISI SKALA 2026-08-08 (global scale −0.9x):** Semua ukuran approved sebelumnya
> divisualisasikan pada kondisi browser zoom-out 90%, sehingga di 100% zoom (default
> mayoritas user PC, baseline desktop 1440–1920px) terlihat kegedean. Seluruh skala
> H1–H5 + body diturunkan ~0.9x. Verifikasi WAJIB di 100% zoom asli (tanpa scale-down
> tambahan), bukan simulasi zoom-out. Nilai lama (H1 48 / H2 36 / dst) sudah tidak
> berlaku.

| Level | Ukuran (baru, ~0.9x) | Weight | Line-height | Penggunaan |
|---|---|---|---|---|
| H1 — Hero Headline | 42px (mobile: 28px) | Bold | 120% | Judul utama di section Hero paling atas tiap halaman. Implementasi clamp: `clamp(27px, 3.4vw, 42px)`. (Home Hero varian slideshow: mobile turun ke 18px karena teks duduk berdampingan dengan foto pada ~62% lebar — exception khusus Home.) |
| H2 — Section Title | **`clamp(26px, 2.6vw, 32px)`** — efektif 32px desktop, 26px mobile | Bold | 120% | Judul tiap section utama. **Ini standar final tunggal untuk SEMUA section di SEMUA halaman**, termasuk Pillars Home (yang sebelumnya 36px — sudah diturunkan). Aturan lama "H2 uniformly 36/26px" DIGANTI oleh nilai ini. |
| H3 — Subsection / Card Title | 25px (mobile: 20px) | SemiBold | 120% | Judul sub-section atau card besar. Clamp umum: `clamp(18px, 2vw, 24px)` – `clamp(22px, 2.5vw, 27px)` sesuai bobot section. |
| H4 — Card / Component Title | 20px (mobile: 17px) | SemiBold | 120% | Judul komponen kecil (nama testimoni, judul milestone, dsb) |
| H5 — Minor Heading | 16px | Medium | 130% | Heading kecil di dalam card atau list |
| Label Kategori — on white | 12px | SemiBold, uppercase, letter-spacing +0.05em (Hero/eyebrow section boleh sampai +0.2em), warna solid (Corporate Blue atau sesuai konteks) | 130% | Label kecil di atas H2 pada background putih/netral (mis. "EKOSISTEM BISNIS", "COMPANY PROFILE") |
| Label Kategori — on photo | 11px | SemiBold, uppercase, letter-spacing +0.05em, putih opacity ~75% | 130% | Label kecil overlay di atas foto full-bleed (mis. "PIMPINAN", "DIVISI" pada Overlay Card Carousel) — ukuran sedikit diturunkan dan opacity dikurangi karena berkompetisi dengan foto di belakangnya, bukan background flat |
| Body | 15px (minimum 14px) | Regular | 150–170% | Paragraf, deskripsi card, teks pendukung |
| Caption | 12px | Regular | 140% | Keterangan foto, footnote, teks kecil di footer |

Label Kategori tetap 11–12px (tidak ikut diturunkan — sudah kecil), dan tetap satu-satunya elemen teks yang boleh all-caps dalam kedua sub-variannya.

**Catatan penting soal sumber:** Playbook cetak (print) mendefinisikan Body/Caption di 12px/10px — itu spec khusus dokumen cetak (proposal, deck PDF) dan **tidak berlaku untuk web**. Aturan aksesibilitas di Playbook sendiri menyatakan body copy digital minimum 14px, karena itu skala di atas tetap ≥14px (body 15px, caption 12px) untuk web.

**Selain typografi, revisi 0.9x yang sama diterapkan ke:** max-width/tinggi hero & section image, dan padding internal card (lihat implementasi Home sebagai referensi). Token spacing antar-section (`--section-py` dkk) dan surface tone diatur di `globals.css` — lihat §Divider/Spacing di `BNJ_Section_Pattern_Mapping.md`.

---

## Aturan Konsistensi Lintas Halaman

1. **Satu H2 style untuk semua judul section**, di semua halaman — nilai final tunggal `clamp(26px, 2.6vw, 32px)`, tidak ada variasi font-weight atau ukuran custom per halaman (termasuk tidak ada lagi H2 36px).
2. **Maksimal dua weight per section** (mis. Bold untuk heading + Regular untuk body) — sesuai aturan Playbook, jangan campur lebih dari dua weight dalam satu section untuk menjaga clarity.
3. **Label kategori uppercase** (varian on-white 12px atau on-photo 11px) selalu dipasang di atas H2, bukan pengganti H2 — bukan sebaliknya (H2 tidak boleh dibuat all-caps untuk "menggantikan" label).
4. Pilih varian Label Kategori sesuai background: on-white untuk section flat/putih, on-photo untuk overlay di atas foto full-bleed — jangan pakai varian on-white (12px, warna solid) di atas foto, kontrasnya akan lemah.
5. Jangan pernah stretch, compress, atau ganti typeface — Inter saja di semua bobot.
6. Kalau ada halaman yang sudah terlanjur pakai ukuran/weight berbeda dari tabel ini, **selaraskan ke tabel ini sebagai referensi tunggal**, bukan salah satu meniru yang lain secara ad-hoc.

---

## Status Implementasi

- [x] Home — diselaraskan ke skala revisi 0.9x + H2 final `clamp(26px,2.6vw,32px)` (8 Agustus 2026). Skala lama seluruh section diturunkan; Pillars H2 diturunkan dari 36px.
- [ ] Halaman lain (Digital Labs, EFM, Brand Incubation, Educational Alliance, Investment Ventures, Tentang Kami) — belum diturunkan ke skala 0.9x baru; masih pakai skala lama. Perlu retrofit terjadwal agar konsisten dengan Home (di luar scope task Home ini).
- [x] BNJ Digital Labs — sudah diaudit ulang dan dikonfirmasi sesuai tabel ini (Hero H1 sempat drift ke 30px/46px extrabold, sudah diperbaiki ke 32px/48px bold sesuai standar)
- [x] EFM — sudah diaudit, Hero H1 dikonfirmasi sudah sesuai standar sejak awal (32px/48px)
- [x] Brand Incubation & Business Acceleration — sudah diaudit, sesuai standar
- [x] Strategic Educational Alliance — sudah diaudit (card description 13px→14px, Hero H1 disesuaikan ke standar)
- [x] Wellness & Sport Investment Ventures — sudah diaudit, sesuai standar
- [ ] Tentang Kami — dibangun mengikuti standar ini sejak awal, tapi belum melalui audit formal satu-per-satu terhadap tabel ini — perlu dikonfirmasi eksplisit
- [ ] Home, Portofolio & Klien, Berita, Karir, Kontak — belum dibangun/belum diaudit

*Update checklist ini setiap kali satu halaman selesai diselaraskan.*
