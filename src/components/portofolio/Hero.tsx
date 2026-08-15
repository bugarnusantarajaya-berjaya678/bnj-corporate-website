import Image from "next/image";
import Reveal from "@/components/Reveal";

// HERO "Rekam Jejak BNJ" — kartu biru + foto, satu-satunya heading utama
// halaman /portofolio (halaman ini tidak pakai Page Header §0 terpisah,
// sesuai referensi Claude Design). Foto: portofolio-header.png (TUGAS 2).
export default function Hero() {
  return (
    <section className="w-full bg-white px-6 py-[var(--section-py)] lg:px-12">
      <div className="mx-auto flex max-w-7xl justify-center">
        <Reveal className="w-full max-w-[722px]">
          <div className="flex flex-col overflow-hidden rounded-[20px]">
            <div className="flex items-center gap-5 bg-[#03428E] px-6 py-6 sm:px-11">
              <Image
                src="/images/portofolio-logo-bnj-putih.png"
                alt="Simbol BNJ"
                width={82}
                height={82}
                unoptimized
                className="hidden h-14 w-14 shrink-0 sm:block"
              />
              <div className="flex flex-col">
                <h1 className="m-0 text-left text-[26px] font-bold text-white sm:text-[31px]">
                  Rekam Jejak BNJ
                </h1>
                <p className="mt-2 max-w-[490px] text-left text-xs leading-[1.55] text-white/90">
                  Dari kebugaran korporat, teknologi, pendidikan, hingga
                  aktivitas komunitas, setiap unit bisnis BNJ mendokumentasikan
                  pertumbuhannya secara nyata di halaman ini.
                </p>
              </div>
            </div>
            <div className="relative aspect-video w-full">
              <Image
                src="/images/portofolio-header.jpg"
                alt="Dokumentasi utama rekam jejak BNJ"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 722px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
