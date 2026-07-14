import Reveal from "@/components/Reveal";

const roadmap = [
  {
    year: "2026",
    title: "Foundation & Ecosystem Development",
    points: [
      "Mendirikan BNJ Digital Labs sebagai pusat pengembangan produk digital dan sistem bisnis",
      "Memulai pengembangan BNJ Boxing School sebagai brand operasional baru",
      "Memperluas kolaborasi dengan praktisi dan expert di bidang olahraga, pendidikan, hukum, serta pengembangan usaha",
      "Mengembangkan program Senior Wellness sebagai bagian ekspansi layanan EFM",
    ],
  },
  {
    year: "2027",
    title: "Talent Development & Knowledge Ecosystem",
    points: [
      "Memperkuat sistem operasional, digitalisasi proses bisnis, dan standarisasi layanan di seluruh ekosistem BNJ",
      "Mendirikan BNJ Academy sebagai pusat pengembangan kompetensi dan pembelajaran profesional",
      "Menjalin kemitraan strategis dengan lembaga pelatihan dan sertifikasi nasional maupun internasional",
      "Memperluas Instructor Alliance untuk memenuhi kebutuhan seluruh unit bisnis dan mitra strategis",
    ],
  },
  {
    year: "2028",
    title: "Portfolio Expansion & Strategic Investment",
    points: [
      "Memperkuat pengembangan BNJ Digital Labs dan BNJ Academy",
      "Melakukan ekspansi brand dan layanan baru sesuai peluang pasar",
      "Memulai investasi bertahap (bootstrap investment): Boutique Fitness Studio, Pilates Studio, Boxing Gym, Recreation Hub Facility, Massage & Sport Recovery Center",
    ],
  },
  {
    year: "2029",
    title: "Venture Building & Investment Readiness",
    points: [
      "Melakukan evaluasi terhadap seluruh portofolio investasi yang telah dikembangkan",
      "Meluncurkan BNJ Ventures sebagai platform venture building dan strategic investment",
      "Menyusun framework investasi, tata kelola, dan sistem pelaporan investor",
      "Memulai penjajakan kerja sama dengan investor strategis untuk mendukung ekspansi berikutnya",
    ],
  },
];

const closingPhase = {
  year: "2030",
  title: "Scalable Investment Ecosystem",
  tagline: "Grow with Proof, Scale with Trust!",
  paragraph:
    "BNJ percaya bahwa pertumbuhan yang berkelanjutan dibangun melalui rekam jejak operasional, pengembangan talenta, serta portofolio bisnis yang telah teruji. Setiap fase ekspansi dirancang untuk membangun fondasi yang kuat sebelum melangkah ke tahap berikutnya — mengelola alokasi investasi bersama investor strategis ke sektor Fitness, Wellness, Sport, Education, dan Healthcare, memperkuat posisi BNJ sebagai Holding Company & Venture Builder dengan portofolio bisnis yang terdiversifikasi.",
};

export default function GrowthRoadmap() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Corporate Growth Roadmap
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            2026 — 2030
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 overflow-x-auto pb-4 [scrollbar-width:thin]">
        <div className="flex w-max snap-x snap-mandatory gap-6 px-6 lg:px-12">
          {roadmap.map((phase, index) => (
            <Reveal
              key={phase.year}
              delay={index * 0.08}
              className="w-72 shrink-0 snap-start sm:w-80"
            >
              <div className="flex h-full flex-col border border-neutral-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E] sm:p-8">
                <p className="text-3xl font-bold text-[#03428E]">
                  {phase.year}
                </p>
                <p className="mt-2 text-base font-semibold text-neutral-900">
                  {phase.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#03428E]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={roadmap.length * 0.08}
            className="w-72 shrink-0 snap-start sm:w-80"
          >
            <div className="flex h-full flex-col justify-center bg-[#03428E] p-6 text-white sm:p-8">
              <p className="text-3xl font-bold">{closingPhase.year}</p>
              <p className="mt-2 text-base font-semibold">
                {closingPhase.title}
              </p>
              <p className="mt-6 text-lg font-bold leading-snug">
                {closingPhase.tagline}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/80 sm:text-sm">
                {closingPhase.paragraph}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
