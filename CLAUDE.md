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
- **Kalau prompt eksplisit bilang "JANGAN commit/push, test lokal saja"**:
  ini berlaku SAMPAI ada instruksi lanjutan eksplisit dari Bagoes — jangan
  commit/push otomatis di akhir langkah meski semua verifikasi (tsc/eslint/
  screenshot) lulus. Laporkan hasil, tunggu keputusan.
- **Di awal task yang menyentuh file dengan riwayat commit/push** (bukan
  MINOR 1 nilai): cek `git status` untuk perubahan uncommitted yang
  PRE-EXISTING (bukan dari task yang sedang dikerjakan sekarang) — laporkan
  temuannya ke Bagoes secara eksplisit, jangan diam-diam ikut ter-commit atau
  diabaikan begitu saja. Insiden nyata: 22 file foto orphan sempat tidak
  disadari tersimpan sebagai uncommitted deletion selama beberapa sesi.
- **Saat merestrukturisasi layout/style bagian yang SUDAH ADA** (bukan
  membangun section baru dari nol): audit elemen visual lama (border/
  divider/padding/class) yang mungkin jadi basi dan tidak lagi relevan
  dengan struktur baru — jangan cuma menambah kode baru di atas sisa kode
  lama tanpa dicek. Insiden nyata: hairline sisa dari struktur lama
  "Artikel Terkait" (sebelum jadi sidebar `position: absolute`) sempat
  tertinggal dan muncul sebagai divider tak terduga di halaman Detail
  Artikel.

---

## Bug Pattern Diketahui — Wajib Dicek Kalau Relevan

### Logo/PNG transparan kecil menampilkan kotak hitam sesaat (flicker)

**Gejala:** logo atau gambar PNG transparan kecil (terutama di Navbar, Footer,
atau marquee logo klien) sesekali menampilkan kotak hitam solid sebelum
akhirnya render normal — hilang setelah refresh, tapi muncul lagi secara acak
di kondisi network lambat atau cache miss.

**Akar masalah:** Next.js Image Optimizer (`next/image` dengan optimasi
default) me-render ulang PNG transparan secara dinamis lewat endpoint
`/_next/image?...`, dan proses ini kadang gagal menghasilkan output yang
konsisten — BUKAN file logo yang rusak.

**Fix standar:** tambahkan prop `unoptimized={true}` pada komponen `<Image>`
untuk logo/PNG transparan kecil yang terkena gejala ini, supaya file
disajikan langsung dari `/_next/static` (byte-identik dengan source, tanpa
re-encode). Sudah diterapkan di: `Navbar.tsx` (logo desktop + panel mobile,
plus `priority={true}` untuk logo Navbar agar dimuat lebih dulu), `Footer.tsx`,
`ekosistem-bisnis/efm/ClientsPreview.tsx`.

**Kalau menemukan gejala serupa di komponen lain** (logo/PNG transparan kecil
manapun yang belum ditangani di atas): terapkan fix yang sama (`unoptimized`)
langsung, tidak perlu didiagnosis ulang dari nol — pola dan akar
penyebabnya sudah diketahui.

**Verifikasi wajib setelah fix:** file yang disajikan byte-identik dengan
source (cek `colorType`/ukuran file), `Content-Type: image/png` (bukan hasil
re-encode), 0 path `/_next/image?...` untuk file terkait di halaman yang
sudah diperbaiki, dan `tsc --noEmit` bersih.

### CTA Flagship tier: implementasi manual per halaman menyebabkan drift dari versi resmi

**Gejala:** CTA penutup di halaman baru (khususnya Flagship tier: Home,
Tentang Kami, Berita) terlihat "mirip tapi tidak identik" dengan halaman
Flagship lain — divider salah bentuk (garis lurus alih-alih wave), decorative
circles hilang, atau hairline pemisah ke Footer tidak ada.

**Akar masalah:** CTA diimplementasikan ulang secara manual/lokal per
halaman (duplikat kode), bukan reuse 1 komponen bersama — kejadian ini
pernah terjadi persis di halaman Berita (CTA awal dibangun mengikuti default
pillar tier di dokumen, padahal keputusan Bagoes memasukkan Berita ke
Flagship tier).

**Fix standar:** SELALU import `src/components/ClosingCta.tsx` untuk halaman
Flagship tier (Home, Tentang Kami, Berita, dan halaman induk/hub lain ke
depan bila diputuskan serupa — cek `docs/BNJ_Section_Pattern_Mapping.md` §8
untuk daftar tier terkini). JANGAN buat implementasi CTA baru/terpisah untuk
halaman flagship manapun. Untuk pillar tier (EFM, Digital Labs, ECA Aspire,
Investment Ventures, Brand Incubation), CTA tetap file lokal per halaman
(garis lurus tri-warna, bukan wave) — ini bukan bug, itu tier yang berbeda,
jangan disamakan paksa ke wave.

