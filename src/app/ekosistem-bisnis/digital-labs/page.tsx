import type { Metadata } from "next";
import Hero from "@/components/ekosistem-bisnis/digital-labs/Hero";
import ProductSuite from "@/components/ekosistem-bisnis/digital-labs/ProductSuite";
import VitalityIntelligence from "@/components/ekosistem-bisnis/digital-labs/VitalityIntelligence";
import Roadmap from "@/components/ekosistem-bisnis/digital-labs/Roadmap";
import ClosingCta from "@/components/ekosistem-bisnis/digital-labs/ClosingCta";

export const metadata: Metadata = {
  title: "BNJ Digital Labs | CV Bugar Nusantara Jaya",
  description:
    "BNJ Digital Labs menghadirkan portofolio produk digital kesehatan & kebugaran bersama expert dari rumah sakit, klinik, terapis, hingga pelatih olahraga, menuju BNJ Vitality Intelligence.",
};

export default function DigitalLabsPage() {
  return (
    <>
      <Hero />
      <ProductSuite />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          aria-hidden
          className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
        />
      </div>
      <VitalityIntelligence />
      <Roadmap />
      <ClosingCta />
    </>
  );
}
