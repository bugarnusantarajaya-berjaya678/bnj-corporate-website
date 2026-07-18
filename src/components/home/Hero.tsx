import Image from "next/image";
import heroImage from "../../../public/images/hero-personal-training.png";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_82%,0_100%)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Personal trainer BNJ mendampingi sesi latihan klien"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,66,142,0.94)_0%,rgba(3,66,142,0.86)_32%,rgba(3,66,142,0.42)_58%,rgba(3,66,142,0.08)_78%,rgba(3,66,142,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.55)_0%,rgba(3,41,89,0)_38%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 pb-24 pt-20 sm:min-h-[600px] sm:pb-32 sm:pt-24 lg:min-h-[700px] lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal className="max-w-xl">
          <h1 className="text-[30px] font-extrabold leading-[1.18] text-white sm:text-4xl lg:text-[46px]">
            Membangun Ekosistem Bisnis Berkelanjutan di Fitness, Wellness,
            Sport &amp; Education
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            CV Bugar Nusantara Jaya (BNJ) adalah Holding Company &amp; Venture
            Builder yang mengintegrasikan keunggulan operasional,
            pengembangan talenta, inovasi teknologi, dan kemitraan strategis
            ke dalam satu ekosistem bisnis yang terus bertumbuh.
          </p>
          <a
            href="#pilar-bisnis"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-white/90"
          >
            Jelajahi Ekosistem Bisnis Kami
          </a>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-sm font-semibold text-white">
              <AnimatedCounter value={4} /> Pilar Bisnis Terintegrasi
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-white/35 sm:block" />
            <span className="text-sm font-semibold text-white">
              <AnimatedCounter value={200} suffix="+" /> Klien Korporat &amp;
              Personal
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-white/35 sm:block" />
            <span className="text-sm font-semibold text-white">
              Beroperasi Sejak <AnimatedCounter value={2017} />
            </span>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#03428E_0%,#03428E_33.33%,#6AA84F_33.33%,#6AA84F_66.66%,#0095DA_66.66%,#0095DA_100%)]"
      />
    </section>
  );
}
