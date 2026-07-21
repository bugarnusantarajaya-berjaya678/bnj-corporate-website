import Image from "next/image";
import Link from "next/link";
import officeImage from "../../../public/images/about-office.png.png";
import Reveal from "@/components/Reveal";

export default function AtAGlance() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Tentang BNJ
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Fondasi Bisnis yang Bertumbuh Sejak 2017
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl sm:aspect-[16/7]"
        >
          <Image
            src={officeImage}
            alt="Kantor CV Bugar Nusantara Jaya"
            fill
            sizes="(min-width: 1024px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.55)_0%,rgba(3,41,89,0)_45%)]" />
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <blockquote className="max-w-2xl border-l-[5px] border-[#6AA84F] pl-6">
            <p className="text-[17px] font-medium italic leading-relaxed text-neutral-900">
              &quot;Kami percaya bahwa pertumbuhan yang berkelanjutan dibangun
              melalui kemitraan yang sehat, tata kelola yang akuntabel, dan
              komitmen jangka panjang.&quot;
            </p>
            <p className="mt-4 text-sm font-bold text-neutral-900">
              Bagoes Soeharto{" "}
              <span className="font-normal text-neutral-500">
                — Founder &amp; President Director
              </span>
            </p>
          </blockquote>
          <Link
            href="/tentang-kami"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#03428E] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#032f66]"
          >
            Selengkapnya Tentang Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
