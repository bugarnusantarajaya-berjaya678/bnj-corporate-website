import MosaicCard from "./MosaicCard";
import MosaicCarousel from "./MosaicCarousel";
import { SEMUA_CARDS, SEMUA_PANEL } from "./data";

// Tab "Semua" — TUGAS 3: mosaic 5 kartu ringkasan lintas unit bisnis.
// Layout: [pasangan bertumpuk 270px] [kartu besar 260px] [pasangan
// bertumpuk 260px], identik struktur referensi Claude Design.
export default function SemuaMosaic() {
  const [efm, digitalLabs, brandIncubation, eca, investment] = SEMUA_CARDS;

  return (
    <MosaicCarousel
      panelHeading={SEMUA_PANEL.heading}
      panelBody={SEMUA_PANEL.body}
      panelHref="/ekosistem-bisnis"
    >
      <div className="flex w-[270px] shrink-0 flex-col gap-3.5">
        <MosaicCard {...efm} className="flex-1" />
        <MosaicCard {...digitalLabs} className="flex-1" />
      </div>
      <MosaicCard
        {...brandIncubation}
        className="h-[454px] w-[260px] shrink-0"
        labelClassName="text-sm"
      />
      <div className="flex w-[260px] shrink-0 flex-col gap-3.5">
        <MosaicCard {...eca} className="flex-1" />
        <MosaicCard {...investment} className="flex-1" />
      </div>
    </MosaicCarousel>
  );
}
