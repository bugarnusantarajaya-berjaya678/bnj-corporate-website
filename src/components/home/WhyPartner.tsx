"use client";

import { Award, ClipboardCheck, Network, TrendingUp, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    icon: Award,
    title: "Proven Operational Experience Since 2017",
    description:
      "Pengalaman operasional lebih dari delapan tahun dalam pengelolaan fitness, wellness, sport facility, dan program kesehatan korporasi.",
  },
  {
    icon: UserCheck,
    title: "Integrated Talent Pipeline",
    description:
      "Sistem pengembangan dan penyediaan instruktur profesional yang terstandarisasi untuk mendukung kebutuhan ekspansi dan operasional mitra.",
  },
  {
    icon: ClipboardCheck,
    title: "System-Based Management",
    description:
      "Pengelolaan operasional berbasis SOP, KPI, pelaporan, dan kontrol mutu yang terukur.",
  },
  {
    icon: Network,
    title: "Strategic Partnership Network",
    description:
      "Jaringan kolaborasi yang mencakup sektor pendidikan, korporasi, properti, dan wellness ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth Model",
    description:
      "Model bisnis yang dirancang untuk bertumbuh secara berkelanjutan melalui sistem, talenta, dan kemitraan strategis.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Why Partner With BNJ
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Mengapa Organisasi Terkemuka Bermitra dengan BNJ?
          </h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-neutral-200 border-t border-neutral-200">
          {reasons.map((reason, index) => (
            <motion.li
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="group flex gap-5 py-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.1 + 0.1,
                  ease: "easeOut",
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#03428E]/8"
              >
                <reason.icon
                  className="h-7 w-7 text-[#03428E] transition-transform duration-200 group-hover:scale-110 sm:h-8 sm:w-8"
                  strokeWidth={1.5}
                />
              </motion.div>
              <div>
                <h3 className="text-base font-bold text-neutral-900 sm:text-lg">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {reason.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
