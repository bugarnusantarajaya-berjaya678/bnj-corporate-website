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

const clients = [
  { name: "Telkom Indonesia", logo: telkomLogo, emphasize: true },
  { name: "Telin", logo: telinLogo },
  { name: "AIA Insurance", logo: aiaLogo, emphasize: true },
  { name: "Wuling Motors", logo: wulingLogo },
  { name: "Pfizer", logo: pfizerLogo, emphasize: true },
  { name: "TransTV", logo: transTvLogo },
  { name: "SNJ", logo: snjLogo },
  { name: "OJK", logo: ojkLogo, emphasize: true },
  { name: "Abumas Group", logo: abumasLogo, emphasize: true },
  { name: "Sampoerna Academy", logo: sampoernaLogo, emphasize: true },
];

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
                  className={`w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 ${
                    client.emphasize
                      ? "h-10 sm:h-12 lg:h-14"
                      : "h-8 sm:h-10 lg:h-12"
                  }`}
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
