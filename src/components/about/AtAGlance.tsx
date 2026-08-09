import Image from "next/image";
import { Building2, MapPin, Network, Target } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import photo1 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-1.webp";
import photo2 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-2.webp";
import photo3 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-3.webp";
import photo4 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-4.webp";
import photo5 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-5.webp";
import photo6 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-6.webp";
import photo7 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-7.webp";
import photo8 from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-8.webp";

const stats = [
  { value: 2017, label: "Berdiri Sejak" },
  { value: 2022, label: "Entitas Legal Resmi" },
  { value: 5, label: "Ekosistem Bisnis Terintegrasi" },
];

const facts = [
  {
    icon: Target,
    title: "Fokus Industri",
    text: "Fitness, Wellness, Sport, Education",
  },
  {
    icon: Building2,
    title: "Model Bisnis",
    text: "Holding Company & Venture Builder",
  },
  {
    icon: Network,
    title: "Kekuatan Inti",
    text: "Operasional, Talenta, Teknologi, Kemitraan Strategis",
  },
  {
    icon: MapPin,
    title: "Cakupan Operasional",
    text: "Indonesia",
  },
];

const collageColumns = [
  { flex: 1.0, marginTop: "6%", images: [{ photo: photo1, flex: 1 }] },
  {
    flex: 1.35,
    marginTop: "0%",
    images: [
      { photo: photo2, flex: 1.05 },
      { photo: photo3, flex: 1 },
    ],
  },
  { flex: 2.0, marginTop: "3%", images: [{ photo: photo4, flex: 1 }] },
  {
    flex: 1.35,
    marginTop: "1.5%",
    images: [
      { photo: photo5, flex: 1 },
      { photo: photo6, flex: 1.1 },
    ],
  },
  {
    flex: 1.35,
    marginTop: "4%",
    images: [
      { photo: photo7, flex: 1.1 },
      { photo: photo8, flex: 1 },
    ],
  },
  { flex: 1.0, marginTop: "2%", images: [{ photo: photo2, flex: 1 }] },
];

export default function AtAGlance() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[var(--section-py)]">
      {/* Zona atas — teks constrained ke max-width container, tidak berubah */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Zona atas — teks di atas background putih polos, tanpa foto */}
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            BNJ Sekilas
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            BNJ at a Glance
          </h2>
          <p className="mt-4 hidden max-w-[68%] text-[15px] leading-[1.7] text-neutral-600 md:block">
            Sejak 2017, BNJ membangun setiap unit bisnisnya melalui pendekatan
            yang sama: sistem operasional yang terstandardisasi, kemitraan yang
            selektif, dan pertumbuhan yang diukur sebelum diperluas, bukan
            ekspansi cepat tanpa fondasi.
          </p>
          <p className="mt-4 text-[15px] leading-[1.7] text-neutral-600 md:hidden">
            Sejak 2017, BNJ membangun setiap unit bisnis dengan sistem
            operasional yang terstandardisasi dan pertumbuhan yang terukur,
            bukan ekspansi tanpa fondasi.
          </p>
        </Reveal>
      </div>

      {/* Zona bawah — foto muted/blur FULL-BLEED (mentok tepi viewport), sibling di luar
          container konten; card KPI di dalamnya tetap constrained ke max-width. */}
      <div className="relative mt-[var(--section-header-gap)] w-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div
            className="absolute flex items-stretch gap-[1%] blur-[2.5px]"
            style={{ left: "-2%", right: "-2%", top: "-3%", bottom: "-3%" }}
          >
            {collageColumns.map((col, i) => (
              <div
                key={i}
                className="flex min-w-0 flex-col gap-[1.2%]"
                style={{ flex: col.flex, marginTop: col.marginTop }}
              >
                {col.images.map((img, j) => (
                  <div
                    key={j}
                    className="relative min-h-0 overflow-hidden rounded-[14px]"
                    style={{ flex: img.flex }}
                  >
                    <Image src={img.photo} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[#03428E] opacity-85 mix-blend-color" />
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff_0%,rgba(255,255,255,0)_22%,rgba(255,255,255,0)_78%,#fff_100%)]" />
        </div>

        {/* Konten card KPI — tetap constrained ke max-width container, tidak full-bleed */}
        <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-12">
          {/* Padding zona foto sebelum card — transisi putih→foto halus (reuse padding card) */}
          <div className="px-[clamp(24px,3vw,40px)] py-[clamp(22px,2.6vw,34px)]">
            <Reveal
              delay={0.1}
              className="rounded-3xl bg-white px-[clamp(24px,3vw,40px)] py-[clamp(22px,2.6vw,34px)] shadow-[0_8px_30px_rgba(3,66,142,0.14),0_6px_0_-2px_#03428E]"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-[12px] border border-[#03428E]/10 bg-[#03428E]/[0.05] px-4 py-6 text-center"
                  >
                    <span className="block text-[36px] font-extrabold leading-none tracking-tight text-[#03428E] sm:text-[50px]">
                      <AnimatedCounter value={stat.value} duration={1.4} />
                    </span>
                    <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-8 sm:mt-10 lg:grid-cols-4 lg:gap-11">
                {facts.map((fact) => (
                  <div key={fact.title} className="text-center">
                    <div className="mb-5 flex justify-center">
                      <fact.icon className="h-[34px] w-[34px] text-[#03428E]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[17px] font-bold leading-snug text-neutral-900">
                      {fact.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {fact.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
