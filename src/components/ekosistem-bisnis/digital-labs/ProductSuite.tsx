import Image from "next/image";
import {
  Activity,
  Clock,
  Book,
  Check,
  Cpu,
  MapPin,
  MessageCircle,
  PlayCircle,
  Swords,
  User,
  Users,
} from "lucide-react";
import introPhoto from "../../../../public/images/Page-BNJ-Digital-Labs/Produk-Digital-Hero-Section.png";
import consultPhoto from "../../../../public/images/Page-BNJ-Digital-Labs/Konsultasi-Online.png";
import ebookPhoto from "../../../../public/images/Page-BNJ-Digital-Labs/E-Book-Panduan.png";
import videoPhoto from "../../../../public/images/Page-BNJ-Digital-Labs/Video-Program.png";
import whatsappPhoto from "../../../../public/images/Page-BNJ-Digital-Labs/Grup-Monitoring-WA.png";
import Reveal from "@/components/Reveal";

const products = [
  {
    icon: MessageCircle,
    image: consultPhoto,
    title: "Konsultasi Online",
    description:
      "Akses konsultasi dengan tenaga profesional kesehatan secara online, memudahkan proses awal sebelum penanganan lebih lanjut.",
  },
  {
    icon: Book,
    image: ebookPhoto,
    title: "E-Book & Panduan",
    description:
      "Materi edukasi digital yang disusun bersama expert, membantu pemahaman kondisi dan langkah penanganan secara mandiri.",
  },
  {
    icon: PlayCircle,
    image: videoPhoto,
    title: "Video Program",
    description:
      "Panduan latihan atau terapi dalam format video terstruktur, dapat diakses dan diulang sesuai kebutuhan.",
  },
  {
    icon: Users,
    image: whatsappPhoto,
    title: "Grup Monitoring (WhatsApp)",
    description:
      "Pendampingan berkelanjutan melalui grup khusus, mendukung proses pemulihan atau latihan tetap termonitor.",
  },
];

const specializations = [
  {
    icon: Clock,
    title: "Ortopedi (Osteoarthritis Care)",
    badge: "JointCare",
    description:
      "Program pemulihan dan manajemen nyeri untuk kondisi osteoarthritis melalui pendekatan digital dan kolaborasi dengan tenaga medis profesional.",
    products: "E-book, video program, konsultasi online, grup monitoring",
  },
  {
    icon: Activity,
    title: "Syaraf & Otot (Recovery)",
    description:
      "Dukungan pemulihan fungsi syaraf dan otot pasca cedera atau kondisi medis tertentu, dengan program terstruktur dan termonitor.",
    products: "Video program, konsultasi online, grup monitoring",
  },
  {
    icon: MapPin,
    title: "Kesehatan Wanita",
    description:
      "Program kesehatan khusus perempuan di berbagai tahap kehidupan, didampingi tenaga profesional terkait.",
    products: "E-book, konsultasi online",
  },
  {
    icon: Users,
    title: "Kesehatan Lansia",
    badge: "BNJ Golden Years",
    description:
      "Program kebugaran dan kesehatan yang dirancang khusus untuk kebutuhan lansia, mendukung kualitas hidup yang lebih baik.",
    products: "Video program, konsultasi online, grup monitoring",
  },
  {
    icon: User,
    title: "Kesehatan Anak",
    description: "Program kesehatan dan tumbuh kembang anak, didampingi expert terkait.",
    products: "E-book, konsultasi online",
  },
  {
    icon: Swords,
    title: "Fitness & Sport Program",
    badge: "cth. BNJ Boxing School",
    description:
      "Brand digital independen yang modul produknya dikembangkan bersama expert dari klub olahraga, mendukung pengembangan teknik secara terstruktur.",
    products: "Video program, konsultasi online, grup monitoring",
  },
];

export default function ProductSuite() {
  return (
    <section id="produk-digital" className="bg-white py-14 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative border-l-[5px] border-[#6AA84F] pl-6 lg:border-l-0 lg:border-r-[5px] lg:pl-0 lg:pr-6 lg:text-right">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 right-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:right-3 sm:text-[90px] lg:-top-10 lg:right-4 lg:text-[150px]"
            >
              01
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3 lg:justify-end">
              <p className="text-[26px] font-bold leading-[1.3] text-[#03428E] md:text-[36px]">
                Produk Digital
              </p>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <Cpu className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
            </div>
            <div className="relative z-10 mt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6AA84F]/20 py-1 pl-2 pr-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6AA84F]">
                <Check className="h-3 w-3" strokeWidth={3} />
                Aktif 2026
              </span>
            </div>
            <h2 className="relative z-10 mt-5 text-xl font-extrabold leading-tight tracking-tight text-neutral-900">
              Beragam Format, Satu Standar Kualitas
            </h2>
            <p className="relative z-10 mt-3.5 text-[15px] leading-relaxed text-neutral-600">
              BNJ Digital Labs menghadirkan produk digital dalam berbagai
              format, dikembangkan bersama expert dari rumah sakit, klinik,
              terapis, hingga pelatih olahraga profesional, memudahkan akses
              sejak konsultasi awal hingga proses pemulihan atau pengembangan
              performa.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[16/11] w-full">
              <Image
                src={introPhoto}
                alt="Ilustrasi ekosistem produk digital BNJ"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2.5 text-xs italic text-neutral-400">
              Ilustrasi konsep, bukan tampilan produk final
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Produk Digital
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold tracking-tight text-neutral-900 md:text-[36px]">
            4 Layanan Inti Kesehatan Digital
          </h2>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal
              key={product.title}
              delay={(index % 4) * 0.08}
              className="flex h-full flex-col overflow-hidden border border-t-[3px] border-neutral-200 border-t-[#03428E]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,66,142,0.85)_0%,rgba(3,66,142,0.4)_22%,rgba(3,66,142,0)_45%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,41,89,0.35)_0%,rgba(3,41,89,0)_40%)]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                  <product.icon
                    className="h-[22px] w-[22px] text-[#03428E]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[17px] font-bold text-neutral-900">
                  {product.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                  {product.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Spesialisasi Layanan
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold tracking-tight text-neutral-900 md:text-[36px]">
            6 Program Spesialisasi Kesehatan
          </h2>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializations.map((spec, index) => (
            <Reveal
              key={spec.title}
              delay={(index % 6) * 0.06}
              className="h-full border border-neutral-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#03428E]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <spec.icon className="h-6 w-6 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-bold leading-snug text-neutral-900">
                {spec.title}
              </h3>
              {spec.badge && (
                <span className="mt-2.5 inline-block rounded-md bg-[#03428E]/8 px-2 py-0.5 text-[11px] font-semibold text-[#03428E]">
                  {spec.badge}
                </span>
              )}
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                {spec.description}
              </p>
              <p className="mt-2.5 text-xs leading-snug text-[#8a93a0]">
                Produk digital: {spec.products}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