**Verifikasi wajib:** screenshot CTA di halaman baru dan bandingkan
piksel-identik (wave/garis, posisi lingkaran dekoratif, ukuran heading, 2
tombol) dengan halaman Flagship/Pillar lain yang sudah lulus audit, di
breakpoint yang sama.

### Eyebrow (label kategori uppercase) di-restyle manual alih-alih pakai token bersama

**Gejala:** eyebrow di 1 section terlihat sedikit beda dari section lain
(letter-spacing lebih lebar, weight lebih tipis) meski warna dan ukuran font
terlihat mirip sekilas dari screenshot biasa. Varian lain: eyebrow duplikasi
kata kunci dengan heading tepat di bawahnya (mis. eyebrow "VIDEO" + heading
"Video BNJ") — lihat `docs/BNJ_Section_Pattern_Mapping.md` §Eyebrow Label
untuk aturan pemilihan kata, bukan cuma styling.

**Akar masalah:** eyebrow di-style inline/manual per komponen (mis.
`font-medium tracking-[0.2em]`) alih-alih memakai class `.bnj-eyebrow` yang
sudah didefinisikan di `globals.css` (font-semibold/600, tracking 0.05em,
sesuai `BNJ_Typography_Standard.md`).

**Fix standar:** SELALU pakai `<p className="bnj-eyebrow">` untuk label
kategori on-white di section manapun (Section Heading maupun Page Header §0)
kecuali eyebrow yang menempel langsung di Hero/badge kategori foto — itu
boleh exception tracking 0.2em, tapi weight tetap wajib 600, bukan 500.
Untuk eyebrow di atas background gelap (mis. CTA on-dark pillar tier), JANGAN
pakai `.bnj-eyebrow` mentah (hardcode warna Corporate Blue solid, akan
hilang kontras di atas gelap) — pakai `font-semibold tracking-[0.05em]`
dengan warna terang khusus (mis. `text-[#9FC9E8]`) sesuai pola ClosingCta
on-dark yang sudah ada di halaman pilar.

**Status migrasi (cek sebelum asumsi konsisten):** sudah diselaraskan ke
`.bnj-eyebrow` di Home, Tentang Kami, Berita (13 lokasi, commit 4130717 +
10deef6). BELUM diselaraskan di Portofolio, Karir, dan semua halaman
`ekosistem-bisnis/` (EFM, Digital Labs, ECA Aspire, Investment Ventures,
Brand Incubation) — ini sengaja ditahan untuk fase audit Ekosistem Bisnis
terjadwal terpisah, JANGAN diasumsikan sudah konsisten di sana.

### Asset foto: jangan asumsikan struktur folder dari dokumen/katalog atau dari halaman lain

**Gejala:** prompt meminta "reuse foto dari halaman X" atau "pakai foto
kategori Y", tapi ternyata tidak ada file yang bisa direferensikan dengan
path itu.

**Akar masalah:** ada 3 sumber yang bisa menyesatkan kalau dipercaya tanpa
verifikasi: (a) `BNJ_AI_Asset_Catalog.md` berisi rencana nama file awal yang
bisa sudah tidak sinkron dengan file aktual di repo; (b) asumsi folder
`public/images/Page-*/` per halaman ternyata tidak selalu ada — sebagian
halaman baru (mis. Berita) cuma punya aset generik `bnj-photo-1..8.webp`,
tanpa folder khusus per kategori; (c) `<image-slot>` di Claude Design
menyimpan data foto terkunci per-instance/per-id, TIDAK bisa
direferensikan atau disalin silang ke halaman lain lewat kode — beda dari
file project biasa yang punya path.

**Fix standar:** SELALU cek isi folder `public/images/` yang sungguhan di
repo (`ls`/`view` langsung) sebelum mereferensikan path foto apapun ke
prompt atau ke kode — jangan percaya dokumen katalog, jangan asumsi nama
folder dari pola halaman lain, dan jangan berharap bisa "meminjam" data foto
dari `<image-slot>` Claude Design halaman lain.

**Verifikasi wajib:** laporkan path foto yang benar-benar dipakai (bukan
yang direncanakan) untuk tiap slot, supaya Bagoes bisa cross-check kesesuaian
sebelum final.

### Data test/dummy sementara ikut ter-commit karena lupa di-revert

**Gejala:** setelah task testing yang sengaja menambah data dummy/test (mis.
link YouTube asli untuk uji embed, artikel seed tambahan untuk uji scroll),
commit berikutnya (task lain, tidak terkait) ternyata ikut membawa data test
itu karena belum di-revert manual — sempat terjadi 2x di sesi yang sama
(insiden `youtubeId: "UntmcBHG7VM"` dan insiden 14+ artikel EFM seed demo).

