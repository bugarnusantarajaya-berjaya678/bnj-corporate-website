import { Clock, Mail, MapPin, Phone } from "lucide-react";

// Brand icon (Instagram/YouTube) tidak lagi diekspor lucide-react versi ini —
// definisikan inline, konsisten dengan pola di Footer.tsx.
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

// Render row dari data array supaya menambah platform baru = 1 baris data,
// bukan perubahan layout.
const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@bugarnusantarajaya",
    href: "https://instagram.com/bugarnusantarajaya",
    Icon: InstagramIcon,
  },
  {
    label: "YouTube",
    handle: "@BugarNusantaraJaya",
    href: "https://youtube.com/@BugarNusantaraJaya",
    Icon: YoutubeIcon,
  },
];

export default function ContactHeader() {
  return (
    <section className="w-full bg-white px-6 pt-[var(--section-py)] pb-[var(--section-py)] lg:px-12">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[20px] grid-cols-1 min-[900px]:grid-cols-2">
        {/* Sisi kiri: Google Map embed, hard-cut tanpa filter/overlay */}
        <div className="relative min-h-[240px] bg-[#03428E] border-b-2 border-white min-[900px]:border-b-0 min-[900px]:border-r-2">
          <iframe
            title="Lokasi Kantor CV Bugar Nusantara Jaya"
            src="https://maps.google.com/maps?q=-6.2826781,106.7907246&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        {/* Sisi kanan: panel solid Corporate Blue */}
        <div className="flex flex-col gap-3 bg-[#03428E] p-8">
          <div>
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
              Kontak
            </p>
            <h1 className="mt-2 text-[clamp(22px,2.4vw,26px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
              Mari Terhubung dengan BNJ
            </h1>
            <p className="mt-2 text-[13px] leading-[1.55] text-white/80">
              Pilih unit bisnis yang sesuai kebutuhan Anda di bawah, atau
              langsung isi formulir kontak untuk terhubung dengan tim kami.
            </p>
          </div>

          <div className="h-px bg-white/15" />

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/85" strokeWidth={2} />
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/65">
                  Telepon/WA
                </p>
                <a
                  href="tel:+6281119920666"
                  className="mt-0.5 block text-[13px] font-semibold text-white"
                >
                  +62 811-1992-0666
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/85" strokeWidth={2} />
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/65">
                  Email
                </p>
                <a
                  href="mailto:cs.bugarnusantarajaya@gmail.com"
                  className="mt-0.5 block break-all text-[13px] font-semibold text-white"
                >
                  cs.bugarnusantarajaya@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/85" strokeWidth={2} />
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/65">
                  Alamat
                </p>
                <p className="mt-0.5 text-[12px] font-semibold leading-[1.4] text-white">
                  Jl. Terogong Raya No. 18, Tower A, Apartemen Hampton&apos;s
                  Park, Cilandak Barat, Jakarta Selatan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/85" strokeWidth={2} />
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/65">
                  Jam Operasional
                </p>
                <p className="mt-0.5 text-[13px] font-semibold text-white">
                  08.00-17.00 (Senin-Sabtu)
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/15" />

          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map(({ label, handle, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 rounded-[10px] bg-white/[0.12] px-3 py-[7px] text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-white/20"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
                {handle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
