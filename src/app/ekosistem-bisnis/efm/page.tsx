import type { Metadata } from "next";
import Hero from "@/components/ekosistem-bisnis/efm/Hero";
import PrivateProgram from "@/components/ekosistem-bisnis/efm/PrivateProgram";
import B2BManagement from "@/components/ekosistem-bisnis/efm/B2BManagement";
import EventManagement from "@/components/ekosistem-bisnis/efm/EventManagement";
import CommunityHub from "@/components/ekosistem-bisnis/efm/CommunityHub";
import Milestone from "@/components/ekosistem-bisnis/efm/Milestone";
import ClientsPreview from "@/components/ekosistem-bisnis/efm/ClientsPreview";
import ClosingCta from "@/components/ekosistem-bisnis/efm/ClosingCta";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Essential Fitness Management | CV Bugar Nusantara Jaya",
  description:
    "Essential Fitness Management (EFM) adalah unit bisnis inti BNJ yang mengelola Private Program, B2B Management, Event Management, dan Essential Community Hub sejak 2017.",
};

export default function EfmPage() {
  return (
    <>
      <Hero />
      <PrivateProgram />
      <SectionDivider />
      <B2BManagement />
      <SectionDivider />
      <EventManagement />
      <SectionDivider />
      <CommunityHub />
      <Milestone />
      <ClientsPreview />
      <ClosingCta />
    </>
  );
}
