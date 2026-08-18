import Link from "next/link";
import PillarComingSoonCard from "./PillarComingSoonCard";
import { PILLAR_COMING_SOON_TABS } from "./data";

// Tab pilar individual diklik langsung (BNJ Digital Labs / Brand
// Incubation / BNJ Investment Ventures) — mosaic statis blur+grayscale,
// TIDAK carousel (3 kartu selalu muat dalam 1 baris tanpa overflow,
// beda dari mosaic EFM/ECA/Semua). Struktur & margin-left:60px persis
// dari file desain Claude Design "Portofolio & Klien.dc.html".
export default function PillarComingSoonMosaic({
  tab,
}: {
  tab: keyof typeof PILLAR_COMING_SOON_TABS;
}) {
  const { heading, body, href, cards } = PILLAR_COMING_SOON_TABS[tab];
  const [top, bottom, big] = cards;

  return (
    <div className="mx-auto flex max-w-[960px] justify-center">
      <div className="flex w-full gap-3.5 md:pl-[60px]">
        <div className="flex w-full flex-col justify-center rounded-xl bg-[#03428E] p-5 md:h-[454px] md:w-[270px] md:shrink-0">
          <h3 className="m-0 text-[19px] font-bold leading-[1.3] text-white">
            {heading}
          </h3>
          <p className="mt-2.5 text-sm leading-[1.55] text-white/80">
            {body}
          </p>
          <Link
            href={href}
            className="mt-3.5 w-fit text-xs font-semibold text-white underline underline-offset-[3px]"
          >
            Lihat Selengkapnya
          </Link>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3.5 sm:flex-row sm:h-[454px]">
          <div className="flex flex-1 gap-3.5 sm:flex-col">
            <PillarComingSoonCard
              {...top}
              className="aspect-square flex-1 sm:aspect-auto"
            />
            <PillarComingSoonCard
              {...bottom}
              className="aspect-square flex-1 sm:aspect-auto"
            />
          </div>
          <PillarComingSoonCard
            {...big}
            className="aspect-square flex-1 sm:aspect-auto sm:h-[454px] sm:w-[260px] sm:flex-none"
            contentPadding="p-4"
            imageSizes="800px"
          />
        </div>
      </div>
    </div>
  );
}
