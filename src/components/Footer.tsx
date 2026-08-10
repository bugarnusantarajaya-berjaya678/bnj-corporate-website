import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../public/logo-bnj.png";

const ecosystemLinks = [
  { title: "Essential Fitness Management", href: "/ekosistem-bisnis/efm" },
  { title: "BNJ Digital Labs", href: "/ekosistem-bisnis/digital-labs" },
  {
    title: "Brand Incubation & Business Acceleration",
    href: "/ekosistem-bisnis/brand-incubation",
  },
  {
    title: "Strategic Educational Alliance",
    href: "/ekosistem-bisnis/educational-alliance",
  },
  {
    title: "BNJ Investment Ventures",
    href: "/ekosistem-bisnis/investment-ventures",
  },
];

const companyLinks = [
  { title: "Tentang Kami", href: "/tentang-kami" },
  { title: "Portofolio & Klien", href: "/portofolio" },
  { title: "Berita", href: "/berita" },
  { title: "Karir", href: "/karir" },
];

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

// Ubah/tambah platform cukup di array ini (1 baris data), bukan per-icon.
const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/bugarnusantarajaya",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bugarnusantarajaya",
    icon: LinkedinIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@BugarNusantaraJaya",
    icon: YoutubeIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.12] bg-[#03428E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo CV Bugar Nusantara Jaya"
                className="h-12 w-auto brightness-0 invert sm:h-14"
                unoptimized
              />
            </Link>
            <div className="mt-8 flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
              <p className="text-sm leading-relaxed text-white/70">
                Jl. Terogong Raya No. 18, Hampton&apos;s Park Apartment, Tower
                A, Cilandak Barat, Jakarta Selatan, DKI Jakarta
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-white/60" />
              <a
                href="mailto:bugarnusantarajaya@gmail.com"
                className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
              >
                bugarnusantarajaya@gmail.com
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 transition-colors duration-200 hover:border-white hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Ekosistem Bisnis
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-relaxed text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Perusahaan
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Kontak
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <Link
                  href="/kontak"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Kontak
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white/60" />
                <a
                  href="https://wa.me/6281119920666"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  +62 811 1992 0666
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/60" />
                <a
                  href="mailto:cs.bugarnusantarajaya@gmail.com"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  cs.bugarnusantarajaya@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-8">
          <p className="text-center text-xs text-white/60">
            &copy; 2026 CV Bugar Nusantara Jaya. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
