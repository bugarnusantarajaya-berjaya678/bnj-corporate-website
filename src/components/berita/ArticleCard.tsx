import Image from "next/image";
import Link from "next/link";

// KARTU ARTIKEL HORIZONTAL BERSAMA — thumbnail kiri + (kategori, judul, tanggal
// opsional) di kanan. Diekstrak dari daftar artikel index Berita supaya dipakai
// ulang PERSIS di dua tempat: Daftar Artikel (/berita, dengan tanggal) DAN
// "Artikel Terkait" di Detail Artikel (/berita/[slug], tanpa tanggal). Satu
// komponen, bukan dua kartu terpisah — jadi perubahan style otomatis konsisten.
export type ArticleCardProps = {
  href: string;
  img: string;
  category: string;
  title: string;
  // Tanggal opsional: ditampilkan di Daftar Artikel index, disembunyikan di
  // Artikel Terkait (sesuai referensi Detail Artikel).
  date?: string;
};

export default function ArticleCard({
  href,
  img,
  category,
  title,
  date,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 border-t border-[#e5e5e5] py-5 md:gap-6 md:py-6"
    >
      {/* Thumbnail landscape 4:3 (mendekati News Feed detiknews): 100×75 mobile,
          160×120 desktop. PLACEHOLDER SEMENTARA: ganti ke foto kategori final. */}
      <span className="relative block h-[75px] w-[100px] shrink-0 overflow-hidden rounded-lg md:h-[120px] md:w-[160px]">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 767px) 100px, 160px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-[#03428E]">{category}</p>
        <h4 className="mt-1.5 text-base font-bold leading-[1.4] text-[#171717] transition-colors duration-200 group-hover:text-[#03428E] md:text-[17px]">
          {title}
        </h4>
        {date && <p className="mt-2 text-[13px] text-[#808080]">{date}</p>}
      </div>
    </Link>
  );
}
