import MosaicCard from "./MosaicCard";
import MosaicCarousel from "./MosaicCarousel";
import { EFM_CARDS, EFM_PANEL } from "./data";

// Tab "Essential Fitness Management" — mosaic asimetris (acuan referensi
// Club Med), berulang per grup 3 kartu: 2 kartu landscape ditumpuk
// vertikal (posisi kolom stack) + 1 kartu portrait tinggi penuh (posisi
// kolom tunggal). Pola ini mengikuti POSISI KOLOM di grid — bukan
// hardcode per kartu/slug tertentu — supaya kartu apa pun yang landing di
// posisi stack (termasuk saat carousel discroll melewati grup pertama)
// otomatis landscape, dan yang landing di posisi tunggal otomatis
// portrait. Grup terakhir yang tidak genap (mis. 1 kartu tersisa) tetap
// landscape di posisi atas kolom stack, TIDAK stretch jadi portrait.
// Lebar kolom stack pertama 270px, kolom stack berikutnya 260px (sama
// seperti kolom "big" portrait) — persis nilai file desain, JANGAN
// diseragamkan ke satu angka.
export default function EfmMosaic() {
  const groups: (typeof EFM_CARDS[number])[][] = [];
  for (let i = 0; i < EFM_CARDS.length; i += 3) {
    groups.push(EFM_CARDS.slice(i, i + 3));
  }

  return (
    <MosaicCarousel
      panelHeading={EFM_PANEL.heading}
      panelBody={EFM_PANEL.body}
      panelHref={EFM_PANEL.href}
    >
      {groups.map(([stackTop, stackBottom, tall], i) => {
        const stackWidth = i === 0 ? "w-[270px]" : "w-[260px]";
        return (
          <div key={i} className="flex shrink-0 gap-3.5">
            <div className={`flex ${stackWidth} shrink-0 flex-col gap-3.5`}>
              <MosaicCard
                {...stackTop}
                className={stackBottom ? "flex-1" : "h-[220px]"}
              />
              {stackBottom && (
                <MosaicCard {...stackBottom} className="flex-1" />
              )}
            </div>
            {tall && (
              <MosaicCard
                {...tall}
                className="h-[454px] w-[260px] shrink-0"
                labelClassName="text-sm"
                contentPadding="p-4"
                imageSizes="800px"
              />
            )}
          </div>
        );
      })}
    </MosaicCarousel>
  );
}
