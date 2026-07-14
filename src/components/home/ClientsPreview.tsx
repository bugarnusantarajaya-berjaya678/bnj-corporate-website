import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import telkomLogo from "../../../public/images/Klien-Telkom-Indonesia.png";
import telinLogo from "../../../public/images/Klien-PT-Telekomunikasi-Indonesia-Internasional.webp";
import aiaLogo from "../../../public/images/Klien-AIA-Insurance.png";
import wulingLogo from "../../../public/images/Klien-Wuling-Motors.png";
import pfizerLogo from "../../../public/images/Klien-Pfizer.png";
import transTvLogo from "../../../public/images/Klien-Trans-TV.png";
import snjLogo from "../../../public/images/Klien-PT-Suri-Nusantara-Jaya.png";
import ojkLogo from "../../../public/images/Klien-Otoritas-Jasa-Keuangan.png";
import abumasLogo from "../../../public/images/Klien-Abumas-Group.png";
import sampoernaLogo from "../../../public/images/Klien-Sampoerna-Academy.png";

const logoSizeClasses = {
  default: "h-8 sm:h-10 lg:h-12",
  large: "h-10 sm:h-12 lg:h-14",
  xlarge: "h-12 sm:h-14 lg:h-16",
} as const;

const clients = [
  { name: "Telkom Indonesia", logo: telkomLogo, size: "large" },
  { name: "Telin", logo: telinLogo, size: "default" },
  { name: "AIA Insurance", logo: aiaLogo, size: "large" },
  { name: "Wuling Motors", logo: wulingLogo, size: "default" },
  { name: "Pfizer", logo: pfizerLogo, size: "xlarge" },
  { name: "TransTV", logo: transTvLogo, size: "default" },
  { name: "SNJ", logo: snjLogo, size: "default" },
  { name: "OJK", logo: ojkLogo, size: "xlarge" },
  { name: "Abumas Group", logo: abumasLogo, size: "xlarge" },
  { name: "Sampoerna Academy", logo: sampoernaLogo, size: "large" },
] satisfies { name: string; logo: typeof telkomLogo; size: keyof typeof logoSizeClasses }[];

const marqueeClients = [...clients, ...clients];

export default function ClientsPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Selected Clients
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Dipercaya oleh Berbagai Organisasi Terkemuka
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="group relative mt-12 overflow-hidden border-y border-neutral-200 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-24 w-44 shrink-0 items-center justify-center px-6 sm:w-52 sm:px-8"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className={`w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 ${logoSizeClasses[client.size]}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/portofolio"
              className="inline-flex items-center justify-center border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors duration-200 hover:border-[#03428E] hover:text-[#03428E]"
            >
              Lihat Semua Klien &amp; Mitra
            </Link>
          </div>
        </Reveal>
      </div>
      <WaveDivider fill="#03428E" />
    </section>
  );
}
