import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleCoverCarousel from "@/components/berita/ArticleCoverCarousel";
import ArticleLainnya from "@/components/berita/ArticleLainnya";
import Breadcrumb from "@/components/berita/Breadcrumb";
import ReferensiSumber from "@/components/berita/ReferensiSumber";
import RelatedSidebar from "@/components/berita/RelatedSidebar";
import ClosingCta from "@/components/ClosingCta";
import {
  ARTICLES,
  CATEGORY_SLUGS,
  getArticleDetail,
  getDetailSlugs,
} from "@/components/berita/data";

// DETAIL ARTIKEL BERITA — /berita/[slug]
// Fase dummy: konten statis dari src/components/berita/data.ts (BUKAN database).
// Backend "Kelola Berita" menyusul terpisah; ganti sumber data tanpa mengubah UI.
//
// Container body sengaja lebih SEMPIT dari index (~760px, kolom baca) sesuai
// referensi Claude Design. Navbar solid + Footer diambil dari layout global
// (Navbar transparan hanya di "/" dan "/tentang-kami"), jadi halaman ini cukup
// merender konten artikel + ClosingCta bersama (Flagship tier).

// Hanya slug ber-konten lengkap yang di-prerender statis. Slug dummy lain dari
// index tetap ter-route tapi menghasilkan notFound() di fase ini (cukup 1
// halaman contoh yang utuh sebagai proof of routing).
export function generateStaticParams() {
  return getDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleDetail(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan | Berita BNJ" };
  return {
    title: `${article.title} | Berita BNJ`,
    description: article.paragraphs[0]?.slice(0, 155),
  };
}

export default async function DetailArtikelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleDetail(slug);
  if (!article) notFound();

  const categoryHref = `/berita?kategori=${CATEGORY_SLUGS[article.category]}`;

  // Artikel Terkait (sidebar): dihitung dari ARTICLES index — kategori sama,
  // EXCLUDE artikel yang sedang dibaca. Akordion "Muat Lebih Banyak" muncul saat
  // kategori punya >5 artikel.
  const relatedPool = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== slug,
  );

  return (
    <main>
      {/* ===== HEADER ARTIKEL (breadcrumb → H1 → byline → foto → body → tag) =====
          Satu blok yang menyatu — jarak antar elemen proporsional (bukan
          --section-py antar-section). */}
      <article className="w-full bg-white pt-[clamp(40px,6vw,64px)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Blok atas (breadcrumb + H1 + byline) — full-width, TIDAK ikut kolom;
              dibatasi lebar baca supaya H1 tidak melebar berlebihan, rata kiri. */}
          <div className="max-w-[760px]">
            {/* Breadcrumb — komponen bersama (dipakai juga di halaman Video).
                Crumb kategori clickable (deep-link filter index). */}
            <Breadcrumb
              items={[
                { label: "Berita", href: "/berita" },
                { label: article.category, href: categoryHref },
              ]}
            />

            {/* H1 — skala H1 standar (clamp 27→42px). Bold (700) sesuai
                BNJ_Typography_Standard, bukan extrabold reference mentah. */}
            <h1 className="mt-6 text-[clamp(27px,3.4vw,42px)] font-bold leading-[1.15] tracking-[-0.01em] text-[#171717]">
              {article.title}
            </h1>

            {/* Byline — pill kategori (tint Corporate Blue) + tanggal */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#E6F1FB] px-3 py-[5px] text-xs font-semibold text-[#0C447C]">
                {article.category}
              </span>
              <span className="text-[13px] text-[#808080]">{article.date}</span>
            </div>
          </div>

          {/* 2 KOLOM (>=768px) via wrapper RELATIVE — bukan CSS grid. Tinggi
              wrapper ditentukan MURNI oleh kolom kiri (normal flow); sidebar
              di-absolute-kan (top-0 right-0) sehingga TIDAK ikut menaikkan tinggi
              wrapper. Efeknya Divider + "Artikel Lainnya" mulai tepat setelah
              kolom kiri, tanpa gap kosong menunggu sidebar. Mobile (<768px):
              sidebar kembali normal flow (stack di bawah kolom kiri). */}
          <div className="relative mt-8">
            {/* --- Kolom kiri: cover + body + tag + Referensi (penentu tinggi) --- */}
            <div className="min-w-0 md:w-[calc(100%-424px)] md:max-w-[760px]">
              {/* Foto cover 16:9 rounded — carousel kalau photos.length > 1
                  (logic di-port dari slideshow Hero Home), statis kalau 1 foto. */}
              <ArticleCoverCarousel photos={article.photos} alt={article.title} />
              <p className="mt-2.5 text-xs italic text-[#808080]">
                {article.coverCaption}
              </p>

              {/* Body — 4 paragraf (paragraf ke-3 kutipan langsung), 15px/1.65 */}
              <div className="mt-[clamp(32px,5vw,48px)] flex flex-col gap-4">
                {article.paragraphs.map((para, i) => (
                  <p key={i} className="text-[15px] leading-[1.65] text-[#333333]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tag topik — pill netral, tidak clickable */}
              <div className="mt-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[#F5F5F5] px-3.5 py-1.5 text-xs font-semibold text-[#333333]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Referensi sumber (opsional) — dalam kolom kiri, setelah tag.
                  Tidak dirender kalau artikel tak punya references. */}
              <ReferensiSumber references={article.references} />
            </div>

            {/* --- Kolom kanan: sidebar Artikel Terkait. Desktop: absolute kanan-
                atas (lebar 384px), keluar dari flow. Mobile: normal flow (static),
                stack di bawah kolom kiri. --- */}
            <aside className="min-w-0 md:absolute md:right-0 md:top-0 md:w-[384px]">
              <RelatedSidebar articles={relatedPool} />
            </aside>
          </div>
        </div>
      </article>

      {/* Divider pemisah blok artikel utama (body+sidebar) -> section Artikel
          Lainnya. Full-width container standar (bukan lebar kolom kiri 760px).
          mt lebih kecil dari --section-py: sidebar sudah keluar flow (absolute),
          jadi jarak murni dari kolom kiri — tak perlu dikompensasi. */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mt-[clamp(56px,8vw,80px)] border-t border-[#E5E7EB]" />
      </div>

      {/* SECTION "ARTIKEL LAINNYA" — full-width (bukan kolom baca), rata kiri
          ke container standar, filter tab + list REUSE index. Setelah tag,
          sebelum ClosingCta. */}
      <ArticleLainnya currentSlug={slug} />

      {/* CTA PENUTUP — komponen bersama Flagship tier (identik Home / Tentang
          Kami / index Berita: wave bookend tri-warna + 4 lingkaran + hairline).
          Wave bookend-nya = satu-satunya divider sebelum CTA. Footer dari layout. */}
      <ClosingCta />
    </main>
  );
}
