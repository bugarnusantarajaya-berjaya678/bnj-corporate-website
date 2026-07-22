"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import photo2017 from "../../../../public/images/Page-EFM/EFM-milestone-2017.jpg";
import photo2018 from "../../../../public/images/Page-EFM/EFM-milestone-2018.jpg";
import photo2019 from "../../../../public/images/Page-EFM/EFM-milestone-2019.jpg";
import photo2020 from "../../../../public/images/Page-EFM/EFM-milestone-2020-2021.jpeg";
import photo2022 from "../../../../public/images/Page-EFM/EFM-milestone-2022.jpg";
import photo2023 from "../../../../public/images/Page-EFM/EFM-milestone-2023.jpg";
import photo2024 from "../../../../public/images/Page-EFM/EFM-milestone-2024.jpeg";
import photo2025 from "../../../../public/images/Page-EFM/EFM-milestone-2025.jpg";

type MilestoneEntry = {
  year: string;
  title: string;
  desc: string;
  photo: StaticImageData;
};

const milestones: MilestoneEntry[] = [
  {
    year: "2017",
    title: "Fondasi Awal",
    desc: "EFM didirikan dengan fokus pada Private Program, melayani kebutuhan personal training individu di Jakarta.",
    photo: photo2017,
  },
  {
    year: "2018",
    title: "Memasuki Ranah Korporat",
    desc: "Memulai kemitraan B2B pertama bersama Abumas Group dan PT Suri Nusantara Jaya (SNJ), menandai perluasan EFM ke segmen korporat. Di tahun yang sama, EFM juga menyelenggarakan event perdana bersama Telin, membuka langkah awal ke ranah event dan talent.",
    photo: photo2018,
  },
  {
    year: "2019",
    title: "Ekspansi ke Kancah Nasional",
    desc: "Memperluas kemitraan korporat bersama OJK dan Telkom Indonesia, sekaligus memperluas jangkauan hingga ke luar Jakarta, termasuk wilayah Sumatera Utara di kawasan Danau Toba, bersama Polres, Kejaksaan Agung, dan Pemerintah Kabupaten Simalungun. Di tahun yang sama, EFM juga merambah kerja sama dengan brand nasional seperti Trans TV dan Wuling Motors, serta komunitas Ketosharing, hingga e-commerce Jagapati.com.",
    photo: photo2019,
  },
  {
    year: "2020–2021",
    title: "Adaptasi di Masa Pandemi",
    desc: "Mengalihkan program B2B ke format online, termasuk program kesehatan karyawan digital bersama Telkom Indonesia, mencakup wellness seminar online serta program olahraga rutin melalui sesi Zoom, memastikan layanan tetap berjalan di tengah keterbatasan.",
    photo: photo2020,
  },
  {
    year: "2022",
    title: "Kembali ke Ranah Event",
    desc: "Menjalankan rangkaian event bersama Root of Life, Meika Beauty Lounge, Belly Lemon, dan Trans TV, termasuk “Fun Fit Play” bersama Good of Life, memadukan sesi zumba, dance fitness, dan bazar kesehatan.",
    photo: photo2022,
  },
  {
    year: "2023",
    title: "Ekspansi Kemitraan Brand & Klien Olahraga Prestasi",
    desc: "Menjalankan event promosi Antasari Place Apartment (Poundfit & Healthy Talks) yang dihadiri 150+ peserta, sekaligus jadi ruang bagi tim sales Antasari untuk menjaring calon pembeli langsung, membuktikan EFM mampu menghadirkan event yang berdampak nyata bagi mitra. Kemitraan diperluas bersama Goodlife untuk rangkaian event wellness dan fitness, memperkuat kepercayaan publik terhadap BNJ. Di tahun yang sama, EFM mulai merambah program privat olahraga prestasi, melatih atlet golf junior hingga profesional.",
    photo: photo2023,
  },
  {
    year: "2024",
    title: "Diversifikasi Layanan Olahraga & Terapi",
    desc: "Memperluas Private Program ke cabang olahraga spesifik (Boxing, Running, Golf, Brazilian Jiu-Jitsu), sekaligus menghadirkan layanan Sport Treatment (Sport Massage & Sport Therapy), segmen dengan pertumbuhan klien tertinggi di tahun ini.",
    photo: photo2024,
  },
  {
    year: "2025",
    title: "Memperluas Jaringan Korporat & Komunitas",
    desc: "Menambah cabang olahraga Padel dan Tennis ke Private Program, menjalankan event “Fun & Fabulous” bersama Goodlife di Binus Square, serta memperluas program B2B management, kelas zumba rutin bersama AIA Insurance, kelas padel bersama Pfizer, dan program Senior Wellness (50+) bersama Yayasan Al Ikhlas.",
    photo: photo2025,
  },
];

