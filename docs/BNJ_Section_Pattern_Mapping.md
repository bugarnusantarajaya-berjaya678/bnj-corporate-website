# BNJ Website — Section Type → Pattern Mapping

Dokumen referensi singkat. Dipakai setiap kali membangun atau mereview section baru di Claude Design, supaya pola visual konsisten di semua halaman (Ekosistem Bisnis, Portofolio & Klien, Berita, dan seterusnya).

---

## 0. Page Header (halaman tanpa Hero foto)

Blok pembuka untuk halaman index/utility yang **tidak** punya foto Hero full-bleed di atas. Menggantikan fungsi Hero sebagai anchor pembuka halaman, tapi dengan bobot visual jauh lebih ringan (teks di atas background putih polos, bukan foto + overlay).

**Kapan dipakai:**

- Halaman index/utility tanpa foto Hero: **Kontak**, **Berita**, **Video** (`/berita/video`), dan halaman serupa ke depan (mis. **Karir** kalau memang tidak memakai foto Hero).
- **Bukan** untuk halaman pilar/sub-halaman yang sudah punya Hero foto sendiri (EFM, Digital Labs, dst) — itu tetap pakai Hero §1 + Section Heading H2 di dalamnya.

**Struktur:**

- **Eyebrow**: label kategori kecil uppercase, memakai **token yang sama persis dengan Label Kategori — on white** (12px, SemiBold, uppercase, letter-spacing +0.05em, warna Corporate Blue `#03428E`). Jangan di-restyle manual berbeda per halaman — pakai token/kelas bersama (`.bnj-eyebrow`) supaya identik dengan eyebrow section di halaman lain. **Untuk pemilihan KATA eyebrow (bukan styling-nya), wajib ikuti §Eyebrow Label — Aturan Penulisan.**
- **H1** (BUKAN H2): karena Page Header inilah yang menggantikan fungsi Hero sebagai judul utama halaman, head-nya adalah H1 dengan skala standar `clamp(27px, 3.4vw, 42px)` Bold (skala H1 di `BNJ_Typography_Standard.md`), bukan skala komposisi Hero (tanpa foto).
- **Subcopy**: 1 kalimat pendukung (body 15-16px), maksimal 1 baris kalimat.
- **Background**: putih polos (`#ffffff`).
- **Navbar**: solid putih dari awal (bukan transparan/overlay) — karena tidak ada foto Hero gelap di belakang navbar. Overlay transparan direservasi untuk halaman Flagship yang punya Hero foto (Home, Tentang Kami).
- **Breadcrumb** (opsional, kalau halaman ini punya induk jelas, mis. Video anak dari Berita): lihat §15, posisi di ATAS Page Header ini (antara Navbar dan eyebrow), BUKAN bagian dari Page Header itu sendiri.

**Beda dengan Section Heading:** Section Heading (judul section DI DALAM halaman yang sudah punya Hero sendiri) selalu pakai **H2** `clamp(26px, 2.6vw, 32px)`, bukan H1. Page Header pakai **H1** justru karena dia berdiri sendiri sebagai pengganti Hero di puncak halaman. Eyebrow-nya memakai token yang sama; yang beda hanya level heading di bawahnya (H1 vs H2).

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
- Pemisahan dari section sebelum/sesudah: TANPA garis (lihat §Divider & Pemisahan Section revisi 2026-08-08) — pakai whitespace + alternating tone.

## 3. Grid kartu (spesialisasi, pilar, program, dsb.)

Contoh: "4 Program Spesialisasi", grid 4-Pilar homepage.

- Label kecil uppercase di atas heading section (mis. "SPESIALISASI LAYANAN") — cukup ini saja sebagai penanda kategori. **Pemilihan kata eyebrow mengikuti §Eyebrow Label — Aturan Penulisan.**
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

## 3c. Icon Module — Representasi Unit/Kategori

Spec resmi tunggal untuk icon yang merepresentasikan **unit bisnis, divisi, program, atau kategori abstrak** di dalam grid-card atau list. Tujuannya supaya semua icon "kategori" identik di seluruh situs, bukan beda gaya per halaman.

(Catatan penomoran: idealnya section ini diberi nomor tersendiri; ditempatkan sebagai §3c karena berkaitan langsung dengan pola grid-card §3. Nomor §10 sudah dipakai Navbar/Header.)

**Kapan dipakai:**

- Grid-card / item yang icon-nya mewakili sebuah unit bisnis, divisi, program, layanan, atau kategori abstrak lain.
- **BUKAN** untuk: foto orang (mis. Struktur Kepemimpinan §14), dan **BUKAN** untuk icon fungsional kontak/navigasi (telepon, email, lokasi, jam, chevron, panah, search) di Header/Footer/carousel — itu icon utilitas, bukan representasi kategori.
- Catatan koeksistensi dengan §3: grid-card padat yang sudah memakai pola icon flat tinted box (`bg-[#03428E]/8`, single-layer) adalah pola §3 yang sah dan sudah diaudit. Icon Module ini dipakai untuk representasi unit/kategori yang ingin ditonjolkan (mis. headline representation), bukan mengganti seluruh icon grid §3 secara paksa. Migrasi antar keduanya = keputusan sadar per section, bukan otomatis.

**Spec (wajib persis, tanpa gradient/shadow/blur):**

- Container: bounding `43px` (`relative h-[43px] w-[43px]`) untuk menampung offset.
- Dua layer flat, masing-masing `40px` (`h-10 w-10`), rounded-square radius `10-12px` (implementasi: `rounded-[11px]`):
  - Layer belakang: solid Growth Green `#6AA84F`, offset `~3px` ke kanan-bawah (`absolute bottom-0 right-0`).
  - Layer depan: solid Corporate Blue `#03428E` (`absolute left-0 top-0`), icon putih di tengah, ukuran icon `18px` (`h-[18px] w-[18px] text-white`).
- **Satu icon library konsisten di seluruh situs: `lucide-react`.** Jangan campur library icon berbeda untuk pola ini.

