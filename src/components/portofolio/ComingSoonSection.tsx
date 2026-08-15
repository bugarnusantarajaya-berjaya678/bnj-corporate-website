import Link from "next/link";
import MosaicCard from "./MosaicCard";
import { COMING_SOON_TABS } from "./data";

// Tab Digital Labs / Brand Incubation / Investment Ventures: kartu biru +
// 3 kartu foto blur+badge "Segera Hadir" (statis, tanpa carousel — muat
// dalam 1 baris tanpa overflow, tidak seperti mosaic EFM/ECA/Semua).
// TUGAS 6: foto TETAP dummy, hanya body text kartu biru yang berubah.
// TUGAS 12: tab Brand Incubation & BNJ Investment Ventures reuse komponen
// ini persis (empty-state sama).
export default function ComingSoonSection({
  tab,
}: {
  tab: keyof typeof COMING_SOON_TABS;
}) {
  const { heading, body, href, photos } = COMING_SOON_TABS[tab];

  return (
    <div className="mx-auto max-w-[960px] md:pl-[60px]">
      <div className="flex flex-col gap-3.5 md:flex-row">
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

        <div className="flex min-w-0 flex-1 flex-col gap-3.5 sm:flex-row">
          <div className="flex flex-1 gap-3.5 sm:flex-col">
            <MosaicCard
              label="Ilustrasi pengembangan produk"
              img={photos[0]}
              doc={null}
              href={href}
              comingSoon
              className="aspect-square flex-1 sm:aspect-auto"
            />
            <MosaicCard
              label="Ilustrasi pengembangan produk"
              img={photos[1]}
              doc={null}
              href={href}
              comingSoon
              className="aspect-square flex-1 sm:aspect-auto"
            />
          </div>
          <MosaicCard
            label="Ilustrasi pengembangan produk"
            img={photos[2]}
            doc={null}
            href={href}
            comingSoon
            className="aspect-square flex-1 sm:aspect-auto md:h-[454px] md:w-[260px] md:flex-none"
          />
        </div>
      </div>
    </div>
  );
}
