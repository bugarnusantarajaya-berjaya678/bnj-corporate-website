"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { POSTINGAN_TERBARU } from "./data";

// TUGAS 9 — "Postingan Terbaru": carousel global (tampil di semua tab,
// tidak digated filter pilar), 3 kartu foto + progress bar tipis di bawah.
// Panah navigasi menempel pada track kartu (position:absolute di dalam
// wrapper), sesuai prinsip navigasi carousel yang berlaku di seluruh situs
// (sama seperti MosaicCarousel EFM/ECA di atas).
const CARD_W = 260;
const GAP = 20;
const STEP = CARD_W + GAP;

export default function PostinganTerbaru() {
  const [index, setIndex] = useState(0);
  const maxIndex = POSTINGAN_TERBARU.length - 1;

  return (
    <div className="mt-10">
      <h3 className="m-0 mb-5 text-[22px] font-bold text-neutral-900">
        Postingan Terbaru
      </h3>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-[350ms] ease-out"
            style={{ transform: `translateX(-${index * STEP}px)` }}
          >
            {POSTINGAN_TERBARU.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="relative block h-[220px] w-[260px] shrink-0 overflow-hidden rounded-[14px]"
              >
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="260px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="m-0 text-base font-bold text-white">
                    {post.title}
                  </p>
                  <p className="mt-0.5 text-[13px] text-white">{post.doc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {index > 0 && (
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            aria-label="Sebelumnya"
            className="absolute left-[-22px] top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#03428E] shadow-[0_4px_12px_rgba(3,66,142,0.35)] transition-colors hover:bg-[#032f66] max-lg:hidden"
          >
            <ChevronLeft className="h-[18px] w-[18px] text-white" strokeWidth={2} />
          </button>
        )}
        {index < maxIndex && (
          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            aria-label="Berikutnya"
            className="absolute right-[-22px] top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#03428E] shadow-[0_4px_12px_rgba(3,66,142,0.35)] transition-colors hover:bg-[#032f66] max-lg:hidden"
          >
            <ChevronRight className="h-[18px] w-[18px] text-white" strokeWidth={2} />
          </button>
        )}
      </div>
      <div className="relative mt-5 h-[3px] w-full rounded-full bg-neutral-200">
        <div
          className="absolute left-0 top-0 h-[3px] rounded-full bg-[#03428E] transition-[width] duration-[350ms] ease-out"
          style={{ width: `${((index + 1) / POSTINGAN_TERBARU.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
