"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Menu,
  Rocket,
  Search,
  TrendingUp,
  X,
} from "lucide-react";
import logo from "../../public/logo-bnj.png";

const ecosystemItems = [
  {
    title: "Essential Fitness Management",
    href: "/ekosistem-bisnis/efm",
    description: "Pengelolaan fitness, wellness, dan fasilitas olahraga",
    icon: Dumbbell,
  },
  {
    title: "BNJ Digital Labs",
    href: "/ekosistem-bisnis/digital-labs",
    description: "Produk digital kesehatan & kebugaran, menuju BNJ Vitality Intelligence",
    icon: HeartPulse,
  },
  {
    title: "Brand Incubation & Business Acceleration",
    href: "/ekosistem-bisnis/brand-incubation",
    description: "Pengembangan brand digital dan akselerasi bisnis kebugaran",
    icon: Rocket,
  },
  {
    title: "Strategic Educational Alliance",
    href: "/ekosistem-bisnis/educational-alliance",
    description: "Kemitraan pendidikan dan pengembangan talenta instruktur",
    icon: GraduationCap,
  },
  {
    title: "BNJ Investment Ventures",
    href: "/ekosistem-bisnis/investment-ventures",
    description: "Alokasi modal dan ekspansi bisnis wellness & olahraga",
    icon: TrendingUp,
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Tentang Kami", href: "/tentang-kami" },
  { title: "Portofolio & Klien", href: "/portofolio" },
  { title: "Berita", href: "/berita" },
  { title: "Karir", href: "/karir" },
  { title: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ecosystemExpanded, setEcosystemExpanded] = useState(false);
  const [ecosystemMenuOpen, setEcosystemMenuOpen] = useState(false);
  const ecosystemMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setEcosystemMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setEcosystemMenuOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!ecosystemMenuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!ecosystemMenuRef.current?.contains(event.target as Node)) {
        setEcosystemMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEcosystemMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [ecosystemMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setEcosystemExpanded(false);
  };

  // On flagship pages with a full-bleed blue hero (Home & Tentang Kami), the
  // navbar floats transparently over the hero photo until the user scrolls past it.
  const isOverlayPage = pathname === "/" || pathname === "/tentang-kami";
  const overlay = isOverlayPage && !scrolled;

  const headerClass = isOverlayPage
    ? `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-neutral-200 bg-white shadow-[0_2px_16px_-6px_rgba(0,0,0,0.12)]"
          : "border-b border-transparent bg-transparent"
      }`
    : `sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled
          ? "border-b border-neutral-200 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.12)]"
          : "border-b border-transparent"
      }`;

  const navLinkClass = overlay
    ? "text-sm font-medium text-white/90 transition-colors duration-200 hover:text-white"
    : "text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-[#03428E]";

  return (
    <header className={headerClass}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Logo CV Bugar Nusantara Jaya"
            className={`h-9 w-auto sm:h-10 ${overlay ? "brightness-0 invert" : ""}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/tentang-kami" className={navLinkClass}>
            Tentang Kami
          </Link>

          <div ref={ecosystemMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setEcosystemMenuOpen((value) => !value)}
              aria-expanded={ecosystemMenuOpen}
              className={`flex items-center gap-1 ${navLinkClass}`}
            >
              Ekosistem Bisnis
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  ecosystemMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                ecosystemMenuOpen
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-1 border border-neutral-200 bg-white p-3 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]">
                {ecosystemItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setEcosystemMenuOpen(false)}
                    className="flex items-start gap-3 rounded-md p-3 transition-colors duration-200 hover:bg-neutral-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#03428E]/10 text-[#03428E]">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-neutral-900">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-neutral-500">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portofolio" className={navLinkClass}>
            Portofolio & Klien
          </Link>
          <Link href="/berita" className={navLinkClass}>
            Berita
          </Link>
          <Link href="/karir" className={navLinkClass}>
            Karir
          </Link>
          <Link href="/kontak" className={navLinkClass}>
            Kontak
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center lg:flex">
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                searchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <input
                type="text"
                placeholder="Cari..."
                className="w-full border-b border-neutral-300 bg-transparent px-2 py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#03428E] focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              aria-label="Buka pencarian"
              className={`flex h-10 w-10 items-center justify-center transition-colors duration-200 ${
                overlay
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-600 hover:text-[#03428E]"
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          <Link
            href="/kontak"
            className={`ml-2 hidden items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 lg:inline-flex ${
              overlay
                ? "border border-white/55 bg-white/[0.14] text-white backdrop-blur hover:bg-white/25"
                : "bg-[#03428E] text-white hover:bg-[#032f66]"
            }`}
          >
            Hubungi Kami
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Buka menu"
            className={`flex h-10 w-10 items-center justify-center lg:hidden ${
              overlay ? "text-white" : "text-neutral-700"
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={closeMobile}
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-20 items-center justify-between border-b border-neutral-200 px-6">
                <Image
                  src={logo}
                  alt="Logo CV Bugar Nusantara Jaya"
                  className="h-8 w-auto"
                />
                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label="Tutup menu"
                  className="flex h-10 w-10 items-center justify-center text-neutral-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 px-6 py-6">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="py-3 text-base font-medium text-neutral-800 transition-colors duration-200 hover:text-[#03428E]"
                  >
                    {link.title}
                  </Link>
                ))}

                <div className="border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => setEcosystemExpanded((value) => !value)}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-neutral-800"
                  >
                    Ekosistem Bisnis
                    <ChevronDown
                      className={`h-5 w-5 text-neutral-400 transition-transform duration-200 ${
                        ecosystemExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {ecosystemExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-2">
                          {ecosystemItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className="flex items-start gap-3 rounded-md py-2.5 pl-2 text-sm text-neutral-600 transition-colors duration-200 hover:text-[#03428E]"
                            >
                              <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#03428E]" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-t border-neutral-100">
                  {navLinks.slice(2).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="block py-3 text-base font-medium text-neutral-800 transition-colors duration-200 hover:text-[#03428E]"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="border-t border-neutral-200 px-6 py-6">
                <Link
                  href="/kontak"
                  onClick={closeMobile}
                  className="flex w-full items-center justify-center rounded-lg bg-[#03428E] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#032f66]"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
