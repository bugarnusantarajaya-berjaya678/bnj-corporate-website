"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const milestoneRows = [
  [
    {
      year: "2017",
      text: "Essential Fitness Management (EFM) didirikan sebagai fondasi pengalaman operasional BNJ dalam bidang fitness management, personal training, dan layanan wellness.",
    },
    {
      year: "2018",
      text: "Memperluas layanan ke program corporate wellness, personal training premium, inisiatif kebugaran komunitas, serta pengelolaan fasilitas olahraga.",
    },
    {
      year: "2020",
      text: "Memperkuat sistem operasional, standarisasi layanan, pengembangan instruktur, serta penerapan kerangka kendali mutu (quality control).",
    },
    {
      year: "2021",
      text: "Memperkuat sistem operasional, standarisasi layanan, pengembangan instruktur, serta penerapan kerangka kendali mutu (quality control) secara berkelanjutan di seluruh operasional.",
    },
    {
      year: "2022",
      text: "CV Bugar Nusantara Jaya resmi didirikan sebagai entitas usaha yang mengintegrasikan berbagai aktivitas bisnis ke dalam struktur manajemen yang lebih terarah dan terorganisir.",
    },
  ],
  [
    {
      year: "2023",
      text: "Memulai pengembangan jaringan instruktur, program pengembangan talenta, serta fondasi ekspansi bisnis di sektor pendidikan dan sport development.",
    },
    {
      year: "2024",
      text: "ECA Aspire memperkuat model kemitraan pendidikan dengan menjalankan program ekstrakurikuler terstruktur di Sampoerna Academy BSD.",
    },
    {
      year: "2025",
      text: "BNJ dan CV Sang Kreasi Nusantara (SKN) memulai kolaborasi strategis untuk memperkuat sistem operasional, pengelolaan instruktur, pelaporan program, dan pengembangan bisnis ECA Aspire yang mendukung pertumbuhan jumlah siswa serta ekspansi ke sekolah nasional plus dan internasional.",
    },
    {
      year: "2026",
      text: "Fase ekspansi difokuskan pada pertumbuhan jumlah siswa, skalabilitas operasional, serta pengembangan kemitraan dengan sekolah nasional plus dan internasional.",
    },
  ],
];

export default function Milestone() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Milestone
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            A Progressive Journey
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Perjalanan progresif yang dibangun melalui pengalaman
            operasional, kemitraan strategis, pengembangan talenta, dan
            pertumbuhan bisnis berkelanjutan.
          </p>
        </Reveal>

        {/* Desktop / tablet horizontal timeline */}
        <div className="mt-16 hidden flex-col gap-16 md:flex">
          {milestoneRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative flex">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-2 h-px bg-neutral-200"
              />
              {row.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="flex flex-1 flex-col pr-6 last:pr-0"
                >
                  <span
                    aria-hidden
                    className="relative z-10 h-4 w-4 rounded-full bg-[#03428E] ring-4 ring-white"
                  />
                  <p className="mt-5 text-2xl font-bold text-[#03428E] sm:text-3xl">
                    {item.year}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative mt-12 flex flex-col gap-10 md:hidden">
          <div
            aria-hidden
            className="absolute bottom-0 left-[7px] top-2 w-px bg-neutral-200"
          />
          {milestoneRows.flat().map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: (index % 5) * 0.08,
                ease: "easeOut",
              }}
              className="relative pl-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#03428E] ring-4 ring-white"
              />
              <p className="text-xl font-bold text-[#03428E]">{item.year}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
