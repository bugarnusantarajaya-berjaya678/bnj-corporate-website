"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Check,
  Dumbbell,
  Monitor,
} from "lucide-react";

type Unit = {
  name: string;
  desc: string;
  email?: string;
  cta: string;
  tujuan: string;
  Icon: typeof Dumbbell;
};

const units: Unit[] = [
  {
    name: "Essential Fitness Management",
    desc: "Pengelolaan fitness, wellness & fasilitas olahraga personal dan korporat sejak 2017.",
    email: "essentialfitnessmanagement@gmail.com",
    cta: "Kirim Pesan ke EFM",
    tujuan: "Essential Fitness Management (EFM)",
    Icon: Dumbbell,
  },
  {
    name: "BNJ Digital Labs",
    desc: "Produk digital untuk mendukung layanan kesehatan dan wellness yang lebih terhubung.",
    cta: "Kirim Pesan ke Digital Labs",
    tujuan: "BNJ Digital Labs",
    Icon: Monitor,
  },
  {
    name: "ECA Aspire",
    desc: "Kemitraan pendidikan & pengembangan instruktur menuju jaringan expert multi-disiplin.",
    cta: "Kirim Pesan ke ECA Aspire",
    tujuan: "ECA Aspire",
    Icon: BookOpen,
  },
  {
    name: "BNJ Investment Ventures",
    desc: "Investasi dan pengembangan usaha baru dalam ekosistem fitness, wellness & edukasi.",
    cta: "Kirim Pesan ke Investment Ventures",
    tujuan: "BNJ Investment Ventures",
    Icon: Activity,
  },
];

const tujuanOptions = [
  "Essential Fitness Management (EFM)",
  "BNJ Digital Labs",
  "ECA Aspire",
  "BNJ Investment Ventures",
  "Pertanyaan Umum/Lainnya",
];

const inputClass =
  "w-full box-border rounded-lg border border-[#d4d4d4] px-3.5 py-2.5 text-sm text-[#171717] placeholder:text-[#a3a3a3] outline-none focus:border-[#03428E]";

