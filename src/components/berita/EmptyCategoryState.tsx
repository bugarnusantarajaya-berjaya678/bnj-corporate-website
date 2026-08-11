// Empty-state FLAT untuk tab kategori yang belum punya konten di fase dummy
// (mis. "Brand Incubation" — belum ada video/artikel). Ikon + teks singkat,
// on-white, TANPA blur/greyscale/badge lock — SENGAJA BUKAN §11 Coming Soon
// (yang mengunci konten yang sebenarnya ada). Dipakai bersama oleh VideoBrowser
// (halaman /berita/video) dan BeritaFeed (index /berita).
export default function EmptyCategoryState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-[12px] border border-dashed border-[#e5e5e5] bg-[#FAFAFA] px-6 py-16 text-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a3a3a3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3z" />
      </svg>
      <p className="max-w-[340px] text-sm leading-relaxed text-[#808080]">
        {message}
      </p>
    </div>
  );
}
