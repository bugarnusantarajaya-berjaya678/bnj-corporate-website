import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SOROTAN } from "./data";

// BERITA SOROTAN (pinned) — 1 kartu besar full-width, foto full-bleed sebagai
// background, overlay gradient gelap (bawah) -> transparan (atas), badge
// "Sorotan" (Growth Green) di pojok kiri-atas, teks overlay di bawah.
export default function BeritaSorotan() {
  return (
    <section className="w-full bg-white pb-[clamp(64px,8vw,110px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <a
            href="#"
            className="group relative block min-h-[clamp(220px,26vw,260px)] overflow-hidden rounded-[14px]"
          >
            {/* PLACEHOLDER SEMENTARA: ganti ke foto kategori sesuai (EFM) saat foto final tersedia */}
            <Image
              src={SOROTAN.img}
              alt={SOROTAN.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Overlay gradient gelap bawah -> transparan atas (untuk keterbacaan teks putih) */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,66,142,0.9)_0%,rgba(3,66,142,0.3)_45%,rgba(3,66,142,0)_75%)]"
            />
            {/* Badge kategori "Sorotan" (Growth Green solid, teks putih) */}
            <span className="absolute left-5 top-5 rounded-full bg-[#6AA84F] px-3.5 py-1.5 text-xs font-bold text-white">
              Sorotan
            </span>
            <div className="absolute inset-x-0 bottom-0 p-[clamp(20px,3vw,32px)]">
              <p className="text-[13px] font-semibold text-white/85">
                {SOROTAN.category}
              </p>
              <h3 className="mt-2 max-w-[640px] text-[clamp(20px,2.4vw,26px)] font-bold leading-[1.3] text-white">
                {SOROTAN.title}
              </h3>
              <p className="mt-2.5 text-[13px] text-white/70">{SOROTAN.date}</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
