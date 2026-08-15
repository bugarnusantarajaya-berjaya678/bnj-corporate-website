import MosaicCard from "./MosaicCard";
import MosaicCarousel from "./MosaicCarousel";
import { EFM_CARDS, EFM_PANEL } from "./data";

// Tab "Essential Fitness Management" — TUGAS 4: 4 kartu sub-program, semua
// dengan style & ukuran yang SAMA PERSIS (bukan pasangan bertumpuk seperti
// tab Semua) — termasuk kartu ke-4 "Essential Community Hub" yang
// sebelumnya placeholder/kosong.
export default function EfmMosaic() {
  return (
    <MosaicCarousel
      panelHeading={EFM_PANEL.heading}
      panelBody={EFM_PANEL.body}
      panelHref={EFM_PANEL.href}
    >
      {EFM_CARDS.map((card) => (
        <MosaicCard
          key={card.label}
          {...card}
          className="h-[454px] w-[230px] shrink-0"
        />
      ))}
    </MosaicCarousel>
  );
}