export default function UnitContactBlock() {
  const [tujuan, setTujuan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function selectUnit(value: string) {
    setTujuan(value);
    setSubmitted(false);
    document
      .getElementById("form-kontak")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function resetForm() {
    setSubmitted(false);
    setTujuan("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nama = String(fd.get("nama") ?? "");
    const email = String(fd.get("email") ?? "");
    const telp = String(fd.get("telp") ?? "");
    const perusahaan = String(fd.get("perusahaan") ?? "");
    const pesan = String(fd.get("pesan") ?? "");
    const tujuanFinal = tujuan || "Pertanyaan Umum/Lainnya";

    const subject = `Pesan Kontak Website - ${tujuanFinal}`;
    const body = [
      `Nama Lengkap: ${nama}`,
      `Email: ${email}`,
      `Nomor WhatsApp/Telepon: ${telp || "-"}`,
      `Perusahaan/Institusi: ${perusahaan || "-"}`,
      `Tujuan: ${tujuanFinal}`,
      "",
      "Pesan:",
      pesan,
    ].join("\n");

    window.location.href = `mailto:bugarnusantarajaya@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // State sukses inline (tetap sampai user klik "Kirim Pesan Lain", tanpa timer)
    setSubmitted(true);
  }

  return (
    <>
      {/* ============ 2. GRID 4 KARTU UNIT BISNIS ============ */}
      <section className="w-full bg-white px-6 pt-0 pb-[var(--section-py)] lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {units.map((unit) => (
            <div
              key={unit.name}
              className="flex flex-col rounded-[14px] border border-[#e5e5e5] p-6"
            >
              {/* Icon sticker 2-layer: Corporate Blue depan + Growth Green offset kanan-bawah */}
              <div className="relative mb-5 h-12 w-12">
                <div className="absolute -bottom-1.5 -right-1.5 h-11 w-11 rounded-[10px] bg-[#6AA84F]" />
                <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#03428E]">
                  <unit.Icon className="h-[22px] w-[22px] text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="m-0 text-[17px] font-bold text-[#171717]">
                {unit.name}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-[1.6] text-[#525252]">
                {unit.desc}
              </p>
              {unit.email ? (
                <p className="mt-3 break-all text-[13px] text-[#808080]">
                  {unit.email}
                </p>
              ) : null}
              <button
                type="button"
                onClick={() => selectUnit(unit.tujuan)}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-semibold text-[#03428E] transition-colors duration-200 hover:text-[#032f66]"
              >
                {unit.cta}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 3. FOTO + FORMULIR KONTAK ============ */}
      <section
        id="form-kontak"
        className="w-full scroll-mt-24 bg-white px-6 py-[var(--section-py)] lg:px-12"
      >
        <div className="relative mx-auto max-w-[1080px]">
          {/* Layer 1: foto full-bleed container */}
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl md:min-h-[720px]">
            <Image
              src="/images/Page-Kontak/Page-Kontak-MOU-Signing-Handshake.png"
              alt="Penandatanganan kesepakatan kemitraan CV Bugar Nusantara Jaya"
              fill
              sizes="(max-width: 1080px) 100vw, 1080px"
              className="object-cover"
            />
            {/* Layer 2: gradient putih horizontal, foto memudar progresif ke
                putih sebelum area card (desktop only) */}
            <div
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.7) 55%, rgba(255,255,255,0.95) 72%, #ffffff 88%)",
              }}
            />
          </div>

          {/* Layer 3: floating card putih (form) */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 rounded-none bg-white p-6 shadow-none md:absolute md:right-12 md:top-8 md:mt-0 md:w-[400px] md:max-w-[calc(100%-96px)] md:rounded-2xl md:p-7 md:shadow-[0_18px_44px_rgba(3,66,142,.14),0_4px_12px_rgba(3,66,142,.08)]"
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6AA84F]">
                  <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-[clamp(20px,2.4vw,24px)] font-bold leading-[1.2] tracking-[-0.01em] text-[#171717]">
                  Pesan Berhasil Dikirim
                </h2>
                <p className="max-w-[300px] text-sm leading-[1.6] text-[#525252]">
                  Tim kami akan segera menghubungi Anda melalui email atau
                  WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-[#03428E] px-4 py-2 text-[13px] font-semibold text-[#03428E] transition-colors duration-200 hover:bg-[#03428E] hover:text-white"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <>
                <div className="mb-0.5">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#03428E]">
                Formulir Kontak
              </p>
              <h2 className="mt-2.5 text-[clamp(22px,2.6vw,26px)] font-bold leading-[1.2] tracking-[-0.01em] text-[#171717]">
                Kirim Pesan ke Tim Kami
              </h2>
            </div>

            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#171717]">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                required
                placeholder="Nama lengkap Anda"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#171717]">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="nama@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#171717]">
                Nomor WhatsApp/Telepon{" "}
                <span className="font-normal text-[#808080]">(opsional)</span>
              </label>
              <input
                type="tel"
                name="telp"
                placeholder="08xx-xxxx-xxxx"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#171717]">
                Perusahaan/Institusi{" "}
                <span className="font-normal text-[#808080]">(opsional)</span>
              </label>
              <input
                type="text"
                name="perusahaan"
                placeholder="Nama perusahaan atau institusi"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#171717]">
                Tujuan
              </label>
              <select
                name="tujuan"
                required
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
                className={`${inputClass} bg-white`}
              >
                <option value="">Pilih tujuan pesan</option>
                {tujuanOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#171717]">
                Pesan
              </label>
              <textarea
                name="pesan"
                required
                rows={4}
                placeholder="Tuliskan pesan Anda di sini"
                className={`${inputClass} resize-y`}
              />
            </div>

                <button
                  type="submit"
                  className="box-border w-full rounded-lg bg-[#03428E] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#032f66]"
                >
                  Kirim Pesan
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
