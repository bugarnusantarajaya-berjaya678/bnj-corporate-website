# BNJ Website — Section Type → Pattern Mapping

Dokumen referensi singkat. Dipakai setiap kali membangun atau mereview section baru di Claude Design, supaya pola visual konsisten di semua halaman (Ekosistem Bisnis, Portofolio & Klien, Berita, dan seterusnya).

---

## 1. Hero (section paling atas halaman)

- Background: foto full-width dengan overlay gradasi biru gelap → transparan (untuk keterbacaan teks putih di atas foto).
- Divider di bagian bawah Hero: garis diagonal tebal + aksen tri-warna (Corporate Blue → Growth Green → Digital Blue), urutan warna konsisten kiri-ke-kanan.
- **Tidak pakai** garis vertikal hijau atau angka transparan.
- **Badge pill kategori** (kotak kecil icon + label uppercase, mis. "BNJ DIGITAL LABS", "ESSENTIAL FITNESS MANAGEMENT") — **WAJIB ADA** di atas headline untuk semua halaman pilar/sub-halaman. **Kecuali Home** — Hero Home sengaja tanpa badge pill karena headline-nya sendiri sudah jadi anchor utama tanpa perlu kategori (halaman utama, bukan sub-halaman spesifik).
- **Badge info/meta** (opsional, di bawah paragraph Hero — beda dari badge kategori di atas headline): kotak pill dengan border tipis putih semi-transparan, background putih sangat transparan/blur (frosted glass effect), icon kecil + teks di dalam satu kotak yang sama. Dipakai untuk highlight status singkat (mis. tanggal aktif kemitraan, target pengembangan) — maksimal 2 badge berdampingan. Animasi subtle floating (naik-turun sangat pelan, idle motion terus-menerus, amplitudo ~4-6px, durasi 3-4 detik per siklus) — konsisten dengan gaya animasi halus Home, bukan bounce/elastic.
- **Layout badge info/meta:** default sejajar 1 baris horizontal (flex-row, gap secukupnya, lebar container mengikuti total lebar kedua badge — tidak dipaksa full-width). Badge HANYA boleh stack vertikal (flex-col) di breakpoint mobile (<768px) sesuai §11 Responsive Behavior — di tablet dan desktop harus tetap 1 baris.
- Tombol: 1 primary filled saja. Tidak perlu secondary di Hero.

## 2. Section teks + foto berdampingan (zigzag layout)

Contoh: Konsultasi Online, Terapi & Fisioterapi (BNJ Digital Labs); section detail pilar di halaman pilar lain.

