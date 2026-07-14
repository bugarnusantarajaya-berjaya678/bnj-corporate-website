import Image from "next/image";
import Reveal from "@/components/Reveal";
import bagoesPhoto from "../../../public/images/bagoes-soeharto.png.png";
import emmaPhoto from "../../../public/images/emma-warokka.png.png";

const leaders = [
  {
    photo: bagoesPhoto,
    name: "Bagoes Soeharto",
    title: "Founder & President Director",
    credentials: [
      "Sarjana Ilmu Keolahragaan (S1), Universitas Negeri Jakarta (UNJ)",
      "Mantan Assistant Manager Fitness Center, PT Chevron Pacific Indonesia",
      "Pengalaman manajerial di The Sultan Hotel & Residence",
      "Berpengalaman dalam pengembangan atlet, pelatih, dan program olahraga PON 2016",
      "Founder Essential Fitness Management (EFM) sejak 2017",
    ],
  },
  {
    photo: emmaPhoto,
    name: "Emma Warokka",
    title: "Co-Founder & Public Relations Director",
    credentials: [
      "Profesional komunikasi dan pengembangan kemitraan dengan pengalaman 15 tahun",
      "Berpengalaman dalam Public Relations, Community Development, dan Strategic Partnership",
      "Terlibat dalam pengembangan berbagai program olahraga, wellness, dan edukasi berbasis komunitas",
      "Berperan aktif dalam perluasan jaringan kolaborasi dengan berbagai pihak, korporasi, dan institusi strategis",
    ],
  },
];

export default function Leadership() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Executive Leadership
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Dewan Direksi &amp; Penasihat Strategis
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {leaders.map((leader, index) => (
            <Reveal key={leader.name} delay={index * 0.1}>
              <div className="flex h-full flex-col gap-6 border border-neutral-200 p-6 transition-colors duration-300 hover:border-[#03428E] sm:flex-row sm:p-8">
                <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-44">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="(min-width: 1024px) 220px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#03428E]">
                    {leader.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {leader.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="flex gap-2.5 text-sm leading-relaxed text-neutral-600"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#03428E]"
                        />
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
