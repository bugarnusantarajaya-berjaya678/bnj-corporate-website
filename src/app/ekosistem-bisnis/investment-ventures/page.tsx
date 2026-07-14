import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness & Sport Investment Ventures | CV Bugar Nusantara Jaya",
  description:
    "Halaman Wellness & Sport Investment Ventures CV Bugar Nusantara Jaya sedang dalam pengembangan.",
};

export default function InvestmentVenturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#03428E]">
        Wellness &amp; Sport Investment Ventures
      </p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        Halaman Ini Sedang Dalam Pengembangan
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
        Detail unit bisnis Wellness &amp; Sport Investment Ventures akan
        segera hadir di halaman ini.
      </p>
    </main>
  );
}
