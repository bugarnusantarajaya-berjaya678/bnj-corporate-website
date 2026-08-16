import Image from "next/image";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";

// Section "Company Profile" — video placeholder (belum ada video final,
// jadi badge "Video Segera Hadir" bukan iframe/link aktif) + narasi.
export default function CompanyProfile() {
  return (
    <section className="flex w-full items-center justify-center bg-[#F5F5F5] px-6 py-[var(--section-py)] lg:h-[410px] lg:px-12 lg:py-0">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-[18px] text-center">
        <h2 className="m-0 text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.3] tracking-[-0.01em] text-neutral-900">
          Cerita utuh dari sembilan tahun perjalanan BNJ
        </h2>

        <div className="grid w-full max-w-[760px] grid-cols-1 items-center gap-6 text-left sm:grid-cols-[1.35fr_1fr]">
          <div className="relative">
            <div className="relative z-[3] aspect-video w-full overflow-hidden rounded-[10px] bg-white">
              <Image
                src="/images/Page-Tentang-Kami/glance/bnj-photo-4.webp"
                alt="Thumbnail video profil BNJ"
                fill
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#033470]/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.92] opacity-70 sm:h-[72px] sm:w-[72px]">
                  <Play className="ml-[3px] h-6 w-6 fill-[#03428E] text-[#03428E]" />
                </span>
              </div>
              <span className="absolute right-4 top-4 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-[#03428E]">
                Video Segera Hadir
              </span>
            </div>
            <div className="pointer-events-none absolute left-[-45%] top-[-16%] z-[2] aspect-[635/436] w-[105%]">
              <Image
                src="/images/Page-Portofolio/portofolio-decorative-BNJ-video-compro.png"
                alt=""
                aria-hidden="true"
                fill
                unoptimized
                className="object-fill"
              />
            </div>
          </div>

          <div className="sm:ml-[5%]">
            <div className="flex items-center gap-2">
              <Image
                src="/images/Page-Portofolio/portofolio-logo-BNJ-warna.png"
                alt="Logo BNJ"
                width={45}
                height={45}
                unoptimized
                className="h-[45px] w-[45px]"
              />
              <h3 className="m-0 text-[20px] font-bold text-[#03428E]">
                Company Profile
              </h3>
            </div>
            <p className="mt-2.5 max-w-[324px] text-sm leading-[1.6] text-[#525252]">
              Company Profile ini akan merangkum dokumentasi lapangan dari
              EFM dan ECA Aspire, proses pengembangan BNJ Digital Labs, serta
              unit bisnis BNJ lainnya, disusun dari materi yang sama dengan
              mosaik dan galeri di halaman ini.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
