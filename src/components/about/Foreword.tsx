import Image from "next/image";
import photo from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Pesan-Pimpinan.png";
import Reveal from "@/components/Reveal";

export default function Foreword() {
  return (
    <section className="bg-white py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Pesan dari Pimpinan
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            Membangun BNJ di Atas Kepercayaan dan Konsistensi
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-[var(--section-header-gap)] rounded-3xl border border-neutral-100 bg-white p-[clamp(24px,3vw,40px)] shadow-[0_8px_30px_rgba(3,66,142,0.09),0_6px_0_-2px_#03428E]"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
              <Image
                src={photo}
                alt="Bagoes Soeharto, Founder & President Director CV Bugar Nusantara Jaya"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="relative border-l-[5px] border-[#6AA84F] pl-7">
              <blockquote className="space-y-5 text-base font-medium italic leading-relaxed text-neutral-900">
                <p>&ldquo;Salam Sehat dari CV Bugar Nusantara Jaya.</p>
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
                  melalui kemitraan yang sehat, tata kelola yang akuntabel, dan
                  komitmen jangka panjang. Dengan landasan tersebut, BNJ terus
                  mengembangkan ekosistem bisnis yang mampu menciptakan nilai
                  bagi seluruh pemangku kepentingan, mulai dari klien, mitra
                  operasional, hingga investor.&rdquo;
                </p>
              </blockquote>

              <div className="mt-6">
                <p className="text-[17px] font-bold text-neutral-900">
                  Bagoes Soeharto
                </p>
                <p className="mt-1.5 text-sm font-medium text-[#03428E]">
                  Founder &amp; President Director
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
