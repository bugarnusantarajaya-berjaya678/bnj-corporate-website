import type { ArticleReference } from "./data";

// SECTION "REFERENSI" — sumber jurnal/artikel eksternal (opsional). Dirender
// HANYA kalau references ada & panjang > 0 (artikel tanpa referensi tidak
// menampilkan heading kosong). Posisi: dalam kolom kiri body, setelah tag topik.
// Tiap entri: judul (link Corporate Blue kalau ada url, buka tab baru; teks biasa
// kalau tidak) + nama sumber (italic abu-abu), dalam list bernomor.
export default function ReferensiSumber({
  references,
}: {
  references?: ArticleReference[];
}) {
  if (!references || references.length === 0) return null;

  return (
    <div className="mt-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#525252]">
        Referensi
      </p>
      <ol className="mt-3 flex list-decimal flex-col gap-2.5 pl-5 text-[14px] leading-[1.6] text-[#333333] marker:text-[#808080]">
        {references.map((ref, i) => (
          <li key={i}>
            {ref.url ? (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#03428E] hover:underline"
              >
                {ref.title}
              </a>
            ) : (
              <span>{ref.title}</span>
            )}
            <span className="text-[#808080]">
              {" "}
              — <span className="italic">{ref.source}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
