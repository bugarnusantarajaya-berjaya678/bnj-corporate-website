import type { Metadata } from "next";
import Hero from "@/components/about/Hero";
import Foreword from "@/components/about/Foreword";
import VisionMissionValues from "@/components/about/VisionMissionValues";
import AtAGlance from "@/components/about/AtAGlance";
import Milestone from "@/components/about/Milestone";
import GrowthRoadmap from "@/components/about/GrowthRoadmap";
import OrgStructure from "@/components/about/OrgStructure";
import WhyPartner from "@/components/about/WhyPartner";
import ClosingCta from "@/components/about/ClosingCta";

export const metadata: Metadata = {
  title: "Tentang Kami | CV Bugar Nusantara Jaya",
  description:
    "Profil, visi-misi, milestone, roadmap, dan struktur kepemimpinan CV Bugar Nusantara Jaya sebagai Holding Company & Venture Builder di sektor Fitness, Wellness, Sport, dan Education.",
};

export default function TentangKamiPage() {
  return (
    <>
      {/*
        Divider tri-warna HANYA di 2 bookend: Hero bottom (wave, di Hero.tsx) dan
        pre-footer (wave masuk ke ClosingCta, di ClosingCta.tsx). Sambungan section
        di tengah dibentuk murni dari whitespace (token --section-py 144/96/72px) —
        tidak ada garis. (Aturan permanen, lihat docs & SKILL.)
      */}
      <Hero />
      <Foreword />
      <VisionMissionValues />
      <AtAGlance />
      <Milestone />
      <GrowthRoadmap />
      <OrgStructure />
      <WhyPartner />
      <ClosingCta />
    </>
  );
}
