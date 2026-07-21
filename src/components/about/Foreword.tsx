import Image from "next/image";
import photo from "../../../public/images/Foto Bagoes Background Putih.png";
import Reveal from "@/components/Reveal";

export default function Foreword() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[17fr_23fr] lg:items-start lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
              <Image
                src={photo}
                alt="Bagoes Soeharto, Founder & President Director CV Bugar Nusantara Jaya"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <p className="text-[19px] font-extrabold text-neutral-900">
                Bagoes Soeharto
              </p>
              <p className="mt-1.5 text-sm text-neutral-500">
                Founder &amp; President Director, CV Bugar Nusantara Jaya
              </p>
              <p className="mt-1.5 text-[13px] italic text-neutral-400">
                Jakarta, 2026
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative border-l-[5px] border-[#6AA84F] pl-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
              Pesan dari Pimpinan
            </p>
            <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
              Membangun BNJ di Atas Kepercayaan dan Konsistensi
            </h2>
            <blockquote className="mt-6 space-y-5 text-lg font-medium italic leading-relaxed text-neutral-900">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
