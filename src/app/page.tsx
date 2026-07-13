import Hero from "@/components/home/Hero";
import AtAGlance from "@/components/home/AtAGlance";
import Pillars from "@/components/home/Pillars";
import WhyPartner from "@/components/home/WhyPartner";
import ClientsPreview from "@/components/home/ClientsPreview";
import ClosingCta from "@/components/home/ClosingCta";
import SectionDivider from "@/components/SectionDivider";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CV Bugar Nusantara Jaya",
  url: "https://bugarnusantarajaya.com",
  logo: "https://bugarnusantarajaya.com/logo-bnj.png",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <AtAGlance />
      <SectionDivider align="right" />
      <Pillars />
      <SectionDivider align="left" />
      <WhyPartner />
      <SectionDivider align="right" />
      <ClientsPreview />
      <ClosingCta />
    </>
  );
}
