import Image from "next/image";
import {
  Activity,
  Check,
  Dumbbell,
  Heart,
  Shield,
  ShieldPlus,
  Target,
  Zap,
} from "lucide-react";
import photo from "../../../../public/images/Page-EFM/EFM-Private-Program.png";
import Reveal from "@/components/Reveal";
import CountUp from "./CountUp";

const categories = [
  {
    icon: Shield,
    title: "Martial Arts",
    items: ["Brazilian Jiu-Jitsu", "Boxing"],
  },
  {
    icon: Activity,
    title: "Fitness & Sports Performance",
    items: [
      "Strength & Muscle Training",
      "Functional Training",
      "Fatloss & Bodyshape",
      "Corrective Exercises",
      "Running",
    ],
  },
  {
    icon: Heart,
    title: "Mind & Body",
    items: ["Hatha / Vinyasa Yoga"],
  },
  {
    icon: Zap,
    title: "Group Fitness",
    items: [
      "Cardio Boxing / Fitness Boxing",
      "Zumba Fitness",
      "Poundfit",
      "Senam Aerobik",
    ],
  },
  {
    icon: Target,
    title: "Racket Sports",
    items: ["Padel", "Tennis"],
  },
  {
    icon: ShieldPlus,
    title: "Therapeutic & Wellness Care",
    items: [
      "Sport Massage",
      "Sport Therapy",
      "Senior Program (Golden Age)",
      "Osteoarthritis Care",
    ],
  },
];

export default function PrivateProgram() {
  return (
    <section
      id="private-program"
      className="bg-white pt-14 pb-12 sm:pt-16 md:pt-24 md:pb-14 lg:pt-32 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Sesi Private Program Essential Fitness Management"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative border-l-[5px] border-[#6AA84F] pl-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 left-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:left-3 sm:text-[90px] lg:-top-10 lg:text-[150px]"
            >
              01
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <Dumbbell className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold leading-[1.2] text-[#03428E] md:text-[36px]">
                Private Program
              </h2>
            </div>
            <p className="relative z-10 mt-5 text-base leading-relaxed text-neutral-600">
              EFM menghadirkan program pelatihan kebugaran personal yang
              fleksibel, mencakup 6 kategori program dengan lebih dari 60
              pelatih dan terapis bersertifikasi dari berbagai bidang
              keahlian.
            </p>

            <div className="relative z-10 mt-6 flex flex-wrap gap-4">
              <div className="min-w-[150px] flex-1 rounded-[10px] border border-neutral-200 bg-white px-[18px] py-4">
                <CountUp
                  target={200}
                  className="block text-2xl font-extrabold leading-none text-[#03428E]"
                />
                <span className="mt-1.5 block text-[12.5px] font-semibold text-neutral-600">
                  Klien Telah Berlatih Private Program
                </span>
              </div>
              <div className="min-w-[150px] flex-1 rounded-[10px] border border-neutral-200 bg-white px-[18px] py-4">
                <CountUp
                  target={60}
                  className="block text-2xl font-extrabold leading-none text-[#03428E]"
                />
                <span className="mt-1.5 block text-[12.5px] font-semibold text-neutral-600">
                  Pelatih &amp; Terapis Bersertifikasi
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            6 Kategori Private Program
          </p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Berbagai Variasi Program Tersedia
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Reveal
              key={category.title}
              className="flex h-full flex-col border border-neutral-200 border-t-[3px] border-t-[#03428E] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <category.icon
                  className="h-[22px] w-[22px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[17px] font-bold text-neutral-900">
                {category.title}
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-y-3 border-t border-neutral-100 pt-5">
                {category.items.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 pr-3 ${
                      index % 2 === 1 ? "border-l border-neutral-200 pl-3" : ""
                    } ${index >= 2 ? "border-t border-neutral-100 pt-3" : ""}`}
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#03428E]"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-semibold text-neutral-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
