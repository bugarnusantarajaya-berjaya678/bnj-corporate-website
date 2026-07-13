import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-bnj.png";
import heroImage from "../../../public/images/hero-personal-training.png";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03428E]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 sm:py-24 lg:flex-row lg:gap-16 lg:px-12 lg:py-32">
        <Reveal className="w-full shrink-0 lg:w-[420px]">
          <div className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-full">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                src={heroImage}
                alt="Personal trainer BNJ mendampingi sesi latihan klien"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-2 -top-2 h-24 w-24 overflow-hidden rounded-2xl border-4 border-white shadow-[0_16px_32px_-12px_rgba(0,0,0,0.35)] sm:h-28 sm:w-28 lg:h-32 lg:w-32">
              <Image
                src={heroImage}
                alt="Momen latihan bersama klien BNJ"
                fill
                sizes="128px"
                className="scale-[1.7] object-cover"
                style={{ objectPosition: "28% 22%" }}
              />
            </div>
          </div>
        </Reveal>
        <Reveal className="w-full flex-1" delay={0.1}>
          <Image
            src={logo}
            alt="Logo CV Bugar Nusantara Jaya"
            className="mb-8 h-auto w-32 brightness-0 invert sm:w-36"
            priority
          />
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Management &middot; Incubation &middot; Alliance &middot; Ventures
          </p>
          <div className="flex gap-5">
            <span aria-hidden className="hidden w-1 shrink-0 bg-white sm:block" />
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building Sustainable Growth Through Operations, Talent &amp;
              Strategic Partnerships
            </h1>
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            CV Bugar Nusantara Jaya adalah Holding Company &amp; Venture
            Builder yang membangun ekosistem bisnis berkelanjutan di sektor
            Fitness, Wellness, Sport, dan Education di Indonesia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center rounded-lg border border-white bg-white px-7 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-transparent hover:text-white"
            >
              Pelajari Ekosistem Kami
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Hubungi Kami
            </Link>
          </div>
        </Reveal>
      </div>
      <WaveDivider fill="#ffffff" />
    </section>
  );
}
