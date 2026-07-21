import type { Metadata } from "next";
import Hero from "@/components/ekosistem-bisnis/brand-incubation/Hero";
import BrandDevelopment from "@/components/ekosistem-bisnis/brand-incubation/BrandDevelopment";
import BusinessAcceleration from "@/components/ekosistem-bisnis/brand-incubation/BusinessAcceleration";
import Roadmap from "@/components/ekosistem-bisnis/brand-incubation/Roadmap";
import ClosingCta from "@/components/ekosistem-bisnis/brand-incubation/ClosingCta";

export const metadata: Metadata = {
  title: "Brand Incubation & Business Acceleration | CV Bugar Nusantara Jaya",
  description:
    "Brand Incubation & Business Acceleration adalah unit bisnis BNJ yang berfokus pada pengembangan brand digital dan akselerasi pertumbuhan bisnis di sektor kebugaran, wellness, dan olahraga.",
};

export default function BrandIncubationPage() {
  return (
    <>
      <Hero />
      <BrandDevelopment />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          aria-hidden
          className="h-[3px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
        />
      </div>
      <BusinessAcceleration />
      <Roadmap />
      <ClosingCta />
    </>
  );
}
