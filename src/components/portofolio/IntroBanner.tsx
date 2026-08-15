import { Layers } from "lucide-react";
import Reveal from "@/components/Reveal";

// Section "1c" — ikon + headline + body, kartu abu-abu ringkas di bawah
// Hero. Subcopy TUGAS 10: sebelumnya menggemakan Hero secara hampir
// identik, sekarang menjelaskan proses verifikasi dokumentasi (bukan
// mengulang kalimat Hero).
export default function IntroBanner() {
  return (
    <section className="w-full bg-white px-6 pb-[var(--section-py)] lg:px-12">
      <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-2.5 rounded-2xl bg-[#F5F5F5] px-6 py-6 text-center shadow-[0_8px_24px_rgba(3,66,142,0.10)]">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#03428E] text-[#03428E]">
          <Layers className="h-[22px] w-[22px]" strokeWidth={1.75} />
        </span>
        <div>
          <h2 className="m-0 text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.3] text-neutral-900">
            Setiap Unit Bisnis, Satu Standar Dokumentasi
          </h2>
          <p className="mx-auto mt-2 max-w-[714px] text-sm leading-[1.6] text-[#666666]">
            Setiap dokumentasi diverifikasi oleh tim internal BNJ dan disusun
            dengan format yang sama, foto, video, dan detail kegiatan,
            sehingga klien dan mitra dapat menelusuri rekam jejak setiap unit
            bisnis dengan mudah.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
