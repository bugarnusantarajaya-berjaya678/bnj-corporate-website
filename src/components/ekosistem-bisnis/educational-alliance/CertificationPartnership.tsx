import Image from "next/image";
import {
  Award,
  BadgeCheck,
  CheckCircle2,
  Dumbbell,
  HeartPulse,
  Presentation,
  ShieldCheck,
  Users,
} from "lucide-react";
import photo from "../../../../public/images/Page-Educational/EFM-edu-kemitraan.png";
import Reveal from "@/components/Reveal";

const scopes = [
  {
    icon: Presentation,
    title: "Tutor & Pengajar",
    description:
      "Sertifikasi bagi tenaga pengajar untuk memastikan kualitas pengajaran yang konsisten.",
  },
  {
    icon: Dumbbell,
    title: "Pelatih Sport & Fitness",
    description:
      "Sertifikasi bagi pelatih olahraga dan kebugaran sesuai standar keahlian.",
  },
  {
    icon: HeartPulse,
    title: "Terapis",
    description:
      "Sertifikasi bagi tenaga terapi untuk menjamin standar penanganan yang tepat.",
  },
  {
    icon: Users,
    title: "Tenaga Ahli Lainnya",
    description:
      "Terbuka untuk profesi terkait lain yang membutuhkan standar sertifikasi serupa.",
  },
];

const benefits = [
  {
    icon: CheckCircle2,
    title: "Standar Kualitas Terukur",
    description:
      "Kompetensi dan kualitas layanan dapat diukur melalui standar sertifikasi yang jelas.",
  },
  {
    icon: Award,
    title: "Pengakuan Formal",
    description:
      "Sertifikat menjadi bukti pengakuan formal atas kompetensi tenaga profesional.",
  },
  {
    icon: ShieldCheck,
    title: "Kepercayaan Mitra & Klien",
    description:
      "Standar yang terukur membangun kepercayaan mitra dan klien terhadap layanan.",
  },
];

export default function CertificationPartnership() {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Ilustrasi sertifikasi profesional"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative border-l-[5px] border-[#6AA84F] pl-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 left-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:left-3 sm:text-[90px] lg:-top-10 lg:text-[150px]"
            >
              03
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <BadgeCheck className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold leading-[1.25] text-[#03428E] md:text-[36px]">
                Kemitraan Sertifikasi Profesional
              </h2>
            </div>
            <span className="relative z-10 mt-3.5 inline-block rounded-full bg-[#8A93A0]/28 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6b7480]">
              Target Pengembangan 2027-2028
            </span>
            <h3 className="relative z-10 mt-5 text-xl font-extrabold leading-[1.3] text-neutral-900">
              Menciptakan SDM Berkualitas
            </h3>
            <p className="relative z-10 mt-3.5 max-w-[460px] text-base leading-relaxed text-neutral-600">
              Bekerja sama dengan lembaga, perusahaan, dan institusi
              pendidikan untuk menyelenggarakan sertifikasi bagi tutor,
              pelatih olahraga dan fitness, terapis, dan tenaga ahli lainnya.
              Ini memastikan standar kualitas yang terukur dan diakui.
            </p>

            <div className="relative z-10 mt-5 flex flex-wrap gap-2.5">
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Standar Kualitas Terukur
              </span>
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Diakui Mitra Industri
              </span>
              <span className="rounded-full bg-[#03428E]/8 px-3.5 py-1.5 text-xs font-semibold text-[#03428E]">
                Terbuka Lintas Profesi
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Cakupan Sertifikasi
          </p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Sertifikasi untuk Empat Kelompok Profesi
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scopes.map((scope) => (
            <Reveal
              key={scope.title}
              className="border border-neutral-200 border-t-[3px] border-t-[#03428E] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <scope.icon
                  className="h-[22px] w-[22px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[15px] font-bold text-neutral-900">
                {scope.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                {scope.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#6AA84F]">
            Manfaat Kemitraan Sertifikasi
          </p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            Standar yang Diakui, Kepercayaan yang Terbangun
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Reveal
              key={benefit.title}
              className="border border-neutral-200 border-t-[3px] border-t-[#6AA84F] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#6AA84F]/8">
                <benefit.icon
                  className="h-[22px] w-[22px] text-[#6AA84F]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[15px] font-bold text-neutral-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