**Contoh implementasi:** Corporate Growth Roadmap (Tentang Kami, `about/GrowthRoadmap.tsx`) dan Grid 4 Kartu Unit Bisnis (Kontak, `kontak/UnitContactBlock.tsx`).

## 3d. Featured + Sidebar Video (kondisional)

Contoh: halaman Video (`/berita/video`).

**Kapan dipakai:** khusus halaman/section berisi koleksi video yang butuh 1 video utama ditonton + daftar video lain sebagai referensi cepat (pola "up next"), bukan untuk grid konten setara (pakai pola §3 Grid kartu).

**Struktur visual:**

- Kiri: player video Featured, ukuran dominan (≥60% lebar container).
- Kanan: daftar sidebar scrollable (fixed height, scroll internal jika daftar panjang — implementasi teknis scroll internal ini generic, lihat §3g) — tiap item: thumbnail kecil + badge durasi + judul + waktu relatif.
- Klik item sidebar → **SWAP**: video tersebut pindah jadi Featured kiri, player langsung autoplay. Sidebar tidak expand di tempat.
- Filter kategori di atas section (jika ada) berlaku **global** — Featured dan Sidebar dua-duanya ikut ter-filter.
- Video default saat halaman pertama dimuat: video terbaru/paling relevan (setara "pinned", mirip pola Sorotan §3e di Berita), bukan acak.
- Mobile: Featured stack di atas (full-width), Sidebar jadi horizontal scroll di bawahnya (bukan vertical stack panjang).
- Thumbnail video: kalau `youtubeId` sudah terisi, ambil otomatis dari `https://i.ytimg.com/vi/{youtubeId}/hqdefault.jpg` (WAJIB `hqdefault`, bukan `maxresdefault` — tidak semua video punya resolusi itu, `hqdefault` selalu tersedia). Domain `i.ytimg.com` wajib di-allowlist di `next.config` (`images.remotePatterns`). Kalau `youtubeId` masih kosong/null, fallback ke foto placeholder statis.

## 3e. Sorotan — Featured Content Card (kondisional)

Contoh: card "Sorotan" di halaman Berita index (`/berita`).

**Kapan dipakai:** untuk highlight 1 konten pinned/terbaru paling penting di atas grid/list konten sejenis (artikel, dst) — elemen berdiri sendiri, bukan bagian dari grid biasa.

**Struktur visual:**

- Lebar container ~68% dari max-width standar halaman di desktop/tablet (≥768px), **LEFT-ALIGNED** (margin-left 0, BUKAN margin-auto kiri-kanan/center) — tepi kirinya WAJIB sejajar dengan tepi kiri konten di bawahnya (filter tab, list card §3f). Sisa ruang kosong ada di sisi KANAN, itu kondisi yang benar.
- Aspect-ratio foto: ~2:1 di desktop, ~3:2 di mobile — titik tengah yang proporsional. BUKAN rasio pendek-lebar ekstrem (terlalu kecil untuk konten "featured"), dan BUKAN 16:9 penuh (terlalu tinggi/dominan untuk konteks index, pernah dicoba dan gagal).
- Mobile (<768px): lebar kembali 100% viewport (dengan padding standar halaman) — pembatasan 68% khusus desktop/tablet.
- Badge kategori pill kecil (mis. "Sorotan", Growth Green) di pojok kiri-atas foto.
- Overlay teks (kategori + headline + tanggal) di pojok kiri-bawah foto, WAJIB duduk di atas **gradient scrim** (linear-gradient dari Corporate Blue opacity tinggi di dasar foto, fade ke transparan naik ke atas) — **BUKAN** kotak/box terpisah dengan background sendiri. Box terpisah pernah jadi bug nyata (teks tertutup, sulit terbaca) — gradient scrim langsung di atas foto adalah pola yang benar dan terverifikasi.
- Rounded corner normal di keempat sudut.

## 3f. ArticleCard — Kartu Konten Horizontal (list & referensi)

Contoh: Daftar Artikel (index Berita), Artikel Terkait (sidebar Detail Artikel), Artikel Lainnya (Detail Artikel).

**Struktur standar (varian dengan foto):**

- Layout horizontal: thumbnail kiri + teks kanan (kategori pill + judul + tanggal).
- Ukuran thumbnail: **160×120px (4:3) di desktop, 100×75px (4:3) di mobile** — landscape, BUKAN persegi 1:1 (versi lama persegi kecil terbukti timpang secara visual dibanding elemen lain di halaman).
- 1 komponen React dipakai ulang PERSIS di semua tempat (Daftar Artikel index, Artikel Terkait, Artikel Lainnya) — JANGAN buat varian ukuran/style berbeda per tempat pemakaian.

**Varian text-only (tanpa thumbnail):**

- Dipakai KHUSUS saat ruang horizontal sempit (mis. sidebar "Artikel Terkait" di halaman Detail Artikel yang berdampingan dengan kolom body, lihat §17) — thumbnail dihapus sepenuhnya, tampilkan kategori pill + judul + tanggal saja.
- Antar-item dipisah hairline tipis netral (abu-abu, 1px), padding vertikal dilebarkan (~14-16px) untuk kompensasi hilangnya elemen visual foto, supaya tetap terasa lega bukan padat.
- Ini exception yang disengaja untuk konteks sidebar sempit — BUKAN pengganti varian foto standar di tempat lain manapun.

## 3g. Cap + Akordion + Scroll Internal (List Panjang)

Contoh: Sidebar Video §3d (`/berita/video`), Sidebar "Artikel Terkait" (varian text-only §3f, Detail Artikel), "Artikel Lainnya" (Detail Artikel), Daftar Artikel index Berita.

**Kapan dipakai:** untuk list/grid konten yang berpotensi sangat panjang (bisa puluhan item) dan perlu dibatasi secara default supaya halaman tidak memanjang tak terkendali secara vertikal, tapi tetap bisa dijelajah penuh tanpa reload/pindah halaman/pagination bernomor.

**Mekanisme (wajib sama persis di semua tempat pemakaian):**

