import Reveal from "@/components/Reveal";

const milestones = [
  {
    year: "2017",
    title: "Fondasi EFM",
    description:
      "Essential Fitness Management (EFM) didirikan sebagai fondasi pengalaman operasional BNJ dalam bidang fitness management, personal training, dan layanan wellness.",
  },
  {
    year: "2018",
    title: "Perluasan Layanan",
    description:
      "Memperluas layanan ke program corporate wellness, personal training premium, inisiatif kebugaran komunitas, serta pengelolaan fasilitas olahraga.",
  },
  {
    year: "2020",
    title: "Penguatan Sistem Operasional",
    description:
      "Memperkuat sistem operasional, standarisasi layanan, pengembangan instruktur, serta penerapan kerangka kendali mutu (quality control).",
  },
  {
    year: "2021",
    title: "Konsistensi Kendali Mutu",
    description:
      "Melanjutkan penguatan sistem operasional dan kerangka kendali mutu secara berkelanjutan di seluruh unit operasional.",
  },
  {
    year: "2022",
    title: "CV Bugar Nusantara Jaya Resmi Berdiri",
    description:
      "BNJ resmi didirikan sebagai entitas usaha yang mengintegrasikan berbagai aktivitas bisnis ke dalam struktur manajemen yang lebih terarah dan terorganisir.",
  },
  {
    year: "2023",
    title: "Fondasi Ekspansi Pendidikan",
    description:
      "Memulai pengembangan jaringan instruktur, program pengembangan talenta, serta fondasi ekspansi bisnis di sektor pendidikan dan sport development.",
  },
  {
    year: "2024",
    title: "Penguatan ECA Aspire",
    description:
      "ECA Aspire memperkuat model kemitraan pendidikan dan menjalankan program ekstrakurikuler terstruktur di Sampoerna Academy BSD.",
  },
  {
    year: "2025",
    title: "Kolaborasi Strategis dengan SKN",
    description:
      "BNJ dan CV Sang Kreasi Nusantara (SKN) memulai kolaborasi strategis untuk memperkuat sistem operasional, pengelolaan instruktur, pelaporan program, dan pengembangan bisnis ECA Aspire.",
  },
  {
    year: "2026",
    title: "Fase Ekspansi",
    description:
      "Fase ekspansi difokuskan pada pertumbuhan jumlah siswa, skalabilitas operasional, serta pengembangan kemitraan dengan sekolah nasional plus dan internasional.",
    active: true,
  },
];

export default function Milestone() {
  return (
    <section className="bg-white pt-14 pb-14 sm:pt-16 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]" />

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Perjalanan Kami
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Milestone CV Bugar Nusantara Jaya
          </h2>

          <div className="relative mt-14 max-w-3xl">
            <div className="absolute bottom-1.5 left-[9px] top-1.5 w-[3px] bg-[#03428E]" />
            <div className="flex flex-col gap-10">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative pl-10">
                  <div
                    className={`absolute left-0 top-0.5 h-[19px] w-[19px] rounded-full border-[3px] border-white ${
                      milestone.active
                        ? "bg-[#6AA84F] shadow-[0_0_0_2px_#6AA84F]"
                        : "bg-[#03428E] shadow-[0_0_0_2px_#03428E]"
                    }`}
                  />
                  <span
                    className={`text-2xl font-bold leading-none ${
                      milestone.active ? "text-[#6AA84F]" : "text-[#0095DA]"
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <h4 className="mt-2 text-[18px] font-semibold leading-[1.2] text-neutral-900 md:text-[22px]">
                    {milestone.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
