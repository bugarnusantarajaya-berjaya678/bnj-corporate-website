import Image from "next/image";
import { CalendarDays, Mic, Sparkles, SquareCheckBig } from "lucide-react";
import photo from "../../../../public/images/Page-EFM/EFM-Event-Management.jpeg";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Sparkles,
    title: "Fitness & Sport Trainers/Instructors",
    description:
      "Menyediakan pelatih dan instruktur bersertifikasi untuk kebutuhan kelas, workshop, maupun sesi khusus di berbagai jenis event.",
  },
  {
    icon: Mic,
    title: "Fitness & Wellness Experts/Speakers",
    description:
      "Menghadirkan pembicara dan pakar kebugaran-kesehatan untuk sesi edukasi, coaching clinic, maupun talkshow dalam rangkaian acara.",
  },
  {
    icon: SquareCheckBig,
    title: "Event Solutions: Organizer & Consulting",
    description:
      "Pengelolaan penuh mulai dari perencanaan, konsultasi konsep, hingga eksekusi event kebugaran dan kesehatan berskala nasional maupun lokal.",
  },
];

export default function EventManagement() {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={photo}
                alt="Penyelenggaraan event Fitness & Sport oleh Essential Fitness Management"
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
            className="order-2 relative border-l-[5px] border-[#6AA84F] pl-6 lg:order-1 lg:border-l-0 lg:border-r-[5px] lg:pl-0 lg:pr-6 lg:text-right"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 left-2 select-none text-[56px] font-extrabold leading-none text-neutral-100 sm:-top-8 sm:left-3 sm:text-[90px] lg:left-auto lg:right-4 lg:-top-10 lg:text-[150px]"
            >
              03
            </span>
            <div className="relative z-10 flex flex-wrap items-center gap-3 lg:justify-end">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8">
                <CalendarDays className="h-7 w-7 text-[#03428E]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[26px] font-bold uppercase leading-[1.2] text-[#03428E] md:text-[36px]">
                Event Management
              </h2>
            </div>
            <p className="relative z-10 mt-5 text-base leading-relaxed text-neutral-600">
              EFM bekerja sama dengan pemerintah daerah, perusahaan, dan
              komunitas dalam menyelenggarakan event kebugaran dan kesehatan
              berskala nasional, turut mendukung promosi gaya hidup sehat dan
              pariwisata lokal.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#03428E]">
            Layanan Pendukung
          </p>
          <h2 className="mt-4 max-w-2xl text-[26px] font-bold leading-[1.2] tracking-tight text-neutral-900 md:text-[36px]">
            3 Layanan Inti Event Management
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal
              key={service.title}
              className="border border-neutral-200 border-t-[3px] border-t-[#03428E] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]/8">
                <service.icon
                  className="h-[22px] w-[22px] text-[#03428E]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[17px] font-bold text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
