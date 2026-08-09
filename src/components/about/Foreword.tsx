import Image from "next/image";
import photo from "../../../public/images/Page-Tentang-Kami/Tentang-Kami-Pesan-Pimpinan.jpg";
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
          className="mt-9 rounded-[14px] bg-white p-[clamp(24px,3vw,40px)] shadow-[0_8px_30px_rgba(3,66,142,0.14)]"
        >
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[320px_1fr]">
            {/* Photo left; container matches the source ratio (928x1152 = 4:5)
                so the full frame (head down to the hands/tablet) stays visible
                with negligible crop. On mobile it stacks on top. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px]">
              <Image
                src={photo}
                alt="Bagoes Soeharto, Founder & President Director CV Bugar Nusantara Jaya"
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover object-top"
              />
            </div>

            {/* Whole message as one first-person italic quote, left-aligned. */}
            <div className="text-left">
              <blockquote>
                <p className="m-0 mb-5 text-[15px] font-medium italic leading-[1.7] text-neutral-900">
                  &ldquo;Salam Sehat dari CV Bugar Nusantara Jaya.
                </p>
                <p className="m-0 mb-5 text-[15px] font-medium italic leading-[1.7] text-neutral-900">
                  CV Bugar Nusantara Jaya (BNJ) dibangun untuk mengintegrasikan
                  pengalaman operasional, pengembangan talenta, kemitraan
                  pendidikan, dan peluang investasi ke dalam satu grup usaha
                  yang saling mendukung dan bertumbuh bersama. Fondasi BNJ
                  berasal dari Essential Fitness Management (EFM), unit bisnis
                  yang telah beroperasi secara konsisten sejak 2017 dalam bidang
                  fitness management, corporate wellness, dan pengelolaan
                  fasilitas olahraga.
                </p>
                <p className="m-0 text-[15px] font-medium italic leading-[1.7] text-neutral-900">
                  Kami percaya bahwa pertumbuhan yang berkelanjutan dibangun
                  melalui kemitraan yang sehat, tata kelola yang akuntabel, dan
                  komitmen jangka panjang. Dengan landasan tersebut, BNJ terus
                  mengembangkan ekosistem bisnis yang mampu menciptakan nilai
                  bagi seluruh pemangku kepentingan, mulai dari klien, mitra
                  operasional, hingga investor.&rdquo;
                </p>
              </blockquote>
              <p className="mt-6 text-sm font-bold text-neutral-900">
                Bagoes Soeharto
              </p>
              <p className="mt-1 text-sm font-normal text-neutral-500">
                Founder &amp; President Director
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
