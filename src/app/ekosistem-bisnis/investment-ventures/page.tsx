import type { Metadata } from "next";
import Hero from "@/components/ekosistem-bisnis/investment-ventures/Hero";
import PortfolioMandiri from "@/components/ekosistem-bisnis/investment-ventures/PortfolioMandiri";
import InvestasiEksternal from "@/components/ekosistem-bisnis/investment-ventures/InvestasiEksternal";
import Roadmap from "@/components/ekosistem-bisnis/investment-ventures/Roadmap";
import ClosingCta from "@/components/ekosistem-bisnis/investment-ventures/ClosingCta";

export const metadata: Metadata = {
  title: "BNJ Investment Ventures | CV Bugar Nusantara Jaya",
  description:
    "BNJ Investment Ventures adalah unit bisnis BNJ yang direncanakan mulai beroperasi 2028, dengan fokus alokasi modal ke sektor Wellness, Fitness, Sport & Health.",
};

export default function InvestmentVenturesPage() {
  return (
    <>
      <Hero />
      <PortfolioMandiri />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          aria-hidden
          className="h-[3px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
        />
      </div>
      <InvestasiEksternal />
      <Roadmap />
      <ClosingCta />
    </>
  );
}
