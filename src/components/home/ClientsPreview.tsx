type Logo = { src: string; alt: string; scale?: number };

// Per-logo sizing disamakan dengan standar halaman EFM (ekosistem-bisnis/efm/ClientsPreview.tsx):
// container seragam + object-contain + transform scale per logo. Untuk logo yang sama dengan EFM,
// nilai scale-nya identik. Logo yang hanya ada di Home (SKN, Polres Simalungun) diberi scale
// proporsional agar harmonis dengan logo lain yang sudah di-adjust.
const logos: Logo[] = [
  { src: "/images/Page-Home/home-logo-abumas-group.png", alt: "Logo Abumas Group", scale: 1.68 },
  { src: "/images/Page-Home/home-logo-AIA.png", alt: "Logo AIA Insurance", scale: 1.2 },
  { src: "/images/Page-Home/home-logo-antasari-place.png", alt: "Logo Antasari Place", scale: 1.61 },
  { src: "/images/Page-Home/home-logo-jagapati.png", alt: "Logo Jagapati.com" },
  { src: "/images/Page-Home/home-logo-simalungun.png", alt: "Logo Pemerintah Kabupaten Simalungun", scale: 1.4 },
  { src: "/images/Page-Home/home-logo-kejagung.png", alt: "Logo Kejaksaan Agung", scale: 1.4 },
  { src: "/images/Page-Home/home-logo-ketosharing.jpg", alt: "Logo Ketosharing Community Hub", scale: 1.265 },
  { src: "/images/Page-Home/home-logo-belly-lemon.png", alt: "Logo Belly Lemon", scale: 1.265 },
  { src: "/images/Page-Home/home-logo-goodlife.png", alt: "Logo Goodlife" },
  { src: "/images/Page-Home/home-logo-hamptons-park.jpg", alt: "Logo Hampton's Park", scale: 1.55 },
  { src: "/images/Page-Home/home-logo-pfizer.png", alt: "Logo Pfizer", scale: 1.848 },
  // SKN: hanya ada di Home (partnership educational, tidak ada di EFM). Pertahankan, scale natural.
  { src: "/images/Page-Home/home-logo-Sang-Kreasi-Nusantara.jpg", alt: "Logo Sang Kreasi Nusantara" },
  { src: "/images/Page-Home/home-logo-trans-tv.png", alt: "Logo Trans TV" },
  { src: "/images/Page-Home/home-logo-meika.jpg", alt: "Logo Meika Beauty Lounge", scale: 1.12 },
  { src: "/images/Page-Home/home-logo-odf.jpg", alt: "Logo ODF Event Organizer" },
  { src: "/images/Page-Home/home-logo-ojk.png", alt: "Logo OJK", scale: 1.68 },
  // Polres Simalungun: hanya di Home — scale disamakan dengan Kabupaten Simalungun (emblem pemerintah sekeluarga).
  { src: "/images/Page-Home/home-logo-polres-simalungun.png", alt: "Logo Polres Simalungun", scale: 1.4 },
  { src: "/images/Page-Home/home-logo-snj.png", alt: "Logo PT Suri Nusantara Jaya", scale: 0.7 },
  { src: "/images/Page-Home/home-logo-root-of-life.png", alt: "Logo Root of Life", scale: 2.38 },
  { src: "/images/Page-Home/home-logo-telin.webp", alt: "Logo Telin", scale: 0.81 },
  { src: "/images/Page-Home/home-logo-telkom.png", alt: "Logo Telkom Indonesia" },
  { src: "/images/Page-Home/home-logo-wuling.png", alt: "Logo Wuling Motors", scale: 1.1 },
];

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-14"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex h-[76px] w-[170px] shrink-0 items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.alt}
            className="block max-h-full max-w-full object-contain"
            style={
              logo.scale ? { transform: `scale(${logo.scale})` } : undefined
            }
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientsPreview() {
  return (
    <section className="w-full bg-white px-6 py-[var(--section-py)] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="m-0 text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
          Dipercaya Oleh
        </p>
        <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
          Klien &amp; Mitra Kami
        </h2>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,#000_64px,#000_calc(100%-64px),transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_64px,#000_calc(100%-64px),transparent_100%)]">
        <div className="client-marquee flex w-max items-center gap-14">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>

      <style>{`
        .client-marquee{animation:marquee 48s linear infinite;}
        .client-marquee:hover{animation-play-state:paused;}
      `}</style>
    </section>
  );
}
