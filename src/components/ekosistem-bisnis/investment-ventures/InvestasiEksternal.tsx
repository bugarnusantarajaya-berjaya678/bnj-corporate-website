import Image from "next/image";
import { LineChart } from "lucide-react";
import photo from "../../../../public/images/Page-BNJ-Investment/EFM-invest-investasi-eksternal.png";
import Reveal from "@/components/Reveal";

export default function InvestasiEksternal() {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Ilustrasi ekspansi bisnis & pertumbuhan portofolio"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
            <p className="mt-2.5 text-xs italic text-neutral-400">
              Ilustrasi ekspansi bisnis &amp; pertumbuhan portofolio
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative border-l-[5px] border-[#6AA84F] pl-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 left-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:left-3 sm:text-[90px] lg:-top-10 lg:text-[150px]"
            >
              02
            </span>
            <span className="relative z-10 mb-3.5 inline-block rounded-full bg-[#6AA84F]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#4b8f2f]">
              Tahap 2 &middot; 2029-2030
            </span>
            <div className="relative z-10 mt-3.5 flex flex-wrap items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <LineChart className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold uppercase leading-[1.25] text-[#03428E] md:text-[36px]">
                Membuka Jalur
                <br />
                Investasi Eksternal
              </h2>
            </div>
            <p className="relative z-10 mt-3.5 max-w-[460px] text-base leading-relaxed text-neutral-600">
              Setelah portofolio tahap awal terbukti berjalan, BNJ akan
              membuka peluang bagi investor eksternal untuk turut mendanai
              ekspansi cabang maupun bergabung ke portofolio yang sudah
              berjalan, sebagai jalur diversifikasi ke sektor Wellness,
              Fitness, Sport &amp; Health.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