**Akar masalah:** instruksi "JANGAN commit/push, ini test lokal" tidak
disertai langkah verifikasi eksplisit sebelum task berikutnya yang menyentuh
file sama dimulai — status revert diasumsikan sudah beres padahal belum,
atau baru sebagian (mis. grep cuma cari 1 marker tapi ada marker lain yang
terlewat).

**Fix standar:** SETIAP kali prompt menyebut "JANGAN commit/push, test lokal
saja" untuk data sementara, WAJIB catat marker unik di komentar kode (mis.
`// DEMO-ONLY SEED, JANGAN COMMIT`) DAN jalankan `grep -rn "<marker>" src/`
di AWAL task berikutnya yang menyentuh file sama, SEBELUM melakukan apapun —
jangan asumsikan revert sudah beres hanya karena laporan sebelumnya bilang
begitu.

**Verifikasi wajib:** sebelum commit APAPUN yang menyentuh file yang pernah
dipakai untuk testing, jalankan grep untuk semua marker "DEMO-ONLY"/"JANGAN
COMMIT"/data test unik lain yang pernah dipakai di sesi tersebut — hasil
harus 0 match. Kalau tidak yakin markernya apa saja, telusuri riwayat
instruksi task-task sebelumnya di sesi yang sama.

### List/container scroll internal panjang: `flex-1` gagal, wajib `absolute inset-0`

**Gejala:** container yang dimaksudkan untuk scroll internal dengan tinggi
tetap (mis. sidebar/list yang di-expand lewat tombol "Muat Lebih Banyak")
malah ikut memanjang mengikuti jumlah konten, bukan membatasi tinggi dan
menampilkan scrollbar internal.

**Akar masalah:** implementasi memakai `flex-1` di dalam parent `flex`
dengan `align-items: stretch` (default) — properti ini membuat container
ikut tumbuh mengikuti konten yang melebihi kapasitas, alih-alih
mempertahankan tinggi tetap dan membiarkan overflow di-handle scroll.

**Fix standar:** untuk SEMUA container yang butuh scroll internal dengan
tinggi tetap (list panjang, sidebar expand, dst — lihat
`docs/BNJ_Section_Pattern_Mapping.md` §3g Cap + Akordion + Scroll Internal),
gunakan `position: relative` pada wrapper bertinggi tetap + `position:
absolute; inset: 0` pada container scroll di dalamnya, BUKAN `flex-1`. Pola
ini sudah diverifikasi bekerja di 4 implementasi berbeda (Video sidebar,
Artikel Terkait sidebar, Artikel Lainnya, Daftar Artikel index) — reuse
langsung, jangan re-eksperimen dari nol.

**Verifikasi wajib:** ukur `scrollHeight` vs `clientHeight` container saat
expanded (`scrollHeight > clientHeight` = scroll internal aktif dengan benar,
bukan container yang ikut memanjang) — jangan cuma cek visual screenshot,
screenshot tidak membedakan apakah overflow di-handle scroll atau container
benar-benar membesar mengikuti konten.

### Layout 2-kolom dengan tinggi kolom timpang jauh — CSS Grid menyebabkan gap kosong

**Gejala:** section dengan layout 2-kolom (mis. konten utama + sidebar)
menghasilkan jarak kosong besar yang terasa tidak wajar sebelum section
berikutnya, padahal token spacing section (`--section-py`) sudah benar
diterapkan.

**Akar masalah:** CSS Grid 2-kolom biasa membuat tinggi ROW mengikuti kolom
TERTINGGI — kalau 1 kolom (biasanya sidebar dengan konten dinamis/expand)
jauh lebih tinggi dari kolom lain, section SETELAH grid ini baru bisa mulai
setelah kolom tertinggi selesai, menciptakan gap kosong di bawah kolom yang
lebih pendek.

**Fix standar:** untuk kasus ini, lihat `docs/BNJ_Section_Pattern_Mapping.md`
§17 Layout 2-Kolom Konten + Sidebar Independent-Height — pakai wrapper
`position: relative`, kolom utama tetap normal flow (menentukan tinggi
wrapper), kolom sidebar di-set `position: absolute; top: 0; right: 0` di
desktop/tablet (tidak ikut menentukan tinggi wrapper), balik ke `position:
static` di mobile (stack normal).

**Verifikasi wajib:** ukur jarak AKTUAL via `getBoundingClientRect` antara
akhir kolom utama dan awal section berikutnya (bukan dihitung di atas kertas
dari penjumlahan nilai CSS) — kegagalan sebelumnya terjadi karena klaim
"jarak sudah sesuai token" tanpa pengukuran langsung ke DOM sungguhan,
padahal ada sumber gap tambahan (mis. margin dobel dari 2 elemen berbeda)
yang tidak ketahuan tanpa diukur.