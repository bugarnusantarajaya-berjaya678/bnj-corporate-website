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

type Client = { name: string; logo: StaticImageData };

const clients: Client[] = [
  { name: "Telkom Indonesia", logo: telkomLogo },
  { name: "Telin", logo: telinLogo },
  { name: "AIA Insurance", logo: aiaLogo },
  { name: "OJK", logo: ojkLogo },
  { name: "Abumas Group", logo: abumasLogo },
  { name: "Wuling Motors", logo: wulingLogo },
  { name: "Trans TV", logo: transTvLogo },
  { name: "PT Suri Nusantara Jaya", logo: snjLogo },
  { name: "Pfizer", logo: pfizerLogo },
  { name: "Kejaksaan Agung", logo: kejagungLogo },
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
          <div className="relative h-full w-full">
            <Image
              src={client.logo}
              alt={ariaHidden ? "" : client.name}
              fill
              sizes="218px"
              className="object-contain"
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