const AUTOPLAY_STEP = 50;
const AUTOPLAY_DURATION = 5000;

export default function Milestone() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlayingRef.current) return;
      setProgress((p) => {
        const next = p + (AUTOPLAY_STEP / AUTOPLAY_DURATION) * 100;
        if (next >= 100) {
          setIndex((i) => (i + 1) % milestones.length);
          return 0;
        }
        return next;
      });
    }, AUTOPLAY_STEP);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setIndex((i) => (i - 1 + milestones.length) % milestones.length);
    setProgress(0);
  };
  const goNext = () => {
    setIndex((i) => (i + 1) % milestones.length);
    setProgress(0);
  };

  const active = milestones[index];
  const next = milestones[(index + 1) % milestones.length];

  return (
    <section className="bg-white pt-14 pb-14 sm:pt-16 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]" />

        <Reveal className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Perjalanan Kami
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px] lg:max-w-none lg:whitespace-nowrap">
            Milestone Essential Fitness Management
          </h2>

          <div className="mx-auto mt-14 max-w-[1000px]">
            <div className="relative flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Sebelumnya"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors hover:border-[#03428E]"
              >
                <ChevronLeft className="h-[18px] w-[18px] text-[#03428E]" strokeWidth={2} />
              </button>

              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <div className="relative z-10 mr-11 grid grid-cols-1 items-center gap-8 rounded-2xl border border-neutral-200 bg-white p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={active.photo}
                      alt={`Momen EFM tahun ${active.year}, ${active.title}`}
                      fill
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="inline-block text-[32px] font-extrabold leading-none text-[#03428E] sm:text-[44px]">
                      {active.year}
                    </span>
                    <h3 className="mt-3.5 text-lg font-bold text-neutral-900 sm:text-xl">
                      {active.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
                      {active.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 w-11 overflow-hidden rounded-r-2xl">
                  <Image
                    src={next.photo}
                    alt=""
                    aria-hidden
                    fill
                    sizes="44px"
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.95),rgba(255,255,255,.25))]" />
                </div>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Berikutnya"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors hover:border-[#03428E]"
              >
                <ChevronRight className="h-[18px] w-[18px] text-[#03428E]" strokeWidth={2} />
              </button>
            </div>

            <div className="relative mt-7 flex items-center gap-1.5">
              {milestones.map((m, i) => {
                const fillPct = i < index ? 100 : i === index ? progress : 0;
                return (
                  <span
                    key={m.year}
                    className="relative block h-1 flex-1 overflow-hidden rounded-full bg-[#E3E7EC]"
                  >
                    <span
                      className="absolute inset-y-0 left-0 bg-[#03428E]"
                      style={{ width: `${fillPct}%` }}
                    />
                  </span>
                );
              })}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label="Play/Pause"
                className="ml-2 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white"
              >
                {isPlaying ? (
                  <Pause className="h-[11px] w-[11px] fill-[#03428E] text-[#03428E]" />
                ) : (
                  <Play className="h-[11px] w-[11px] fill-[#03428E] text-[#03428E]" />
                )}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
