import Image from "next/image";
import Reveal from "@/components/Reveal";
import teamImage from "../../../public/images/about-team-environment.png.png";

export default function FoundationStatement() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex gap-4 text-left">
              <span
                aria-hidden
                className="hidden w-1 shrink-0 self-stretch bg-[#03428E] sm:block"
              />
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Building Sustainable Growth Through Systems, People &amp;
                Strategic Partnerships
              </h2>
            </div>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
              BNJ dibangun atas keyakinan bahwa pertumbuhan bisnis yang
              berkelanjutan tidak hanya ditentukan oleh kualitas produk atau
              layanan, tetapi juga oleh kekuatan sistem operasional,
              pengembangan talenta, pemanfaatan teknologi, serta kemitraan
              strategis yang mampu menciptakan nilai jangka panjang.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-16 pl-6 lg:pl-12">
          <div className="relative aspect-[16/10] w-full max-w-[88rem] overflow-hidden rounded-3xl sm:aspect-[21/9]">
            <Image
              src={teamImage}
              alt="Lingkungan kerja tim CV Bugar Nusantara Jaya"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
