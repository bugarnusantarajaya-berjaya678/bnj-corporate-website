import Link from "next/link";

// BREADCRUMB bersama — dipakai Detail Artikel (/berita/[slug]) & halaman Video
// (/berita/video). Token style identik: teks 13px medium, separator "/" abu
// (#808080), crumb ber-href = link Corporate Blue (#03428E, hover #032f66),
// crumb current (tanpa href) = abu-gelap (#525252), tidak clickable.
export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <p className="m-0 truncate text-[13px] font-medium text-[#808080]">
      {items.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="text-[#808080]"> / </span>}
          {c.href ? (
            <Link href={c.href} className="text-[#03428E] hover:text-[#032f66]">
              {c.label}
            </Link>
          ) : (
            <span className="text-[#525252]">{c.label}</span>
          )}
        </span>
      ))}
    </p>
  );
}
