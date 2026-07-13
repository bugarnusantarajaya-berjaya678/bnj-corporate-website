import Image from "next/image";
import logo from "../../public/logo-bnj.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20 text-center">
      <Image
        src={logo}
        alt="Logo CV Bugar Nusantara Jaya"
        priority
        className="mb-14 h-auto w-[200px] sm:w-[240px] md:w-[280px]"
      />
      <h1 className="max-w-2xl text-2xl font-semibold leading-snug text-[#03428E] sm:text-3xl md:text-4xl">
        Website Kami Sedang Dalam Pembangunan
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-[#03428E] sm:text-lg">
        CV Bugar Nusantara Jaya sedang mempersiapkan kehadiran digital baru
        untuk mendukung ekosistem Fitness, Wellness, Sport, dan Education di
        Indonesia.
      </p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-[#03428E] sm:text-lg">
        Kami akan segera hadir dengan informasi lengkap mengenai perusahaan
        dan portofolio bisnis kami.
      </p>
      <footer className="mt-20 text-sm text-[#03428E]">
        © 2026 CV Bugar Nusantara Jaya. Seluruh hak cipta dilindungi.
      </footer>
    </main>
  );
}
