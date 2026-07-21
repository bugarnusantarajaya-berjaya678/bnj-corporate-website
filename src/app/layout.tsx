import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bugarnusantarajaya.com";
const siteName = "CV Bugar Nusantara Jaya";
const siteTitle = "CV Bugar Nusantara Jaya | Holding Company & Venture Builder";
const siteDescription =
  "CV Bugar Nusantara Jaya adalah holding company yang membangun dan mengembangkan ekosistem bisnis di sektor Fitness, Wellness, Sport, dan Education di Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/logo-bnj.png",
        width: 786,
        height: 240,
        alt: "Logo CV Bugar Nusantara Jaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo-bnj.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen overflow-x-hidden bg-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
