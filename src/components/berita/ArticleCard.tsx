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
      className="group flex items-center gap-5 border-t border-[#e5e5e5] py-[18px]"
    >
      {/* PLACEHOLDER SEMENTARA: ganti ke foto kategori sesuai saat foto final tersedia */}
      <span className="relative block h-[78px] w-[110px] shrink-0 overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          fill
          sizes="110px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-[#03428E]">{category}</p>
        <h4 className="mt-1.5 text-base font-bold leading-[1.35] text-[#171717] transition-colors duration-200 group-hover:text-[#03428E]">
          {title}
        </h4>
        {date && <p className="mt-1.5 text-[13px] text-[#808080]">{date}</p>}
      </div>
    </Link>
  );
}
