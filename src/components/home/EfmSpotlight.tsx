import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarDays, Play, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import photo1 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-1.webp";
import photo2 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-2.webp";
import photo3 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-3.webp";
import photo4 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-4.webp";
import photo5 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-5.webp";
import photo6 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-6.webp";
import photo7 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-7.webp";
import photo8 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-8.webp";
import videoThumb from "../../../public/images/Page-Home/Page-Home-Tentang-BNJ-Thumnail-Video.png";

const collageColumns = [
  { flex: 1.0, marginTop: "6%", images: [{ photo: photo3, flex: 1 }] },
  {
    flex: 1.35,
    marginTop: "0%",
    images: [
      { photo: photo5, flex: 1.05 },
      { photo: photo8, flex: 1 },
    ],
  },
  { flex: 2.0, marginTop: "3%", images: [{ photo: photo2, flex: 1 }] },
  {
    flex: 1.35,
    marginTop: "1.5%",
    images: [
      { photo: photo7, flex: 1 },
      { photo: photo1, flex: 1.1 },
    ],
  },
  {
    flex: 1.35,
    marginTop: "4%",
    images: [
      { photo: photo4, flex: 1.1 },
      { photo: photo6, flex: 1 },
    ],
  },
  { flex: 1.0, marginTop: "2%", images: [{ photo: photo5, flex: 1 }] },
];

const kpis = [
  { icon: CalendarDays, value: "9 Tahun", label: "Beroperasi" },
  { icon: Users, value: "200+", label: "Klien Korporat & Personal" },
  { icon: Award, value: "60+", label: "Pelatih & Terapis Bersertifikasi" },
];

// Sizing per-logo mengikuti standar ClientsPreview / halaman EFM: object-contain + transform scale.
// Lebar dikecilkan seragam ~20% dari nilai lama (104/120/150/56) supaya 4 logo muat 1 baris
// di lebar card standar; nilai scale dipertahankan agar proporsi antar-logo tetap seimbang.
const logos: { src: string; alt: string; w: number; scale?: number }[] = [
  { src: "/images/Page-Home/home-logo-telkom.png", alt: "Logo Telkom Indonesia", w: 83 },
  { src: "/images/Page-Home/home-logo-ojk.png", alt: "Logo OJK", w: 96, scale: 1.68 },
  { src: "/images/Page-Home/home-logo-wuling.png", alt: "Logo Wuling Motors", w: 120, scale: 1.1 },
  { src: "/images/Page-Home/home-logo-AIA.png", alt: "Logo AIA Insurance", w: 45, scale: 1.2 },
];

