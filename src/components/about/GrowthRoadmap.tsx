import Reveal from "@/components/Reveal";

const roadmap = [
  {
    year: "2026",
    title: "Foundation & Ecosystem Development",
    description:
      "Memperkuat fondasi operasional dan ekosistem bisnis BNJ, termasuk pengembangan produk digital melalui BNJ Digital Labs dan perluasan kolaborasi dengan praktisi serta expert lintas bidang.",
  },
  {
    year: "2027",
    title: "Talent & Knowledge Ecosystem",
    description:
      "Memperkuat sistem operasional dan standarisasi layanan di seluruh ekosistem BNJ, membangun pusat pengembangan kompetensi profesional, serta menjalin kemitraan dengan lembaga pelatihan dan sertifikasi.",
  },
  {
    year: "2028",
    title: "Portfolio Expansion & Strategic Investment",
    description:
      "Memperluas portofolio brand dan layanan sesuai peluang pasar, sekaligus mulai membangun rekam jejak investasi bertahap di sektor fitness dan wellness.",
  },
  {
    year: "2029",
    title: "Venture Building & Investment Readiness",
    description:
      "Mengevaluasi portofolio investasi yang telah dikembangkan, menyusun framework investasi dan tata kelola, serta memulai penjajakan kerja sama dengan investor strategis.",
  },
  {
    year: "2030",
    title: "Scalable Ecosystem",
    description:
      "Mengelola alokasi investasi bersama investor strategis, memperkuat posisi BNJ sebagai Holding Company & Venture Builder dengan portofolio bisnis yang terdiversifikasi.",
  },
];

export default function GrowthRoadmap() {
  return (
    <section className="bg-white pb-14 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Roadmap Pertumbuhan
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Corporate Growth Roadmap 2026–2030
          </h2>
          <p className="mt-3 text-[15px] font-semibold italic text-[#0095DA]">
            Grow with Proof, Scale with Trust
          </p>

          <div className="relative mt-14 max-w-3xl">
            <div className="absolute bottom-1.5 left-[9px] top-1.5 w-[3px] bg-[#0095DA]" />
            <div className="flex flex-col gap-10">
              {roadmap.map((phase) => (
                <div key={phase.year} className="relative pl-10">
                  <div className="absolute left-0 top-0.5 h-[19px] w-[19px] rounded-full border-[3px] border-white bg-[#0095DA] shadow-[0_0_0_2px_#0095DA]" />
                  <span className="text-2xl font-bold leading-none text-[#03428E]">
                    {phase.year}
                  </span>
                  <h4 className="mt-2 text-[18px] font-semibold leading-[1.2] text-neutral-900 md:text-[22px]">
                    {phase.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                    {phase.description}
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
