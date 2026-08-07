import Hero from "@/components/home/Hero";
import ClientsPreview from "@/components/home/ClientsPreview";
import Pillars from "@/components/home/Pillars";
import AboutTeaser from "@/components/home/AboutTeaser";
import ForYou from "@/components/home/ForYou";
import EfmSpotlight from "@/components/home/EfmSpotlight";
import WhyPartner from "@/components/home/WhyPartner";
import ClosingCta from "@/components/home/ClosingCta";

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
      {/*
        Divider tri-warna HANYA di 2 bookend: Hero bottom (wave, di Hero.tsx) dan
        pre-footer (wave masuk ke ClosingCta, di ClosingCta.tsx). Sambungan section
        di tengah dibentuk murni dari whitespace + alternating surface tone —
        tidak ada garis. (Aturan permanen, lihat docs & SKILL.)
      */}
      <Hero />
      <ClientsPreview />
      <Pillars />
      <AboutTeaser />
      <ForYou />
      <EfmSpotlight />
      <WhyPartner />
      <ClosingCta />
    </>
  );
}
