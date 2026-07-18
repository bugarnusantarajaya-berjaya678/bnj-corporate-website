import Image from "next/image";
import {
  BrainCircuit,
  ClipboardCheck,
  LayoutDashboard,
  ListChecks,
  Network,
  PersonStanding,
  Puzzle,
  ScanLine,
  Sparkles,
  SquareStack,
  Target,
  TrendingUp,
  Utensils,
  Wind,
} from "lucide-react";
// TODO: ganti dengan bnj-vitality-konsep.jpg begitu asetnya tersedia di public/images/ —
// sementara pakai foto produk digital yang sudah ada sebagai placeholder konteks platform.
import introPhoto from "../../../../public/images/Digital Product — E-BookPDF Mockup (Vertical).png";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: LayoutDashboard,
    title: "Satu Dashboard, Semua Insight Kesehatan Karyawan",
    description:
      "Data kesehatan dan aktivitas diubah menjadi rekomendasi nyata, bukan sekadar angka.",
  },
  {
    icon: Network,
    title: "Terhubung ke Jaringan Mitra Terverifikasi",
    description:
      "Karyawan maupun perusahaan dapat memilih penyedia layanan sesuai kebutuhan, dari rumah sakit, klinik, terapis, klub olahraga, hingga personal trainer, dalam satu jaringan mitra BNJ.",
  },
  {
    icon: Puzzle,
    title: "Dibangun Fleksibel untuk Skala Apapun",
    description:
      "Dirancang untuk dapat diadopsi oleh perusahaan, penyedia layanan kesehatan, maupun mitra industri lain, apapun ukuran dan model kemitraannya.",
  },
  {
    icon: BrainCircuit,
    title: "Dipantau dengan Teknologi Berbasis AI",
    description:
      "Mendukung pemantauan dan pengambilan keputusan kesehatan yang lebih presisi, dikembangkan bersama pakar AI dan ahli teknologi.",
  },
];

const premiumCards = [
  {
    icon: ScanLine,
    eyebrow: "Screening Kesehatan Multi-Dimensi",
    title: "Satu Titik Akses untuk Semua Hasil Screening Anda",
    description:
      "Terintegrasi dengan hasil screening dari jaringan mitra rumah sakit, klinik, dan fisioterapi BNJ — mencakup Analisis Postur Tubuh, Analisis Komposisi Tubuh, kapasitas VO2 Max, hingga General Check-Up (tes darah, EKG, dan pemeriksaan penunjang lainnya).",
    items: [
      { icon: PersonStanding, label: "Analisis Postur Tubuh" },
      { icon: SquareStack, label: "Komposisi Tubuh" },
      { icon: Wind, label: "VO2 Max" },
      { icon: ClipboardCheck, label: "General Check-Up" },
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "Kecerdasan Buatan untuk Kesehatan",
    title: "Dari Data Screening Menjadi Panduan Hidup Sehat",
    description:
      "Setiap hasil screening dianalisis kecerdasan buatan untuk menghasilkan rekomendasi latihan, pola makan, dan jenis diet yang dipersonalisasi — lengkap dengan panduan Do & Don'ts, dikembangkan bersama dokter dan expert medis agar hasilnya optimal dan sesuai standar kesehatan global.",
    items: [
      { icon: Target, label: "Rekomendasi Latihan Personal" },
      { icon: Utensils, label: "Panduan Diet & Nutrisi" },
      { icon: ListChecks, label: "Do & Don'ts Kesehatan", span: true },
    ],
  },
];

export default function VitalityIntelligence() {
  return (
    <section
      id="vitality-intelligence"
      className="bg-white py-14 sm:py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={introPhoto}
                alt="Ilustrasi platform BNJ Vitality Intelligence"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
            <p className="mt-2.5 text-xs italic text-neutral-400">
              Ilustrasi konsep — bukan tampilan produk final
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative lg:order-2 lg:border-l-[5px] lg:border-[#6AA84F] lg:pl-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 left-2 hidden select-none text-[150px] font-extrabold leading-none text-neutral-100 lg:block"
            >
              02
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <TrendingUp className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[28px] font-extrabold leading-tight text-[#03428E] sm:text-[32px]">
                BNJ Vitality Intelligence
              </h2>
            </div>
            <div className="relative z-10 mt-3">
              <span className="inline-block rounded-full bg-[#8a93a0]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6b7480]">
                Target Pengembangan 2027
              </span>
            </div>
            <h3 className="relative z-10 mt-5 text-xl font-extrabold leading-tight text-neutral-900">
              Platform Intelijen Kesehatan Terintegrasi untuk Kebutuhan
              Korporat
            </h3>
            <p className="relative z-10 mt-3.5 text-[15px] leading-relaxed text-neutral-600">
              Kesulitan mengukur dampak nyata dari program kesehatan karyawan?
              BNJ tengah menyiapkan platform intelijen kesehatan yang mengubah
              data kesehatan dan kebugaran menjadi insight yang dapat
              ditindaklanjuti — dirancang untuk beradaptasi dengan kebutuhan
              perusahaan, penyedia layanan kesehatan, maupun mitra asuransi.
            </p>
            <p className="relative z-10 mt-3.5 text-[15px] leading-relaxed text-neutral-600">
              Dikembangkan bersama entitas baru yang tengah disiapkan bersama
              pakar AI dan ahli digital &amp; teknologi, platform ini
              menghadirkan analitik tingkat lanjut untuk mendukung pengambilan
              keputusan kesehatan yang lebih terukur. Hasil screening dari
              jaringan mitra rumah sakit, klinik, dan fisioterapi dianalisis
              lebih lanjut untuk menghasilkan rekomendasi kesehatan yang
              dikembangkan bersama dokter dan expert medis, mengacu pada
              standar kesehatan global.
            </p>
            <div className="relative z-10 mt-5 flex flex-wrap gap-2.5">
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Data Terintegrasi
              </span>
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Analitik Berbasis AI
              </span>
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Untuk Kebutuhan Korporat
              </span>
            </div>
          </Reveal>
        </div>

        <p className="mt-16 text-[11px] font-bold uppercase tracking-[0.15em] text-[#03428E]">
          Fitur Tersedia
        </p>
        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={(index % 4) * 0.08}
              className="h-full border border-t-[3px] border-neutral-200 border-t-[#03428E] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <feature.icon
                  className="h-[22px] w-[22px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[17px] font-bold leading-snug text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-20 text-[11px] font-bold uppercase tracking-[0.15em] text-[#6AA84F]">
          Keunggulan Utama
        </p>
        <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {premiumCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.1}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_12px_32px_rgba(3,66,142,0.08)]"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
              />
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#03428E]/8">
                <card.icon className="h-[30px] w-[30px] text-[#03428E]" strokeWidth={1.5} />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#6AA84F]">
                {card.eyebrow}
              </p>
              <h3 className="mt-2.5 text-[22px] font-extrabold leading-tight text-neutral-900">
                {card.title}
              </h3>
              <p className="mt-3.5 text-sm leading-relaxed text-neutral-600">
                {card.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-neutral-100 pt-5">
                {card.items.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 ${item.span ? "col-span-2" : ""}`}
                  >
                    <item.icon
                      className="h-4 w-4 shrink-0 text-[#03428E]"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-semibold text-neutral-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
