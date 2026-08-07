import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, TrendingUp, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import mitraImg from "../../../public/images/Page-Home/Home-Mitra-Korporat.jpg";
import investorImg from "../../../public/images/Page-Home/Home-Calon-Investor.jpg";
import talentaImg from "../../../public/images/Page-Home/Home-Talenta.jpg";

const cards = [
  {
    icon: Handshake,
    img: mitraImg,
    title: "Mitra Korporat",
    alt: "Mitra korporat BNJ",
    desc: "Kembangkan program fitness, wellness, atau pendidikan untuk institusi Anda bersama unit bisnis BNJ.",
    cta: "Hubungi Kami",
    href: "/kontak",
    badge: false,
  },
  {
    icon: TrendingUp,
    img: investorImg,
    title: "Calon Investor",
    alt: "Calon investor BNJ",
    desc: "Pelajari arah pertumbuhan dan peluang investasi dalam roadmap ekspansi BNJ 2026-2030.",
    cta: "Lihat Roadmap",
    href: "/ekosistem-bisnis/investment-ventures",
    badge: false,
  },
  {
    icon: Users,
    img: talentaImg,
    title: "Talenta",
    alt: "Talenta BNJ",
    desc: "Bergabung dengan tim yang membangun ekosistem fitness, wellness, sport, dan education di Indonesia.",
    cta: "Lihat Peluang Karir",
    href: "/karir",
    badge: true,
  },
];

export default function ForYou() {
  return (
    <section className="w-full bg-surface-alt px-6 py-[var(--section-py)] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="m-0 text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Mulai Dari Sini
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(26px,2.6vw,32px)] font-bold leading-[1.2] tracking-[-0.01em] text-neutral-900">
            BNJ untuk Anda
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-neutral-600">
            Baik Anda mitra korporat, calon investor, atau talenta yang ingin
            berkembang bersama kami, temukan jalur yang tepat.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[14px] border border-neutral-200 bg-white">
                <div className="relative aspect-video w-full bg-[#f5f7fb]">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {card.badge && (
                    <span className="absolute right-5 top-5 z-[2] inline-flex items-center rounded-full border border-neutral-200 bg-white px-[14px] py-[6px] text-[11px] font-semibold text-[#03428E]">
                      Segera Hadir
                    </span>
                  )}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#03428E]/[0.08]">
                    <card.icon
                      className="h-6 w-6 text-[#03428E]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="m-0 text-base font-bold text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-[10px] text-sm leading-[1.7] text-neutral-600">
                    {card.desc}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#03428E] no-underline"
                  >
                    {card.cta}
                    <ArrowRight className="h-[15px] w-[15px]" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