- Background section: putih/netral — **tidak boleh** solid warna penuh.
- Sisi teks diberi garis vertikal tebal 5px Growth Green (#6AA84F).
- Angka besar dekoratif transparan (01, 02, 03...) di belakang teks, konsisten dengan pola 4-Pilar homepage.
- Posisi foto/teks selang-seling antar section berurutan (A: teks-kiri/foto-kanan → B: foto-kiri/teks-kanan). Posisi garis vertikal + angka ikut menyesuaikan sisi teks.
- Divider antar-section: garis horizontal tipis (2-3px) full-width gradasi tri-warna, bukan diagonal pendek.

## 3. Grid kartu (spesialisasi, pilar, program, dsb.)

Contoh: "4 Program Spesialisasi", grid 4-Pilar homepage.

- Label kecil uppercase di atas heading section (mis. "SPESIALISASI LAYANAN") — cukup ini saja sebagai penanda kategori.
- **Tidak pakai** garis vertikal hijau di section ini — fungsinya sudah digantikan oleh grid card itu sendiri.
- Card: flat fill, border tipis atau single top-accent, tanpa drop shadow (sesuai Design Playbook).
- **Exception khusus Home:** card di grid "4 Pilar Bisnis" boleh dapat drop shadow **saat hover saja** (bukan permanen/idle state) — treatment interaktif khusus Home, lihat catatan di §1.

## 3a. Spotlight Card (exception resmi — boleh shadow & rounded)

Contoh: "Keunggulan Utama" (BNJ Digital Labs), kartu Program 1 "ECA Aspire" (Strategic Educational Alliance), kartu Core Values B.N.J (Tentang Kami).

- Dipakai untuk kartu yang **sengaja dibuat menonjol** dari grid biasa — biasanya 1-3 kartu besar yang membawa pesan paling penting di section itu, bukan grid banyak-item.
- **Boleh** pakai border lebih tebal + shadow lembut + sudut membulat (rounded corner) — ini pengecualian resmi dari aturan flat-card biasa (§3), bukan bug.
- Ciri khas tambahan: garis aksen tri-warna tipis di tepi atas kartu, icon besar di pojok kiri atas (bukan icon kecil seperti grid biasa).
- Jangan dipakai berlebihan — kalau semua kartu di satu grid pakai treatment ini, efek "menonjol"-nya hilang. Maksimal dipakai untuk grid kecil (1-3 kartu), bukan grid besar (4+ kartu).

## 3b. Grid Kartu Bertingkat (Program Besar + Sub-Grid Detail)

Contoh: "B2B Management" (Community Wellness Program + Facility Management, masing-masing dengan sub-grid detail), "Event Management" (intro + grid 3 layanan) di halaman EFM.

- Level 1: card besar (icon + judul + body ringkas) sebagai kategori utama — bisa 1 atau lebih card berdampingan.
- Level 2: sub-grid detail di bawah tiap card besar, item lebih kecil (icon kecil + label singkat), mengikuti struktur grid §3 (flat fill, tanpa shadow).
- Dipakai kalau satu topik punya breakdown detail yang terlalu banyak untuk 1 card body text saja (lebih dari 3-4 poin), tapi tetap perlu dikelompokkan biar tidak jadi grid rata 8+ item tanpa struktur.
- Kalau sub-grid detail lebih dari 4 item, pecah jadi 2 sub-grid dengan sub-label masing-masing (mis. "Kondisi & Lingkungan Fasilitas" vs "Operasional & Outdoor") — bukan satu grid 8 kolom yang membingungkan.

## 4. Roadmap / Timeline (kondisional — lihat kriteria di bawah)

Contoh: section "Roadmap Pengembangan" di Brand Incubation & Business Acceleration, Strategic Educational Alliance, BNJ Digital Labs.

**Kapan dipakai (kriteria wajib, bukan template default):**

- Hanya untuk pilar/halaman yang punya pergeseran status nyata dari waktu ke waktu (mis. 2026 aktif terbatas → 2027 ekspansi). Section ini bukan dekorasi standar yang dipasang di semua halaman.
- **Jangan dipasang** di halaman yang sudah aktif penuh tanpa pergeseran status (mis. EFM).
- Untuk halaman yang statusnya belum jelas progresinya (mis. Investment Ventures), konfirmasi dulu isi konkret sebelum section ini dibuat — jangan diisi placeholder generik.

**Struktur visual:**

- Divider tri-warna tipis (2px, gradasi Corporate Blue → Growth Green → Digital Blue) di atas section, sama seperti divider antar-section biasa.
- Label kategori uppercase kecil (eyebrow): tidak lagi pakai teks tetap "ROADMAP PENGEMBANGAN" di semua halaman — pilih kata sesuai konteks section (mis. "ARAH PENGEMBANGAN", "ARAH INVESTASI"), maksimal 2 kata, dan hindari mengulang kata kunci yang sudah dipakai di heading besar di bawahnya. Penentuan kata final dilakukan langsung saat editing di Claude Design, fleksibel per halaman.

## 5. Badge Row — Highlight Kualitatif (kondisional)

Contoh: baris badge kecil di bawah paragraph intro pada section "Jaringan Expert Multi-Disiplin" (Strategic Educational Alliance) dan "BNJ Vitality Intelligence" (BNJ Digital Labs) — badge seperti "Multi-Disiplin", "Kolaborasi Expert & Akademisi", "Data Terintegrasi", "Analitik Berbasis AI".

**Kapan dipakai:**

- Khusus untuk section visi/roadmap (target 2027-2028 atau periode mendatang) yang **belum punya angka KPI konkret** — ini pengganti Stat Card Overlay Photo (§7) untuk situasi tanpa data pasti.
- Jangan pernah diisi angka yang dikarang/diasumsikan (mis. "50+ expert", "Q2 2027") — badge harus murni kata kualitatif, bukan statistik.
- Begitu ada angka target resmi yang dikonfirmasi, section ini bisa diupgrade jadi Stat Card Overlay Photo (§7) dengan angka sungguhan.

**Struktur visual:**

- 3 badge pill kecil disusun horizontal, posisi tepat di bawah paragraph intro sebelum masuk ke sub-section detail.
- Background pill: warna soft/transparan (tint Corporate Blue atau Growth Green sangat muda), teks warna solid Corporate Blue, ukuran font kecil, padding ringkas.
- Maksimal 3 badge per row — lebih dari itu jadi ramai dan kehilangan fungsi "highlight cepat".

## 6. Milestone Timeline (kondisional — 2 varian)

Contoh: section "Milestone Essential Fitness Management" — histori tahun-per-tahun (2017-2025) berisi pencapaian nyata perusahaan.

**Beda dengan Roadmap/Timeline (§4):**

- Roadmap (§4) = untuk **masa depan**, horizontal, maksimal 3-4 titik (mis. "2026 vs 2027-2028").
- Milestone Timeline (§6) = untuk **histori masa lalu yang sudah terjadi**, bisa lebih dari 4 titik (5 titik ke atas) — dipakai kalau perusahaan/unit bisnis punya track record panjang yang layak ditunjukkan.

**Kapan dipakai:**

- Hanya untuk entitas dengan histori tahun-per-tahun yang terdokumentasi nyata (bukan diringkas jadi 2-3 poin generik). Kalau histori cuma 1-2 titik waktu penting, cukup masukkan sebagai bagian dari body text biasa, tidak perlu komponen timeline khusus.
- Semua entri harus berbasis fakta terverifikasi (nama klien/mitra, tahun, jenis kerjasama) — jangan dirangkum jadi klaim vague tanpa detail.

### Varian A — Histori Vertikal (default)

- Garis vertikal tipis di sisi kiri, dengan dot marker solid Corporate Blue di tiap titik tahun.
- Tiap entri: tahun (bold, besar) + judul singkat (mis. "Fondasi Awal", "Ekspansi Klien Nasional") + deskripsi 1-2 kalimat.
- Bisa scroll vertikal natural mengikuti panjang halaman — tidak perlu dipadatkan jadi horizontal scroll yang butuh interaksi tambahan.
- Background section: putih/netral, garis vertikal warna Corporate Blue dengan opacity penuh (bukan gradasi tri-warna seperti Roadmap §4 — ini murni linimasa, bukan progress bar menuju masa depan).

### Varian B — Carousel Horizontal (dipakai di EFM)

- Layout 2 kolom per slide: foto besar kiri, teks kanan (tahun besar bold Corporate Blue, judul milestone, deskripsi 1-2 kalimat).
- Progress bar scrubber horizontal di bawah slide: satu bar tipis per milestone, bar aktif solid Corporate Blue, bar lain abu-abu (#E3E7EC).
- Autoplay dengan progress bar terisi bertahap sebagai indikator waktu, tombol pause/play di tengah progress bar.
- Navigasi manual: panah kiri-kanan di kedua sisi. Card center-aligned dengan max-width (~900-1000px), tidak mepet ke satu sisi.
- Preview slide berikutnya terpotong sedikit di tepi kanan, memberi sinyal ada konten lanjutan.
- Background section: putih/netral, sama seperti Varian A.

**Kapan pakai varian mana:** Varian A untuk histori singkat/sederhana tanpa kebutuhan foto kuat per momen; Varian B untuk histori panjang (6+ entri) dengan foto pendukung yang kuat per momen, seperti EFM.

## 7. Stat Card Overlay Photo (kondisional)

Contoh: section snapshot perusahaan di halaman Ekosistem Bisnis/Tentang Kami (foto tim/kantor + kartu mengambang berisi angka: "4 Pilar bisnis terintegrasi", "200+ Klien korporat & personal", "2017 Beroperasi sejak").

**Kapan dipakai:**

- Untuk memberi kredibilitas cepat pada entitas yang sedang dijelaskan (perusahaan induk, pilar bisnis, atau divisi seperti BNJ Digital Labs) — bukan dekorasi foto biasa.
- Boleh dipakai di lebih dari satu halaman, **tapi angka yang ditampilkan wajib kontekstual ke entitas halaman tersebut** — dilarang menduplikasi angka level-perusahaan (4 Pilar, 200+ klien, 2017) di halaman pilar/divisi, karena akan menyesatkan (mis. membuat pilar yang baru aktif 2026 terlihat sudah berjalan sejak 2017).

**Struktur visual:**

- Foto dasar (placeholder atau foto asli tim/kantor/aktivitas) dengan sudut membulat halus.
- 2-3 kartu kecil mengambang (posisi absolute di atas/di luar tepi foto), tiap kartu: icon kecil + angka besar bold Corporate Blue + label kecil abu-abu di bawahnya.
- Kartu memakai background putih solid dengan border/shadow tipis supaya kebaca jelas di atas foto apapun.
- Jumlah kartu maksimal 3 — lebih dari itu jadi ramai dan kehilangan fungsi "sekilas info".

**Yang perlu dicek sebelum dipasang (pelajaran dari kasus BNJ Digital Labs):**

- Jangan pasang section ini kalau angka-angkanya sudah tersampaikan di Hero (badge) atau di heading grid tepat di bawahnya — kalau sudah ada, section ini jadi pengulangan yang membingungkan, bukan penguat.
- Foto dasar harus benar-benar merepresentasikan isi section (mis. aktivitas produk digital, bukan foto jabat tangan generik). Foto jabat tangan formal/penandatanganan berisiko terbaca sebagai dokumentasi MoU sungguhan — jangan dipakai kecuali memang ada kemitraan resmi yang dikonfirmasi.

## 8. CTA penutup (section terakhir sebelum Footer)

- Background: solid Corporate Blue — ini adalah satu-satunya exception resmi untuk background solid penuh warna.
- Garis vertikal tebal 5px Growth Green di sisi teks, + label kategori uppercase kecil di atasnya.
- Dua tombol: primary (fill putih, teks Corporate Blue) + secondary (outline putih transparan).
- Elemen dekoratif opsional: grafik line-art tipis, opacity sangat rendah (~8%), di sudut kosong — bukan pengisi paksa.
- Divider di atas section: garis horizontal tipis tri-warna, sama seperti pembatas antar-section biasa.

## 9. Footer

- Background: solid Corporate Blue, menyatu dengan CTA penutup sebagai satu "closing block".
- Dipisahkan dari CTA dengan garis putih tipis 1px, opacity 20-30%, full-width — posisi tepat di batas bawah CTA / atas Footer.
- Wajib ada di SETIAP halaman yang punya CTA penutup + Footer (bukan cuma Home) — cek item ini di Design Parity Audit setiap kali halaman baru dibangun.

## 10. Navbar / Header (persist saat scroll)

- Tombol kontak di navbar: kecil, outline atau text-button, warna Corporate Blue di atas navbar putih.
- **Bukan** filled/solid — filled button direservasi untuk Hero dan CTA penutup saja, supaya moment konversi utama tidak "tenggelam" karena tombol serupa muncul di semua tempat.
- Dropdown menu (mis. "Ekosistem Bisnis"): harus otomatis tertutup saat user scroll halaman, klik di luar area dropdown, atau berpindah ke link lain — tidak boleh "nyangkut" terbuka sampai diklik ulang manual.

## 11. Kondisi Samar / Coming Soon (khusus BNJ Digital Labs — bukan pola umum)

Contoh: section "4 Fitur Utama Tersedia" dan "2 Keunggulan Utama" di sub-section BNJ Vitality Intelligence (halaman BNJ Digital Labs).

**Kapan dipakai:**

- HANYA untuk section di halaman BNJ Digital Labs yang isinya konsep/fitur produk digital yang belum diluncurkan resmi dan sengaja belum dibuka detailnya ke publik untuk alasan proteksi ide/kompetitif.
- **Jangan dipakai di halaman lain** tanpa konfirmasi eksplisit dari Bagoes — ini bukan pola default untuk semua "section masa depan/2027-2028" di seluruh website (bandingkan dengan Badge Row §5 dan Roadmap §4 yang tetap terbuka penuh, cuma beda pola visual, bukan disembunyikan).
- Timeline/badge terkait tetap pakai angka tahun yang jujur (mis. "2026-2027") — yang disamarkan adalah detail konsep/fitur, bukan status aktif-tidaknya inisiatif.

**Struktur visual:**

- Foto card: greyscale + blur ringan (~4-6px blur), tidak dihapus total — tetap ada bentuk/siluet supaya terlihat "belum dibuka" bukan "rusak/error".
- Label pill kecil "Detail Segera Hadir" + icon lock, posisi pojok kanan atas tiap card.
- Judul fitur/keunggulan: tetap terbaca jelas, TIDAK di-blur (ini yang boleh dibuka — nama fitur, bukan cara kerja detailnya).
- Deskripsi paragraf dan detail tag pendukung (mis. "Analisis Postur Tubuh", "VO2 Max"): di-blur/pudar mengikuti tingkat blur foto.
- Border dan struktur card lain (top-accent tri-warna untuk Spotlight Card §3a) tetap dipertahankan — treatment ini menambah lapisan visual "samar", bukan mengganti struktur card yang sudah ada.

**Implementasi teknis:** dikontrol lewat satu boolean flag di kode (bukan halaman/duplikat terpisah) — mis. `const VITALITY_COMING_SOON = true`. Saat BNJ Vitality Intelligence resmi diluncurkan, ubah flag ini jadi `false` untuk otomatis menampilkan versi full-reveal (foto normal, badge lock hilang, semua teks terbaca) tanpa perlu membangun ulang section dari nol.

## 12. Logo Klien & Mitra (Grid Logo)

Contoh: section "Klien & Mitra Kami" di halaman EFM dan Home.

- Container fixed-size seragam untuk semua logo, 2 varian: square/rounded (logo icon-only, mis. AIA, Jagapati) dan landscape/wide (logo wordmark, mis. Trans TV, Telin, PT Suri Nusantara Jaya).
- Logo di dalam container pakai `object-fit: contain`, center otomatis, padding internal 16-24px.
- Ukuran container SAMA untuk semua logo di grid meski file asli beda rasio/resolusi — supaya grid rapi tanpa perlu edit file logo asli.
- Tidak mengubah/merekonstruksi file logo asli (termasuk lambang resmi instansi pemerintah) — hanya styling container. Kalau kualitas file asli rendah, minta versi resolusi lebih tinggi dari partner terkait, bukan generate ulang lewat AI.
- Kalau section ini pakai efek marquee/scroll otomatis (looping horizontal terus-menerus), logo boleh terpotong di kedua tepi viewport — itu bagian dari efek seamless loop, bukan bug. Kalau statis (tidak bergerak), grid harus mengikuti max-width halaman yang sama dengan section lain, tidak boleh full-bleed edge-to-edge.
- Ukuran tiap logo boleh disesuaikan manual per logo (tidak seragam 1:1) kalau ada logo yang secara visual terlihat lebih kecil/besar dari yang lain meski container sama besar (mis. logo dengan banyak padding internal alami) — tujuannya supaya keseluruhan grid terlihat seimbang secara visual, bukan cuma seragam secara teknis.

## 13. Copywriting Style (berlaku lintas seluruh website)

**Tanda baca:**

- **Jangan pakai tanda em-dash (—)** di body text manapun — ganti dengan kalimat terpisah (titik), koma, atau kata penghubung natural ("dan", "yang", "sehingga"). Em-dash terlihat sebagai ciri khas tulisan AI dan mengurangi kesan tulisan manusiawi/editorial BNJ.
- Berlaku untuk SEMUA copy baru dan revisi ke depan, di semua halaman — bukan cuma halaman yang sedang direvisi saat aturan ini dibuat.
- Saat mengaudit/merevisi halaman apapun, sekalian scan seluruh teks di halaman itu untuk tanda em-dash yang tertinggal dari draft sebelumnya, meski tidak diminta eksplisit.

---

## Aturan lintas-section (berlaku di semua tipe di atas)

- Background solid warna penuh (biru/hijau) **hanya boleh** di CTA penutup dan Footer. Section lain tetap putih/netral, warna brand jadi aksen tipis saja (garis, icon, border).
- Satu section = satu pola. Jangan gabungkan garis vertikal hijau dengan label kategori grid, atau sebaliknya — tiap pola berlaku untuk tipe section yang berbeda supaya tetap punya makna, bukan dekorasi acak.
- Divider antar-section tengah halaman: selalu garis horizontal tipis (2-3px) gradasi tri-warna. Diagonal tebal direservasi khusus untuk bawah Hero.
