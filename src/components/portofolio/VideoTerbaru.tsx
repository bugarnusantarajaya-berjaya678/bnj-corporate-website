import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { VIDEOS } from "./data";

// Section "Video Terbaru" — grid 3 kolom, link keluar ke channel YouTube
// BNJ (belum ada video final per-unit, jadi link generik ke channel, bukan
// deep-link per video). Tidak disebut eksplisit di TUGAS 1-12, dibangun
// sebagai bagian utuh porting "Implement: Portofolio & Klien.dc.html".
export default function VideoTerbaru() {
  return (
    <section className="w-full bg-white px-6 pt-[var(--section-py)] pb-[var(--section-py-emphasis)] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="m-0 text-[22px] font-bold text-neutral-900">
            Video Terbaru
          </h2>
          <Link
            href="/video"
            className="whitespace-nowrap text-[13px] font-semibold text-[#03428E] transition-colors hover:text-[#032f66]"
          >
            Ke Halaman Video &rarr;
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VIDEOS.map((vid, i) => (
            <Reveal key={vid.title} delay={i * 0.08}>
              <a href={vid.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-video overflow-hidden rounded-[10px]">
                  <Image
                    src={vid.img}
                    alt={vid.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-black/50">
                      <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                    </span>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded bg-black/65 px-[7px] py-[3px] text-[11px] font-semibold text-white">
                    {vid.duration}
                  </span>
                </div>
                <h4 className="m-0 mt-3 text-[15px] font-bold leading-[1.35] text-neutral-900">
                  {vid.title}
                </h4>
                <p className="mt-1.5 text-[13px] text-neutral-500">
                  {vid.time}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
