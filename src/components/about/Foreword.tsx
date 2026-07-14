import Image from "next/image";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import officeImage from "../../../public/images/about-office.png.png";

export default function Foreword() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03428E] py-20 text-white sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src={officeImage}
          alt="Lingkungan kerja CV Bugar Nusantara Jaya"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03428E] via-[#03428E]/92 to-[#03428E]/25" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Sambutan dari Founder
          </p>
          <div className="mt-6 flex gap-5">
            <span
              aria-hidden
              className="hidden w-1 shrink-0 self-stretch bg-white sm:block"
            />
            <div className="space-y-5 text-base leading-relaxed text-white/90 sm:text-lg">
              <p>
                Industri fitness, wellness, sport, dan education kini
                berkembang menjadi sektor yang semakin menuntut standar
                operasional, kualitas layanan, serta tata kelola yang
                terukur.
              </p>
              <p>
                CV Bugar Nusantara Jaya (BNJ) dibangun untuk mengintegrasikan
                pengalaman operasional, pengembangan talenta, kemitraan
                pendidikan, dan peluang investasi ke dalam satu grup usaha
                yang saling mendukung dan bertumbuh bersama. Fondasi BNJ
                berasal dari Essential Fitness Management (EFM), unit bisnis
                yang telah beroperasi secara konsisten sejak 2017 dalam
                bidang fitness management, corporate wellness, dan
                pengelolaan fasilitas olahraga.
              </p>
              <p>
                Kami percaya bahwa pertumbuhan yang berkelanjutan dibangun
                melalui kemitraan yang sehat, tata kelola yang akuntabel,
                dan komitmen jangka panjang. Dengan landasan tersebut, BNJ
                terus mengembangkan ekosistem bisnis yang mampu menciptakan
                nilai bagi seluruh pemangku kepentingan — mulai dari klien,
                mitra operasional, hingga investor.
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-white/20 pt-6">
            <p className="text-sm text-white/70">Jakarta, 2026</p>
            <p className="mt-2 text-lg font-bold text-white">
              Bagoes Soeharto
            </p>
            <p className="text-sm text-white/70">
              Founder &amp; President Director, CV Bugar Nusantara Jaya
            </p>
          </div>
        </Reveal>
      </div>
      <WaveDivider fill="#ffffff" />
    </section>
  );
}
