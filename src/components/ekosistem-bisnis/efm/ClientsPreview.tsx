import Image, { type StaticImageData } from "next/image";
import Reveal from "@/components/Reveal";
import telkomLogo from "../../../../public/images/Page-EFM/efm-logo-telkom.png";
import telinLogo from "../../../../public/images/Page-EFM/efm-logo-telin.webp";
import aiaLogo from "../../../../public/images/Page-EFM/efm-logo-AIA.png";
import ojkLogo from "../../../../public/images/Page-EFM/efm-logo-ojk.png";
import abumasLogo from "../../../../public/images/Page-EFM/efm-logo-abumas-group.png";
import wulingLogo from "../../../../public/images/Page-EFM/efm-logo-wuling.png";
import transTvLogo from "../../../../public/images/Page-EFM/efm-logo-trans-tv.png";
import snjLogo from "../../../../public/images/Page-EFM/efm-logo-snj.png";
import pfizerLogo from "../../../../public/images/Page-EFM/efm-logo-pfizer.png";
import kejagungLogo from "../../../../public/images/Page-EFM/efm-logo-kejagung.png";
import bellyLemonLogo from "../../../../public/images/Page-EFM/efm-logo-belly-lemon.png";
import ketosharingLogo from "../../../../public/images/Page-EFM/efm-logo-ketosharing.jpg";
import rootOfLifeLogo from "../../../../public/images/Page-EFM/efm-logo-root-of-life.png";
import hamptonsParkLogo from "../../../../public/images/Page-EFM/efm-logo-hamptons-park.jpg";
import goodlifeLogo from "../../../../public/images/Page-EFM/efm-logo-goodlife.png";
import jagapatiLogo from "../../../../public/images/Page-EFM/efm-logo-jagapati.png";
import simalungunLogo from "../../../../public/images/Page-EFM/efm-logo-simalungun.png";
import meikaLogo from "../../../../public/images/Page-EFM/efm-logo-meika.jpg";
import antasariPlaceLogo from "../../../../public/images/Page-EFM/efm-logo-antasari-place.png";
import odfLogo from "../../../../public/images/Page-EFM/efm-logo-odf.jpg";

type Client = { name: string; logo: StaticImageData; scale?: number };

const clients: Client[] = [
  { name: "Telkom Indonesia", logo: telkomLogo },
  { name: "Telin", logo: telinLogo, scale: 0.81 },
  { name: "AIA Insurance", logo: aiaLogo, scale: 1.2 },
  { name: "OJK", logo: ojkLogo, scale: 1.68 },
  { name: "Abumas Group", logo: abumasLogo, scale: 1.68 },
  { name: "Wuling Motors", logo: wulingLogo, scale: 1.1 },
  { name: "Trans TV", logo: transTvLogo },
  { name: "PT Suri Nusantara Jaya", logo: snjLogo, scale: 0.7 },
  { name: "Pfizer", logo: pfizerLogo, scale: 1.848 },
  { name: "Kejaksaan Agung", logo: kejagungLogo, scale: 1.4 },
  { name: "Belly Lemon", logo: bellyLemonLogo, scale: 1.265 },
  { name: "Ketosharing Community", logo: ketosharingLogo, scale: 1.265 },
  { name: "Root of Life", logo: rootOfLifeLogo, scale: 2.38 },
  { name: "Hamptons Park Apartment", logo: hamptonsParkLogo, scale: 1.55 },
  { name: "Goodlife", logo: goodlifeLogo },
  { name: "Jagapati.com", logo: jagapatiLogo },
  { name: "Kabupaten Simalungun", logo: simalungunLogo, scale: 1.4 },
  { name: "Meika Beauty Lounge", logo: meikaLogo, scale: 1.12 },
  { name: "Antasari Place Apartment", logo: antasariPlaceLogo, scale: 1.61 },
  { name: "ODF (One Day Organizer)", logo: odfLogo },
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-20"
      aria-hidden={ariaHidden || undefined}
    >
      {clients.map((client) => (
        <div
          key={client.name}
          className="flex h-[116px] w-[218px] shrink-0 items-center justify-center p-[22px]"
        >
          <div
            className="relative h-full w-full"
            style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
          >
            <Image
              src={client.logo}
              alt={ariaHidden ? "" : client.name}
              fill
              sizes="218px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ClientsPreview() {
  return (
    <section className="bg-white pt-14 pb-14 sm:pt-16 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]" />

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Dipercaya Oleh
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Klien &amp; Mitra Kami
          </h2>
        </Reveal>
      </div>

      <div
        className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,#000_64px,#000_calc(100%-64px),transparent_100%)]"
      >
        <div className="flex w-max animate-marquee items-center gap-20 group-hover:[animation-play-state:paused]">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
