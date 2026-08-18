import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

// Kartu foto blur+grayscale untuk tab pilar individual (Digital Labs/
// Brand Incubation/Investment Ventures) yang diklik LANGSUNG — beda dari
// MosaicCard comingSoon (dipakai tab "Semua", foto tajam+badge kecil).
// Nilai style di bawah diverifikasi persis dari file desain Claude Design
// (project "BNJ Landing Page Section", file "Portofolio & Klien.dc.html").
//
// label diisi → badge pojok kanan-atas + label bottom-gradient (satu2nya
// contoh di desain: kartu "BNJ Vitality Intelligence" di tab Digital
// Labs). label kosong → badge di tengah foto, tanpa label/href (kartu
// dummy generik, TIDAK bisa diklik sesuai desain).
export default function PillarComingSoonCard({
  img,
  alt,
  href,
  label,
  className = "",
  contentPadding = "p-3",
  imageSizes = "(max-width: 768px) 45vw, 270px",
}: {
  img: string;
  alt: string;
  href?: string;
  label?: string;
  className?: string;
  contentPadding?: string;
  imageSizes?: string;
}) {
  const badge = (
    <span className="inline-flex items-center gap-[6px] rounded-full bg-[rgba(255,255,255,.92)] px-3 py-[5px]">
      <Lock className="h-[13px] w-[13px] text-[#525252]" strokeWidth={2} />
      <span className="text-[11px] font-bold text-[#525252]">
        Segera Hadir
      </span>
    </span>
  );

  const inner = (
    <>
      <Image
        src={img}
        alt={alt}
        fill
        sizes={imageSizes}
        className="scale-[1.08] object-cover blur-[5px] grayscale"
      />
      <div className="absolute inset-0 bg-[#78808c]/[0.32]" />
      {label ? (
        <>
          <span className="absolute right-3 top-3">{badge}</span>
          <div
            className={`absolute inset-x-0 bottom-0 ${contentPadding} bg-[linear-gradient(to_top,rgba(3,41,89,.85)_0%,transparent_100%)]`}
          >
            <p className="m-0 text-sm font-bold text-white">{label}</p>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          {badge}
        </div>
      )}
    </>
  );

  const classes = `group relative block overflow-hidden rounded-xl ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}
