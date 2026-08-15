import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

// Kartu foto tunggal di dalam mosaic (Semua/EFM/ECA). comingSoon=true
// menerapkan efek blur+badge "Segera Hadir" yang sama dipakai di
// ComingSoonSection, supaya treatment identik di seluruh halaman ini.
export default function MosaicCard({
  label,
  img,
  doc,
  href,
  comingSoon = false,
  className = "",
  labelClassName = "text-[13px]",
}: {
  label: string;
  img: string;
  doc: string | null;
  href: string;
  comingSoon?: boolean;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-xl ${className}`}
    >
      <Image
        src={img}
        alt={label}
        fill
        sizes="(max-width: 768px) 45vw, 270px"
        className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
          comingSoon ? "scale-[1.08] blur-[5px] grayscale" : ""
        }`}
      />
      {comingSoon && (
        <div className="absolute inset-0 bg-[#78808c]/[0.32]" />
      )}
      {comingSoon ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.92] px-3 py-[5px]">
            <Clock className="h-[13px] w-[13px] text-[#525252]" strokeWidth={2} />
            <span className="text-[11px] font-bold text-[#525252]">
              Segera Hadir
            </span>
          </span>
        </div>
      ) : (
        <>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#03428E] via-[#03428E]/50 to-transparent p-3">
            <p className={`m-0 font-bold text-white ${labelClassName}`}>
              {label}
            </p>
            {doc && <p className="mt-0.5 text-[11px] text-white">{doc}</p>}
          </div>
          <span className="absolute bottom-2.5 right-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full border-[1.5px] border-white/90 bg-black/[0.18]">
            <ArrowUpRight className="h-[13px] w-[13px] text-white" strokeWidth={2} />
          </span>
        </>
      )}
    </Link>
  );
}