1. Tampilkan cap awal **5 item** (collapsed state). Kalau total item hasil filter ≤ 5, TIDAK ada tombol/akordion sama sekali — jangan tampilkan tombol kosong/palsu yang tidak berfungsi.
2. Kalau total item > 5, tampilkan tombol "Muat Lebih Banyak" di bawah item ke-5.
3. Klik tombol → **EXPAND**: container masuk mode scroll internal dengan max-height TETAP (bukan memanjang tanpa batas ke bawah halaman), `overflow-y: auto`, scrollbar tipis netral. Tinggi container boleh berbeda nilai per konteks pemakaian (tergantung tinggi rata-rata 1 item), target umum ~600-820px. Tombol berubah label jadi "Tampilkan Lebih Sedikit" untuk collapse balik, chevron icon rotate 180° via CSS transform (BUKAN swap dua icon berbeda).
4. **Implementasi teknis wajib**: gunakan `position: absolute; inset: 0` di dalam wrapper `position: relative` dengan tinggi tetap untuk container scroll saat expanded. **JANGAN pakai `flex-1`** — terbukti gagal: `flex-1` dengan `align-items: stretch` justru menumbuhkan tinggi parent mengikuti konten yang melebihi, bukan membatasi dengan scroll internal.
5. **Reset saat filter/kategori berganti**: kalau list ini berada di bawah filter tab kategori, state WAJIB reset ke collapsed setiap kali tab berganti — jangan mempertahankan state expanded dari kategori sebelumnya (bisa membingungkan kalau kategori baru totalnya di bawah cap).
6. **Parity mobile-desktop**: mekanisme cap+akordion+scroll ini WAJIB identik perilakunya di semua breakpoint (nilai tinggi container boleh beda per breakpoint, tapi logic cap/expand/scroll harus sama-sama berfungsi) — verifikasi eksplisit di kedua ukuran layar, jangan diasumsikan otomatis sama karena struktur HTML-nya sama.

## 4. Roadmap / Timeline (kondisional — lihat kriteria di bawah)

Contoh: section "Roadmap Pengembangan" di Brand Incubation & Business Acceleration, Strategic Educational Alliance, BNJ Digital Labs.

**Kapan dipakai (kriteria wajib, bukan template default):**

- Hanya untuk pilar/halaman yang punya pergeseran status nyata dari waktu ke waktu (mis. 2026 aktif terbatas → 2027 ekspansi). Section ini bukan dekorasi standar yang dipasang di semua halaman.
- **Jangan dipasang** di halaman yang sudah aktif penuh tanpa pergeseran status (mis. EFM).
- Untuk halaman yang statusnya belum jelas progresinya (mis. Investment Ventures), konfirmasi dulu isi konkret sebelum section ini dibuat — jangan diisi placeholder generik.

**Struktur visual (varian default — background putih):**

- TANPA divider garis di atas section (aturan lama "divider tri-warna tipis di atas" sudah dicabut — lihat §Divider & Pemisahan Section revisi 2026-08-08). Pisahkan dari section sebelumnya dengan whitespace + alternating tone.
- Label kategori uppercase kecil (eyebrow): pemilihan kata **wajib mengikuti §Eyebrow Label — Aturan Penulisan** — jangan pakai teks tetap "ROADMAP PENGEMBANGAN" sebagai default generik di semua halaman.
- Garis penghubung horizontal antar-titik: MENERUS dari titik pertama sampai titik terakhir (bukan cuma sebagian) — segmen status "sedang berjalan" berwarna Growth Green, segmen "rencana lanjutan" berwarna abu-abu netral solid.

**Varian container solid Corporate Blue (dipakai kalau butuh penekanan visual lebih kuat):**

