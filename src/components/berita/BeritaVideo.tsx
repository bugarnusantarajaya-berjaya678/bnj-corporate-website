"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { VIDEOS } from "./data";

// SECTION VIDEO — grid 3 kolom, facade embed (lazy). Thumbnail + tombol play
// bertindak sebagai TRIGGER. Untuk fase dummy, video BELUM terhubung ke YouTube
// sungguhan (youtubeId masih null), jadi klik play menampilkan placeholder
// state, bukan redirect langsung ke YouTube dan bukan iframe aktif langsung.
//
// Saat backend "Kelola Video" mengisi youtubeId, klik play akan menukar
// thumbnail dengan <iframe> YouTube (privacy-enhanced domain), tetap lazy
// (iframe baru dibuat saat diklik, bukan saat page load). Preconnect ke
// youtube.com & i.ytimg.com sudah disiapkan di <head> halaman ini.
export default function BeritaVideo() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="w-full bg-white pb-[clamp(64px,8vw,110px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h3 className="text-[clamp(20px,2.2vw,24px)] font-bold text-[#171717]">
            Video
          </h3>
          {/* Halaman /video menyusul (backend Kelola Video). */}
          <Link
            href="/video"
            className="whitespace-nowrap text-[13px] font-semibold text-[#03428E] transition-colors duration-200 hover:text-[#032f66]"
          >
            Ke Halaman Video &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VIDEOS.map((vid) => {
            const active = activeId === vid.id;
            return (
              <Reveal key={vid.id}>
                <div className="block">
                  <div className="relative overflow-hidden rounded-[10px]">
                    {active ? (
                      vid.youtubeId ? (
                        // Embed sungguhan (baru dimuat saat diklik — tetap lazy).
                        // youtube-nocookie = privacy-enhanced mode.
                        <div className="aspect-video w-full">
                          <iframe
                            className="h-full w-full"
                            src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1`}
                            title={vid.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        // Placeholder state fase dummy: iframe belum dimuat karena
                        // belum ada video asli. Struktur komponen sudah siap;
                        // iframe akan tampil di sini begitu youtubeId terisi.
                        <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 bg-[#03428E]/[0.06] px-4 text-center">
                          <span className="text-sm font-semibold text-[#03428E]">
                            Video Segera Hadir
                          </span>
                          <span className="max-w-[240px] text-xs leading-relaxed text-[#525252]">
                            Pemutar video akan dimuat di sini saat data video
                            asli tersedia dari BNJ.
                          </span>
                        </div>
                      )
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveId(vid.id)}
                        aria-label={`Putar video: ${vid.title}`}
                        className="group block w-full"
                      >
                        {/* PLACEHOLDER SEMENTARA: ganti ke thumbnail video asli saat tersedia */}
                        <span className="relative block aspect-video w-full">
                          <Image
                            src={vid.img}
                            alt={vid.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                          <span className="absolute inset-0 flex items-center justify-center">
                            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-black/50 transition-colors duration-200 group-hover:bg-black/70">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                aria-hidden
                              >
                                <polygon points="6 4 20 12 6 20" />
                              </svg>
                            </span>
                          </span>
                          <span className="absolute bottom-2 right-2 rounded bg-black/65 px-[7px] py-[3px] text-[11px] font-semibold text-white">
                            {vid.duration}
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                  <h4 className="mt-3 text-[15px] font-bold leading-[1.35] text-[#171717]">
                    {vid.title}
                  </h4>
                  <p className="mt-1.5 text-[13px] text-[#808080]">{vid.time}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
