import Image from "next/image";
import { DollarSign } from "lucide-react";
import photo from "../../../../public/images/Page-BNJ-Investment/EFM-invest-investasi-mandiri.png";
import Reveal from "@/components/Reveal";

export default function PortfolioMandiri() {
  return (
    <section id="tahap-1" className="scroll-mt-28 bg-white pt-14 pb-12 sm:pt-16 md:pt-24 md:pb-14 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative border-r-[5px] border-[#6AA84F] pr-6 text-right">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 right-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:right-3 sm:text-[90px] lg:-top-10 lg:text-[150px]"
            >
              01
            </span>
            <span className="relative z-10 mb-3.5 inline-block rounded-full bg-[#6AA84F]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#4b8f2f]">
              Tahap 1 &middot; 2028
            </span>
            <div className="relative z-10 flex flex-wrap items-center justify-end gap-3">
              <h2 className="text-[26px] font-bold leading-[1.25] text-[#03428E] md:text-[36px]">
                Investasi Portofolio
                <br />
                Mandiri
              </h2>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <DollarSign className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
            </div>
            <p className="relative z-10 ml-auto mt-3.5 max-w-[460px] text-base leading-relaxed text-neutral-600">
              BNJ akan mengawali dengan berinvestasi langsung ke bisnis di
              sektor Wellness, Fitness, Sport &amp; Health, dalam bentuk
              kepemilikan saham, pendanaan ekspansi fasilitas, maupun joint
              venture. Sasarannya mencakup gym, family massage &amp;
              treatment, lapangan olahraga, hingga studio olahraga seperti
              pilates. Tahap ini menjadi fondasi sebelum BNJ membuka jalur
              investasi ke pihak luar.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Ilustrasi strategi alokasi modal"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
            <p className="mt-2.5 text-xs italic text-neutral-400">
              Ilustrasi strategi alokasi modal
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
