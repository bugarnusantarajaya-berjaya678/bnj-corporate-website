# BNJ Corporate Website — Aturan Kerja Claude Code

Project: `bnj-corporate-website` (Next.js/TypeScript/Tailwind). File ini dibaca
otomatis di awal sesi — berlaku untuk SEMUA task di project ini, tidak perlu
diulang manual di tiap prompt.

Referensi lain yang tetap wajib dibaca sesuai konteksnya (tidak digantikan
file ini): `.claude/skills/bnj-design-parity/SKILL.md`,
`docs/BNJ_Section_Pattern_Mapping.md`, `docs/BNJ_Typography_Standard.md`.

---

## Klasifikasi Scope — WAJIB ditentukan sebelum mulai kerja

Setiap task masuk salah satu dari 3 level ini. Kalau prompt dari Bagoes tidak
mencantumkan label scope secara eksplisit, tentukan sendiri berdasarkan sifat
perubahan (lihat kriteria di bawah) — jangan default ke level paling berat
"untuk jaga-jaga".

### MINOR
Ciri-ciri: ubah 1 nilai (warna, spacing, ukuran font, 1 baris teks/copy),
ganti 1 path foto, toggle 1 boolean flag.

**Aturan:**
- Edit LANGSUNG ke file component yang disebutkan/sudah diketahui by path.
- JANGAN fetch Claude Design MCP.
- JANGAN baca file component lain yang tidak disebutkan di prompt.
- JANGAN baca file asset (foto/gambar) — cukup ganti reference path-nya.
- Cukup `grep`/`search` untuk cari lokasi kalau path belum pasti, jangan
  buka seluruh file besar untuk cari 1 baris.

### MEDIUM
Ciri-ciri: ubah struktur 1 section (layout, tinggi container, responsive
behavior), tambah/ubah logic 1 komponen, perbaikan bug pada komponen yang
sudah ada.

**Aturan:**
- Baca HANYA file component yang disebutkan di prompt (maksimal 1-3 file
  terkait langsung, mis. komponen + parent-nya kalau perlu).
- JANGAN fetch penuh `.dc.html` dari Claude Design MCP kecuali prompt
  eksplisit minta "re-fetch referensi" atau "verifikasi ulang ke Claude
  Design" — kalau tidak diminta, anggap spec sudah cukup dari teks prompt.
- Boleh baca `docs/BNJ_Section_Pattern_Mapping.md` atau
  `docs/BNJ_Typography_Standard.md` HANYA kalau prompt menyebut nomor
  section pattern tertentu (mis. "§4", "§14") dan detailnya belum jelas
  dari prompt itu sendiri.

### MAJOR
Ciri-ciri: section/halaman baru dari nol, handoff pertama kali dari Claude
Design, migrasi struktur besar (rename banyak file, restrukturisasi folder).

**Aturan:**
- Ini satu-satunya level yang butuh fetch MCP penuh + baca asset terkait +
  baca skill/docs lengkap sebelum mulai — proses lengkap seperti biasa.
- Tetap upayakan baca seperlunya: kalau prompt sudah mencantumkan spesifikasi
  lengkap (struktur, konten, style) secara tertulis, itu sumber utama —
  fetch MCP untuk verifikasi visual/cross-check, bukan untuk menggali ulang
  spec yang sudah ada di prompt.

---

## Prinsip Umum

- Kalau ragu antara MINOR dan MEDIUM, pilih yang lebih ringan dulu — kalau
  ternyata kurang informasi, baru baca file tambahan seperlunya (baca
  bertahap/on-demand), bukan baca semua di awal "untuk jaga-jaga".
- Jangan re-read file yang barusan diedit di step sebelumnya dalam sesi yang
  sama kecuali ada indikasi file itu berubah dari luar (mis. hasil tool lain).
- Laporan akhir tetap ringkas: apa yang diubah, file mana saja yang disentuh
  — tidak perlu menulis ulang isi file yang tidak berubah.
- Aturan token-efficiency ini TIDAK berlaku untuk Design Parity Check
  (A-G) di SKILL.md — audit itu memang harus menyeluruh by design, jangan
  dipangkas.
