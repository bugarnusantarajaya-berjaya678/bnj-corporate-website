const logos = [
  { src: "/images/Page-Home/home-logo-abumas-group.png", alt: "Logo Abumas Group", w: 107, h: 60 },
  { src: "/images/Page-Home/home-logo-AIA.png", alt: "Logo AIA Insurance", w: 65, h: 70 },
  { src: "/images/Page-Home/home-logo-antasari-place.png", alt: "Logo Antasari Place", w: 44, h: 70 },
  { src: "/images/Page-Home/home-logo-jagapati.png", alt: "Logo Jagapati.com", w: 178, h: 44 },
  { src: "/images/Page-Home/home-logo-simalungun.png", alt: "Logo Pemerintah Kabupaten Simalungun", w: 56, h: 70 },
  { src: "/images/Page-Home/home-logo-kejagung.png", alt: "Logo Kejaksaan Agung", w: 68, h: 70 },
  { src: "/images/Page-Home/home-logo-ketosharing.jpg", alt: "Logo Ketosharing Community Hub", w: 107, h: 60 },
  { src: "/images/Page-Home/home-logo-belly-lemon.png", alt: "Logo Belly Lemon", w: 91, h: 70 },
  { src: "/images/Page-Home/home-logo-goodlife.png", alt: "Logo Goodlife", w: 97, h: 60 },
  { src: "/images/Page-Home/home-logo-hamptons-park.jpg", alt: "Logo Hampton's Park", w: 150, h: 76 },
  { src: "/images/Page-Home/home-logo-pfizer.png", alt: "Logo Pfizer", w: 70, h: 70 },
  { src: "/images/Page-Home/home-logo-Sang-Kreasi-Nusantara.jpg", alt: "Logo Sang Kreasi Nusantara", w: 70, h: 70 },
  { src: "/images/Page-Home/home-logo-trans-tv.png", alt: "Logo Trans TV", w: 220, h: 44 },
  { src: "/images/Page-Home/home-logo-meika.jpg", alt: "Logo Meika Beauty Lounge", w: 148, h: 60 },
  { src: "/images/Page-Home/home-logo-odf.jpg", alt: "Logo ODF Event Organizer", w: 100, h: 60 },
  { src: "/images/Page-Home/home-logo-ojk.png", alt: "Logo OJK", w: 99, h: 70 },
  { src: "/images/Page-Home/home-logo-polres-simalungun.png", alt: "Logo Polres Simalungun", w: 128, h: 60 },
  { src: "/images/Page-Home/home-logo-snj.png", alt: "Logo PT Suri Nusantara Jaya", w: 150, h: 76 },
  { src: "/images/Page-Home/home-logo-root-of-life.png", alt: "Logo Root of Life", w: 70, h: 70 },
  { src: "/images/Page-Home/home-logo-telin.webp", alt: "Logo Telin", w: 150, h: 76 },
  { src: "/images/Page-Home/home-logo-telkom.png", alt: "Logo Telkom Indonesia", w: 109, h: 60 },
  { src: "/images/Page-Home/home-logo-wuling.png", alt: "Logo Wuling Motors", w: 200, h: 44 },
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
          className="flex h-[76px] w-[170px] items-center justify-center"
        >
          <div
            className="flex items-center justify-center"
            style={{ width: logo.w, height: logo.h }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="block h-auto w-auto max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ClientsPreview() {
  return (
    <section className="w-full bg-surface px-6 py-[var(--section-py)] lg:px-12">
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
