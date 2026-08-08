import { Feather, GraduationCap, Home, LineChart, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";

const roadmap = [
  { year: "2026", title: "Foundation & Ecosystem", icon: Home, active: true },
  { year: "2027", title: "Talent & Knowledge Ecosystem", icon: GraduationCap, active: false },
  { year: "2028", title: "Portfolio Expansion", icon: LineChart, active: false },
  { year: "2029", title: "Venture Building", icon: Feather, active: false },
  { year: "2030", title: "Scalable Ecosystem", icon: Globe, active: false },
];

export default function GrowthRoadmap() {
  return (
    <section className="bg-white py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Roadmap Pertumbuhan
          </p>
          <h2 className="mt-4 text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            Corporate Growth Roadmap 2026–2030
          </h2>
          <p className="mt-3 text-[15px] font-semibold italic text-[#0095DA]">
            Grow with Proof, Scale with Trust
          </p>

          <div className="relative mt-[var(--section-header-gap)] overflow-hidden rounded-3xl bg-[#03428E] p-7 shadow-[0_14px_40px_rgba(3,66,142,0.22)] sm:p-10">
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1.5 bg-[#6AA84F]"
            />
            <div className="relative grid grid-cols-5 gap-3 pb-2 pt-3 sm:gap-6">
              <div
                aria-hidden
                className="absolute left-[10%] right-[10%] top-[27px] h-[3px] rounded-full bg-[linear-gradient(90deg,#6AA84F_0%,#6AA84F_25%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_100%)] sm:top-[35px]"
              />
              {roadmap.map((phase) => (
                <div key={phase.year} className="relative z-[1] min-w-0">
                  <div
                    className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full sm:h-[54px] sm:w-[54px] ${
                      phase.active
                        ? "border-[3px] border-[#03428E] bg-white/15 shadow-[0_0_0_2px_#6AA84F]"
                        : "border-[3px] border-white/30 bg-white/15"
                    }`}
                  >
                    <phase.icon
                      className="h-[18px] w-[18px] text-white sm:h-[26px] sm:w-[26px]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="mt-3 text-center">
                    <span
                      className={`inline-block whitespace-nowrap rounded-full px-1.5 py-1 text-[8px] font-bold uppercase tracking-[0.06em] sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.12em] ${
                        phase.active
                          ? "bg-white text-[#03428E]"
                          : "border border-white/30 bg-white/15 text-white/85"
                      }`}
                    >
                      <span className="sm:hidden">{phase.active ? "Aktif" : "Rencana"}</span>
                      <span className="hidden sm:inline">
                        {phase.active ? "Sedang Berjalan" : "Rencana Lanjutan"}
                      </span>
                    </span>
                  </p>
                  <p className="mt-1.5 text-center text-lg font-extrabold leading-none text-white sm:text-[22px]">
                    {phase.year}
                  </p>
                  <h4 className="mt-2 text-center text-[11px] font-bold leading-tight text-white sm:text-sm">
                    {phase.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
