import type { Metadata } from "next";
import Hero from "@/components/ekosistem-bisnis/educational-alliance/Hero";
import EcaAspire from "@/components/ekosistem-bisnis/educational-alliance/EcaAspire";
import ExpertNetwork from "@/components/ekosistem-bisnis/educational-alliance/ExpertNetwork";
import CertificationPartnership from "@/components/ekosistem-bisnis/educational-alliance/CertificationPartnership";
import Roadmap from "@/components/ekosistem-bisnis/educational-alliance/Roadmap";
import ClosingCta from "@/components/ekosistem-bisnis/educational-alliance/ClosingCta";

export const metadata: Metadata = {
  title: "Strategic Educational Alliance | CV Bugar Nusantara Jaya",
  description:
    "Strategic Educational Alliance adalah unit bisnis BNJ yang membangun kemitraan strategis dengan institusi pendidikan dan jaringan expert lintas bidang.",
};

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div
        aria-hidden
        className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
      />
    </div>
  );
}

export default function EducationalAlliancePage() {
  return (
    <>
      <Hero />
      <EcaAspire />
      <SectionDivider />
      <ExpertNetwork />
      <SectionDivider />
      <CertificationPartnership />
      <Roadmap />
      <ClosingCta />
    </>
  );
}
