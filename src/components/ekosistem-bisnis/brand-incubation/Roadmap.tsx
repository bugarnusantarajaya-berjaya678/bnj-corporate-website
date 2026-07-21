import Reveal from "@/components/Reveal";

const roadmap = [
  {
    status: "Sedang Berjalan",
    year: "2026",
    description: "Penguatan strategi digital & fondasi brand",
    active: true,
  },
  {
    status: "Rencana Lanjutan",
    year: "2027",
    description: "Ekspansi ke inkubasi brand offline (fitness & lifestyle)",
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section className="bg-white pt-10 pb-14 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]" />

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Arah Pengembangan
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Roadmap Akselerasi Brand Incubation
          </h2>

          <div className="relative mt-12 max-w-2xl">
            <div className="absolute left-[9px] right-[calc(50%+9px)] top-[9px] h-[3px] bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_100%)]" />
            <div className="absolute left-[calc(50%+9px)] right-[9px] top-[9px] h-[3px] bg-[#E3E7EC]" />
            <div className="relative grid grid-cols-2 gap-6">
              {roadmap.map((phase) => (
                <div key={phase.year} className="min-w-0">
                  <div
                    className={`mb-5 h-[18px] w-[18px] rounded-full ${
                      phase.active
                        ? "bg-[#6AA84F] shadow-[0_0_0_4px_rgba(106,168,79,0.22)]"
                        : "border-2 border-[#cbd2db] bg-white"
                    }`}
                  />
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.15em] ${
                      phase.active ? "text-[#6AA84F]" : "text-[#9aa3ad]"
                    }`}
                  >
                    {phase.status}
                  </p>
                  <span
                    className={`mt-1.5 block text-3xl font-extrabold leading-none ${
                      phase.active ? "text-[#03428E]" : "text-[#9fb0c7]"
                    }`}
                  >
                    {phase.year}
                  </span>
                  <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
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