- Background container: solid Corporate Blue (#03428E), rounded-corner besar, aksen strip biru tebal di tepi bawah container.
- Icon status "sedang berjalan": ring accent Growth Green di sekeliling lingkaran, fill lingkaran bagian dalam putih solid supaya icon line-style tetap kontras.
- Icon "rencana lanjutan": fill lingkaran putih opacity ~15-20% (frosted/translucent di atas biru), icon line-style putih (bukan abu-abu — abu-abu kehilangan kontras di atas biru solid).
- Garis penghubung: segmen "sedang berjalan" tetap Growth Green, segmen "rencana lanjutan" jadi putih opacity ~30% (bukan abu-abu).
- Label "SEDANG BERJALAN": tetap Growth Green (kontras cukup di atas biru). Label "RENCANA LANJUTAN": putih opacity ~60%. Teks tahun: putih solid 100%. Judul milestone: putih solid 100%.
- Section tetap horizontal single-row sebagai deskripsi visual dasar di atas — **untuk implementasi carousel penuh dari varian ini (pill-selector tahun + 1 slide aktif per waktu, bukan semua titik tampil sekaligus), lihat §4a di bawah.**

## 4a. Corporate Growth Roadmap Carousel (Implementasi Resmi Varian Solid-Blue)

Contoh: section "Corporate Growth Roadmap 2026-2030" di halaman Tentang Kami — implementasi final dari varian solid Corporate Blue §4 di atas, setelah percobaan pola track+accordion terbukti gagal khusus di breakpoint mobile.

Struktur:

- Strip 5 pill tahun horizontal di atas (pill aktif solid Corporate Blue, non-aktif abu-abu, garis tipis hijau→abu di bawah strip menandakan progres riil bisnis, bukan progres navigasi user).
- 1 slide card di bawahnya, terdiri dari:
  - Header block: background Corporate Blue solid, berisi tahun besar + badge status (pill putih transparan) + judul node, teks putih semua.
  - Body putih: daftar inisiatif (judul, deskripsi 1 kalimat, link "Pelajari Lebih Lanjut" ke anchor section halaman pilar terkait).
  - Icon rounded-square 12px radius di kiri tiap item inisiatif: 2 layer flat sticker style tanpa gradient/shadow/blur — layer utama Corporate Blue solid + icon putih, layer Growth Green offset sedikit di belakang (kanan-bawah).
- Navigasi panah menempel di sisi slide card (ikuti Prinsip Navigasi Carousel/Slide di bawah), TANPA dot pagination terpisah (pill tahun sudah jadi indikator posisi).
- Satu komponen sama persis dipakai di semua breakpoint (bukan implementasi terpisah desktop/mobile).

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

Contoh: section "Milestone Essential Fitness Management" dan "Milestone CV Bugar Nusantara Jaya" (Tentang Kami) — histori tahun-per-tahun berisi pencapaian nyata perusahaan.

**Beda dengan Roadmap/Timeline (§4):**

- Roadmap (§4) = untuk **masa depan**, horizontal, maksimal 3-4 titik (mis. "2026 vs 2027-2028").
- Milestone Timeline (§6) = untuk **histori masa lalu yang sudah terjadi**, bisa lebih dari 4 titik (5 titik ke atas) — dipakai kalau perusahaan/unit bisnis punya track record panjang yang layak ditunjukkan.
- Beda juga dengan Overlay Card Carousel (§14): Milestone menampilkan momen/waktu, Overlay Card Carousel menampilkan orang/entitas.

**Kapan dipakai:**

- Hanya untuk entitas dengan histori tahun-per-tahun yang terdokumentasi nyata (bukan diringkas jadi 2-3 poin generik). Kalau histori cuma 1-2 titik waktu penting, cukup masukkan sebagai bagian dari body text biasa, tidak perlu komponen timeline khusus.
- Semua entri harus berbasis fakta terverifikasi (nama klien/mitra, tahun, jenis kerjasama) — jangan dirangkum jadi klaim vague tanpa detail. Kalau ada gap tahun kosong di rangkaian, cek dulu ke pemilik data apakah memang tidak ada aktivitas di tahun itu, atau datanya belum digali — jangan langsung dilewati.

### Varian A — Histori Vertikal (default)

- Garis vertikal tipis di sisi kiri, dengan dot marker solid Corporate Blue di tiap titik tahun.
- Tiap entri: tahun (bold, besar) + judul singkat (mis. "Fondasi Awal", "Ekspansi Klien Nasional") + deskripsi 1-2 kalimat.
- Bisa scroll vertikal natural mengikuti panjang halaman — tidak perlu dipadatkan jadi horizontal scroll yang butuh interaksi tambahan.
- Background section: putih/netral, garis vertikal warna Corporate Blue dengan opacity penuh (bukan gradasi tri-warna seperti Roadmap §4 — ini murni linimasa, bukan progress bar menuju masa depan).

### Varian B — Carousel Horizontal (dipakai di EFM dan Tentang Kami)

- Strip icon-tab di atas (satu icon bulat + tahun per titik, jumlah sesuai banyaknya milestone), tab aktif diberi ring/underline Corporate Blue, tab lain abu-abu netral.
- Layout 2 kolom per slide (setelah tab dipilih): foto besar kiri, teks kanan (tahun besar bold Corporate Blue, judul milestone, deskripsi 1-2 kalimat) — atau varian foto full dengan overlay gradient bawah + teks di dalam foto (lihat contoh EFM).
- Navigasi: klik langsung ke tab tahun yang dituju (bukan cuma panah sekuensial), plus panah kiri-kanan untuk geser tab kalau jumlah tahun melebihi lebar viewport, mengikuti Prinsip Navigasi Carousel/Slide di bawah (panah menempel di sisi card foto, bukan sisi strip tab; pindah ke bawah card di mobile).
- Card center-aligned dengan max-width (~900-1000px) untuk varian 2-kolom, tidak mepet ke satu sisi.
- Background section: putih/netral, sama seperti Varian A.

**Kapan pakai varian mana:** Varian A untuk histori singkat/sederhana tanpa kebutuhan foto kuat per momen; Varian B untuk histori panjang (6+ entri) dengan foto pendukung yang kuat per momen, seperti EFM dan Tentang Kami.

## 7. Stat Card Overlay Photo (kondisional)

Contoh: section snapshot perusahaan di halaman Ekosistem Bisnis/Tentang Kami (foto tim/kantor + kartu mengambang berisi angka: "4 Pilar bisnis terintegrasi", "200+ Klien korporat & personal", "2017 Beroperasi sejak").

**Kapan dipakai:**

- Untuk memberi kredibilitas cepat pada entitas yang sedang dijelaskan (perusahaan induk, pilar bisnis, atau divisi seperti BNJ Digital Labs) — bukan dekorasi foto biasa.
- Boleh dipakai di lebih dari satu halaman, **tapi angka yang ditampilkan wajib kontekstual ke entitas halaman tersebut** — dilarang menduplikasi angka level-perusahaan (4 Pilar, 200+ klien, 2017) di halaman pilar/divisi, karena akan menyesatkan (mis. membuat pilar yang baru aktif 2026 terlihat sudah berjalan sejak 2017).

**Struktur visual:**

- Foto dasar (placeholder atau foto asli tim/kantor/aktivitas) dengan sudut membulat halus, ditampilkan sebagai tekstur latar pudar (overlay biru sangat muda/opacity rendah) — bukan elemen visual dominan.
- 1 card putih besar mengambang di atas foto (margin di semua sisi dari tepi foto), berisi seluruh konten data: stat besar + detail card kecil di bawahnya.
- Tiap kartu kecil: icon kecil + angka besar bold Corporate Blue + label kecil abu-abu di bawahnya.
- Jumlah stat besar maksimal 3, jumlah detail card kecil maksimal 4 — lebih dari itu jadi ramai dan kehilangan fungsi "sekilas info".

**Yang perlu dicek sebelum dipasang (pelajaran dari kasus BNJ Digital Labs):**

- Jangan pasang section ini kalau angka-angkanya sudah tersampaikan di Hero (badge) atau di heading grid tepat di bawahnya — kalau sudah ada, section ini jadi pengulangan yang membingungkan, bukan penguat.
- Foto dasar harus benar-benar merepresentasikan isi section (mis. aktivitas produk digital, bukan foto jabat tangan generik). Foto jabat tangan formal/penandatanganan berisiko terbaca sebagai dokumentasi MoU sungguhan — jangan dipakai kecuali memang ada kemitraan resmi yang dikonfirmasi.

## 7a. Zona Teks Terpisah dari Zona Foto (Readability Fix)

Contoh: "BNJ at a Glance" (Tentang Kami), "Bukti Nyata EFM" (Home) — koreksi wajib terhadap implementasi awal §7 yang sempat menaruh eyebrow+heading di atas foto langsung dan terbukti sulit dibaca.

Berlaku untuk SEMUA section Stat Card Overlay Photo (§7) ke depan:

- Eyebrow + heading (+ paragraf, tergantung konteks) DILARANG duduk di atas foto — kontras rendah, sulit dibaca.
- Struktur wajib: zona atas = background putih polos berisi teks pengantar; zona bawah = foto blur FULL-BLEED (mentok tepi viewport, bukan dibatasi max-width container — foto jadi sibling DI LUAR wrapper max-width, konten/card tetap di dalam wrapper max-width) berisi card putih mengambang.
- Paragraf boleh tetap di zona atas (terpisah dari card) ATAU menyatu di dalam card bersama data — tergantung apakah card berfungsi murni snapshot data tanpa video (paragraf di luar, contoh: BNJ at a Glance) atau "kartu pembuktian" utuh dengan video/bukti visual (paragraf di dalam card bersama stat+video, contoh: Bukti Nyata EFM).

## 8. CTA penutup (section terakhir sebelum Footer)

- Background: solid Corporate Blue — ini adalah satu-satunya exception resmi untuk background solid penuh warna (selain Footer dan varian solid-blue Roadmap §4).
- Garis vertikal tebal 5px Growth Green di sisi teks, + label kategori uppercase kecil di atasnya. **Pemilihan kata eyebrow mengikuti §Eyebrow Label — Aturan Penulisan.**
- Dua tombol: primary (fill putih, teks Corporate Blue) + secondary (outline putih transparan).
- Elemen dekoratif opsional: grafik line-art tipis, opacity sangat rendah (~8%), di sudut kosong — bukan pengisi paksa.
- Divider di atas section: ini adalah salah satu dari 2 titik bookend yang BOLEH pakai tri-warna (transisi putih → biru). Flagship tier (Home, Tentang Kami, Berita — WAJIB via komponen bersama `src/components/ClosingCta.tsx`, markup identik di semua halaman flagship, JANGAN implementasi ulang manual) pakai wave bookend mirror Hero; pillar tier (EFM, Digital Labs, ECA Aspire, Investment Ventures, Brand Incubation — file lokal per halaman) boleh garis/wave tri-warna. Lihat §Divider & Pemisahan Section revisi 2026-08-08.

## 9. Footer

- Background: solid Corporate Blue, menyatu dengan CTA penutup sebagai satu "closing block".
- **Dipisahkan dari CTA dengan hairline `border-top` putih tipis 1px, opacity rendah ~10–15% (implementasi: `border-white/[0.12]`), full-width — built-in di KOMPONEN Footer itu sendiri (`src/components/Footer.tsx`), BUKAN ditambahkan manual per halaman.** Dengan begitu pemisah CTA→Footer otomatis konsisten muncul di semua halaman (Home, Tentang Kami, Ekosistem, dan halaman baru) tanpa perlu diingat ulang tiap kali page baru dibuat. Aturan lama "garis 20-30% ditambah per halaman" diganti oleh pendekatan built-in ini.
- Wajib ada di SETIAP halaman yang punya CTA penutup + Footer (bukan cuma Home) — karena sudah built-in di komponen, cukup pastikan `<Footer />` dipakai. Catatan retrofit: kalau ada halaman lama yang masih menaruh garis pemisah manual di CTA-nya (mis. `about/ClosingCta`), hapus yang manual supaya tidak dobel dengan hairline Footer.

## 10. Navbar / Header (persist saat scroll)

- Tombol kontak di navbar: kecil, outline atau text-button, warna Corporate Blue di atas navbar putih.
- **Bukan** filled/solid — filled button direservasi untuk Hero dan CTA penutup saja, supaya moment konversi utama tidak "tenggelam" karena tombol serupa muncul di semua tempat.
- Dropdown menu (mis. "Ekosistem Bisnis"): harus otomatis tertutup saat user scroll halaman, klik di luar area dropdown, atau berpindah ke link lain — tidak boleh "nyangkut" terbuka sampai diklik ulang manual.

## 11. Kondisi Samar / Coming Soon (khusus BNJ Digital Labs — bukan pola umum)

Contoh: section "4 Fitur Utama Tersedia" dan "2 Keunggulan Utama" di sub-section BNJ Vitality Intelligence (halaman BNJ Digital Labs).

**Kapan dipakai:**

- HANYA untuk section di halaman BNJ Digital Labs yang isinya konsep/fitur produk digital yang belum diluncurkan resmi dan sengaja belum dibuka detailnya ke publik untuk alasan proteksi ide/kompetitif.
- **Jangan dipakai di halaman lain** tanpa konfirmasi eksplisit dari Bagoes — ini bukan pola default untuk semua "section masa depan/2027-2028" di seluruh website (bandingkan dengan Badge Row §5 dan Roadmap §4 yang tetap terbuka penuh, cuma beda pola visual, bukan disembunyikan). Untuk kategori/tab yang belum punya konten sama sekali (mis. tab "Brand Incubation" di filter Video/Berita/Portofolio sebelum ada dokumentasi nyata), pakai **empty-state flat sederhana** (ikon + 1 kalimat, TANPA blur/lock) — BUKAN pola Coming Soon ini.
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

## 14. Overlay Card Carousel (Person & Entity variant)

Contoh: section "Struktur Kepemimpinan" di halaman Tentang Kami.

**Kapan dipakai:** showcase kumpulan orang atau entitas (tim, klien, mitra, produk) dengan foto sebagai elemen utama dan bio/deskripsi singkat yang bisa di-expand per item. Berbeda dari Milestone Timeline §6 (yang menampilkan momen/waktu, bukan orang/entitas) dan dari Logo Klien §12 (logo partner tanpa foto/bio personal).

**Struktur layout:**

- Row horizontal scroll, kartu fixed-width, kartu berikutnya "peek" terpotong di tepi kanan viewport — bukan grid statis, bukan 1-kartu-aktif dengan panah di atas.
- Tombol navigasi geser (solid Corporate Blue, posisi di luar area foto, tidak overlap) di kedua ujung row, state disabled (opacity ~40%) saat sudah mentok di ujung terkait — dievaluasi ulang di setiap event scroll, bukan cuma saat klik.
- Dot indicator di bawah row, sync ke posisi scroll aktif (dot aktif solid Corporate Blue lebih besar, dot lain outline abu-abu tipis).
- Baris teks kecil di bawah dot menjelaskan cara interaksi (mis. "Klik ikon panah pada tiap kartu untuk melihat profil lengkap"), mengikuti Prinsip Navigasi Carousel/Slide di bawah (panah menempel di sisi kartu, bukan sisi elemen lain; urutan mobile: kartu → caption → panah → dot).

**Struktur kartu — 2 varian konten:**

- **Varian Person** (3 baris teks): label kategori kecil → nama orang → jabatan. Dipakai untuk individu (Pimpinan, staf bernama).
- **Varian Entity** (2 baris teks): label kategori kecil → nama entitas/divisi saja. TIDAK ADA baris nama-orang/jabatan — dipakai untuk unit/divisi/produk tanpa personal branding (mis. divisi yang kepalanya belum terkonfirmasi/belum direkrut).
- Foto/placeholder full-bleed mengisi kartu, gradient gelap HANYA di 40-50% bagian bawah kartu (bukan seluruh kartu) — supaya foto tetap jadi elemen utama, gradient murni untuk keterbacaan teks overlay putih.
- Teks overlay diposisikan di pojok kiri-bawah kartu (di atas area gradient). Tombol bulat putih dengan icon chevron-down (Corporate Blue) di pojok kanan-bawah.
- Label kategori kecil (11px semi-bold uppercase, putih opacity ~75%) punya varian status: bentuk aktif (mis. "DIVISI") vs bentuk rencana/belum aktif (mis. "RENCANA DIVISI") — konsisten dengan aturan roadmap-honesty di pattern lain (lihat §4, §5).

**Interaksi (wajib fungsional saat implementasi Claude Code, bukan visual statis):**

- Klik chevron pada kartu manapun → detail panel muncul MENEMPEL langsung di bawah kartu tersebut (bukan shared panel di bawah seluruh row) — lebar panel ~1.5x lebar kartu, sisi kiri sejajar kartu, connector kecil mengarah ke tombol chevron kartu terkait.
- Hanya 1 panel detail terbuka dalam satu waktu — membuka kartu lain otomatis menutup panel sebelumnya.
- Icon chevron rotate 180° (down↔up) mengikuti state buka/tutup (CSS transform, bukan swap dua icon berbeda).
- Di Claude Design, cukup buat 2 frame referensi (kondisi tertutup + 1 contoh kondisi terbuka) sebagai acuan visual — logic interaktif sungguhan baru dibangun saat handoff Claude Code.

## 15. Breadcrumb (halaman dengan hierarki > 1 level)

Contoh: halaman Video (`/berita/video`), Detail Artikel (`/berita/[slug]`).

**Kapan dipakai:** untuk halaman yang punya "halaman induk" jelas (bukan halaman top-level navbar) — supaya ada jalan cepat kembali tanpa mengandalkan tombol back browser.

**Struktur:**

- Posisi: tepat di bawah Navbar, DI ATAS Page Header §0 (eyebrow+H1) atau Hero halaman tersebut.
- Format: "[Induk]" (Corporate Blue, clickable) → separator "/" → "[Halaman saat ini]" (abu-gelap, TIDAK clickable — dia bukan link ke dirinya sendiri).
- Untuk kasus crumb kedua adalah FILTER kategori (bukan halaman final, mis. breadcrumb dari sebuah kartu artikel berkategori tertentu menuju index dengan kategori ter-preselect via `?kategori=...`) — crumb kedua BOLEH clickable. Beda dari kasus Video/Detail Artikel yang crumb kedua memang halaman final, tidak clickable.
- 1 komponen bersama dipakai di semua halaman yang butuh breadcrumb (`Breadcrumb.tsx`, props array of `{label, href?}`) — JANGAN implementasi manual berulang per halaman.

## 16. Referensi Sumber (opsional, khusus konten artikel)

Contoh: section "Referensi" di halaman Detail Artikel (`/berita/[slug]`), untuk artikel bertema kesehatan/fitness yang merujuk jurnal/sumber eksternal.

**Kapan dipakai:**

- OPSIONAL per artikel, dikontrol lewat toggle ON/OFF eksplisit di form admin (lihat spec BNJ Admin System). Kalau di-OFF (mis. berita kegiatan rutin tanpa rujukan eksternal), section ini TIDAK ditampilkan sama sekali di halaman publik — bukan ditampilkan kosong/heading tanpa isi.
- Posisi: di dalam kolom konten utama, setelah tag topik artikel, sebelum divider penutup blok konten utama (lihat §17 untuk konteks layout di sekitarnya).

**Struktur:**

- Label kecil uppercase "Referensi" (token sama dengan eyebrow section lain).
- List bernomor. Tiap entri: judul/deskripsi singkat + nama sumber (italic, abu-abu). Kalau ada url, judul jadi link Corporate Blue (`target="_blank" rel="noopener"`, underline on hover); kalau tidak ada url, teks biasa (tidak clickable).

## 17. Layout 2-Kolom Konten + Sidebar Independent-Height

Contoh: halaman Detail Artikel (`/berita/[slug]`) — kolom body+foto (kiri) berdampingan dengan sidebar "Artikel Terkait" (kanan, kombinasi §3f varian text-only + §3g cap-akordion-scroll).

**Kapan dipakai:** saat 1 kolom (biasanya sidebar pendukung) berpotensi jadi LEBIH TINGGI dari kolom utama (karena isinya bisa panjang/expand), dan kita TIDAK mau tinggi kolom utama "menunggu" sidebar selesai — efek gap kosong besar yang muncul kalau pakai CSS grid 2-kolom biasa (tinggi row grid = tinggi kolom tertinggi).

**Struktur teknis:**

- Wrapper `position: relative` membungkus kedua kolom. Kolom UTAMA (kiri) tetap normal block flow, max-width tetap (mis. 760px) — tinggi WRAPPER ditentukan MURNI oleh kolom ini.
- Kolom SIDEBAR (kanan) di-set `position: absolute; top: 0; right: 0` di breakpoint desktop/tablet (≥768px) — sehingga TIDAK ikut menentukan tinggi wrapper, tapi tetap top-align secara visual dengan bagian atas kolom utama.
- Efek samping yang wajar (BUKAN bug): kalau sidebar (terutama saat expanded via §3g) lebih tinggi dari kolom utama, sidebar boleh "menjorok" sedikit melewati batas bawah kolom utama — ini diterima (lebih baik dari gap kosong besar), tapi berikan jarak aman/`z-index` supaya tidak overlap dengan konten section berikutnya.
- Mobile (<768px): sidebar kembali `position: static` (stack normal di bawah kolom utama), TIDAK absolute.
- Section/konten SETELAH wrapper ini (mis. §16 Referensi kalau ada, atau section "Artikel Lainnya") otomatis mulai tepat setelah kolom utama selesai, bukan menunggu sidebar — inilah tujuan utama teknik ini.

---

## Aturan lintas-section (berlaku di semua tipe di atas)

- Background solid warna penuh (biru/hijau) **hanya boleh** di CTA penutup, Footer, dan varian solid-blue Roadmap (§4/§4a). Section lain tetap putih/netral (lihat alternating tone di §Divider & Pemisahan Section), warna brand jadi aksen tipis saja (garis, icon, border, atau gradient fungsional di dalam kartu foto seperti §14 — bukan background section itu sendiri).
- Satu section = satu pola. Jangan gabungkan garis vertikal hijau dengan label kategori grid, atau sebaliknya — tiap pola berlaku untuk tipe section yang berbeda supaya tetap punya makna, bukan dekorasi acak.
- **Pemisahan antar-section: lihat aturan permanen di §Divider & Pemisahan Section (revisi 2026-08-08, dengan exception tambahan 2026-08-12) di bawah.** Aturan lama "divider antar-section selalu garis tipis tri-warna" sudah TIDAK berlaku.
- **Pemilihan kata eyebrow: lihat aturan permanen di §Eyebrow Label — Aturan Penulisan (revisi 2026-08-11) di bawah.**
- **List/grid yang berpotensi sangat panjang (banyak item)**: pakai §3g Cap + Akordion + Scroll Internal — JANGAN reinvent pagination bernomor atau infinite-scroll baru per section, ini pola resmi yang sudah dipakai konsisten di 4 tempat berbeda.

---

## §Divider & Pemisahan Section (REVISI ATURAN PERMANEN — 2026-08-08, exception ditambahkan 2026-08-12)

Berlaku untuk SEMUA halaman ke depan (Home, Strategic Educational Alliance, Portofolio, Kontak, dst), menggantikan semua aturan divider tri-warna antar-section yang tersebar di §2, §4, §8, dan aturan lintas-section di atas.

**Divider/garis tri-warna (Corporate Blue → Growth Green → Digital Blue) HANYA boleh muncul di 2 titik per halaman:**

1. **Bawah Hero** — bentuk diagonal tebal (pillar tier) atau wave (Flagship tier: Home, Tentang Kami). Transisi biru → putih. (Halaman Page Header §0 tanpa Hero, seperti Kontak/Berita, tidak punya titik ini.)
2. **Pre-footer, transisi masuk ke CTA penutup** — untuk Flagship tier (Home, Tentang Kami, Berita) berupa wave bookend via komponen bersama `ClosingCta.tsx`; untuk pillar tier berupa garis horizontal tipis tri-warna. Transisi putih → biru.

**Semua sambungan section di TENGAH halaman TIDAK boleh pakai garis tri-warna apapun** (bukan garis tipis tri-warna, bukan diagonal pendek, bukan wave). Pemisahan section dibentuk murni dari **whitespace** — vertical rhythm via token spacing (lihat §Spacing di bawah).

**Exception (ditambahkan 2026-08-12):** hairline tipis **netral** (abu-abu, mis. `#E5E7EB`, 1px, **BUKAN** tri-warna) diperbolehkan sebagai pembatas antar **BLOK KONTEN yang berbeda fungsi** di dalam 1 halaman Page Header §0 (mis. blok baca utama vs blok jelajah "Artikel Lainnya" di Detail Artikel, atau transisi ke sidebar "Artikel Terkait" saat stack ke mobile). Ini BUKAN pembatas antar-section biasa (yang tetap dilarang pakai garis apapun), jadi tidak melanggar aturan di atas — bedanya ada di FUNGSI transisi (baca → jelajah), bukan sekadar jeda visual antar-section serupa. Lihat §3g dan §17 untuk konteks penerapannya.

**Background section tengah selalu PUTIH POLOS (`#ffffff`).** Keputusan final 2026-08-08: TIDAK ada alternating tone / off-white. Percobaan alternating (`--surface-alt` off-white) sudah dicabut dan token-nya dihapus dari `globals.css` — jangan dihidupkan lagi di halaman manapun. Warna solid HANYA untuk section yang memang didesain biru (Hero, kartu "Bertumbuh dalam Angka", CTA penutup). Whitespace 144px (desktop) sudah cukup sebagai pemisah visual; jangan tambah garis/hairline tri-warna di sambungan section tengah.

Urutan warna tri-warna di 2 titik bookend tetap konsisten kiri-ke-kanan (03428E → 6AA84F → 0095DA), termasuk versi mirrored (hanya sudut/arah kurva dibalik, urutan warna tetap).

## §Spacing (token wajib — standar "SPACIOUS" final 2026-08-08)

- Jarak vertikal section (padding-top **dan** padding-bottom) wajib pakai token di `globals.css`, dengan nilai DISKRIT per breakpoint (bukan clamp) supaya jaraknya persis:
  - `--section-py` — standar: **mobile <768 = 72px, tablet 768–1023 = 96px, desktop ≥1024 = 144px**
  - `--section-py-emphasis` — section penekanan / transisi masuk ke CTA biru: **72 / 96 / 160px** (sama dengan standar kecuali desktop 160px)
- **Audit per komponen, bukan cuma definisikan var:** setiap section wrapper harus benar-benar memakai token ini untuk pt DAN pb, dan padding/margin manual lama yang konflik dihapus. Kegagalan sebelumnya terjadi karena var didefinisikan tapi komponen masih pakai padding lama → tetap menempel. Verifikasi dengan mengukur jarak actual (computed style / bounding box), bukan sekadar var sudah ada.
- **Exception Hero:** section Hero full-bleed paling atas TIDAK memakai token ini — padding internalnya adalah komposisi hero (clearance navbar overlay + posisi headline di atas wave), bukan rhythm antar-section. Jarak Hero → section berikutnya dibentuk oleh wave + padding-top token section sesudahnya.
- Background section: **putih polos (`#ffffff`/`bg-white`) untuk SEMUA section tengah**. Tidak ada token surface-alt / alternating tone (sudah dicabut). Warna solid hanya untuk Hero, kartu "Bertumbuh dalam Angka", dan CTA (biru).
- Spacing internal (eyebrow → heading → body → konten) tetap boleh pakai `--section-header-gap`. Token lama `--section-gap-y` masih ada untuk halaman yang belum diretrofit, tapi halaman baru pakai `--section-py` dkk.
- Jangan hardcode nilai spacing/warna baru inline per komponen — selalu lewat token.
- **Hairline netral (§Divider exception 2026-08-12)** pakai margin lebih besar dari `--section-header-gap` biasa (mis. `clamp(56px,8vw,80px)`) di sekitarnya — divider antar-BLOK butuh jarak lebih lega dari divider internal biasa supaya terasa sebagai pemisah fungsi, bukan sekadar spacing standar.

> Catatan retrofit: halaman pilar lama (EFM, Digital Labs, dst) masih memakai garis tri-warna antar-section + skala spacing lama. Menyesuaikannya ke aturan ini adalah pekerjaan retrofit terjadwal terpisah, bukan bagian dari build Home. Untuk halaman BARU, ikuti aturan revisi ini sejak awal.

---

## §Prinsip Navigasi Carousel/Slide (berlaku untuk semua pola carousel di situs)

- Panah navigasi (prev/next) SELALU menempel pada elemen konten yang benar-benar berubah saat navigasi terjadi (foto/card/slide) — BUKAN pada strip selector/tab terpisah yang punya jalan pintas klik sendiri.
- Mobile (<768px): panah navigasi pindah ke BAWAH konten (sejajar horizontal kiri-kanan), bukan di samping kiri-kanan seperti desktop — mencegah panah hilang/terpotong saat ruang horizontal sempit.
- Contoh penerapan: Corporate Growth Roadmap Carousel (§4a, Tentang Kami), Milestone Carousel (§6 Varian B, Tentang Kami & EFM), Overlay Card Carousel (§14, Tentang Kami).
- **Carousel foto galeri (maks beberapa foto per item, mis. carousel foto Detail Artikel)**: navigasi manual (klik panah) WAJIB **wrap-around** (di slide terakhir, "next" lompat ke slide pertama, dan sebaliknya) — BEDA dari carousel representasi linimasa (Milestone/Roadmap) yang BOUNDED (disabled di ujung). Alasan: galeri foto tidak punya urutan kronologis yang berarti "berhenti", jadi wrap adalah perilaku yang diharapkan pengguna. Exception: kalau total item cuma 1, sembunyikan navigasi & dot sepenuhnya (tidak relevan untuk 1 slide).

---

## §Eyebrow Label — Aturan Penulisan (REVISI ATURAN PERMANEN — 2026-08-11)

Berlaku untuk SEMUA section yang punya label kecil uppercase di atas heading, di seluruh situs — termasuk §0 Page Header (Kontak, Berita, Video), §3 Grid kartu, §4/§4a Roadmap, dan §8 CTA penutup. Menggantikan pendekatan lama "ditentukan bebas saat editing di Claude Design" yang terbukti menghasilkan duplikasi kata tanpa disadari (kasus: eyebrow "VIDEO" di atas heading "Video BNJ").

**Aturan wajib:**

1. Maksimal 2 kata, singkat dan tegas.
2. **Dilarang duplikasi kata kunci** dengan heading besar (H1/H2) tepat di bawahnya dalam section yang sama. Contoh pelanggaran: eyebrow "VIDEO" + heading "Video BNJ"; eyebrow "ROADMAP PENGEMBANGAN" + heading yang juga menyebut "Roadmap". Eyebrow harus menambah konteks baru, bukan mengulang kata yang sudah ada di heading.
3. Pilihan kata berdasarkan sifat section:
   - Histori/fakta yang sudah terjadi → pola "PERJALANAN [kata kunci]"
   - Rencana/proyeksi masa depan → "ARAH" atau "VISI"
   - Program aktif berjalan sekarang → "PROGRAM AKTIF"
   - Konten dokumenter/behind-the-scenes (mis. halaman Video) → boleh campuran ID/EN asal tetap singkat & tidak kaku, mis. "INSIDE BNJ", "BEHIND THE SCENES", "DI BALIK LAYAR".
4. Bila dua section berurutan sama-sama bertema "masa depan", boleh eyebrow sama persis ATAU dibedakan tipis sesuai konteks — cek per kasus, bukan aturan kaku.
5. Nama brand ("BNJ", "EFM", dll.) TIDAK dihitung sebagai kata kunci terlarang untuk aturan poin 2 — boleh muncul di eyebrow maupun heading sekaligus, karena berfungsi sebagai identitas, bukan deskripsi konten yang bisa redundan.