export default function EfmSpotlight() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[var(--section-py)]">
      {/* Zona atas — eyebrow + headline di background putih polos, tanpa foto */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="m-0 text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Bukti Nyata
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            9 Tahun Melayani Ekosistem Fitness &amp; Wellness Indonesia
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-neutral-600">
            Essential Fitness Management (EFM) adalah fondasi BNJ, beroperasi
            sejak 2017 dalam pengelolaan fitness, wellness, dan fasilitas
            olahraga untuk klien korporat maupun personal di seluruh Indonesia.
          </p>
        </Reveal>
      </div>

      {/* Zona bawah — foto blur muted FULL-BLEED (mentok tepi viewport), sibling di luar
          container konten; card di dalamnya tetap constrained ke max-width. */}
      <div className="relative mt-[var(--section-header-gap)] w-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div
            className="absolute flex items-stretch gap-[1%] blur-[2.5px]"
            style={{ left: "-2%", right: "-2%", top: "-3%", bottom: "-3%" }}
          >
            {collageColumns.map((col, i) => (
              <div
                key={i}
                className="flex min-w-0 flex-col gap-[1.2%]"
                style={{ flex: col.flex, marginTop: col.marginTop }}
              >
                {col.images.map((img, j) => (
                  <div
                    key={j}
                    className="relative min-h-0 overflow-hidden rounded-[14px]"
                    style={{ flex: img.flex }}
                  >
                    <Image src={img.photo} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[#03428E] opacity-85 mix-blend-color" />
          <div className="absolute inset-0 bg-white/[0.62]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff_0%,rgba(255,255,255,0)_12%,rgba(255,255,255,0)_88%,#fff_100%)]" />
        </div>

        {/* Konten card — tetap constrained ke max-width, tidak full-bleed */}
        <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-12">
          {/* Padding zona foto sebelum card — samakan dengan BNJ at a Glance */}
          <div className="px-[clamp(24px,3vw,40px)] py-[clamp(22px,2.6vw,34px)]">
        <Reveal
          delay={0.1}
          className="relative box-border rounded-3xl bg-white p-[clamp(28px,4vw,56px)] shadow-[0_8px_30px_rgba(3,66,142,0.14),0_6px_0_-2px_#03428E]"
        >
          <div className="efm-2col">
            <div className="efm-left flex flex-col">
              <div className="efm-kpi grid grid-cols-1 gap-3 md:grid-cols-3 md:items-stretch md:gap-[14px]">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="box-border flex flex-col items-center gap-2 rounded-[12px] bg-[#03428E]/[0.05] px-4 py-4 text-center md:block md:gap-0 md:px-[14px] md:py-[18px] md:text-left"
                  >
                    <div className="flex items-center gap-2 md:gap-[10px]">
                      <kpi.icon
                        className="block h-6 w-6 shrink-0 md:h-[22px] md:w-[22px]"
                        strokeWidth={1.5}
                        color="#03428E"
                      />
                      <p className="m-0 whitespace-nowrap text-[clamp(18px,1.8vw,21px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#03428E]">
                        {kpi.value}
                      </p>
                    </div>
                    <p className="text-[13px] leading-[1.5] text-neutral-600 md:mt-[10px] md:text-left">
                      {kpi.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="efm-logos mt-[clamp(28px,3.5vw,40px)] flex flex-wrap items-center gap-6 border-t border-neutral-200 pt-[clamp(24px,3vw,32px)]">
                {logos.map((logo) => (
                  <div
                    key={logo.src}
                    className="efm-logo flex h-14 shrink-0 items-center justify-center rounded-lg bg-white"
                    style={{ width: logo.w }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="block h-auto w-auto max-h-full max-w-full object-contain"
                      style={
                        logo.scale
                          ? { transform: `scale(${logo.scale})` }
                          : undefined
                      }
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/ekosistem-bisnis/efm"
                className="efm-cta mt-[clamp(28px,3.5vw,40px)] inline-flex w-fit items-center gap-[10px] self-start whitespace-nowrap rounded-lg bg-[#03428E] px-7 py-3.5 text-sm font-semibold leading-[1.2] text-white no-underline transition-colors duration-200 hover:bg-[#032f66]"
              >
                Lihat Detail EFM
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="efm-video flex items-start">
              <div className="relative aspect-[943/672] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
                <Image
                  src={videoThumb}
                  alt="Thumbnail video profil BNJ"
                  fill
                  className="object-cover"
                  sizes="(max-width:900px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#033470]/30" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-[clamp(56px,6vw,72px)] w-[clamp(56px,6vw,72px)] items-center justify-center rounded-full bg-white/[0.92] opacity-70">
                    <Play
                      className="ml-[3px] h-6 w-6"
                      fill="#03428E"
                      stroke="#03428E"
                    />
                  </span>
                </div>
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full border border-neutral-200 bg-white px-[14px] py-[6px] text-[11px] font-semibold text-[#03428E]">
                  Video Segera Hadir
                </span>
              </div>
            </div>
          </div>
        </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .efm-2col{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,4vw,56px);align-items:stretch;}
        @media (max-width:900px){
          .efm-2col{grid-template-columns:1fr;gap:clamp(24px,4vw,32px);}
          .efm-left{display:contents;}
          .efm-video{order:2;}
          /* Reset margin-top desktop (flex-col): di mobile efm-logos jadi grid row,
             spacing sudah dari grid gap — mencegah gap dobel/kosong besar video→logo. */
          .efm-logos{order:3;margin-top:0;}
          .efm-cta{order:4;}
        }
        @media (max-width:767px){
          .efm-left > p{text-align:center;}
          .efm-logos{justify-content:center;}
          /* Logo klien mobile — kecilkan ~22% (skala) supaya proporsional dg elemen card lain */
          .efm-logo{transform:scale(0.78);}
        }
      `}</style>
    </section>
  );
}
