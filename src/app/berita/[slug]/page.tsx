import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/berita/ArticleCard";
import ClosingCta from "@/components/ClosingCta";
import {
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

  return (
    <main>
      {/* ===== HEADER ARTIKEL (breadcrumb → H1 → byline → foto → body → tag) =====
          Satu blok yang menyatu — jarak antar elemen proporsional (bukan
          --section-py antar-section). */}
      <article className="w-full bg-white pt-[clamp(40px,6vw,64px)]">
        <div className="mx-auto max-w-[760px] px-6">
          {/* Breadcrumb — "Berita" & nama kategori Corporate Blue + clickable */}
          <p className="m-0 truncate text-[13px] font-medium text-[#808080]">
            <Link href="/berita" className="text-[#03428E] hover:text-[#032f66]">
              Berita
            </Link>
            <span className="text-[#808080]"> / </span>
            <Link href={categoryHref} className="text-[#03428E] hover:text-[#032f66]">
              {article.category}
            </Link>
          </p>

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

          {/* Foto cover — full-width container, rounded 14px.
              PLACEHOLDER SEMENTARA: foto generik, ganti ke foto EFM asli nanti. */}
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[14px]">
            <Image
              src={article.photos[0]}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 760px"
              className="object-cover"
            />
          </div>
          <p className="mt-2.5 text-xs italic text-[#808080]">
            {article.coverCaption}
          </p>

          {/* Body — 4 paragraf (paragraf ke-3 kutipan langsung), Body 15px/1.65 */}
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

          {/* ===== ARTIKEL TERKAIT =====
              Dipisah dari tag di atasnya oleh whitespace --section-py + hairline
              divider tipis. Kartu REUSE komponen ArticleCard yang sama persis
              dengan Daftar Artikel index (tanpa tanggal di varian terkait). */}
          <section className="mt-[var(--section-py)] border-t border-[#e5e5e5] pt-[clamp(32px,5vw,48px)]">
            <h3 className="mb-5 text-[clamp(19px,2vw,22px)] font-bold text-[#171717]">
              Artikel Terkait
            </h3>
            <div className="flex flex-col">
              {article.related.map((rel) => (
                <ArticleCard
                  key={rel.slug}
                  href={`/berita/${rel.slug}`}
                  img={rel.photos[0]}
                  category={rel.category}
                  title={rel.title}
                />
              ))}
              {/* Garis penutup daftar (border bawah kartu terakhir) */}
              <div className="border-t border-[#e5e5e5]" />
            </div>
          </section>
        </div>
      </article>

      {/* CTA PENUTUP — komponen bersama Flagship tier (identik Home / Tentang
          Kami / index Berita: wave bookend tri-warna + 4 lingkaran + hairline).
          Wave bookend-nya = satu-satunya divider sebelum CTA. Footer dari layout. */}
      <ClosingCta />
    </main>
  );
}
