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
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Tentang Kami | CV Bugar Nusantara Jaya",
  description:
    "Profil, visi-misi, milestone, roadmap, dan struktur kepemimpinan CV Bugar Nusantara Jaya sebagai Holding Company & Venture Builder di sektor Fitness, Wellness, Sport, dan Education.",
};

export default function TentangKamiPage() {
  return (
    <>
      <Hero />
      <Foreword />
      <SectionDivider />
      <VisionMissionValues />
      <SectionDivider />
      <AtAGlance />
      <SectionDivider />
      <Milestone />
      <SectionDivider />
      <GrowthRoadmap />
      <SectionDivider />
      <OrgStructure />
      <SectionDivider />
      <WhyPartner />
      <ClosingCta />
    </>
  );
}
