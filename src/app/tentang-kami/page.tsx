import type { Metadata } from "next";
import Foreword from "@/components/about/Foreword";
import FoundationStatement from "@/components/about/FoundationStatement";
import VisionMissionValues from "@/components/about/VisionMissionValues";
import Milestone from "@/components/about/Milestone";
import GrowthRoadmap from "@/components/about/GrowthRoadmap";
import Leadership from "@/components/about/Leadership";
import OrgStructure from "@/components/about/OrgStructure";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Tentang Kami | CV Bugar Nusantara Jaya",
  description:
    "Profil, visi-misi, milestone, roadmap, dan struktur kepemimpinan CV Bugar Nusantara Jaya sebagai Holding Company & Venture Builder di sektor Fitness, Wellness, Sport, dan Education.",
};

export default function TentangKamiPage() {
  return (
    <>
      <Foreword />
      <FoundationStatement />
      <SectionDivider align="right" />
      <VisionMissionValues />
      <SectionDivider align="left" />
      <Milestone />
      <SectionDivider align="right" />
      <GrowthRoadmap />
      <SectionDivider align="left" />
      <Leadership />
      <SectionDivider align="right" />
      <OrgStructure />
    </>
  );
}
