import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Thumbnail YouTube diambil langsung dari i.ytimg.com berdasarkan youtubeId
    // (VideoBrowser halaman /berita/video). next/image menolak host eksternal
    // yang belum di-allowlist, jadi domain ini wajib didaftarkan di sini.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
