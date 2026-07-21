import Image from "next/image";
import Link from "next/link";
import { Calendar, Dumbbell, Users } from "lucide-react";
import heroImage from "../../../../public/images/Page-EFM/EFM-Hero-Section.png";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_82%,0_100%)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Sesi personal training BNJ Essential Fitness Management"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,66,142,0.94)_0%,rgba(3,66,142,0.86)_32%,rgba(3,66,142,0.42)_58%,rgba(3,66,142,0.08)_78%,rgba(3,66,142,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.55)_0%,rgba(3,41,89,0)_38%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] [clip-path:polygon(0_100%,100%_88%,100%_calc(88%_-_5px),0_calc(100%_-_5px))] bg-[linear-gradient(90deg,#03428E_0%,#03428E_33.33%,#6AA84F_33.33%,#6AA84F_66.66%,#0095DA_66.66%,#0095DA_100%)] sm:[clip-path:polygon(0_100%,100%_85%,100%_calc(85%_-_5px),0_calc(100%_-_5px))] lg:[clip-path:polygon(0_100%,100%_82%,100%_calc(82%_-_5px),0_calc(100%_-_5px))]"
      />

      <p className="pointer-events-none absolute bottom-5 right-6 z-[2] m-0 hidden text-xs italic text-white/75 sm:block lg:right-12">
        Personal Training Session
      </p>

      <div className="relative z-[2] mx-auto flex min-h-[540px] max-w-7xl items-center px-6 pb-24 pt-20 sm:min-h-[620px] sm:pb-32 sm:pt-24 lg:min-h-[700px] lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal className="max-w-xl">
          <div className="mb-6 flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/15">
              <Dumbbell className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <span className="text-[22px] font-extrabold uppercase tracking-wide text-white">
              Essential Fitness Management
            </span>
          </div>
          <h1 className="text-[32px] font-bold leading-[1.2] text-white md:text-[48px]">
            Unit Bisnis Inti Pengelolaan Fitness, Wellness &amp; Fasilitas
            Olahraga
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            Essential Fitness Management (EFM) adalah unit bisnis inti BNJ
            yang telah beroperasi sejak 2017, mengelola lebih dari 200 klien
            personal training dan korporat. EFM menjadi fondasi utama
            ekosistem bisnis BNJ dalam sektor pengelolaan fitness, wellness,
            dan fasilitas olahraga.
          </p>

          <div className="mt-8 flex w-fit flex-col gap-3 md:flex-row md:gap-4">
            <div className="flex animate-float-badge items-center gap-2.5 rounded-lg border border-white/25 bg-white/[0.12] px-4 py-2.5">
              <Users className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                200+ Klien Personal Training &amp; Korporat
              </span>
            </div>
            <div
              className="flex animate-float-badge items-center gap-2.5 rounded-lg border border-white/25 bg-white/[0.12] px-4 py-2.5"
              style={{ animationDelay: ".6s" }}
            >
              <Calendar className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                Beroperasi Sejak 2017
              </span>
            </div>
          </div>

          <Link
            href="/kontak"
            className="mt-9 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-white/90"
          >
            Hubungi Kami
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
