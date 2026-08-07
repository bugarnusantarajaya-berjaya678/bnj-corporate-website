import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText, LayoutGrid } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import founderPhoto from "../../../public/images/Page-Home/Page-Home-Tentang-BNJ-Bagoes.jpg";
import bgPhoto from "../../../public/images/Page-Tentang-Kami/glance/bnj-photo-7.webp";

const stats = [
  { icon: CalendarDays, value: 2017, label: "Berdiri Sejak" },
  { icon: FileText, value: 2022, label: "Entitas Legal Resmi" },
  { icon: LayoutGrid, value: 5, label: "Ekosistem Bisnis" },
];

export default function AboutTeaser() {
  return (
    <section className="w-full bg-white px-6 py-[var(--section-py)] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="m-0 text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Tentang BNJ
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            Kenali BNJ Lebih Dekat
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-9 rounded-[14px] bg-white p-[clamp(24px,3vw,40px)] shadow-[0_8px_30px_rgba(3,66,142,0.14)]"
        >
          <div className="grid grid-cols-1 items-center gap-[clamp(28px,4vw,48px)] md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="text-right">
              <h3 className="m-0 mb-4 text-[clamp(18px,2vw,24px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900 [text-wrap:pretty]">
                Fondasi Bisnis yang Bertumbuh Sejak 2017
              </h3>
              <p className="m-0 text-[15px] leading-[1.75] text-neutral-600">
                CV Bugar Nusantara Jaya tumbuh dari operasional fitness dan
                wellness menjadi holding company yang menaungi lima unit bisnis
                terintegrasi, dijalankan dengan sistem, tata kelola, dan
                kemitraan yang terukur.
              </p>

              <blockquote className="mt-[clamp(20px,2.6vw,28px)] border-r-[5px] border-[#6AA84F] pr-6">
                <p className="m-0 text-[15px] font-medium italic leading-[1.7] text-neutral-900">
                  &ldquo;Kami percaya bahwa pertumbuhan yang berkelanjutan
                  dibangun melalui kemitraan yang sehat, tata kelola yang
                  akuntabel, dan komitmen jangka panjang.&rdquo;
                </p>
                <p className="mt-4 text-sm font-bold text-neutral-900">
                  Bagoes Soeharto
                </p>
                <p className="mt-1 text-sm font-normal text-neutral-500">
                  Founder &amp; President Director
                </p>
              </blockquote>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
              <Image
                src={founderPhoto}
                alt="Bagoes Soeharto, Founder BNJ"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bertumbuh dalam Angka - blue photo card */}
          <div className="relative mt-[clamp(32px,4vw,44px)] overflow-hidden rounded-3xl bg-[#03428E] shadow-[0_18px_44px_rgba(3,66,142,0.30),0_4px_12px_rgba(3,66,142,0.18)]">
            <div className="absolute inset-y-0 right-0 z-0 hidden w-3/5 md:block">
              <Image
                src={bgPhoto}
                alt=""
                fill
                className="object-cover"
                sizes="60vw"
              />
              <div className="absolute inset-0 bg-[#03428E] mix-blend-color" />
            </div>
            <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#03428E_0%,#03428E_40%,rgba(3,66,142,.72)_62%,rgba(3,66,142,.28)_85%,rgba(3,66,142,.12)_100%)]" />

            <div className="relative z-[3] box-border px-[clamp(20px,2.5vw,36px)] py-[clamp(28px,3.5vw,44px)]">
              <p className="mx-auto mb-4 block w-fit rounded-full bg-white px-5 py-[7px] text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#03428E]">
                Bertumbuh dalam Angka
              </p>
              <h3 className="m-0 text-center text-[clamp(22px,2.5vw,27px)] font-bold leading-[1.25] tracking-[-0.01em] text-white">
                Sembilan Tahun Pertumbuhan yang Konsisten
              </h3>
              <p className="mx-auto mt-3 max-w-[520px] text-center text-[15px] leading-[1.7] text-white/90">
                Dari satu unit layanan menjadi lima ekosistem bisnis
                terintegrasi.
              </p>

              <div className="mt-[clamp(24px,3vw,36px)] grid grid-cols-1 gap-[14px] sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="box-border rounded-[14px] border border-[#03428E]/10 bg-white p-4"
                  >
                    <div className="flex items-center justify-center gap-[10px] sm:justify-start">
                      <stat.icon
                        className="block h-[27px] w-[27px] shrink-0 text-[#03428E]"
                        strokeWidth={1.5}
                      />
                      <p className="m-0 text-[clamp(22px,2.4vw,29px)] font-bold leading-none tracking-[-0.02em] text-[#03428E]">
                        <AnimatedCounter value={stat.value} duration={1.4} />
                      </p>
                    </div>
                    <p className="mt-[10px] text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0095DA] sm:text-left">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[clamp(24px,3vw,32px)] flex justify-start">
            <Link
              href="/tentang-kami"
              className="inline-flex w-fit items-center gap-[10px] whitespace-nowrap rounded-lg bg-[#03428E] px-7 py-3.5 text-sm font-semibold leading-[1.2] text-white no-underline transition-colors duration-200 hover:bg-[#032f66]"
            >
              Selengkapnya Tentang Kami
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
