import Image from "next/image";
import Link from "next/link";
import { Building2, Calendar, ShieldCheck } from "lucide-react";
import heroImage from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Hero-Section.jpg";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Kantor CV Bugar Nusantara Jaya"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,66,142,0.94)_0%,rgba(3,66,142,0.86)_32%,rgba(3,66,142,0.42)_58%,rgba(3,66,142,0.08)_78%,rgba(3,66,142,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.55)_0%,rgba(3,41,89,0)_38%)]" />
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[4] block h-14 w-full sm:h-20 lg:h-[104px]"
      >
        <defs>
          <linearGradient id="tkHeroCutLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#03428E" />
            <stop offset="50%" stopColor="#6AA84F" />
            <stop offset="100%" stopColor="#0095DA" />
          </linearGradient>
        </defs>
        <path d="M0,44 C 300,-6 1080,72 1440,20 L1440,110 L0,110 Z" fill="#fff" />
        <path
          d="M0,44 C 300,-6 1080,72 1440,20"
          fill="none"
          stroke="url(#tkHeroCutLine)"
          strokeWidth="5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-[2] mx-auto flex min-h-[540px] max-w-7xl items-center px-6 pb-24 pt-20 sm:min-h-[620px] sm:pb-32 sm:pt-24 lg:min-h-[700px] lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal className="max-w-xl">
          <div className="mb-6 flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/15">
              <Building2 className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <span className="text-[22px] font-extrabold uppercase tracking-wide text-white">
              Tentang Kami
            </span>
          </div>
          <h1 className="text-[32px] font-bold leading-[1.2] text-white md:text-[48px]">
            Holding Company &amp; Venture Builder di Sektor Fitness,
            Wellness, Sport &amp; Education
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            CV Bugar Nusantara Jaya (BNJ) mengembangkan dan mengelola
            berbagai inisiatif bisnis melalui keunggulan operasional,
            pengembangan talenta, inovasi berbasis teknologi, serta
            kemitraan strategis yang menciptakan nilai jangka panjang.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            <div className="flex items-center gap-2.5">
              <Calendar className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                Berdiri Sejak 2017
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                Entitas Legal Sejak 2022
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
