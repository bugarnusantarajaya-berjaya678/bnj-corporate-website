import Image from "next/image";
import Link from "next/link";
import { Building2, Calendar, ShieldCheck } from "lucide-react";
import heroImage from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Hero-Section.jpg";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

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

      <div className="relative z-[2] mx-auto flex min-h-[480px] max-w-7xl items-center px-6 pb-16 pt-24 sm:min-h-[540px] sm:pb-20 sm:pt-28 lg:min-h-[580px] lg:px-12 lg:pb-24 lg:pt-32">
        <Reveal className="max-w-xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/15">
              <Building2 className="h-5 w-5 text-white" strokeWidth={2} />
            </div>
            <span className="text-lg font-bold uppercase tracking-wide text-white">
              Tentang Kami
            </span>
          </div>
          <h1 className="text-[clamp(27px,3.4vw,42px)] font-bold leading-[1.18] text-white">
            Holding Company &amp; Venture Builder di Sektor Fitness,
            Wellness, Sport &amp; Education
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/85">
            CV Bugar Nusantara Jaya (BNJ) mengembangkan dan mengelola
            berbagai inisiatif bisnis melalui keunggulan operasional,
            pengembangan talenta, inovasi berbasis teknologi, serta
            kemitraan strategis yang menciptakan nilai jangka panjang.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
            <div className="animate-float-badge flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-2 backdrop-blur">
              <Calendar className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                Berdiri Sejak <AnimatedCounter value={2017} duration={0.9} />
              </span>
            </div>
            <div className="animate-float-badge flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-2 backdrop-blur">
              <ShieldCheck className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                Entitas Legal Sejak <AnimatedCounter value={2022} duration={0.9} />
              </span>
            </div>
          </div>

          <Link
            href="/kontak"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-white/90"
          >
            Hubungi Kami
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
