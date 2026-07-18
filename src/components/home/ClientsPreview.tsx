import Image from "next/image";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import telkomLogo from "../../../public/images/Klien-Telkom-Indonesia.png";
import telinLogo from "../../../public/images/Klien-PT-Telekomunikasi-Indonesia-Internasional.webp";
import aiaLogo from "../../../public/images/Klien-AIA-Insurance.png";
import ojkLogo from "../../../public/images/Klien-Otoritas-Jasa-Keuangan.png";
import abumasLogo from "../../../public/images/Klien-Abumas-Group.png";
import wulingLogo from "../../../public/images/Klien-Wuling-Motors.png";
import transTvLogo from "../../../public/images/Klien-Trans-TV.png";
import snjLogo from "../../../public/images/Klien-PT-Suri-Nusantara-Jaya.png";
import pfizerLogo from "../../../public/images/Klien-Pfizer.png";
import kejagungLogo from "../../../public/images/Klien-Kejaksaan-Agung.png";

const clients = [
  { name: "Telkom Indonesia", logo: telkomLogo },
  { name: "Telin", logo: telinLogo },
  { name: "AIA Insurance", logo: aiaLogo },
  { name: "OJK", logo: ojkLogo },
  { name: "Abumas Group", logo: abumasLogo },
  { name: "Wuling Motors", logo: wulingLogo },
  { name: "Trans TV", logo: transTvLogo },
  { name: "PT Suri Nusantara Jaya", logo: snjLogo },
  { name: "Pfizer", logo: pfizerLogo },
  { name: "Kejaksaan Agung", logo: kejagungLogo },
];

export default function ClientsPreview() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Dipercaya Oleh
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Klien &amp; Mitra Kami
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, index) => (
            <Reveal
              key={client.name}
              delay={(index % 5) * 0.05}
              className="flex flex-col items-center gap-3.5"
            >
              <div className="flex h-16 w-full items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="inline-block rounded-full bg-neutral-100 px-3.5 py-1 text-center text-xs font-bold uppercase tracking-wide text-neutral-600">
                {client.name}
              </span>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm italic text-neutral-400">
          dan mitra lainnya
        </p>
      </div>
      <WaveDivider fill="#03428E" />
    </section>
  );
}
