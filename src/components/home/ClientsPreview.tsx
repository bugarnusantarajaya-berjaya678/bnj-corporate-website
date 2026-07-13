import Link from "next/link";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const clients = [
  "Telkom Indonesia",
  "Telin",
  "AIA Insurance",
  "Wuling Motors",
  "Pfizer",
  "TransTV",
  "SNJ",
  "OJK",
  "Abumas Group",
  "Sampoerna Academy",
];

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
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client}
                className="flex min-h-24 items-center justify-center bg-white p-4 text-center text-sm font-medium text-neutral-500"
              >
                {client}
              </div>
            ))}
          </div>
        </Reveal>
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
