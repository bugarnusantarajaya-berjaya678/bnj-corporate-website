import Image from "next/image";
import Link from "next/link";
import ctaImage from "../../../public/images/cta-partnership.png";
import Reveal from "@/components/Reveal";

export default function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] py-20 text-white sm:py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src={ctaImage}
          alt="Kolaborasi komunitas dalam program wellness BNJ"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#03428E]/80" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Bangun Kemitraan Strategis Bersama Kami
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            BNJ terbuka untuk kolaborasi dengan pengelola properti, institusi
            pendidikan, korporasi, dan mitra strategis yang memiliki visi
            pertumbuhan berkelanjutan.
          </p>
          <div className="mt-10">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center border border-white bg-white px-8 py-3.5 text-sm font-semibold text-[#03428E] transition-colors duration-200 hover:bg-transparent hover:text-white"
            >
              Hubungi Kami
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
