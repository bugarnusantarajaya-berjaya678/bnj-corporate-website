import Reveal from "@/components/Reveal";

export default function CompanyVideo() {
  return (
    <section className="bg-white pt-[clamp(56px,7vw,96px)] pb-[clamp(64px,9vw,128px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
            Company Profile
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Kenali BNJ Lebih Dekat
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
            {/* TODO: ganti VIDEO_ID dengan ID video YouTube Company Profile BNJ */}
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="BNJ Company Profile"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
