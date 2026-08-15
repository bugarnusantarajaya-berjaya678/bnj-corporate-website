import MosaicCard from "./MosaicCard";
import MosaicCarousel from "./MosaicCarousel";
import { ECA_CARDS, ECA_PANEL } from "./data";

// Tab "ECA Aspire" — TUGAS 5: 4 kartu program, layout asimetris identik
// referensi Claude Design (pasangan bertumpuk 270px, kartu besar 260px,
// kartu tunggal pendek 270px×220px rata atas) — TIDAK diseragamkan seperti
// tab EFM karena TUGAS 5 tidak meminta perubahan layout, hanya teks & foto.
export default function EcaMosaic() {
  const [basic, advanced, summerCamp, fieldTrip] = ECA_CARDS;

  return (
    <MosaicCarousel
      panelHeading={ECA_PANEL.heading}
      panelBody={ECA_PANEL.body}
      panelHref={ECA_PANEL.href}
    >
      <div className="flex w-[270px] shrink-0 flex-col gap-3.5">
        <MosaicCard {...basic} className="flex-1" />
        <MosaicCard {...advanced} className="flex-1" />
      </div>
      <MosaicCard
        {...summerCamp}
        className="h-[454px] w-[260px] shrink-0"
        labelClassName="text-sm"
      />
      <MosaicCard {...fieldTrip} className="h-[220px] w-[270px] shrink-0 self-start" />
    </MosaicCarousel>
  );
}
