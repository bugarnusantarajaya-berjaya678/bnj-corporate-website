import Image from "next/image";
import Link from "next/link";
import { Calendar, Heart, HeartPulse } from "lucide-react";
import heroImage from "../../../../public/images/Page-BNJ-Digital-Labs/Digital-Labs-Hero-Image-Page.png";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_82%,0_100%)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Ilustrasi layanan konsultasi kesehatan digital"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,66,142,0.94)_0%,rgba(3,66,142,0.86)_32%,rgba(3,66,142,0.42)_58%,rgba(3,66,142,0.08)_78%,rgba(3,66,142,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.55)_0%,rgba(3,41,89,0)_38%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[clamp(560px,72vh,760px)] max-w-7xl items-center px-6 pb-24 pt-20 sm:pb-32 sm:pt-24 lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal className="max-w-xl">
          <div className="mb-6 flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/15">
              <HeartPulse className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <span className="text-[22px] font-extrabold uppercase tracking-wide text-white">
              BNJ Digital Labs
            </span>
          </div>
          <h1 className="text-[30px] font-extrabold leading-[1.18] text-white sm:text-4xl lg:text-[46px]">
            Membangun Ekosistem Digital Kesehatan, Hari Ini dan ke Depan
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            BNJ Digital Labs menghadirkan portofolio produk digital kesehatan
            &amp; kebugaran bersama expert dari rumah sakit, klinik, terapis,
            hingga pelatih olahraga — aktif sejak 2026, dan terus
            dikembangkan menuju BNJ Vitality Intelligence, platform intelijen
            kesehatan terintegrasi untuk kebutuhan jangka panjang.
          </p>

          <div className="mt-8 flex w-fit flex-col gap-3 md:flex-row md:gap-7">
            <div className="flex animate-float-badge items-center gap-2.5 rounded-lg border border-white/25 bg-white/[0.12] px-4 py-2.5">
              <Calendar className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                Kemitraan Digital Health Aktif 2026
              </span>
            </div>
            <div
              className="flex animate-float-badge items-center gap-2.5 rounded-lg border border-white/25 bg-white/[0.12] px-4 py-2.5"
              style={{ animationDelay: ".6s" }}
            >
              <Heart className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              <span className="text-sm font-semibold text-white">
                Menuju BNJ Vitality Intelligence 2026-2027
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

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#03428E_0%,#03428E_33.33%,#6AA84F_33.33%,#6AA84F_66.66%,#0095DA_66.66%,#0095DA_100%)]"
      />
    </section>
  );
}
