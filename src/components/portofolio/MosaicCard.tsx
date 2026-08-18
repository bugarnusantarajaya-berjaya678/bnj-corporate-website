import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";

// Kartu foto tunggal di dalam mosaic (Semua/EFM/ECA). Nilai gradient/badge
// di bawah diverifikasi persis dari file desain Claude Design (project
// "BNJ Landing Page Section", file "Portofolio & Klien.dc.html") —
// JANGAN ubah tanpa cross-check ulang ke situ.
//
// comingSoon=true (dipakai SemuaMosaic untuk BNJ Digital Labs/Brand
// Incubation/BNJ Investment Ventures) menampilkan badge kecil "Segera
// Hadir" di pojok kiri-bawah foto, in-flow di bawah label — foto tetap
// tajam+berwarna, TIDAK diblur. Tab pilar individual (diklik langsung)
// pakai treatment blur+grayscale terpisah, lihat PillarComingSoonCard.
export default function MosaicCard({
  label,
  img,
  doc,
  href,
  comingSoon = false,
  className = "",
  labelClassName = "text-[13px]",
  contentPadding = "p-3",
  imageSizes = "(max-width: 768px) 45vw, 270px",
}: {
  label: string;
  img: string;
  doc: string | null;
  href: string;
  comingSoon?: boolean;
  className?: string;
  labelClassName?: string;
  // Kartu portrait "big" (260x454) pakai padding 16px (p-4) sesuai desain;
  // kartu lain (stack landscape ~270x220) pakai 12px (p-3, default).
  contentPadding?: string;
  // "sizes" default di atas hanya menghitung LEBAR kolom. Cukup untuk kartu
  // landscape-ish (stacked pair, ~270x220 — aspect box dekat aspect source
  // foto). Kartu portrait tinggi penuh (h-[454px], aspect box ~0.57-0.6)
  // meng-crop foto landscape via object-cover pada sumbu TINGGI, jadi
  // kandidat srcset yang dipilih berdasarkan lebar 270px jauh kurang
  // resolusi untuk tinggi render 454px — hasilnya di-upscale CSS & pecah.
  // Untuk kartu portrait, override ke imageSizes="800px" (lihat pemanggil
  // di EfmMosaic/EcaMosaic/SemuaMosaic).
  imageSizes?: string;
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
        sizes={imageSizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        className={`absolute inset-x-0 bottom-0 ${contentPadding} bg-[linear-gradient(to_top,rgba(3,66,142,1)_0%,rgba(3,66,142,.5)_75%,transparent_100%)]`}
      >
        <p className={`m-0 font-bold text-white ${labelClassName}`}>
          {label}
        </p>
        {comingSoon ? (
          <span className="mt-1 inline-flex items-center gap-[5px] rounded-full bg-[rgba(255,255,255,.92)] px-[10px] py-[3px]">
            <Lock className="h-[10px] w-[10px] text-[#525252]" strokeWidth={2} />
            <span className="text-[10px] font-bold text-[#525252]">
              Segera Hadir
            </span>
          </span>
        ) : (
          doc && <p className="mt-0.5 text-[11px] text-white">{doc}</p>
        )}
      </div>
      {!comingSoon && (
        <span className="absolute bottom-2.5 right-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full border-[1.5px] border-white/90 bg-black/[0.18]">
          <ArrowUpRight className="h-[13px] w-[13px] text-white" strokeWidth={2} />
        </span>
      )}
    </Link>
  );
}
